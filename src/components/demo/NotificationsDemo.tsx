import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const alertTypes = [
  {
    type: "success" as const,
    icon: CheckCircle2,
    title: "Crew confirmed",
    message: "Mark Camilleri confirmed for BOV Conference",
    style: "bg-status-live-bg border-status-live text-status-live",
    iconColor: "text-status-live",
  },
  {
    type: "warning" as const,
    icon: AlertTriangle,
    title: "Vehicle conflict",
    message: "Mercedes Sprinter is double-booked on 31 Mar",
    style: "bg-status-prepping-bg border-status-prepping text-status-prepping",
    iconColor: "text-status-prepping",
  },
  {
    type: "error" as const,
    icon: XCircle,
    title: "Crew unavailable",
    message: "Joe Borg declined the Borg Wedding assignment",
    style: "bg-destructive/10 border-destructive text-destructive",
    iconColor: "text-destructive",
  },
  {
    type: "info" as const,
    icon: Info,
    title: "Schedule updated",
    message: "Malta Rocks Fest moved to 5 Apr, all crew notified",
    style: "bg-status-confirmed-bg border-status-confirmed text-status-confirmed",
    iconColor: "text-status-confirmed",
  },
];

export function NotificationsDemo() {
  const [visibleAlerts, setVisibleAlerts] = useState(alertTypes.map((a) => a.type));

  const dismiss = (type: string) => {
    setVisibleAlerts((prev) => prev.filter((t) => t !== type));
  };

  const resetAlerts = () => {
    setVisibleAlerts(alertTypes.map((a) => a.type));
  };

  const fireToast = (type: "success" | "warning" | "error" | "info") => {
    const alert = alertTypes.find((a) => a.type === type)!;
    if (type === "success") toast.success(alert.title, { description: alert.message });
    else if (type === "error") toast.error(alert.title, { description: alert.message });
    else if (type === "warning") toast.warning(alert.title, { description: alert.message });
    else toast.info(alert.title, { description: alert.message });
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">Notifications & Alerts</h3>
        <p className="text-xs text-muted-foreground">Dismissable inline alerts and toast notifications</p>
      </div>

      {/* Inline alerts */}
      <div className="space-y-2">
        <AnimatePresence>
          {alertTypes
            .filter((a) => visibleAlerts.includes(a.type))
            .map((alert, i) => {
              const Icon = alert.icon;
              return (
                <motion.div
                  key={alert.type}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.25 }}
                  className={cn("rounded-lg border px-4 py-3 flex items-start gap-3", alert.style)}
                >
                  <Icon className={cn("w-4 h-4 mt-0.5 shrink-0", alert.iconColor)} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-xs opacity-80 mt-0.5">{alert.message}</p>
                  </div>
                  <button
                    onClick={() => dismiss(alert.type)}
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-background/50 transition-colors shrink-0"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {/* Toast triggers */}
      <div className="flex flex-wrap gap-2">
        {alertTypes.map((alert) => (
          <button
            key={alert.type}
            onClick={() => fireToast(alert.type)}
            className={cn(
              "px-3 py-1.5 rounded-md text-xs font-medium border transition-colors hover:brightness-95",
              alert.style
            )}
          >
            Toast: {alert.type}
          </button>
        ))}
        {visibleAlerts.length < alertTypes.length && (
          <button
            onClick={resetAlerts}
            className="px-3 py-1.5 rounded-md text-xs font-medium border border-border text-muted-foreground hover:bg-muted transition-colors"
          >
            Reset alerts
          </button>
        )}
      </div>
    </div>
  );
}
