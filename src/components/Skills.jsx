import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2,
  Globe,
  Database,
  Cpu,
  Wrench,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];

  const displayedSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden bg-[#030614]/80">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-purple-blue">Expertise</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Structured skillsets spanning systems programming, modern front-end, enterprise databases, and CS fundamentals.
          </p>

          {/* Responsive Filter Tabs - Horizontal scrollable on small screens */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-[#0d1533]/80 text-slate-300 border border-white/10 hover:border-purple-500/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedSkills.map((categoryGroup, index) => {
            const Icon = iconMap[categoryGroup.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-panel p-5 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-blue-600/30 border border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                        {categoryGroup.items.length} Core Competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5 sm:mb-6">
                    {categoryGroup.description}
                  </p>

                  {/* Skills Badges / Progress bars */}
                  <div className="space-y-3.5 sm:space-y-4">
                    {categoryGroup.items.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1 sm:space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-200 font-heading font-semibold flex items-center gap-1.5 sm:gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-purple-300 border border-white/[0.08]">
                            {skill.tag}
                          </span>
                        </div>
                        {/* Progress bar line */}
                        <div className="w-full h-1.5 rounded-full bg-[#111a3d] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer tag */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span className="font-mono text-purple-400">Production Ready</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
