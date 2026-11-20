import React from 'react';
import { 
  ArrowUpRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Terminal, 
  Cloud,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Dynamic Background Image Layer with atmospheric lighting & dark gradient blend */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Softly blended portrait in the background */}
        <div 
          className="absolute inset-0 bg-cover bg-center lg:bg-right opacity-15 mix-blend-screen filter saturate-150 contrast-125"
          style={{ backgroundImage: `url('/suvash-photo.jpg')` }}
        />
        {/* Dark radial and linear gradients to blend the photo seamlessly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040816]/70 via-[#040816]/90 to-[#040816]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#040816]/80 to-transparent" />
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 sm:right-10 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 sm:left-10 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-indigo-600/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 sm:opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Intro & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 backdrop-blur-md shadow-sm max-w-full">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wide truncate">
                Available for Engineering Roles & Internships
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="text-gradient-purple-blue">
                  {personal.name}
                </span>
              </h1>
              <p className="font-heading text-base sm:text-xl lg:text-2xl font-semibold text-slate-300 leading-snug">
                Aspiring IT Engineer <span className="text-purple-400">|</span> Full Stack Developer <span className="text-blue-400">|</span> Java Developer
              </p>
            </div>

            {/* Hero Subtitle / Intro */}
            <p className="text-slate-300/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              "{personal.subtitle}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View My Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personal.resumeUrl}
                download="SUVASH_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-[#0e173a]/80 hover:bg-[#16214f] border border-white/10 hover:border-purple-500/40 shadow-lg hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons & Direct Contact Links */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-[#0e173a]/80 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077b5]" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-[#0e173a]/80 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all hover:scale-110 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 sm:p-3 rounded-xl bg-[#0e173a]/80 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all hover:scale-110 shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  className="p-2.5 sm:p-3 rounded-xl bg-[#0e173a]/80 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all hover:scale-110 shadow-sm"
                  aria-label="Call Direct"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </a>
              </div>

              <div className="hidden sm:block h-6 w-px bg-white/10" />

              <div className="text-[11px] sm:text-xs text-slate-400 font-mono flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0"></span>
                <span>B.Tech IT • 2021–2025 • PSNA CET</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Glowing Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Outer Decorative Rotating Rings & Glow */}
              <div className="absolute inset-1 rounded-3xl border border-purple-500/20 pointer-events-none" />
              <div className="absolute -inset-3 rounded-3xl border border-dashed border-blue-500/25 pointer-events-none" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-purple-600/35 via-blue-600/30 to-cyan-500/25 blur-3xl -z-10" />

              {/* Main Profile Portrait Container */}
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-purple-600/20 shadow-2xl backdrop-blur-xl">
                <div className="w-full h-full rounded-[22px] bg-[#070c22] overflow-hidden relative group border border-white/15">
                  
                  {/* Actual Suvash Photo */}
                  <img
                    src="/suvash-photo.jpg"
                    alt="SUVASH - Aspiring IT Engineer & Full Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/30 to-transparent" />

                  {/* Top card tag */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono text-white bg-[#060a1d]/85 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      suvash.dev
                    </span>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 backdrop-blur-md border border-purple-500/40 px-2.5 py-1 rounded-full shadow-md">
                      Full Stack
                    </span>
                  </div>

                  {/* Bottom Portrait Info Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-[#060a1d]/85 backdrop-blur-xl border border-white/15 z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-extrabold text-base text-white">
                          SUVASH N
                        </h3>
                        <p className="text-[11px] text-purple-300 font-mono">
                          IT Engineer • Java & Full Stack
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-lg bg-purple-600/25 border border-purple-500/40 text-purple-200 text-xs font-mono font-bold">
                        2025
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Glass Badges */}
              <div className="hidden sm:flex absolute -top-3 -left-5 px-3.5 py-2 rounded-2xl glass-panel border-purple-500/30 text-white shadow-xl items-center gap-2.5 animate-float-slow z-20">
                <div className="p-1.5 rounded-xl bg-purple-600/25 text-purple-300 border border-purple-500/30">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Backend Mastery</div>
                  <div className="text-xs font-bold text-white">Java Spring Boot</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-3 -right-5 px-3.5 py-2 rounded-2xl glass-panel border-blue-500/30 text-white shadow-xl items-center gap-2.5 animate-float-reverse z-20">
                <div className="p-1.5 rounded-xl bg-blue-600/25 text-blue-300 border border-blue-500/30">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Cloud & Systems</div>
                  <div className="text-xs font-bold text-white">Full Stack Intern</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Marquee Ticker: Skills & Tech Stacks */}
        <div className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-white/[0.07]">
          <p className="text-center text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-mono mb-4 sm:mb-6">
            Core Technologies & Engineering Capabilities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 opacity-90">
            {['Java', 'Spring Boot', 'React.js', 'Python AI / NLP', 'MySQL', 'MongoDB', 'JavaScript', 'Node.js', 'Cloud & Systems', 'DSA'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium text-slate-300 bg-white/[0.03] border border-white/[0.08] hover:border-purple-500/40 hover:text-white transition-colors"
              >
                ✦ {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
