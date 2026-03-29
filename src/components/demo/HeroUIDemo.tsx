import { HeroUIProvider } from "@heroui/react";
import {
  Card as HCard,
  CardHeader as HCardHeader,
  CardBody as HCardBody,
  Button as HButton,
  Input as HInput,
  Chip,
  Table as HTable,
  TableHeader as HTHead,
  TableColumn,
  TableBody as HTBody,
  TableRow as HTRow,
  TableCell as HTCell,
  Select as HSelect,
  SelectItem as HSelectItem,
} from "@heroui/react";
import { Briefcase, Users, Truck } from "lucide-react";
import { stats, jobs, statusColors } from "./demoData";

const icons = [Briefcase, Users, Truck];

const heroChipColor: Record<string, "primary" | "success" | "warning" | "default"> = {
  Confirmed: "primary",
  Live: "success",
  Prepping: "warning",
  Wrapped: "default",
};

export function HeroUIDemo() {
  return (
    <HeroUIProvider>
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
                <HCardBody className="pt-0">
                  <span className="text-2xl font-bold text-foreground">{s.value}</span>
                </HCardBody>
              </HCard>
            );
          })}
        </div>

        {/* Table */}
        <HCard className="border border-border bg-card overflow-hidden">
          <HCardBody className="p-0">
            <HTable aria-label="Jobs" removeWrapper className="min-w-full">
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
                      <Chip color={heroChipColor[j.status]} size="sm" variant="flat">{j.status}</Chip>
                    </HTCell>
                  </HTRow>
                ))}
              </HTBody>
            </HTable>
          </HCardBody>
        </HCard>

        {/* Form */}
        <HCard className="border border-border bg-card">
          <HCardHeader><span className="text-base font-semibold text-foreground">Quick Add Job</span></HCardHeader>
          <HCardBody>
            <div className="grid grid-cols-3 gap-3">
              <HInput label="Job Title" placeholder="e.g. Gala Dinner" size="sm" />
              <HInput label="Client" placeholder="e.g. Acme Corp" size="sm" />
              <HSelect label="Status" placeholder="Select" size="sm">
                <HSelectItem key="confirmed">Confirmed</HSelectItem>
                <HSelectItem key="prepping">Prepping</HSelectItem>
                <HSelectItem key="live">Live</HSelectItem>
              </HSelect>
            </div>
            <HButton color="primary" className="mt-4">Add Job</HButton>
          </HCardBody>
        </HCard>

        {/* Badges */}
        <div className="flex gap-2">
          {Object.keys(heroChipColor).map((s) => (
            <Chip key={s} color={heroChipColor[s]} size="sm" variant="flat">{s}</Chip>
          ))}
        </div>
      </div>
    </HeroUIProvider>
  );
}
