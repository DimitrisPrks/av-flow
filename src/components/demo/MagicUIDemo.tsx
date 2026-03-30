import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Truck } from "lucide-react";
import { stats, jobs, statusColors } from "./demoData";

const icons = [Briefcase, Users, Truck];

/* ── Animated Number Ticker ── */
function NumberTicker({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);
  return <span>{display}</span>;
}

/* ── Shimmer Border Card ── */
function ShimmerCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-xl p-[1px] overflow-hidden ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_var(--shimmer-angle),transparent_50%,hsl(var(--primary))_80%,transparent_100%)] animate-shimmer-spin" />
      <div className="relative rounded-xl bg-card border border-border p-5">
        {children}
      </div>
    </div>
  );
}

/* ── Glow on hover ── */
function GlowCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative rounded-xl border border-border bg-card p-5 overflow-hidden transition-shadow duration-300"
      style={hovering ? { boxShadow: `0 0 40px 4px hsl(var(--primary) / 0.15)` } : {}}
    >
      {hovering && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-20"
          style={{
            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary)), transparent 60%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

export function MagicUIDemo() {
  return (
    <div className="space-y-6">
      <style>{`
        @property --shimmer-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes shimmer-spin {
          to { --shimmer-angle: 360deg; }
        }
        .animate-shimmer-spin {
          animation: shimmer-spin 3s linear infinite;
        }
      `}</style>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold">Magic UI</span>
        <span className="text-sm text-muted-foreground">Animated components & effects — copy-paste, open source</span>
      </div>

      {/* Stats with shimmer border */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <ShimmerCard key={s.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{s.label}</span>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">
                <NumberTicker value={s.value} />
              </div>
            </ShimmerCard>
          );
        })}
      </div>

      {/* Table with glow rows */}
      <GlowCard>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-2 font-medium text-muted-foreground">Job</th>
              <th className="pb-2 font-medium text-muted-foreground">Client</th>
              <th className="pb-2 font-medium text-muted-foreground">Date</th>
              <th className="pb-2 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j) => (
              <tr key={j.id} className="border-b border-border/50 last:border-0 hover:bg-accent/30 transition-colors">
                <td className="py-2.5 font-medium">{j.title}</td>
                <td className="py-2.5">{j.client}</td>
                <td className="py-2.5">{j.date}</td>
                <td className="py-2.5">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[j.status]}`}>
                    {j.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlowCard>

      {/* Form with shimmer button */}
      <GlowCard>
        <p className="text-base font-semibold mb-3">Quick Add Job</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Job Title</label>
            <input className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. Gala Dinner" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Client</label>
            <input className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. Acme Corp" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Status</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option>Confirmed</option>
              <option>Prepping</option>
              <option>Live</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <ShimmerCard className="inline-block">
            <button className="text-sm font-medium -m-5 px-5 py-2.5 rounded-xl">Add Job</button>
          </ShimmerCard>
        </div>
      </GlowCard>

      {/* Badges */}
      <div className="flex gap-2">
        {Object.keys(statusColors).map((s) => (
          <span key={s} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[s]}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
