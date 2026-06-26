import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Target, Heart, Zap } from "lucide-react";
import gym from "@/assets/gym-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sudhan Fitness Gym" },
      { name: "description", content: "Founded by national-level lifter Sudhan Murugan in 2017. Our story, our mission, and the values that drive every rep." },
      { property: "og:title", content: "About Sudhan Fitness Gym" },
      { property: "og:description", content: "Founded in 2017 by a national-level lifter who wanted a real gym in Coimbatore." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Discipline", text: "Show up. Do the work. Repeat. The compound effect is undefeated." },
  { icon: Heart, title: "Community", text: "We celebrate every PR, big or small. Nobody trains alone here." },
  { icon: Award, title: "Excellence", text: "From form cues to programming, we obsess over the small details that drive results." },
  { icon: Zap, title: "Energy", text: "The floor stays loud, the lifts stay heavy, and the bar is always moving." },
];

function About() {
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Story</p>
          <h1 className="mt-3 max-w-3xl text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            Built by lifters, <span className="text-gradient">for lifters.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Sudhan Fitness Gym opened its doors in 2017 with one mission: give Coimbatore a serious
            training facility — the kind you'd find in Mumbai or Bangalore — without the pretense.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-border shadow-card">
          <img src={gym} alt="Gym floor" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-5xl sm:text-6xl">From a garage to a gym.</h2>
          <p className="mt-5 text-muted-foreground">
            Founder Sudhan Murugan — a national-level powerlifter — was tired of cramped commercial gyms
            with broken cables and zero coaching. So he built one. What started as a 600 sq ft garage in
            R.S. Puram with three racks and a handful of friends grew into a 10,000 sq ft facility serving
            more than 1,200 members today.
          </p>
          <p className="mt-4 text-muted-foreground">
            We're independent, unfranchised, and a little stubborn about quality. Every coach is certified.
            Every program is written for you. Every barbell is calibrated. That's the standard.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "2017", l: "Founded" },
              { n: "10K", l: "Sq Ft" },
              { n: "15", l: "Coaches" },
            ].map((s) => (
              <div key={s.l} className="rounded-lg border border-border bg-card p-4">
                <div className="font-display text-3xl">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What we stand for</p>
            <h2 className="mt-3 text-5xl sm:text-6xl">Our values.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/10 p-10 text-center shadow-glow sm:p-16">
          <h2 className="text-5xl sm:text-6xl">Come see it for yourself.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a free walkthrough — meet the coaches, tour the floor, lift a weight or two.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-md bg-gradient-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105">
            Book a Tour
          </Link>
        </div>
      </section>
    </>
  );
}
