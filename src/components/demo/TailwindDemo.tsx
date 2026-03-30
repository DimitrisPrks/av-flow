import { Briefcase, Users, Truck } from "lucide-react";
import { stats, jobs, statusColors } from "./demoData";

const icons = [Briefcase, Users, Truck];

export function TailwindDemo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold">Tailwind Only</span>
        <span className="text-sm text-muted-foreground">Pure utility classes — no component library</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Job</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Client</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Date</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j) => (
              <tr key={j.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium">{j.title}</td>
                <td className="px-4 py-3">{j.client}</td>
                <td className="px-4 py-3">{j.date}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[j.status]}`}>
                    {j.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <p className="text-base font-semibold mb-3">Quick Add Job</p>
        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Job Title</label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. Gala Dinner"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Client</label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. Acme Corp"
            />
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
        <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Add Job
        </button>
      </div>

      {/* Badges */}
      <div className="flex gap-2">
        {Object.keys(statusColors).map((s) => (
          <span key={s} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[s]}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
