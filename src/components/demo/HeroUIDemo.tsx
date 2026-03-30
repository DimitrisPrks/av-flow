import { Briefcase, Users, Truck } from "lucide-react";
import { stats, jobs, statusColors } from "./demoData";

const icons = [Briefcase, Users, Truck];

const chipColors: Record<string, string> = {
  Confirmed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Live: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Prepping: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Wrapped: "bg-gray-100 text-gray-600 dark:bg-gray-800/40 dark:text-gray-300",
};

export function HeroUIDemo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold">HeroUI</span>
        <span className="text-sm text-muted-foreground">
          Beautiful, fast React UI (formerly NextUI) — <em>simulated styling</em>, as HeroUI v3 requires React 19
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <div key={s.label} className="rounded-xl border border-border bg-card shadow-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-2xl font-bold">{s.value}</span>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Job</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Client</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Date</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j) => (
              <tr key={j.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">{j.title}</td>
                <td className="px-4 py-3">{j.client}</td>
                <td className="px-4 py-3">{j.date}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${chipColors[j.status]}`}>
                    {j.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-border bg-card shadow-sm p-5">
        <h3 className="text-base font-semibold mb-4">Quick Add Job</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Job Title</label>
            <input className="flex h-10 w-full rounded-xl border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Gala Dinner" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Client</label>
            <input className="flex h-10 w-full rounded-xl border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Acme Corp" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Status</label>
            <select className="flex h-10 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Confirmed</option>
              <option>Prepping</option>
              <option>Live</option>
            </select>
          </div>
        </div>
        <button className="mt-4 h-10 px-6 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
          Add Job
        </button>
      </div>

      {/* Badges */}
      <div className="flex gap-2">
        {Object.keys(chipColors).map((s) => (
          <span key={s} className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${chipColors[s]}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
