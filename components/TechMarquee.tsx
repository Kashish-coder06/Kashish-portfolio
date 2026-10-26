"use client";

import React from "react";
import { SiSelenium } from "react-icons/si";
import { Cpu, FileSpreadsheet } from "lucide-react";
import {
  IconPython,
  IconFastAPI,
  IconPandas,
  IconTableau,
  IconTypeScript,
  IconNextJS,
  IconCanva,
  IconPhotoshop,
  IconIllustrator,
} from "./TechIcons";
import { siteContent } from "@/data/content";

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  Python: { icon: <IconPython className="w-4 h-4" />, color: "#38bdf8" },
  Pandas: { icon: <IconPandas className="w-4 h-4" />, color: "#e11d48" },
  FastAPI: { icon: <IconFastAPI className="w-4 h-4" />, color: "#009688" },
  Tableau: { icon: <IconTableau className="w-4 h-4" />, color: "#e97627" },
  Excel: { icon: <FileSpreadsheet className="w-4 h-4" />, color: "#16a34a" },
  "Next.js": { icon: <IconNextJS className="w-4 h-4" />, color: "#0ea5e9" },
  TypeScript: { icon: <IconTypeScript className="w-4 h-4" />, color: "#3b82f6" },
  Groq: { icon: <Cpu className="w-4 h-4" />, color: "#f97316" },
  Selenium: { icon: <SiSelenium className="w-4 h-4" />, color: "#43b02a" },
  Photoshop: { icon: <IconPhotoshop className="w-4 h-4" />, color: "#31a8ff" },
  Illustrator: { icon: <IconIllustrator className="w-4 h-4" />, color: "#ff9a00" },
  Canva: { icon: <IconCanva className="w-4 h-4" />, color: "#00c4cc" },
};

export default function TechMarquee() {
  const { marqueeSkills } = siteContent;
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative w-full py-8 overflow-hidden z-10 border-y border-cyan-100/50 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm">
      {/* Edge Gradients for Soft Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F0F8FF] dark:from-[#0B1220] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F0F8FF] dark:from-[#0B1220] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-4">
        {items.map((item, index) => {
          const iconConfig = iconMap[item.name] || {
            icon: <Cpu className="w-4 h-4" />,
            color: "#06b6d4",
          };

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm border border-cyan-100/80 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-md transition-all select-none cursor-default group"
            >
              <span
                style={{ color: iconConfig.color }}
                className="transition-transform group-hover:scale-110"
              >
                {iconConfig.icon}
              </span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
