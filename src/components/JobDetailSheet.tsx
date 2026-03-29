import { MapPin, Clock, Briefcase, Clock3 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "./StatusBadge";
import { sampleJobDetails } from "@/data/sampleJobDetails";
import type { Job } from "./JobCard";

interface JobDetailSheetProps {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JobDetailSheet({ job, open, onOpenChange }: JobDetailSheetProps) {
  if (!job) return null;

  const details = sampleJobDetails[job.id];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        {/* Header */}
        <SheetHeader className="p-6 pb-4 border-b border-border space-y-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <SheetTitle className="text-base font-semibold truncate">{job.title}</SheetTitle>
              <SheetDescription className="text-sm text-muted-foreground mt-0.5">{job.client}</SheetDescription>
            </div>
            <StatusBadge status={job.status} />
          </div>
        </SheetHeader>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-6 py-3 border-b border-border text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {job.venue}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {job.date} · {job.time}
          </span>
          {details && (
            <span className="inline-flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              {details.type}
            </span>
          )}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="crew" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="mx-6 mt-4 mb-0 bg-muted w-fit">
            <TabsTrigger value="crew">Crew</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="crew" className="flex-1 overflow-y-auto px-6 pb-6">
            {details?.crew.length ? (
              <div className="divide-y divide-border">
                {details.crew.map((member, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Clock3 className="w-3 h-3" />
                      {member.callTime}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground py-4">No crew assigned.</p>
            )}
          </TabsContent>

          <TabsContent value="vehicles" className="flex-1 overflow-y-auto px-6 pb-6">
            {details?.vehicles.length ? (
              <div className="divide-y divide-border">
                {details.vehicles.map((vehicle, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{vehicle.name}</p>
                      <p className="text-xs text-muted-foreground">{vehicle.driver}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        vehicle.loaded
                          ? "bg-status-confirmed-bg text-status-confirmed"
                          : "bg-status-wrapped-bg text-status-wrapped"
                      }`}
                    >
                      {vehicle.loaded ? "Loaded" : "Not Loaded"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground py-4">No vehicles assigned.</p>
            )}
          </TabsContent>

          <TabsContent value="notes" className="flex-1 overflow-y-auto px-6 pb-6">
            <Textarea
              className="min-h-[200px] resize-none text-sm"
              defaultValue={details?.notes ?? ""}
              placeholder="Add notes…"
            />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
