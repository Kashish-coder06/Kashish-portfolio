"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Bot, Globe, Palette } from "lucide-react";
import { siteContent } from "@/data/content";

const categoryIcons = [
  <Code2 key="code" className="w-5 h-5 text-cyan-500" />,
  <Bot key="ai" className="w-5 h-5 text-blue-500" />,
  <Globe key="web" className="w-5 h-5 text-sky-500" />,
  <Palette key="design" className="w-5 h-5 text-teal-500" />,
];

export default function Skills() {
  const { skillsGrouped } = siteContent;

  return (
    <section id="skills" className="relative py-20 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            Technical{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Skills
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Hands-on technical capabilities spanning Python software engineering,
            data analytics, LLM pipelines, and visual graphic design.
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillsGrouped.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/85 dark:bg-slate-800/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-cyan-100/70 dark:border-slate-700 shadow-soft dark:shadow-soft-dark hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-100 dark:border-cyan-800/60">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-800 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {cat.description}
                </p>

                {/* Chips Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
