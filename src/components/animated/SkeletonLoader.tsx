import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/** Basic pulse skeleton block */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-muted",
        className
      )}
    />
  );
}

/** Skeleton card matching the AnimatedCard layout */
export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-5 space-y-3", className)}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <Skeleton className="h-7 w-16" />
    </div>
  );
}

/** Skeleton table row */
export function SkeletonRow({ cols = 4, className }: SkeletonProps & { cols?: number }) {
  return (
    <div className={cn("flex gap-4 py-3", className)}>
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === 0 ? "w-32" : i === cols - 1 ? "w-16 rounded-full" : "w-24")}
        />
      ))}
    </div>
  );
}

/** Full skeleton dashboard: 3 stat cards + table rows */
export function SkeletonDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
      {/* Table */}
      <div className="rounded-xl border border-border bg-card p-5 space-y-1">
        <div className="flex gap-4 py-2 border-b border-border mb-2">
          {["w-16", "w-14", "w-12", "w-14"].map((w, i) => (
            <Skeleton key={i} className={`h-3 ${w}`} />
          ))}
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    </div>
  );
}
