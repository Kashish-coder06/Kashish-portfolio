"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function About() {
  const { personal, about, stats } = siteContent;
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Oval Avatar with Rotating Dotted Orbit Ring */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[450px] flex items-center justify-center">
              {/* Outer Ambient Glow */}
              <div className="absolute inset-4 rounded-full bg-cyan-400/20 blur-3xl" />

              {/* Rotating Dotted Orbit Ring (matching reference-ui.jpg) */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-dashed border-cyan-400/50 dark:border-cyan-500/40 animate-spinSlow pointer-events-none" />

              {/* Secondary Static Orbit Indicator */}
              <div className="absolute -inset-1 sm:-inset-2 rounded-full border border-sky-300/30 dark:border-sky-700/30 pointer-events-none" />

              {/* Little Orbiting Sparkle Dot */}
              <div className="absolute top-2 right-4 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-glow animate-pulse" />

              {/* Oval Capsule Frame */}
              <div className="relative w-full h-full rounded-[140px] sm:rounded-[160px] p-2 bg-gradient-to-b from-cyan-400 via-sky-300 to-blue-500 shadow-xl shadow-cyan-500/15 overflow-hidden">
                <div className="relative w-full h-full rounded-[135px] sm:rounded-[155px] overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-800 dark:to-slate-900 border-4 border-white dark:border-slate-800 flex items-center justify-center">
                  <Image
                    src={personal.avatarAbout}
                    alt="Kashish Kumari"
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top scale-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Paragraphs, Counters, CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
                {about.heading}{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                    {about.headingHighlight}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </span>
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {about.bioParagraph1}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {about.bioParagraph2}
            </p>

            {/* Stat Counters Grid */}
            <div
              ref={counterRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full mb-8"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-cyan-100/70 dark:border-slate-700 shadow-sm text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 mb-1">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        decimals={stat.decimals}
                        duration={2.5}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* "Hire Me" CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>{about.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
