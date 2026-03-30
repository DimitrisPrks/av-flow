import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, X, Users, FileText, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, label: "Select Crew", icon: Users },
  { id: 2, label: "Review Details", icon: FileText },
  { id: 3, label: "Confirm & Send", icon: Send },
];

const crewOptions = [
  { id: 1, name: "Mark Camilleri", role: "Sound Engineer", avatar: "MC" },
  { id: 2, name: "Sarah Vella", role: "Lighting Tech", avatar: "SV" },
  { id: 3, name: "Joe Borg", role: "Stage Hand", avatar: "JB" },
  { id: 4, name: "Lisa Grech", role: "Video Tech", avatar: "LG" },
];

export function ModalWorkflowDemo() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const reset = () => {
    setStep(1);
    setSelected([]);
    setCompleted(false);
  };

  const toggle = (id: number) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  const selectedCrew = crewOptions.filter((c) => selected.includes(c.id));

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">Modal Workflow</h3>
        <p className="text-xs text-muted-foreground">Multi-step dialog with progress indicator and form validation</p>
      </div>

      <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) reset(); }}>
        <DialogTrigger asChild>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            <Users className="w-4 h-4" />
            Assign Crew to Job
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Assign Crew — BOV Conference</DialogTitle>
          </DialogHeader>

          {/* Progress steps */}
          <div className="flex items-center gap-1 mb-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isDone = completed || step > s.id;
              const isCurrent = !completed && step === s.id;
              return (
                <div key={s.id} className="flex items-center gap-1 flex-1">
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors shrink-0",
                    isDone ? "bg-status-live text-white" :
                    isCurrent ? "bg-primary text-primary-foreground" :
                    "bg-muted text-muted-foreground"
                  )}>
                    {isDone ? <Check className="w-3.5 h-3.5" /> : s.id}
                  </div>
                  <span className={cn(
                    "text-[11px] font-medium hidden sm:block",
                    isCurrent ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {s.label}
                  </span>
                  {i < steps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground mx-1 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {!completed && (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {step === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground mb-3">Select crew members to assign:</p>
                    {crewOptions.map((crew) => {
                      const isSelected = selected.includes(crew.id);
                      return (
                        <button
                          key={crew.id}
                          onClick={() => toggle(crew.id)}
                          className={cn(
                            "w-full flex items-center gap-3 p-3 rounded-lg border transition-colors text-left",
                            isSelected ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold",
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          )}>
                            {crew.avatar}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{crew.name}</p>
                            <p className="text-xs text-muted-foreground">{crew.role}</p>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-primary" />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground">Review your assignment:</p>
                    <div className="rounded-lg border border-border p-4 space-y-3">
                      <div>
                        <span className="text-xs text-muted-foreground">Job</span>
                        <p className="text-sm font-medium">BOV Conference — 31 Mar, 08:00–12:00</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Assigned Crew ({selectedCrew.length})</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {selectedCrew.map((c) => (
                            <span key={c.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted text-xs font-medium">
                              {c.avatar} {c.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Notification</span>
                        <p className="text-sm">SMS + Email will be sent to all assigned crew</p>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-4 space-y-3">
                    <p className="text-sm">Send assignment to <strong>{selectedCrew.length}</strong> crew member{selectedCrew.length !== 1 ? "s" : ""}?</p>
                    <p className="text-xs text-muted-foreground">They will receive an SMS and email notification</p>
                  </div>
                )}
              </motion.div>
            )}

            {completed && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-2"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  className="w-12 h-12 rounded-full bg-status-live-bg flex items-center justify-center mx-auto"
                >
                  <Check className="w-6 h-6 text-status-live" />
                </motion.div>
                <p className="text-sm font-semibold">Crew Assigned!</p>
                <p className="text-xs text-muted-foreground">{selectedCrew.length} member{selectedCrew.length !== 1 ? "s" : ""} notified</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          {!completed && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() => step > 1 ? setStep(step - 1) : setOpen(false)}
                className="px-4 py-2 rounded-md text-sm font-medium border border-border hover:bg-muted transition-colors"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>
              <button
                onClick={() => {
                  if (step < 3) setStep(step + 1);
                  else setCompleted(true);
                }}
                disabled={step === 1 && selected.length === 0}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  step === 1 && selected.length === 0
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {step === 3 ? "Send Assignment" : "Next"}
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
