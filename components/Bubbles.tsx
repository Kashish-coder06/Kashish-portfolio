"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate deterministic bubble layout across the page height
    const generated: Bubble[] = [
      { id: 1, size: 140, x: 8, y: 12, duration: 18, delay: 0, opacity: 0.28 },
      { id: 2, size: 70, x: 22, y: 6, duration: 14, delay: 2, opacity: 0.35 },
      { id: 3, size: 110, x: 88, y: 15, duration: 20, delay: 1, opacity: 0.3 },
      { id: 4, size: 55, x: 75, y: 28, duration: 16, delay: 3, opacity: 0.4 },
      { id: 5, size: 180, x: 12, y: 38, duration: 22, delay: 0.5, opacity: 0.22 },
      { id: 6, size: 90, x: 92, y: 45, duration: 17, delay: 4, opacity: 0.32 },
      { id: 7, size: 65, x: 30, y: 55, duration: 15, delay: 1.5, opacity: 0.38 },
      { id: 8, size: 130, x: 82, y: 68, duration: 21, delay: 2.5, opacity: 0.26 },
      { id: 9, size: 85, x: 10, y: 78, duration: 19, delay: 3.5, opacity: 0.34 },
      { id: 10, size: 160, x: 85, y: 88, duration: 24, delay: 1, opacity: 0.25 },
      { id: 11, size: 60, x: 45, y: 94, duration: 16, delay: 2, opacity: 0.35 },
      { id: 12, size: 95, x: 20, y: 92, duration: 18, delay: 4.5, opacity: 0.3 },
    ];
    setBubbles(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full bg-gradient-to-tr from-cyan-400/40 via-sky-300/30 to-blue-400/20 blur-sm dark:from-cyan-600/15 dark:via-sky-800/15 dark:to-blue-900/10"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            top: `${b.y}%`,
            opacity: b.opacity,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
