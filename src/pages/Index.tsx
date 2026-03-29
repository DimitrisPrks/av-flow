import { useState } from "react";
import { Toolbar, getDateRange, isJobInRange } from "@/components/Toolbar";
import { JobCard } from "@/components/JobCard";
import type { Job } from "@/components/JobCard";
import { JobDetailSheet } from "@/components/JobDetailSheet";
import { VenueHistorySheet } from "@/components/VenueHistorySheet";
import { sampleJobs } from "@/data/sampleJobs";
import { pastJobs } from "@/data/pastJobs";

const allJobs: Job[] = [...sampleJobs, ...pastJobs];

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rangeMode, setRangeMode] = useState<"week" | "month" | "year">("month");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [venueFilter, setVenueFilter] = useState<string | null>(null);

  const range = getDateRange(selectedDate, rangeMode);
  const filteredJobs = allJobs.filter((job) => isJobInRange(job.date, range));

  const handleVenueClick = (venue: string) => {
    setSelectedJob(null);
    setTimeout(() => setVenueFilter(venue), 150);
  };

  const handleVenueJobClick = (job: Job) => {
    setVenueFilter(null);
    setTimeout(() => setSelectedJob(job), 150);
  };

  return (
    <div className="flex flex-col h-screen">
      <Toolbar
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        rangeMode={rangeMode}
        onRangeModeChange={setRangeMode}
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-3 max-w-4xl">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} onClick={() => setSelectedJob(job)}>
                <JobCard job={job} />
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground py-8 text-center">No jobs in this period.</p>
          )}
        </div>
      </div>
      <JobDetailSheet
        job={selectedJob}
        open={!!selectedJob}
        onOpenChange={(open) => { if (!open) setSelectedJob(null); }}
        onVenueClick={handleVenueClick}
      />
      <VenueHistorySheet
        venue={venueFilter}
        open={!!venueFilter}
        onOpenChange={(open) => { if (!open) setVenueFilter(null); }}
        onJobClick={handleVenueJobClick}
      />
    </div>
  );
};

export default Index;
