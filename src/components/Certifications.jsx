import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  CheckCircle, 
  Globe, 
  ExternalLink, 
  Eye, 
  X, 
  Download,
  Calendar,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications, languages } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-16 sm:py-24 relative overflow-hidden bg-[#030614]/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials & Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-purple-blue">Languages</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Officially verified industry credentials, internship certifications, and multilingual capabilities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg relative overflow-hidden"
            >
              <div>
                {/* Certificate Preview Thumbnail if available */}
                {cert.certificateImage && (
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full h-36 rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-white/10 cursor-pointer group/thumb"
                  >
                    <img 
                      src={cert.certificateImage} 
                      alt={cert.title} 
                      className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3 opacity-90 group-hover/thumb:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono font-semibold text-white bg-purple-600/80 px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1">
                        <Eye className="w-3 h-3" /> View Certificate
                      </span>
                      {cert.certId && (
                        <span className="text-[9px] font-mono text-slate-300 truncate max-w-[120px]">
                          {cert.certId}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-blue-600/30 border border-purple-500/30 text-purple-300 group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-purple-300">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-purple-400 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{cert.issuer}</span>
                </p>

                {cert.issueDate && (
                  <p className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    <span>{cert.issueDate}</span>
                  </p>
                )}

                <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                  {cert.description}
                </p>
              </div>

              {/* Bottom footer button / verified status */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Completion
                </span>
                {cert.certificateImage && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-purple-400 hover:text-purple-300 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-purple-400" />
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
              Spoken Languages
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col items-center justify-center text-center space-y-1.5"
              >
                <div className="font-heading font-bold text-base sm:text-lg text-white">
                  {lang.name}
                </div>
                <div className="text-[11px] sm:text-xs text-purple-300 font-mono">
                  {lang.level}
                </div>
                <div className="flex gap-1 pt-1 text-amber-400 text-xs">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < lang.stars ? 'opacity-100' : 'opacity-20'}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive High-Resolution Certificate Modal */}
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
                  Verified Certificate Document
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate High-Res Image Display */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-950 flex items-center justify-center max-h-[65vh]">
              <img 
                src={selectedCert.certificateImage} 
                alt={selectedCert.title} 
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Footer info & Download/Open actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <div className="text-xs font-mono text-slate-300">
                {selectedCert.certId && <span>ID: <strong className="text-purple-300">{selectedCert.certId}</strong></span>}
                {selectedCert.issueDate && <span className="ml-3">Issued: {selectedCert.issueDate}</span>}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.certificateImage}
                  download={`${selectedCert.title}.jpg`}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/30"
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
        </div>
      )}
    </section>
  );
}
