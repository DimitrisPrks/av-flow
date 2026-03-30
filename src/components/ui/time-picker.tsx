import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  hours: number;
  minutes: number;
  onTimeChange: (hours: number, minutes: number) => void;
  className?: string;
}

export function TimePicker({ hours, minutes, onTimeChange, className }: TimePickerProps) {
  const [mode, setMode] = useState<"hours" | "minutes">("hours");
  const clockRef = useRef<HTMLDivElement>(null);

  const getAngleFromEvent = useCallback((e: React.MouseEvent | React.PointerEvent) => {
    const rect = clockRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
    return ((angle % 360) + 360) % 360;
  }, []);

  const handleClockClick = useCallback((e: React.MouseEvent) => {
    const angle = getAngleFromEvent(e);
    if (mode === "hours") {
      const h = Math.round(angle / 30) % 12 || 12;
      const newH = hours >= 12 ? (h === 12 ? 12 : h + 12) : (h === 12 ? 0 : h);
      onTimeChange(newH, minutes);
      setTimeout(() => setMode("minutes"), 200);
    } else {
      const m = Math.round(angle / 6) % 60;
      onTimeChange(hours, m);
    }
  }, [mode, hours, minutes, onTimeChange, getAngleFromEvent]);

  const hourNumbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const minuteNumbers = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const displayHour = hours % 12 || 12;
  const isAM = hours < 12;

  const handAngle = mode === "hours"
    ? (displayHour % 12) * 30
    : minutes * 6;

  return (
    <div className={cn("flex flex-col items-center gap-3 p-4", className)}>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setMode("hours")}
          className={cn(
            "text-3xl font-bold tabular-nums transition-colors rounded px-1",
            mode === "hours" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {String(displayHour).padStart(2, "0")}
        </button>
        <span className="text-3xl font-bold text-muted-foreground">:</span>
        <button
          onClick={() => setMode("minutes")}
          className={cn(
            "text-3xl font-bold tabular-nums transition-colors rounded px-1",
            mode === "minutes" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {String(minutes).padStart(2, "0")}
        </button>
        <div className="flex flex-col ml-2 gap-0.5">
          <button
            onClick={() => onTimeChange(isAM ? hours + 12 : hours, minutes)}
            className={cn(
              "text-[10px] font-semibold px-1.5 py-0.5 rounded transition-colors",
              !isAM ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            PM
          </button>
          <button
            onClick={() => onTimeChange(!isAM ? hours - 12 : hours, minutes)}
            className={cn(
              "text-[10px] font-semibold px-1.5 py-0.5 rounded transition-colors",
              isAM ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            AM
          </button>
        </div>
      </div>

      <div
        ref={clockRef}
        onClick={handleClockClick}
        className="relative w-48 h-48 rounded-full bg-muted/50 border border-border cursor-pointer select-none"
      >
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary z-10" />

        <div
          className="absolute top-1/2 left-1/2 origin-bottom transition-transform duration-200"
          style={{
            width: 2,
            height: mode === "hours" ? 56 : 68,
            transform: `translate(-50%, -100%) rotate(${handAngle}deg)`,
            backgroundColor: "hsl(var(--primary))",
            borderRadius: 2,
          }}
        >
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20"
          />
        </div>

        {mode === "hours"
          ? hourNumbers.map((n) => {
              const angle = (n * 30 - 90) * (Math.PI / 180);
              const r = 76;
              const x = 50 + (r / 96) * 50 * Math.cos(angle);
              const y = 50 + (r / 96) * 50 * Math.sin(angle);
              const isActive = displayHour === n;
              return (
                <span
                  key={n}
                  className={cn(
                    "absolute text-xs font-medium w-7 h-7 flex items-center justify-center rounded-full transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  )}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {n}
                </span>
              );
            })
          : minuteNumbers.map((n) => {
              const angle = (n * 6 - 90) * (Math.PI / 180);
              const r = 76;
              const x = 50 + (r / 96) * 50 * Math.cos(angle);
              const y = 50 + (r / 96) * 50 * Math.sin(angle);
              const isActive = minutes === n;
              return (
                <span
                  key={n}
                  className={cn(
                    "absolute text-xs font-medium w-7 h-7 flex items-center justify-center rounded-full transition-colors",
                    isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                  )}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {String(n).padStart(2, "0")}
                </span>
              );
            })}
      </div>

      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
        Select {mode}
      </span>
    </div>
  );
}
