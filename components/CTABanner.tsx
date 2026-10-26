"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function CTABanner() {
  const { contact } = siteContent;

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 shadow-xl shadow-cyan-600/20 text-white"
        >
          {/* Ambient Background Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-cyan-300/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-wide uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open For New Opportunities
              </span>
              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight">
                {contact.ctaBannerTitle}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-cyan-100 leading-relaxed">
                {contact.ctaBannerSubtitle}
              </p>
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-slate-900 bg-white hover:bg-cyan-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-cyan-600" />
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
