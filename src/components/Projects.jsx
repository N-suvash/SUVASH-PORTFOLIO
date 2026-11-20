import React, { useState } from 'react';
import {
  Sparkles,
  Github,
  CheckCircle2,
  ArrowRight,
  X
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/3 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-purple-600/15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-600/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-purple-blue">Projects</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Real-world applications showcasing applied AI, speech analytics, and enterprise backend engineering.
          </p>
        </div>

        {/* Featured Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-panel rounded-3xl border border-white/10 hover:border-purple-500/40 p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/25 relative overflow-hidden"
            >
              {/* Top card gradient banner */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-70"
                style={{ background: project.accentGlow }}
              />

              <div className="space-y-4 sm:space-y-6">

                {/* Header Badge & Category */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-950/70 border border-purple-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    0{index + 1} / Project
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-white group-hover:text-purple-200 transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2 sm:space-y-2.5 pt-1 sm:pt-2">
                  <p className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-slate-400">
                    Key Implementations & Features
                  </p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {project.keyHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-1 sm:pt-2">
                  <p className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                    Technologies & Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium text-slate-200 bg-white/[0.05] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0e173a] hover:bg-[#15204c] border border-white/10 hover:border-purple-500/40 shadow-sm transition-all text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 py-1 transition-colors"
                >
                  <span>Architecture Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Responsive Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 max-w-xl w-full relative space-y-5 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                Technical Deep-Dive
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyHighlights.map((hl, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-purple-400">▸</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200 text-center"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white text-center"
              >
                Open Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
