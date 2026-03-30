import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds for stagger effects */
  delay?: number;
}

/**
 * A card with fade-in + slight scale entrance animation.
 * Use `delay` for staggered lists.
 */
export function AnimatedCard({ children, className, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
