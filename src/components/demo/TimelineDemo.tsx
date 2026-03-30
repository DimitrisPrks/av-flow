import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const hours = Array.from({ length: 14 }, (_, i) => i + 6); // 06:00–19:00

const timelineJobs = [
  { id: 1, title: "BOV Conference", crew: "Mark, Sarah", start: 8, duration: 4, color: "bg-status-confirmed-bg border-status-confirmed text-status-confirmed" },
  { id: 2, title: "Borg Wedding", crew: "Joe, Lisa", start: 14, duration: 5, color: "bg-status-live-bg border-status-live text-status-live" },
  { id: 3, title: "Malta Rocks Setup", crew: "Mark", start: 10, duration: 3, color: "bg-status-prepping-bg border-status-prepping text-status-prepping" },
  { id: 4, title: "GO Launch Wrap", crew: "Sarah, Joe", start: 6, duration: 2, color: "bg-status-wrapped-bg border-status-wrapped text-status-wrapped" },
];

export function TimelineDemo() {
  const minHour = 6;
  const totalHours = 14;

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">Timeline / Gantt View</h3>
        <p className="text-xs text-muted-foreground">Horizontal timeline showing jobs across the day with overlaps</p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Hour headers */}
        <div className="flex border-b border-border bg-muted/30">
          <div className="w-28 shrink-0 px-3 py-2 text-xs font-medium text-muted-foreground border-r border-border">
            Job
          </div>
          <div className="flex-1 flex">
            {hours.map((h) => (
              <div
                key={h}
                className="flex-1 text-center py-2 text-[10px] font-medium text-muted-foreground border-r border-border last:border-0"
              >
                {String(h).padStart(2, "0")}:00
              </div>
            ))}
          </div>
        </div>

        {/* Job rows */}
        {timelineJobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center border-b border-border last:border-0 min-h-[44px]"
          >
            <div className="w-28 shrink-0 px-3 py-2 text-xs font-medium truncate border-r border-border">
              {job.title}
            </div>
            <div className="flex-1 relative h-[44px]">
              {/* Hour grid lines */}
              <div className="absolute inset-0 flex">
                {hours.map((h) => (
                  <div key={h} className="flex-1 border-r border-border/30 last:border-0" />
                ))}
              </div>
              {/* Job bar */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      left: `${((job.start - minHour) / totalHours) * 100}%`,
                      width: `${(job.duration / totalHours) * 100}%`,
                      originX: 0,
                    }}
                    className={cn(
                      "absolute top-1.5 bottom-1.5 rounded-md border px-2 flex items-center text-[11px] font-medium cursor-pointer hover:brightness-95 transition-all",
                      job.color
                    )}
                  >
                    <span className="truncate">{job.title}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xs">
                    <p className="font-semibold">{job.title}</p>
                    <p>{String(job.start).padStart(2, "0")}:00 – {String(job.start + job.duration).padStart(2, "0")}:00</p>
                    <p className="text-muted-foreground">Crew: {job.crew}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
