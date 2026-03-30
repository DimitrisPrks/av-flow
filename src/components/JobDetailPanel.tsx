import { MapPin, Clock, Briefcase, Clock3, Users, Truck, StickyNote } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge, type JobStatus } from "./StatusBadge";

export interface JobDetail {
  id: string;
  title: string;
  client: string;
  venue: string;
  date: string;
  time: string;
  status: JobStatus;
  type?: string;
  crew: { name: string; role: string; callTime: string }[];
  vehicles: { name: string; driver: string; loaded: boolean }[];
  notes: string;
}

interface JobDetailPanelProps {
  job: JobDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVenueClick?: (venue: string) => void;
}

export function JobDetailPanel({ job, open, onOpenChange, onVenueClick }: JobDetailPanelProps) {
  if (!job) return null;

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
            <button
              onClick={() => onVenueClick?.(job.venue)}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors underline decoration-dotted underline-offset-2"
            >
              <MapPin className="w-3.5 h-3.5" />{job.venue}
            </button>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />{job.date} · {job.time}
            </span>
            {job.type && (
              <span className="inline-flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" />{job.type}
              </span>
            )}
          </div>
        </SheetHeader>

        {/* Tabbed body */}
        <Tabs defaultValue="crew" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="mx-6 mt-4 mb-0 w-fit">
            <TabsTrigger value="crew" className="gap-1.5 text-xs">
              <Users className="w-3.5 h-3.5" />Crew ({job.crew.length})
            </TabsTrigger>
            <TabsTrigger value="vehicles" className="gap-1.5 text-xs">
              <Truck className="w-3.5 h-3.5" />Vehicles ({job.vehicles.length})
            </TabsTrigger>
            <TabsTrigger value="notes" className="gap-1.5 text-xs">
              <StickyNote className="w-3.5 h-3.5" />Notes
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto p-6">
            <TabsContent value="crew" className="mt-0">
              {job.crew.length ? (
                <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
                  {job.crew.map((member, i) => (
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
            </TabsContent>

            <TabsContent value="vehicles" className="mt-0">
              {job.vehicles.length ? (
                <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
                  {job.vehicles.map((vehicle, i) => (
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
            </TabsContent>

            <TabsContent value="notes" className="mt-0">
              <Textarea
                className="min-h-[120px] resize-none text-sm"
                defaultValue={job.notes}
                placeholder="Add notes…"
              />
            </TabsContent>
          </div>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
