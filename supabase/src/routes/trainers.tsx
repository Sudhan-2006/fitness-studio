import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, CalendarPlus } from "lucide-react";
import { BookingDialog } from "@/components/booking-dialog";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — Sudhan Fitness Gym" },
      { name: "description", content: "Meet our certified strength coaches, nutritionists and physios. Every coach has the credentials and the experience to back it up." },
      { property: "og:title", content: "Our Trainers — Sudhan Fitness" },
      { property: "og:description", content: "Meet the team behind every PR." },
    ],
  }),
  component: Trainers,
});

const team = [
  { name: "Sudhan Murugan", role: "Head Coach · Powerlifting", bio: "National-level powerlifter, 8 yrs coaching. Squat 250 kg, DL 280 kg.", img: t1 },
  { name: "Anika Reddy", role: "Strength & Conditioning", bio: "NSCA-CSCS certified. Specializes in athletes and post-rehab return-to-lift.", img: t2 },
  { name: "Karthik Iyer", role: "Bodybuilding & Hypertrophy", bio: "IFBB Pro Card holder. Two-time South Indian Classic Physique champion.", img: t3 },
  { name: "Meera Joshi", role: "Functional Fitness & Mobility", bio: "RKC Kettlebell instructor & FRC mobility specialist. Loves a good Turkish get-up.", img: t4 },
];

function Trainers() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  function book(name?: string) {
    setSelected(name);
    setOpen(true);
  }

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">The Team</p>
          <h1 className="mt-3 max-w-3xl text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            Coaches who <span className="text-gradient">walk the walk.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every coach on our floor lifts seriously, holds current certifications, and writes programs for
            their own clients. No outsourced templates. No ego. Just results.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, idx) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/60"
              style={{ animation: `float-up 0.6s ease-out ${idx * 0.08}s backwards` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <a
                  href="#"
                  aria-label={`${m.name} on Instagram`}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/60 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-gradient-primary hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-2xl">{m.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                <button
                  type="button"
                  onClick={() => book(m.name)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-gradient-primary hover:text-primary-foreground"
                >
                  <CalendarPlus className="h-4 w-4" /> Book session
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/10 p-10 text-center shadow-glow sm:p-16">
          <h2 className="text-5xl sm:text-6xl">Want a coach in your corner?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a free 30-min consult — we'll match you with the right coach for your goals.
          </p>
          <button
            type="button"
            onClick={() => book(undefined)}
            className="mt-8 inline-flex rounded-md bg-gradient-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Book Consultation
          </button>
        </div>
      </section>

      <BookingDialog open={open} onOpenChange={setOpen} trainer={selected} />
    </>
  );
}
