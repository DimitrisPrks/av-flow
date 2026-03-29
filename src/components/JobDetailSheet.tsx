import { MapPin, Clock, Briefcase, Clock3, Users, Truck, StickyNote } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "./StatusBadge";
import { sampleJobDetails } from "@/data/sampleJobDetails";
import type { Job } from "./JobCard";

interface JobDetailSheetProps {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  );
}

export function JobDetailSheet({ job, open, onOpenChange }: JobDetailSheetProps) {
  if (!job) return null;

  const details = sampleJobDetails[job.id];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        {/* Header */}
        <SheetHeader className="p-6 pr-12 pb-4 border-b border-border space-y-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <SheetTitle className="text-base font-semibold truncate">{job.title}</SheetTitle>
              <SheetDescription className="text-sm text-muted-foreground mt-0.5">{job.client}</SheetDescription>
            </div>
            <StatusBadge status={job.status} />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.venue}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.date} · {job.time}</span>
            {details && <span className="inline-flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{details.type}</span>}
          </div>
        </SheetHeader>

        {/* Single scrollable body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Crew */}
          <section>
            <SectionLabel icon={Users} label={`Crew (${details?.crew.length ?? 0})`} />
            {details?.crew.length ? (
              <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
                {details.crew.map((member, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2.5 bg-card">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-card-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Clock3 className="w-3 h-3" />{member.callTime}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No crew assigned.</p>
            )}
          </section>

          {/* Vehicles */}
          <section>
            <SectionLabel icon={Truck} label={`Vehicles (${details?.vehicles.length ?? 0})`} />
            {details?.vehicles.length ? (
              <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
                {details.vehicles.map((vehicle, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2.5 bg-card">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-card-foreground">{vehicle.name}</p>
                      <p className="text-xs text-muted-foreground">{vehicle.driver}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      vehicle.loaded
                        ? "bg-status-confirmed-bg text-status-confirmed"
                        : "bg-status-wrapped-bg text-status-wrapped"
                    }`}>
                      {vehicle.loaded ? "Loaded" : "Not Loaded"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No vehicles assigned.</p>
            )}
          </section>

          {/* Notes */}
          <section>
            <SectionLabel icon={StickyNote} label="Notes" />
            <Textarea
              className="min-h-[120px] resize-none text-sm"
              defaultValue={details?.notes ?? ""}
              placeholder="Add notes…"
            />
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
