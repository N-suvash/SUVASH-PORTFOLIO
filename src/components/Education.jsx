import React from 'react';
import { GraduationCap, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient-purple-blue">Journey</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Structured timeline demonstrating continuous academic commitment and technical foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 sm:left-1/2 top-4 bottom-4 w-0.5 sm:-translate-x-1/2 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-4 sm:gap-10`}
                >
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#080d24] border-2 border-purple-500 shadow-lg shadow-purple-500/40 z-20">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
                  </div>

                  {/* Content Card (Full width with left indent on mobile, half width on sm+) */}
                  <div className="ml-8 sm:ml-0 sm:w-1/2 w-[calc(100%-2rem)]">
                    <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl group">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                        <span className="text-[11px] sm:text-xs font-mono px-2.5 py-0.5 sm:py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold font-mono px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                          {item.score}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-purple-300 transition-colors leading-snug">
                        {item.degree}
                      </h3>

                      <h4 className="text-xs sm:text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="truncate">{item.institution}</span>
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed mt-2.5 sm:mt-3">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
