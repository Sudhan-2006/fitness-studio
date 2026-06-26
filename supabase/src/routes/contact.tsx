import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CalendarPlus } from "lucide-react";
import { BookingDialog } from "@/components/booking-dialog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sudhan Fitness Gym" },
      { name: "description", content: "Visit us in Coimbatore, call +91 98765 43210, or send a message. We respond within 4 working hours." },
      { property: "og:title", content: "Contact — Sudhan Fitness" },
      { property: "og:description", content: "Get in touch with the team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Say Hello</p>
          <h1 className="mt-3 max-w-3xl text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            Drop us a <span className="text-gradient">line.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Questions about training, membership, or just want to tour the floor? Our team replies within
            4 working hours.
          </p>
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <CalendarPlus className="h-4 w-4" /> Book an appointment
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {[
              { Icon: MapPin, title: "Visit", body: "24 MG Road, R.S. Puram\nCoimbatore 641002" },
              { Icon: Phone, title: "Call", body: "+91 98765 43210\nMon – Sun, 6 AM – 10 PM" },
              { Icon: Mail, title: "Email", body: "hello@sudhanfitness.com\ncoaching@sudhanfitness.com" },
              { Icon: Clock, title: "Hours", body: "Mon – Sat: 5 AM – 11 PM\nSunday: 6 AM – 8 PM" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <c.Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold uppercase tracking-wider text-sm">{c.title}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-7 shadow-card sm:p-10"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <h2 className="text-3xl">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We'll get back to you the same day.</p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Arjun R" />
              <Field label="Phone" name="phone" placeholder="+91 ..." />
            </div>
            <div className="mt-5">
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Interested in</label>
              <select className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                <option>Membership tour</option>
                <option>Personal training</option>
                <option>Group classes</option>
                <option>Nutrition consult</option>
                <option>Just saying hi</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea rows={5} placeholder="Tell us a bit about your goals..." className="mt-2 w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {sent ? "Message sent ✓" : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </section>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
