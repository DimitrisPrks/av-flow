import { motion } from "framer-motion";
import { Phone, Mail, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const crewMembers = [
  { id: 1, name: "Mark Camilleri", role: "Sound Engineer", avatar: "MC", available: true, rating: 4.8, skills: ["PA Systems", "Mixing", "Wireless"], phone: "+356 9912 3456" },
  { id: 2, name: "Sarah Vella", role: "Lighting Tech", avatar: "SV", available: true, rating: 4.9, skills: ["LED", "Moving Heads", "Programming"], phone: "+356 9987 6543" },
  { id: 3, name: "Joe Borg", role: "Stage Hand", avatar: "JB", available: false, rating: 4.5, skills: ["Rigging", "Setup", "Carpentry"], phone: "+356 7923 4567" },
  { id: 4, name: "Lisa Grech", role: "Video Tech", avatar: "LG", available: true, rating: 4.7, skills: ["Cameras", "Streaming", "Screens"], phone: "+356 9945 6789" },
];

export function CrewCardsDemo() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-base font-semibold">Crew Assignment Cards</h3>
        <p className="text-xs text-muted-foreground">Drag-ready cards with availability, skills, and contact info</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {crewMembers.map((crew, i) => (
          <motion.div
            key={crew.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            whileHover={{ y: -2, boxShadow: "0 8px 25px -8px hsl(var(--primary) / 0.15)" }}
            className="rounded-xl border border-border bg-card p-4 cursor-grab active:cursor-grabbing transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0",
                crew.available ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {crew.avatar}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm truncate">{crew.name}</span>
                  {/* Availability dot */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className={cn(
                        "w-2 h-2 rounded-full shrink-0",
                        crew.available ? "bg-status-live animate-pulse" : "bg-status-wrapped"
                      )} />
                    </TooltipTrigger>
                    <TooltipContent>{crew.available ? "Available" : "Unavailable"}</TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-xs text-muted-foreground">{crew.role}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-[11px] text-muted-foreground">{crew.rating}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>{crew.phone}</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Send email</TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {crew.skills.map((skill) => (
                <span key={skill} className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
