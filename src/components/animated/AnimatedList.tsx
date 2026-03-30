import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  children: React.ReactNode[];
  className?: string;
  /** Stagger delay between items in seconds */
  stagger?: number;
}

/**
 * Wraps a list of children with staggered fade-in animation.
 */
export function AnimatedList({ children, className, stagger = 0.06 }: AnimatedListProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <AnimatePresence mode="popLayout">
        {children.map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.3, delay: i * stagger, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
