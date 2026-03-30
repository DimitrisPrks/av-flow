import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverScaleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  /** Scale factor on hover (default 1.03) */
  scale?: number;
}

/**
 * Subtle scale + lift effect on hover. Wrap any interactive element.
 */
export function HoverScale({ children, className, scale = 1.03, ...props }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
