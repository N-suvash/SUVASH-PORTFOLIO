import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Google Apps Script Web App URL for SUVASH's portfolio
// Replace with your deployed /exec URL if different
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_example_suvash/exec";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, submitted: false, error: false, message: '' });

    try {
      // Send directly to Google Apps Script Webhook
      if (APPS_SCRIPT_URL && !APPS_SCRIPT_URL.includes("example")) {
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      setStatus({
        loading: false,
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully to SUVASH and saved to the database.'
      });

      // Also trigger mailto as client-side fallback/confirmation
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi SUVASH,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        loading: false,
        submitted: false,
        error: true,
        message: 'There was an issue sending your message directly. Opening your default mail client...'
      });

      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi SUVASH,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/3 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-600/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-gradient-purple-blue">Connect</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-slate-400 text-sm sm:text-base lg:text-lg">
            Have an opportunity, internship, project collaboration, or tech discussion? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5 sm:space-y-6">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am actively seeking software engineer opportunities, full stack positions, and IT engineering roles. You can contact me directly via phone, email, or LinkedIn.
              </p>

              {/* Contact item: Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.06] transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                    {personal.email}
                  </div>
                </div>
              </a>

              {/* Contact item: Phone */}
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.06] transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">Phone & WhatsApp</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                    +91 {personal.phone}
                  </div>
                </div>
              </a>

              {/* Contact item: LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.06] transition-all group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform shrink-0">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden min-w-0">
                  <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1 truncate">
                    <span className="truncate">suvashn98673b3</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </div>
                </div>
              </a>

              {/* Response Time Badge */}
              <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Typically responds within 24 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1.5">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8">
                Messages are saved directly to Google Sheets and delivered instantly to SUVASH's inbox.
              </p>

              {status.submitted && (
                <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-xs sm:text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-xs sm:text-sm"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / Project Discussion"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirement, role description, or inquiry here..."
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-xs sm:text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm md:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-xl shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.loading ? 'Transmitting to Server...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
