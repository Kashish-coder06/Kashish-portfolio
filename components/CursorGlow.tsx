"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth springs for 3D lag & floating organic feeling
  const springConfigPrimary = { damping: 25, stiffness: 220, mass: 0.5 };
  const springConfigTrailing = { damping: 35, stiffness: 140, mass: 1.2 };
  const springConfigDeep = { damping: 45, stiffness: 85, mass: 2.0 };

  const primaryX = useSpring(mouseX, springConfigPrimary);
  const primaryY = useSpring(mouseY, springConfigPrimary);

  const trailingX = useSpring(mouseX, springConfigTrailing);
  const trailingY = useSpring(mouseY, springConfigTrailing);

  const deepX = useSpring(mouseX, springConfigDeep);
  const deepY = useSpring(mouseY, springConfigDeep);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable/interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
        setIsPointer(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on server side
  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-500 select-none"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Layer 1: Wide Ambient Deep 3D Blue Atmosphere */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: deepX,
          y: deepY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 560 : 480,
          height: isPointer ? 560 : 480,
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.16) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Layer 2: Trailing Fluid Cyan-Blue Volumetric Glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 320 : 260,
          height: isPointer ? 320 : 260,
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(37, 99, 235, 0.18) 50%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />

      {/* Layer 3: High-Intensity Foreground Neon Blue Core Light */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: primaryX,
          y: primaryY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 90 : 55,
          height: isPointer ? 90 : 55,
          background: isPointer
            ? "radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(6, 182, 212, 0.2) 65%, transparent 100%)"
            : "radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(37, 99, 235, 0.15) 70%, transparent 100%)",
          border: isPointer ? "1px solid rgba(56, 189, 248, 0.3)" : "none",
          boxShadow: isPointer ? "0 0 25px rgba(56, 189, 248, 0.35)" : "none",
          filter: "blur(4px)",
          transition: "width 0.2s ease, height 0.2s ease, border 0.2s ease",
        }}
      />
    </div>
  );
}
