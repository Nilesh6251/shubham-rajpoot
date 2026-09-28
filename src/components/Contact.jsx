import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact = ({ playSound, onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text, type) => {
    playSound?.(700, 'sine', 0.08);
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      }
      onShowToast(`Copied to clipboard: ${text}`);
    });
  };

  const handleTemplate = (title, text) => {
    playSound?.(600, 'sine', 0.05);
    setSubject(title);
    setMessage(text);
    onShowToast(`Applied template: ${title}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    onShowToast(`Message received from ${senderName}! Thank you for reaching out.`);

    setTimeout(() => {
      setSenderName('');
      setSenderEmail('');
      setSubject('');
      setMessage('');
      setIsSent(false);
    }, 4500);
  };

  return (
    <section id="contact" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-indigo-600 border-2 border-black flex items-center justify-center font-mono font-black text-sm text-white shadow-[2px_2px_0px_#000]">
          05
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Quick Connect & Transmission
          </h2>
          <p className="font-mono text-xs text-slate-400">
            Available for Data Analyst, IT, and software development opportunities
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Channels */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="glass-card rounded-2xl p-5 group flex items-start gap-4 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.25)]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                Primary Email
              </span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors truncate block"
              >
                {personalInfo.email}
              </a>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="font-mono text-xs text-indigo-400 hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied to Clipboard!' : 'Click to Copy Email'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card-cyan rounded-2xl p-5 group flex items-start gap-4 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                Phone / WhatsApp
              </span>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors block"
              >
                {personalInfo.phone}
              </a>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="font-mono text-xs text-cyan-400 hover:text-white flex items-center gap-1 font-semibold transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied to Clipboard!' : 'Click to Copy Phone'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card-violet rounded-2xl p-5 group flex items-start gap-4 transition-all">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-slate-400 uppercase font-semibold block mb-0.5">
                Location
              </span>
              <p className="text-sm sm:text-base font-bold text-white font-sans">
                {personalInfo.location}
              </p>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Open to on-site, hybrid, and remote roles
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound(600, 'sine', 0.05)}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 flex items-center justify-center gap-2 font-mono text-xs font-semibold shadow-sm transition-all"
            >
              <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playSound(600, 'sine', 0.05)}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-slate-200 hover:text-indigo-300 hover:border-indigo-400/50 flex items-center justify-center gap-2 font-mono text-xs font-semibold shadow-sm transition-all"
            >
              <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 relative">
          
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" /> Direct Transmission
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
              QUICK DISPATCH
            </span>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mb-4">
            <span className="block font-mono text-[11px] text-slate-400 uppercase font-semibold mb-2">
              Quick Topic Presets:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => handleTemplate(
                  "Web Developer Opportunity",
                  "Hi Shubham,\n\nWe reviewed your portfolio and background in Web Development (HTML, CSS, JavaScript) and C++. We have an open role and would like to discuss it with you."
                )}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 text-[11px]"
              >
                + Web Developer Role
              </button>

              <button
                type="button"
                onClick={() => handleTemplate(
                  "C++ Programming Project",
                  "Hi Shubham,\n\nI was impressed with your ATM Machine Simulator and structured C++ logic. Let's connect!"
                )}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 hover:border-indigo-400 text-slate-300 text-[11px]"
              >
                + C++ Project
              </button>

              <button
                type="button"
                onClick={() => handleTemplate(
                  "Generative AI Collaboration",
                  "Hi Shubham,\n\nWe noticed your Generative AI certification and problem-solving track record. Let's explore collaborating on a project."
                )}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 hover:border-violet-400 text-slate-300 text-[11px]"
              >
                + Generative AI Discussion
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">YOUR EMAIL *</label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="rahul@company.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">SUBJECT *</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Web Development / C++ Opportunity"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">MESSAGE *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Shubham, I'd like to discuss..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="btn-indigo-glow px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-xs sm:text-sm"
              >
                <Send className="w-4 h-4" />
                <span>TRANSMIT MESSAGE</span>
              </button>

              {isSent && (
                <span className="text-cyan-400 font-bold text-xs">
                  ✓ Message transmitted successfully!
                </span>
              )}
            </div>

          </form>

        </div>

      </div>

    </section>
  );
};
