import { useState } from "react";
import { Toolbar } from "@/components/Toolbar";
import { JobCard } from "@/components/JobCard";
import type { Job } from "@/components/JobCard";
import { JobDetailSheet } from "@/components/JobDetailSheet";
import { sampleJobs } from "@/data/sampleJobs";

const Index = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <Toolbar />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-3 max-w-4xl">
          {sampleJobs.map((job) => (
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
      />
    </div>
  );
};

export default Index;
