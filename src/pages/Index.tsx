import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toolbar } from "@/components/Toolbar";
import { JobCard } from "@/components/JobCard";
import type { Job } from "@/components/JobCard";
import { JobDetailSheet } from "@/components/JobDetailSheet";
import { VenueHistorySheet } from "@/components/VenueHistorySheet";
import { sampleJobs } from "@/data/sampleJobs";
import { pastJobs } from "@/data/pastJobs";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPastRoute = location.pathname === "/past";
  const [view, setView] = useState<"upcoming" | "past">(isPastRoute ? "past" : "upcoming");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [venueFilter, setVenueFilter] = useState<string | null>(null);

  const jobs = view === "upcoming" ? sampleJobs : pastJobs;

  const handleViewChange = (v: "upcoming" | "past") => {
    setView(v);
    navigate(v === "past" ? "/past" : "/");
  };

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
      <Toolbar view={view} onViewChange={handleViewChange} />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-3 max-w-4xl">
          {jobs.map((job) => (
            <div key={job.id} onClick={() => setSelectedJob(job)}>
              <JobCard job={job} />
            </div>
          ))}
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
