import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/trainers", label: "Trainers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-primary shadow-glow">
            <Dumbbell className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl tracking-wider">
            SUDHAN <span className="text-gradient">FITNESS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/membership"
            className="inline-flex items-center rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold uppercase tracking-wider text-muted-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
