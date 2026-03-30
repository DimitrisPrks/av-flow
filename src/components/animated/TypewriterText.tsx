import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  /** The full text to reveal */
  text: string;
  /** Typing speed in ms per character (default 40) */
  speed?: number;
  /** Start on mount or on hover */
  trigger?: "mount" | "hover";
  /** Optional cursor character */
  cursor?: string;
  className?: string;
}

/**
 * Typewriter effect — reveals text character by character.
 * Use trigger="hover" for hover-activated typing on text boxes.
 */
export function TypewriterText({
  text,
  speed = 40,
  trigger = "mount",
  cursor = "▌",
  className,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState(trigger === "mount" ? "" : text);
  const [isTyping, setIsTyping] = useState(trigger === "mount");
  const [showCursor, setShowCursor] = useState(trigger === "mount");
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const startTyping = () => {
    setDisplayed("");
    setIsTyping(true);
    setShowCursor(true);
  };

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(intervalRef.current);
        setIsTyping(false);
        // Hide cursor after a beat
        setTimeout(() => setShowCursor(false), 600);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [isTyping, text, speed]);

  const handlers =
    trigger === "hover"
      ? {
          onMouseEnter: startTyping,
        }
      : {};

  return (
    <span className={cn("inline-block", className)} {...handlers}>
      {displayed}
      {showCursor && (
        <span className="animate-pulse text-primary/60">{cursor}</span>
      )}
    </span>
  );
}
