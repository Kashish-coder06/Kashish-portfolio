"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroScene3D from "./HeroScene3D";
import { siteContent } from "@/data/content";

export default function Hero() {
  const { personal, socials, hero } = siteContent;

  const typeSequence = hero.typingRoles.flatMap((role) => [role, 2200]);

  return (
    <section
      id="home"
      className="relative min-h-[620px] lg:min-h-[720px] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading, Typing, Subtitle, CTAs, Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Main Heading with Dynamic Typing & Accent Underline */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {hero.greeting}{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  <TypeAnimation
                    sequence={typeSequence}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
                {/* Reference UI Accent Underline Bar */}
                <span className="absolute left-0 -bottom-1.5 w-full h-[5px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-80" />
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed font-normal">
            {personal.subHeadline}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            {/* CTA 1: Filled Gradient (Download Resume) */}
            <a
              href={personal.cvPath}
              download="Kashish_Kumari_CV.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>{hero.ctaPrimary}</span>
            </a>

            {/* CTA 2: Outlined Pill (Contact Me) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-cyan-600 dark:text-cyan-400 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-2 border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:border-cyan-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>{hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mr-2">
              Connect:
            </span>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 shadow-sm border border-slate-200/60 dark:border-slate-700 hover:scale-110 transition-transform"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 shadow-sm border border-slate-200/60 dark:border-slate-700 hover:scale-110 transition-transform"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance Portfolio"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 shadow-sm border border-slate-200/60 dark:border-slate-700 hover:scale-110 transition-transform"
            >
              <FaBehance className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email Kashish"
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 shadow-sm border border-slate-200/60 dark:border-slate-700 hover:scale-110 transition-transform"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Circular 3D Avatar Frame with Orbiting Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center z-10"
        >
          <HeroScene3D avatarSrc={personal.avatarHero} />
        </motion.div>
      </div>
    </section>
  );
}
