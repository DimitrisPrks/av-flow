import { useState } from "react";
import { format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, isWithinInterval } from "date-fns";
import { CalendarIcon, SlidersHorizontal, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewJobDialog } from "@/components/NewJobDialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type RangeMode = "week" | "month" | "year";

interface ToolbarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  rangeMode: RangeMode;
  onRangeModeChange: (mode: RangeMode) => void;
}

export function Toolbar({ selectedDate, onDateChange, rangeMode, onRangeModeChange }: ToolbarProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [newJobOpen, setNewJobOpen] = useState(false);

  const navigate = (direction: -1 | 1) => {
    const d = new Date(selectedDate);
    if (rangeMode === "week") d.setDate(d.getDate() + direction * 7);
    else if (rangeMode === "month") d.setMonth(d.getMonth() + direction);
    else d.setFullYear(d.getFullYear() + direction);
    onDateChange(d);
  };

  const rangeLabel = () => {
    if (rangeMode === "week") {
      const start = startOfWeek(selectedDate, { weekStartsOn: 1 });
      const end = endOfWeek(selectedDate, { weekStartsOn: 1 });
      return `${format(start, "d MMM")} – ${format(end, "d MMM yyyy")}`;
    }
    if (rangeMode === "month") return format(selectedDate, "MMMM yyyy");
    return format(selectedDate, "yyyy");
  };

  return (
    <div className="flex items-center justify-between border-b border-border px-6 h-14">
      {/* Left: all date controls */}
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-lg border border-border overflow-hidden">
          {(["week", "month", "year"] as RangeMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => onRangeModeChange(mode)}
              className={`px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                rangeMode === mode
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate(-1)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Previous {rangeMode}</TooltipContent>
        </Tooltip>
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs font-medium">
              <CalendarIcon className="w-3.5 h-3.5" />
              {rangeLabel()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(d) => { if (d) { onDateChange(d); setCalendarOpen(false); } }}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate(1)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Next {rangeMode}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => onDateChange(new Date())}
            >
              Today
            </Button>
          </TooltipTrigger>
          <TooltipContent>Jump to today</TooltipContent>
        </Tooltip>
      </div>

      {/* Right: filters + New Job */}
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </Button>
          </TooltipTrigger>
          <TooltipContent>Filter jobs</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" className="gap-1.5 text-xs" onClick={() => setNewJobOpen(true)}>
              <Plus className="w-3.5 h-3.5" />
              New Job
            </Button>
          </TooltipTrigger>
          <TooltipContent>Create a new job</TooltipContent>
        </Tooltip>
      </div>
      <NewJobDialog open={newJobOpen} onOpenChange={setNewJobOpen} />
    </div>
  );
}

export function getDateRange(date: Date, mode: RangeMode): { start: Date; end: Date } {
  if (mode === "week") return { start: startOfWeek(date, { weekStartsOn: 1 }), end: endOfWeek(date, { weekStartsOn: 1 }) };
  if (mode === "month") return { start: startOfMonth(date), end: endOfMonth(date) };
  return { start: startOfYear(date), end: endOfYear(date) };
}

export function isJobInRange(jobDateStr: string, range: { start: Date; end: Date }): boolean {
  // jobDateStr is like "31 Mar", "4 Apr", "20 Dec" — we assume current year context
  const currentYear = range.start.getFullYear();
  const parsed = new Date(`${jobDateStr} ${currentYear}`);
  if (isNaN(parsed.getTime())) return true; // show if unparseable
  return isWithinInterval(parsed, { start: range.start, end: range.end });
}
