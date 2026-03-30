import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type JobStatus = "Quoted" | "Confirmed" | "Prepping" | "Rigged" | "Live" | "Wrapped" | "Invoiced";

const statusStyles: Record<JobStatus, string> = {
  Quoted: "bg-secondary text-secondary-foreground",
  Confirmed: "bg-status-confirmed-bg text-status-confirmed",
  Prepping: "bg-status-prepping-bg text-status-prepping",
  Rigged: "bg-status-prepping-bg text-status-prepping",
  Live: "bg-status-live-bg text-status-live",
  Wrapped: "bg-status-wrapped-bg text-status-wrapped",
  Invoiced: "bg-secondary text-muted-foreground",
};

const dotStyles: Record<JobStatus, string> = {
  Quoted: "bg-secondary-foreground",
  Confirmed: "bg-status-confirmed",
  Prepping: "bg-status-prepping",
  Rigged: "bg-status-prepping animate-pulse",
  Live: "bg-status-live animate-pulse",
  Wrapped: "bg-status-wrapped",
  Invoiced: "bg-muted-foreground",
};

const statusDescriptions: Record<JobStatus, string> = {
  Quoted: "Quote sent, awaiting confirmation",
  Confirmed: "Job is confirmed and scheduled",
  Prepping: "Crew and gear are being prepared",
  Rigged: "Equipment is being rigged on-site",
  Live: "Currently in progress on-site",
  Wrapped: "Job completed and wrapped up",
  Invoiced: "Invoice has been sent",
};

interface StatusBadgeProps {
  status: JobStatus;
  showTooltip?: boolean;
}

export function StatusBadge({ status, showTooltip = true }: StatusBadgeProps) {
  const badge = (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium cursor-default ${statusStyles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      {status}
    </span>
  );

  if (!showTooltip) return badge;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{badge}</TooltipTrigger>
      <TooltipContent>{statusDescriptions[status]}</TooltipContent>
    </Tooltip>
  );
}
