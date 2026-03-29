import { Toolbar } from "@/components/Toolbar";
import { JobCard } from "@/components/JobCard";
import { sampleJobs } from "@/data/sampleJobs";

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <Toolbar />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-3 max-w-4xl">
          {sampleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
