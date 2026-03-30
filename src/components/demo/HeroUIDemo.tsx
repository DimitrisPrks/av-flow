import { I18nProvider } from "@heroui/react";
import {
  Card as HCard,
  CardHeader as HCardHeader,
  CardContent as HCardContent,
  Button as HButton,
  Chip,
  Table as HTable,
  TableHeader as HTHead,
  TableColumn,
  TableBody as HTBody,
  TableRow as HTRow,
  TableCell as HTCell,
} from "@heroui/react";
import { Briefcase, Users, Truck } from "lucide-react";
import { stats, jobs, statusColors } from "./demoData";

const icons = [Briefcase, Users, Truck];

const heroChipColor: Record<string, "accent" | "success" | "warning" | "default"> = {
  Confirmed: "accent",
  Live: "success",
  Prepping: "warning",
  Wrapped: "default",
};

export function HeroUIDemo() {
  return (
    <I18nProvider locale="en-US">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold">HeroUI</span>
          <span className="text-sm text-muted-foreground">Beautiful, fast React UI (formerly NextUI)</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => {
            const Icon = icons[i];
            return (
              <HCard key={s.label} className="border border-border bg-card">
                <HCardHeader className="flex flex-row items-center justify-between pb-1">
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </HCardHeader>
                <HCardContent className="pt-0">
                  <span className="text-2xl font-bold text-foreground">{s.value}</span>
                </HCardContent>
              </HCard>
            );
          })}
        </div>

        {/* Table */}
        <HCard className="border border-border bg-card overflow-hidden">
          <HCardContent className="p-0">
            <HTable aria-label="Jobs" className="min-w-full">
              <HTHead>
                <TableColumn>Job</TableColumn>
                <TableColumn>Client</TableColumn>
                <TableColumn>Date</TableColumn>
                <TableColumn>Status</TableColumn>
              </HTHead>
              <HTBody>
                {jobs.map((j) => (
                  <HTRow key={j.id}>
                    <HTCell className="font-medium">{j.title}</HTCell>
                    <HTCell>{j.client}</HTCell>
                    <HTCell>{j.date}</HTCell>
                    <HTCell>
                      <Chip color={heroChipColor[j.status]} size="sm" variant="secondary">{j.status}</Chip>
                    </HTCell>
                  </HTRow>
                ))}
              </HTBody>
            </HTable>
          </HCardContent>
        </HCard>

        {/* Form */}
        <HCard className="border border-border bg-card">
          <HCardHeader><span className="text-base font-semibold text-foreground">Quick Add Job</span></HCardHeader>
          <HCardContent>
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
            <HButton className="mt-4">Add Job</HButton>
          </HCardContent>
        </HCard>

        {/* Badges */}
        <div className="flex gap-2">
          {Object.keys(heroChipColor).map((s) => (
            <Chip key={s} color={heroChipColor[s]} size="sm" variant="secondary">{s}</Chip>
          ))}
        </div>
      </div>
    </I18nProvider>
  );
}
