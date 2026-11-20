import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle, Sparkles, Building2, Eye, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden bg-[#030614]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Internship <span className="text-gradient-purple-blue">Experience</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Hands-on professional work developing real-time web applications and robust database architectures.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-blue-600/30 border border-purple-500/30 text-purple-300 shrink-0">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                      {item.role}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-purple-400 mt-0.5">
                      {item.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 sm:gap-2 text-xs font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="pt-5 sm:pt-6 space-y-3">
                <p className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-slate-400">
                  Key Responsibilities & Contributions
                </p>
                <div className="space-y-2.5 sm:space-y-3">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-1" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied & Certificate Link */}
              <div className="pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5">
                    Technologies Utilized
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono text-purple-300 bg-purple-950/50 border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {item.certificateImage && (
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 transition-all shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5 text-purple-300" />
                    <span>View NoviTech Certificate</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Internship Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="glass-panel p-4 sm:p-6 rounded-3xl border border-purple-500/40 max-w-3xl w-full relative space-y-4 my-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-widest">
                  Internship Certificate
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  {selectedCert.company} - {selectedCert.role}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950 flex items-center justify-center max-h-[65vh]">
              <img 
                src={selectedCert.certificateImage} 
                alt={`${selectedCert.company} Certificate`} 
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <a
                href={selectedCert.certificateImage}
                download="NoviTech_Internship_Certificate.jpg"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1.5 shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Image</span>
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
