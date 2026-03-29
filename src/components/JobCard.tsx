import { MapPin, Clock, Users, Truck } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export interface Job {
  id: string;
  title: string;
  client: string;
  venue: string;
  date: string;
  time: string;
  status: "Confirmed" | "Prepping" | "Live" | "Wrapped";
  crewCount: number;
  vehicleCount: number;
}

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-sm text-card-foreground truncate">{job.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{job.client}</p>
        </div>
        <StatusBadge status={job.status} />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          {job.venue}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {job.date} · {job.time}
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          {job.crewCount} crew
        </span>
        <span className="inline-flex items-center gap-1">
          <Truck className="w-3.5 h-3.5" />
          {job.vehicleCount} vehicle{job.vehicleCount !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
