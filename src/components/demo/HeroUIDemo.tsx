import { useState, useEffect } from "react";
import { Briefcase, Users, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  Button,
  Chip,
  Input,
  Skeleton,
  Spinner,
} from "@heroui/react";
import { stats, jobs } from "./demoData";
import { SkeletonDashboard, NumberTicker, TypewriterText } from "@/components/animated";

const icons = [Briefcase, Users, Truck];

const chipColorMap: Record<string, "accent" | "success" | "warning" | "default"> = {
  Confirmed: "accent",
  Live: "success",
  Prepping: "warning",
  Wrapped: "default",
};

export function HeroUIDemo() {
  const [loading, setLoading] = useState(true);

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
                    <Chip color={chipColorMap[j.status]} size="sm" variant="soft">
                      {j.status}
                    </Chip>
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
            <Input placeholder="Job Title" variant="secondary" />
            <Input placeholder="Client" variant="secondary" />
            <Input placeholder="Status" variant="secondary" />
          </div>
          <Button className="mt-4" variant="primary">
            Add Job
          </Button>
        </Card>
      </motion.div>

      {/* Animated badges */}
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        {Object.entries(chipColorMap).map(([label, color], i) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Chip color={color} variant="soft">
              {label}
            </Chip>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
