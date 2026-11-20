import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-[#040816]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'py-3.5 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with Profile Image */}
          <a
            href="#"
            className="group flex items-center space-x-2.5 text-white no-underline focus:outline-none"
            aria-label="SUVASH Portfolio Homepage"
          >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#070d24] relative">
                <img 
                  src="/suvash-photo.jpg" 
                  alt="SUVASH Logo" 
                  className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-300" 
                />
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                SUVASH
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono">
                IT Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-[#0c1433]/70 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white shadow-md shadow-purple-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={portfolioData.personal.resumeUrl}
              download="SUVASH_Resume.pdf"
              className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-1.5">
            <a
              href={portfolioData.personal.resumeUrl}
              download="SUVASH_Resume.pdf"
              className="p-2 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 sm:hidden"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[57px] sm:top-[65px] z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-h-[calc(100vh-70px)] overflow-y-auto px-4 py-5 bg-[#090f28]/95 border-b border-purple-500/20 shadow-2xl backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1.5 max-w-lg mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.08] hover:text-purple-300 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="SUVASH_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-purple-600/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
