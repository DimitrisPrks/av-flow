import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type VehicleStatus =
  | "Not Loaded"
  | "Loading"
  | "Loaded"
  | "Departed"
  | "On Site"
  | "Returning"
  | "Back at Base";

const statusStyles: Record<VehicleStatus, string> = {
  "Not Loaded": "bg-status-wrapped-bg text-status-wrapped",
  "Loading": "bg-status-prepping-bg text-status-prepping",
  "Loaded": "bg-status-confirmed-bg text-status-confirmed",
  "Departed": "bg-status-prepping-bg text-status-prepping",
  "On Site": "bg-status-live-bg text-status-live",
  "Returning": "bg-status-prepping-bg text-status-prepping",
  "Back at Base": "bg-secondary text-muted-foreground",
};

const dotStyles: Record<VehicleStatus, string> = {
  "Not Loaded": "bg-status-wrapped",
  "Loading": "bg-status-prepping animate-pulse",
  "Loaded": "bg-status-confirmed",
  "Departed": "bg-status-prepping animate-pulse",
  "On Site": "bg-status-live animate-pulse",
  "Returning": "bg-status-prepping animate-pulse",
  "Back at Base": "bg-muted-foreground",
};

interface VehicleStatusBadgeProps {
  status: VehicleStatus;
  showTooltip?: boolean;
}

export function VehicleStatusBadge({ status, showTooltip = true }: VehicleStatusBadgeProps) {
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
      <TooltipContent>{status}</TooltipContent>
    </Tooltip>
  );
}
