import { Link } from "@tanstack/react-router";
import { Dumbbell, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-primary">
                <Dumbbell className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl tracking-wider">
                SUDHAN <span className="text-gradient">FITNESS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A premium strength &amp; conditioning facility built for people who take their training
              seriously. Forge your strongest self with coaches who actually care.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/membership" className="hover:text-primary">Membership</Link></li>
              <li><Link to="/trainers" className="hover:text-primary">Trainers</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" /> 24 MG Road, Coimbatore</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> +91 98765 43210</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> hello@sudhanfitness.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Sudhan Fitness Gym. All rights reserved.</p>
          <p>Train hard. Eat right. Sleep deep.</p>
        </div>
      </div>
    </footer>
  );
}
