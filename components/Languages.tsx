"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { siteContent, LanguageItem } from "@/data/content";

function CircularRing({
  lang,
  inView,
  delay,
}: {
  lang: LanguageItem;
  inView: boolean;
  delay: number;
}) {
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (lang.percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
        {/* Soft Glow */}
        <div className="absolute inset-2 rounded-full bg-cyan-400/10 blur-xl pointer-events-none" />

        <svg className="w-full h-full transform -rotate-90">
          {/* Background Track Ring */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth="10"
            className="stroke-cyan-100 dark:stroke-slate-800"
            fill="transparent"
          />

          {/* Animated Fill Progress Ring */}
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth="10"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: inView ? strokeOffset : circumference,
            }}
            transition={{
              duration: 1.8,
              delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            strokeLinecap="round"
            className="stroke-cyan-500 dark:stroke-cyan-400"
            fill="transparent"
          />
        </svg>

        {/* Center Label & Counter */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-xl sm:text-2xl font-heading font-extrabold text-slate-800 dark:text-white tracking-wide">
            {lang.code}
          </span>
          <span className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">
            {inView ? (
              <CountUp
                start={0}
                end={lang.percentage}
                duration={2}
                delay={delay}
              />
            ) : (
              0
            )}
            %
          </span>
        </div>
      </div>

      {/* Language Full Name */}
      <span className="mt-3 text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200">
        {lang.name}
      </span>
    </div>
  );
}

export default function Languages() {
  const { languages } = siteContent;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section id="languages" className="relative py-24 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading matching reference UI */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            Languages{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                I Speak
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Communicating with the world in multiple languages
          </p>
        </div>

        {/* Circular Progress Rings Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 justify-center items-center p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-cyan-100/70 dark:border-slate-700 shadow-soft dark:shadow-soft-dark"
        >
          {languages.map((lang, idx) => (
            <CircularRing
              key={lang.code}
              lang={lang}
              inView={inView}
              delay={idx * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
