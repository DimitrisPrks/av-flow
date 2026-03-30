import { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  /** Target value to count up to */
  value: number;
  /** Duration in ms (default 1200) */
  duration?: number;
  /** Delay before starting in ms */
  delay?: number;
  /** Format function (e.g. add commas, currency) */
  format?: (n: number) => string;
  className?: string;
}

/**
 * Animated number that counts up from 0 to the target value
 * with an eased cubic animation.
 */
export function NumberTicker({
  value,
  duration = 1200,
  delay = 0,
  format,
  className,
}: NumberTickerProps) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      started.current = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease-out
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, duration, delay]);

  return (
    <span className={className}>
      {format ? format(display) : display}
    </span>
  );
}
