"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ProjectItem } from "@/data/content";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
    setShine({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShine({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="relative rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-cyan-100/70 dark:border-slate-700 shadow-soft dark:shadow-soft-dark hover:shadow-glow overflow-hidden flex flex-col justify-between group cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      {/* 3D Glass Shine Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          opacity: shine.opacity,
        }}
      />

      {/* Image Preview Container */}
      <div className="relative w-full h-48 bg-slate-50 dark:bg-slate-900 overflow-hidden border-b border-cyan-50 dark:border-slate-700/60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover Overlay with Eye */}
        <div className="absolute inset-0 bg-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 text-xs font-bold text-cyan-600 dark:text-cyan-400 shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            Quick Overview
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Tech Tag Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-800/40"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-medium text-slate-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/60"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Read Story</span>
              <Eye className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Demo`}
                  className="p-1.5 rounded-full text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
