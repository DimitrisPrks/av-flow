import { type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  heading: string;
  subtext: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon: Icon, heading, subtext, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-muted-foreground" />
      </div>
      <h3 className="text-sm font-semibold text-foreground mb-1">{heading}</h3>
      <p className="text-xs text-muted-foreground max-w-xs">{subtext}</p>
      {actionLabel && onAction && (
        <Button size="sm" className="mt-4" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
