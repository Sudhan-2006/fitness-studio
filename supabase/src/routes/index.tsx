import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, HeartPulse, Trophy, Users, Star, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import gymInterior from "@/assets/gym-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sudhan Fitness Gym — Forge Your Strongest Self" },
      { name: "description", content: "Premium strength & conditioning gym in Coimbatore. Expert coaches, modern equipment, proven programs. Start your transformation today." },
      { property: "og:title", content: "Sudhan Fitness Gym" },
      { property: "og:description", content: "Forge your strongest self." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Dumbbell, title: "Pro Equipment", text: "Hammer Strength, Rogue racks, full Olympic platforms, dumbbells up to 60kg." },
  { icon: Users, title: "Elite Coaching", text: "Certified strength coaches, nutritionists, and physios under one roof." },
  { icon: HeartPulse, title: "Cardio Zone", text: "Air bikes, ski ergs, sleds and curved treadmills for serious conditioning." },
  { icon: Trophy, title: "Proven Results", text: "1,200+ members transformed. Real progress, tracked monthly." },
];

const testimonials = [
  { name: "Arjun Ramesh", role: "Member · 2 yrs", text: "Lost 22 kg and finally pulled a 180 kg deadlift. The coaches actually program for you — not generic templates.", rating: 5 },
  { name: "Priya Natarajan", role: "Member · 1 yr", text: "I was intimidated by gyms my whole life. Sudhan's team made strength training feel like home. Best decision.", rating: 5 },
  { name: "Vikram Shetty", role: "Powerlifter", text: "Equipment is world-class and the platform is always free when I need it. Hit three state records training here.", rating: 5 },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-background/40" />

        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40 lg:py-56">
          <div className="max-w-3xl animate-float-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Coimbatore's #1 Strength Gym
            </p>
            <h1 className="font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-[9rem]">
              FORGE YOUR
              <br />
              <span className="text-gradient">STRONGEST</span> SELF
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              No mirror flexing. No empty promises. Just heavy iron, smart programming, and a community
              that shows up every single day.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Start Training <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                Tour the Gym
              </Link>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                { n: "1,200+", l: "Active Members" },
                { n: "15", l: "Expert Coaches" },
                { n: "8 yrs", l: "Of Iron" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-foreground sm:text-4xl">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Why Sudhan</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">Built for serious lifters.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need under one roof — from your first squat to your hundredth meet.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image band */}
      <section className="relative overflow-hidden">
        <img src={gymInterior} alt="Inside Sudhan Fitness Gym" width={1600} height={1000} loading="lazy" className="h-[400px] w-full object-cover sm:h-[520px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-lg">
              <h2 className="text-5xl sm:text-6xl">Iron that bites back.</h2>
              <p className="mt-4 text-muted-foreground">
                10,000 sq ft of dedicated lifting space. Power racks, glute-ham developers, reverse hypers,
                and every accessory you wished your last gym had.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-primary-glow"
              >
                Take the tour <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Real People. Real Progress.</p>
          <h2 className="mt-3 text-5xl sm:text-6xl">What our members say.</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base text-foreground/90">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-10 text-center shadow-glow sm:p-16">
          <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <h2 className="text-5xl sm:text-6xl">Ready to lift heavy?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Your first session is on us. Walk in, train, and decide if Sudhan is your kind of gym.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/membership" className="rounded-md bg-gradient-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Claim Free Trial
            </Link>
            <Link to="/contact" className="rounded-md border border-border px-7 py-4 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary">
              Talk to a Coach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
