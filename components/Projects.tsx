"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { siteContent, ProjectItem } from "@/data/content";

export default function Projects() {
  const { projects, designWorks, socials } = siteContent;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            Featured{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Projects
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Software engineering applications, conversational AI bots, data
            visualization tools, and automation systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                onOpenModal={(p) => setSelectedProject(p)}
              />
            </div>
          ))}
        </div>

        {/* Design Work Strip (Behance Showcase) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-cyan-100/80 dark:border-slate-700 shadow-soft dark:shadow-soft-dark">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Visual Portfolio
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                Graphic Design Showcase
              </h3>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designWorks.map((item) => {
              const content = (
                <div className="flex flex-col h-full">
                  {/* Full image display with aspect-square and contain */}
                  <div className="relative w-full aspect-square bg-slate-950/20 dark:bg-slate-950/50 flex items-center justify-center p-2 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Clean readable card footer */}
                  <div className="p-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 flex flex-col justify-between flex-grow">
                    <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-cyan-500 transition-colors line-clamp-2">
                      {item.title}
                    </span>
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all shadow-sm hover:shadow-md flex flex-col cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all shadow-sm hover:shadow-md flex flex-col"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
