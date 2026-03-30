import { useState, useEffect } from "react";
import { Briefcase, Users, Truck, CalendarIcon, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format, startOfWeek, endOfWeek } from "date-fns";
import {
  Card,
  Button,
  Chip,
  Input,
  Skeleton,
  Spinner,
} from "@heroui/react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { stats, jobs } from "./demoData";
import { SkeletonDashboard, NumberTicker, TypewriterText } from "@/components/animated";

const icons = [Briefcase, Users, Truck];

const chipStyleMap: Record<string, string> = {
  Confirmed: "bg-status-confirmed-bg text-status-confirmed",
  Live: "bg-status-live-bg text-status-live",
  Prepping: "bg-status-prepping-bg text-status-prepping",
  Wrapped: "bg-status-wrapped-bg text-status-wrapped",
};

const dotStyleMap: Record<string, string> = {
  Confirmed: "bg-status-confirmed",
  Live: "bg-status-live animate-pulse",
  Prepping: "bg-status-prepping",
  Wrapped: "bg-status-wrapped",
};

export function HeroUIDemo() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rangeMode, setRangeMode] = useState<"week" | "month" | "year">("week");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = (dir: -1 | 1) => {
    const d = new Date(selectedDate);
    if (rangeMode === "week") d.setDate(d.getDate() + dir * 7);
    else if (rangeMode === "month") d.setMonth(d.getMonth() + dir);
    else d.setFullYear(d.getFullYear() + dir);
    setSelectedDate(d);
  };

  const rangeLabel = () => {
    if (rangeMode === "week") {
      const s = startOfWeek(selectedDate, { weekStartsOn: 1 });
      const e = endOfWeek(selectedDate, { weekStartsOn: 1 });
      return `${format(s, "d MMM")} – ${format(e, "d MMM yyyy")}`;
    }
    if (rangeMode === "month") return format(selectedDate, "MMMM yyyy");
    return format(selectedDate, "yyyy");
  };

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold">HeroUI v3</span>
          <span className="text-sm text-muted-foreground">Loading with skeleton…</span>
        </div>
        <SkeletonDashboard />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold">HeroUI v3</span>
        <span className="text-sm text-muted-foreground">
          Real HeroUI components + animated primitives
        </span>
      </div>

      {/* Stats with staggered entrance */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-2xl font-bold">
                  <NumberTicker value={s.value} delay={200 + i * 150} />
                </span>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Date Picker Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <Card className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Range mode toggle */}
              <div className="flex items-center rounded-lg border border-border overflow-hidden">
                {(["week", "month", "year"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setRangeMode(mode)}
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

              {/* Navigation */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => navigate(-1)}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Previous {rangeMode}</TooltipContent>
              </Tooltip>

              {/* Date display with calendar popover */}
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-muted transition-colors">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    {rangeLabel()}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(d) => { if (d) { setSelectedDate(d); setCalendarOpen(false); } }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => navigate(1)}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Next {rangeMode}</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setSelectedDate(new Date())}
                    className="px-3 py-1.5 rounded-md border border-border text-xs font-medium hover:bg-muted transition-colors"
                  >
                    Today
                  </button>
                </TooltipTrigger>
                <TooltipContent>Jump to today</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="overflow-hidden">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Job</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Client</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Date</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((j, i) => (
                <motion.tr
                  key={j.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">{j.title}</td>
                  <td className="px-4 py-3">{j.client}</td>
                  <td className="px-4 py-3">{j.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${chipStyleMap[j.status] ?? ''}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotStyleMap[j.status] ?? ''}`} />
                      {j.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </Card>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="p-5">
          <h3 className="text-base font-semibold mb-1">Quick Add Job</h3>
          <p className="text-xs text-muted-foreground mb-4">
            <TypewriterText text="This text typed on mount ✨" trigger="mount" speed={30} />
          </p>
          <p className="text-sm text-foreground mb-4 min-h-[1.5em]">
            <TypewriterText text="Hover me to see the typewriter replay effect!" trigger="hover" speed={35} />
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Job Title</label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. Gala Dinner"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Client</label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g. Acme Corp"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Status</label>
              <select className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Confirmed</option>
                <option>Prepping</option>
                <option>Live</option>
              </select>
            </div>
          </div>
          <button className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Add Job
          </button>
        </Card>
      </motion.div>

      {/* Animated badges */}
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        {Object.entries(chipStyleMap).map(([label, style], i) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${style}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotStyleMap[label] ?? ''}`} />
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
