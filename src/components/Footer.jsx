import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050f] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06] items-start">
          
          {/* Brand & Subtitle (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo with Photo */}
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/25">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#070d24]">
                  <img 
                    src="/suvash-photo.jpg" 
                    alt="SUVASH Footer Logo" 
                    className="w-full h-full object-cover object-top scale-110" 
                  />
                </div>
              </div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                {personal.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Designed & Developed with passion. Aspiring IT Engineer and Full Stack Developer specialized in building robust software solutions, modern user experiences, and scalable cloud applications.
            </p>

            <div className="text-xs text-purple-400 font-mono">
              B.Tech Information Technology • PSNA College of Engineering
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects & Innovations</a></li>
              <li><a href="#experience" className="hover:text-purple-400 transition-colors">Internship Experience</a></li>
              <li><a href="#education" className="hover:text-purple-400 transition-colors">Education & Certifications</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact SUVASH</a></li>
            </ul>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Connect Directly
            </h4>
            
            <div className="flex items-center space-x-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-purple-400" />
              </a>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SUVASH. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Developed with passion for modern web engineering.
          </p>
        </div>

      </div>
    </footer>
  );
}
