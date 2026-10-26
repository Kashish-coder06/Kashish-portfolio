"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { siteContent } from "@/data/content";

export default function Footer() {
  const { personal, socials } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-cyan-100/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="text-center sm:text-left">
          <div className="text-lg font-heading font-extrabold text-slate-800 dark:text-white flex items-center justify-center sm:justify-start gap-1">
            <span>Portfolio</span>
            <span className="text-cyan-500 text-xl leading-none">.</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FaBehance className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back To Top Link */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
