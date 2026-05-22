import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Truck,
  BarChart3,
  Bell,
  Shield,
  ArrowRight,
  Check,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCard } from "@/components/animated/AnimatedCard";
import { AnimatedList } from "@/components/animated/AnimatedList";
import { HoverScale } from "@/components/animated/HoverScale";
import { NumberTicker } from "@/components/animated/NumberTicker";

const features = [
  {
    icon: Calendar,
    title: "Job Scheduling",
    description: "Plan every show, install and rehearsal on a single timeline your whole team can trust.",
  },
  {
    icon: Users,
    title: "Crew Assignments",
    description: "See who's free, who's overbooked, and assign the right techs in a single click.",
  },
  {
    icon: Truck,
    title: "Vehicle & Gear",
    description: "Track vans, trucks and key kit so nothing leaves the warehouse double-booked.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Crew calls, schedule changes and venue updates land where your team actually reads them.",
  },
  {
    icon: BarChart3,
    title: "Live Dashboards",
    description: "Utilisation, revenue and crew hours at a glance — no spreadsheets required.",
  },
  {
    icon: Shield,
    title: "Built for AV",
    description: "Designed with Maltese AV operators in mind — corporate, weddings, concerts and tours.",
  },
];

const stats = [
  { value: 240, suffix: "+", label: "Jobs scheduled per month" },
  { value: 35, suffix: "%", label: "Less time on planning" },
  { value: 98, suffix: "%", label: "On-time crew calls" },
];

const tiers = [
  {
    name: "Starter",
    price: "€49",
    period: "/ month",
    description: "For small AV crews running up to 20 jobs a month.",
    features: ["Up to 5 crew", "Job scheduling", "Vehicle tracking", "Email support"],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Studio",
    price: "€149",
    period: "/ month",
    description: "Built for growing production companies with weekly shows.",
    features: [
      "Up to 25 crew",
      "Everything in Starter",
      "Crew notifications",
      "Venue history & reports",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Touring",
    price: "Custom",
    period: "",
    description: "For touring companies, festivals and multi-warehouse operators.",
    features: [
      "Unlimited crew & vehicles",
      "Multi-warehouse",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      "We replaced three spreadsheets and a WhatsApp group with AV Scheduler. Our crew calls are finally calm.",
    name: "Mark Borg",
    role: "Production Manager, Valletta Live",
  },
  {
    quote:
      "Booking the right van with the right crew used to take an hour. Now it takes 30 seconds.",
    name: "Sara Camilleri",
    role: "Operations Lead, Mediterranean AV",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/landing" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            AV Scheduler
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#customers" className="hover:text-foreground transition-colors">Customers</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/">Start free trial</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="mr-1 h-3 w-3" /> New: Crew availability heatmap
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Run every show without losing a single crew call.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              AV Scheduler is the operations platform built for production companies — jobs, crew,
              vehicles and venues in one calm workspace.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/">
                  Start free 14-day trial <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Watch live demo</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required. Cancel anytime.
            </p>
          </div>

          {/* Preview mock */}
          <AnimatedCard delay={0.2} className="mx-auto mt-16 max-w-5xl overflow-hidden p-0">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-status-prepping/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-status-confirmed/60" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">app.avscheduler.com</span>
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
              {[
                { label: "Active jobs", value: 24 },
                { label: "Crew today", value: 17 },
                { label: "Vehicles out", value: 6 },
              ].map((s, i) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-5">
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    <NumberTicker value={s.value} delay={400 + i * 150} />
                  </p>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-16 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight md:text-5xl">
                <NumberTicker value={s.value} delay={i * 150} />
                {s.suffix}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Everything your production office needs.
            </h2>
            <p className="mt-4 text-muted-foreground">
              One source of truth for the people, gear and venues behind every show.
            </p>
          </div>
          <AnimatedList
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {features.map((f) => (
              <HoverScale key={f.title} scale={1.02}>
                <Card className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                </Card>
              </HoverScale>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by Maltese AV teams.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-8">
                <p className="text-lg leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Simple pricing. No surprises.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start free for 14 days. Upgrade when you're ready.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col p-8 ${
                  tier.highlighted ? "border-primary shadow-md" : ""
                }`}
              >
                {tier.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most popular</Badge>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-status-confirmed shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8"
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link to="/">{tier.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 py-24">
          <Card className="mx-auto max-w-4xl p-12 text-center">
            <Clock className="mx-auto h-8 w-8 text-muted-foreground" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Get your next show under control in 10 minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Import your jobs, invite your crew, and watch the chaos turn into a calendar.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/">Start free trial <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo">Explore the demo</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} AV Scheduler. Made in Malta.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
