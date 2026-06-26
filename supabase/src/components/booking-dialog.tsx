import { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const TRAINERS = [
  "Sudhan Murugan",
  "Anika Reddy",
  "Karthik Iyer",
  "Meera Joshi",
] as const;

const SERVICES = [
  "Free 30-min consultation",
  "Personal training session",
  "Nutrition consult",
  "Membership tour",
] as const;

const SLOTS = [
  "06:00", "07:00", "08:00", "09:00",
  "17:00", "18:00", "19:00", "20:00",
];

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trainer?: string;
  service?: string;
};

type Status = "idle" | "submitting" | "done";

export function BookingDialog({ open, onOpenChange, trainer, service }: Props) {
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string>("");
  const [pickedTrainer, setPickedTrainer] = useState<string>(trainer ?? TRAINERS[0]);
  const [pickedService, setPickedService] = useState<string>(service ?? SERVICES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (open) {
      setPickedTrainer(trainer ?? TRAINERS[0]);
      setPickedService(service ?? SERVICES[0]);
      setStatus("idle");
    }
  }, [open, trainer, service]);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const canSubmit =
    !!date && !!slot && name.trim().length > 1 && /\S+@\S+\.\S+/.test(email) && phone.trim().length >= 7;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !date) return;
    setStatus("submitting");
    const booking = {
      id: crypto.randomUUID(),
      trainer: pickedTrainer,
      service: pickedService,
      date: date.toISOString(),
      slot,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      createdAt: new Date().toISOString(),
    };
    try {
      const raw = localStorage.getItem("sfg_bookings");
      const list = raw ? JSON.parse(raw) : [];
      list.push(booking);
      localStorage.setItem("sfg_bookings", JSON.stringify(list));
    } catch {
      /* ignore */
    }
    setTimeout(() => setStatus("done"), 650);
  }

  function resetAndClose() {
    onOpenChange(false);
    setTimeout(() => {
      setDate(undefined);
      setSlot("");
      setName("");
      setEmail("");
      setPhone("");
      setStatus("idle");
    }, 200);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? onOpenChange(true) : resetAndClose())}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        {status === "done" ? (
          <div className="py-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <DialogHeader className="mt-4">
              <DialogTitle className="text-3xl">You're booked in</DialogTitle>
              <DialogDescription className="text-base">
                We sent a confirmation to <span className="text-foreground">{email}</span>. A coach will call
                you to finalize.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-5 rounded-lg border border-border bg-card/50 p-4 text-left text-sm">
              <Row label="Coach" value={pickedTrainer} />
              <Row label="Service" value={pickedService} />
              <Row label="When" value={date ? `${format(date, "EEE, d MMM yyyy")} · ${slot}` : ""} />
            </div>
            <Button onClick={resetAndClose} className="mt-6 w-full">Done</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="text-3xl">Book an appointment</DialogTitle>
              <DialogDescription>
                Pick a coach, a time, and we'll take it from there.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Select label="Coach" value={pickedTrainer} onChange={setPickedTrainer} options={[...TRAINERS]} />
                <Select label="Service" value={pickedService} onChange={setPickedService} options={[...SERVICES]} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "mt-2 w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "EEE, d MMM yyyy") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < today}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Time slot</Label>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {SLOTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className={cn(
                          "rounded-md border border-border bg-background px-2 py-2 text-xs font-semibold transition-colors hover:border-primary",
                          slot === s && "border-primary bg-primary/10 text-primary",
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Your name" value={name} onChange={setName} placeholder="Arjun R" />
                <Input label="Phone" value={phone} onChange={setPhone} placeholder="+91 ..." />
              </div>
              <Input label="Email" value={email} onChange={setEmail} type="email" placeholder="you@email.com" />
            </div>

            <DialogFooter className="mt-7">
              <Button type="button" variant="ghost" onClick={resetAndClose}>Cancel</Button>
              <Button type="submit" disabled={!canSubmit || status === "submitting"} className="min-w-36">
                {status === "submitting" ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking…</>
                ) : (
                  "Confirm booking"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function Input({
  label, value, onChange, type = "text", placeholder,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function Select({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/60 py-2 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}