import { MapPin, Clock, ArrowLeft } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { StatusBadge } from "./StatusBadge";
import type { Job } from "./JobCard";
import { sampleJobs } from "@/data/sampleJobs";
import { pastJobs } from "@/data/pastJobs";

interface VenueHistorySheetProps {
  venue: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJobClick?: (job: Job) => void;
}

export function VenueHistorySheet({ venue, open, onOpenChange, onJobClick }: VenueHistorySheetProps) {
  if (!venue) return null;

  const allJobs = [...sampleJobs, ...pastJobs];
  const venueJobs = allJobs.filter((j) => j.venue === venue);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        <SheetHeader className="p-6 pr-12 pb-4 border-b border-border space-y-0">
          <button
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-2 w-fit"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <SheetTitle className="text-base font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              {venue}
            </span>
          </SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground mt-1">
            {venueJobs.length} job{venueJobs.length !== 1 ? "s" : ""} at this venue
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {venueJobs.length > 0 ? (
            <div className="divide-y divide-border rounded-lg border border-border overflow-hidden">
              {venueJobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => onJobClick?.(job)}
                  className="w-full text-left px-3 py-3 bg-card hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-card-foreground truncate">{job.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{job.client}</p>
                    </div>
                    <StatusBadge status={job.status} />
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.date} · {job.time}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No jobs found at this venue.</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
