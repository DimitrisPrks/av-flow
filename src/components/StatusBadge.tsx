type Status = "Confirmed" | "Prepping" | "Live" | "Wrapped";

const statusStyles: Record<Status, string> = {
  Confirmed: "bg-status-confirmed-bg text-status-confirmed",
  Prepping: "bg-status-prepping-bg text-status-prepping",
  Live: "bg-status-live-bg text-status-live",
  Wrapped: "bg-status-wrapped-bg text-status-wrapped",
};

const dotStyles: Record<Status, string> = {
  Confirmed: "bg-status-confirmed",
  Prepping: "bg-status-prepping",
  Live: "bg-status-live animate-pulse",
  Wrapped: "bg-status-wrapped",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      {status}
    </span>
  );
}
