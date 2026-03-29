import { CalendarIcon, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolbarProps {
  view?: "upcoming" | "past";
  onViewChange?: (view: "upcoming" | "past") => void;
}

export function Toolbar({ view = "upcoming", onViewChange }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 h-14">
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-lg border border-border overflow-hidden">
          <button
            onClick={() => onViewChange?.("upcoming")}
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "upcoming"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => onViewChange?.("past")}
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "past"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Past
          </button>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 text-xs">
          <CalendarIcon className="w-3.5 h-3.5" />
          This Week
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5 text-xs">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filters
        </Button>
      </div>
      {view === "upcoming" && (
        <Button size="sm" className="gap-1.5 text-xs">
          <Plus className="w-3.5 h-3.5" />
          New Job
        </Button>
      )}
    </div>
  );
}
