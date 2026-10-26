"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent, ExperienceItem } from "@/data/content";

export default function Experience() {
  const { experience, personal, socials } = siteContent;

  const leftCards = experience.items.filter(
    (item) => item.position === "left-top" || item.position === "left-bottom"
  );
  const rightCards = experience.items.filter(
    (item) => item.position === "right-top" || item.position === "right-bottom"
  );

  const renderCard = (item: ExperienceItem) => {
    const isEducation = item.role.includes("BS Information");

    return (
      <div
        key={item.id}
        className="w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-cyan-100/70 dark:border-slate-700 shadow-soft dark:shadow-soft-dark hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
              {item.role}
            </h3>
            {/* Organization highlighted in cyan (as in reference UI) */}
            <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {item.company}
            </p>
          </div>
          <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
            {isEducation ? (
              <GraduationCap className="w-4 h-4" />
            ) : (
              <Briefcase className="w-4 h-4" />
            )}
          </div>
        </div>

        <span className="inline-block text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-2">
          {item.duration}
        </span>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <section id="experience" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            {experience.heading}{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                {experience.headingHighlight}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {experience.subtitle}
          </p>
        </div>

        {/* 4 Cards Around Center Character (Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column (2 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            {leftCards.map((item) => renderCard(item))}
          </div>

          {/* Center Column: Professional Character Pose + Experience Badge */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 my-6 lg:my-0">
            <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-sky-300 to-blue-500 shadow-glow-lg flex items-center justify-center">
              {/* Soft Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-xl pointer-events-none" />

              {/* Character Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800">
                <Image
                  src={personal.avatarExperience}
                  alt="Kashish Kumari"
                  fill
                  sizes="260px"
                  className="object-cover object-top scale-110"
                />
              </div>

              {/* Badge Below Avatar (Matching Reference) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 shadow-md border border-cyan-200 dark:border-cyan-800 flex items-center gap-1.5 whitespace-nowrap z-20">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                  {experience.badgeCenter}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (2 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            {rightCards.map((item) => renderCard(item))}
          </div>
        </div>

        {/* Sub-row: Additional Technical Training & Diplomas */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-cyan-100/70 dark:border-slate-700 shadow-sm mb-10">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 text-center sm:text-left">
            Additional Technical Training & Certifications
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {experience.additionalEducation.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800"
              >
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                  {edu.year}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-white leading-snug">
                  {edu.program}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-semibold text-sm text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-800 border-2 border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 shadow-sm hover:shadow-md transition-all"
          >
            <Linkedin className="w-4 h-4 text-blue-600" />
            <span>View Full Profile on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
