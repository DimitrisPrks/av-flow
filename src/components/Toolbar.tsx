import { CalendarIcon, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Toolbar() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 h-14">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1.5 text-xs">
          <CalendarIcon className="w-3.5 h-3.5" />
          This Week
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5 text-xs">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Filters
        </Button>
      </div>
      <Button size="sm" className="gap-1.5 text-xs">
        <Plus className="w-3.5 h-3.5" />
        New Job
      </Button>
    </div>
  );
}
