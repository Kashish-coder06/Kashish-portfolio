"use client";

import React from "react";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function Certifications() {
  const { certifications } = siteContent;

  return (
    <section id="certifications" className="relative py-20 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            Certifications &{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Honors
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Verified credentials in Data Analytics, Python, Artificial
            Intelligence, and Systems Engineering.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/85 dark:bg-slate-800/85 backdrop-blur-md rounded-2xl p-6 border border-cyan-100/70 dark:border-slate-700 shadow-soft dark:shadow-soft-dark hover:shadow-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-6">
                  {item.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
