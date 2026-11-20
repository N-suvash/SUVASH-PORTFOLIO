import React from 'react';
import { User, Sparkles, Terminal, Network, Shield, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Terminal,
      title: "Full Stack & Java Development",
      description: "Building production-grade web applications with modern frontend frameworks and robust Java Spring Boot backends."
    },
    {
      icon: Network,
      title: "Networking & Cloud Tech",
      description: "Deep interest in cloud architecture, distributed systems, system administration, and infrastructure automation."
    },
    {
      icon: Shield,
      title: "Security & Scalability",
      description: "Implementing secure RESTful APIs, authenticated routing, database integrity, and scalable software paradigms."
    },
    {
      icon: Cpu,
      title: "AI & Innovation",
      description: "Leveraging Natural Language Processing and speech recognition to solve real-world candidate preparation challenges."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-700/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-5 sm:right-10 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-purple-blue">Me</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Engineering solid foundations, scalable web architectures, and modern digital solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <User className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    Engineering Mindset & Ambition
                  </h3>
                  <p className="text-[11px] sm:text-xs text-purple-300 font-mono">
                    PSNA College of Engineering and Technology (2021–2025)
                  </p>
                </div>
              </div>

              <blockquote className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed border-l-2 border-purple-500 pl-3.5 sm:pl-4 py-1 italic bg-white/[0.02] rounded-r-xl">
                "{personal.about}"
              </blockquote>

              <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                With a strong academic background in Information Technology (70% CGPA) and real-world internship exposure at Novi Tech, I bridge the gap between design concepts and scalable, secure backend systems. I am passionate about learning, adapting, and delivering high-value IT engineering solutions.
              </p>
            </div>

            {/* Key Engineering Focus Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-white/10">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <div className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 truncate">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Pillars & Capabilities (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card-interactive p-4 sm:p-5 rounded-2xl border border-white/[0.08] flex items-start gap-3.5 sm:gap-4"
                >
                  <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/20 text-purple-300 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-white text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
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
