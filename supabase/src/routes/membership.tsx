import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Zap } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Sudhan Fitness Gym" },
      { name: "description", content: "Flexible monthly, quarterly and annual plans. From open gym access to fully coached programs. Pick what fits your goals." },
      { property: "og:title", content: "Membership Plans — Sudhan Fitness" },
      { property: "og:description", content: "Plans for every level of lifter." },
    ],
  }),
  component: Membership,
});

const plans = [
  {
    name: "Starter",
    price: "₹1,499",
    period: "/month",
    tagline: "For anyone testing the waters.",
    features: ["Full gym floor access", "Locker & shower facilities", "Open hours: 5 AM – 11 PM", "1 free intro session", "Community events"],
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "/month",
    tagline: "Our most popular plan.",
    features: ["Everything in Starter", "Personalised monthly program", "Bi-weekly form check-ins", "Nutrition guidelines", "Recovery zone access", "Bring-a-friend day (1×/mo)"],
    featured: true,
  },
  {
    name: "Elite",
    price: "₹5,499",
    period: "/month",
    tagline: "1-on-1 coaching, every session.",
    features: ["Everything in Pro", "3 weekly coached sessions", "Custom nutrition plan", "Monthly InBody scan", "Physio consultation", "Meet prep & competition support"],
  },
];

function Membership() {
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Pricing</p>
          <h1 className="mt-3 text-6xl leading-[0.95] sm:text-7xl md:text-8xl">
            Pick your <span className="text-gradient">weapon.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Three plans. No lock-ins. Cancel anytime. Pause anytime. Just lift.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                p.featured
                  ? "border-primary bg-gradient-to-br from-card to-primary/10 shadow-glow"
                  : "border-border bg-card shadow-card hover:border-primary/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  <Zap className="h-3 w-3 fill-current" /> Most Popular
                </span>
              )}
              <h3 className="text-3xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl">{p.price}</span>
                <span className="text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-7 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.featured ? "bg-gradient-primary" : "bg-primary/15 text-primary"}`}>
                      <Check className={`h-3 w-3 ${p.featured ? "text-primary-foreground" : ""}`} />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Choose {p.name}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Quarterly (-10%) and annual (-20%) plans available. Couple &amp; student discounts on request.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
        <h2 className="text-center text-4xl sm:text-5xl">Frequently asked.</h2>
        <div className="mt-10 space-y-4">
          {[
            { q: "Do you offer a free trial?", a: "Yes — your first full session is on us. Walk in any day between 5 AM and 9 PM, no appointment needed." },
            { q: "Can I freeze my membership?", a: "Absolutely. Freeze up to 30 days per year, no questions asked." },
            { q: "Is there a joining fee?", a: "No joining fee, ever. The price you see is the price you pay." },
            { q: "Do you have separate hours for women?", a: "We have dedicated women-only timings 6–8 AM and 4–6 PM daily, plus the full floor at all other hours." },
          ].map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-6 open:border-primary/60">
              <summary className="cursor-pointer list-none font-bold text-foreground marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
