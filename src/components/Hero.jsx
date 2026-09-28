import React from 'react';
import { ArrowRight, Download, MapPin, Mail, Phone, Cpu, ExternalLink, Sparkles, Code2, Bot, Award, CheckCircle } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-4 sm:pt-8 pb-8 sm:pb-12">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Hero Details */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border-2 border-black shadow-[3px_3px_0px_#3b82f6]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span className="text-xs font-mono font-bold text-cyan-300 tracking-wide uppercase">
              ⚡ Available for Web Developer &amp; C++ Roles
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
              SHUBHAM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400">
                RAJPOOT
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-semibold font-mono flex items-center gap-2 flex-wrap">
              <span className="text-cyan-400">Web Developer</span>
              <span className="text-slate-500">•</span>
              <span className="text-indigo-400">C++ Programmer</span>
              <span className="text-slate-500">•</span>
              <span className="text-violet-400">Python &amp; Generative AI</span>
            </p>
          </div>

          {/* Core Tech Stack Badges (Neo-Brutalist Pill Tags) */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="px-3 py-1.5 bg-slate-900 border-2 border-black text-cyan-300 font-bold shadow-[3px_3px_0px_#06b6d4] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Web Dev (HTML, CSS, JS)
            </span>
            <span className="px-3 py-1.5 bg-slate-900 border-2 border-black text-indigo-300 font-bold shadow-[3px_3px_0px_#6366f1] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" /> C, C++ &amp; Python
            </span>
            <span className="px-3 py-1.5 bg-slate-900 border-2 border-black text-violet-300 font-bold shadow-[3px_3px_0px_#8b5cf6] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform">
              <Bot className="w-3.5 h-3.5 text-violet-400" /> Generative AI Certified
            </span>
            <span className="px-3 py-1.5 bg-slate-900 border-2 border-black text-amber-300 font-bold shadow-[3px_3px_0px_#f59e0b] flex items-center gap-1.5 hover:-translate-y-0.5 transition-transform">
              <Award className="w-3.5 h-3.5 text-amber-400" /> HackerRank &amp; LeetCode
            </span>
          </div>

          {/* Genuine Narrative Bio (Exact Resume Career Objective) */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans border-l-4 border-cyan-400 pl-4 py-1.5 bg-slate-900/60 rounded-r-xl">
            Motivated and enthusiastic <strong className="text-white font-semibold">B.Tech student</strong> with strong fundamentals in 
            <strong class="text-cyan-300 font-semibold"> programming languages (C, C++, Python)</strong> and 
            <strong class="text-indigo-300 font-semibold"> web development (HTML, CSS, JavaScript)</strong>. 
            Seeking opportunities to enhance technical skills, gain practical experience, and contribute to innovative projects.
          </p>

          {/* Quick Direct Contacts */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-300">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.email}</span>
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Madhya Pradesh, India</span>
            </span>
          </div>

          {/* Neo-Brutalist Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 font-mono">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 border-2 border-black text-white font-bold text-sm shadow-[4px_4px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#3b82f6] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000000] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Shubham_Rajpoot_Resume.pdf"
              className="px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-black text-cyan-300 font-bold text-sm shadow-[4px_4px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#06b6d4] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000000] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl bg-slate-900 border-2 border-black text-slate-200 font-bold text-sm shadow-[4px_4px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#8b5cf6] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000000] transition-all"
            >
              <span>CONTACT ME</span>
            </a>
          </div>

          {/* Quick Metrics Bar (Neo-Brutalist Grid) */}
          <div className="grid grid-cols-3 gap-3 pt-3 font-mono">
            <div className="p-3 bg-slate-900 border-2 border-black shadow-[3px_3px_0px_#000000] text-center">
              <div className="text-base sm:text-lg font-black text-cyan-400">B.Tech IT</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">CGPA: 6.0 / 10</div>
            </div>
            <div className="p-3 bg-slate-900 border-2 border-black shadow-[3px_3px_0px_#000000] text-center">
              <div className="text-base sm:text-lg font-black text-indigo-400">3x Certs</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">GenAI &bull; HackerRank</div>
            </div>
            <div className="p-3 bg-slate-900 border-2 border-black shadow-[3px_3px_0px_#000000] text-center">
              <div className="text-base sm:text-lg font-black text-violet-400">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold">Hands-on Practice</div>
            </div>
          </div>

        </div>

        {/* Right Hero: High-Impact Neo-Brutalist Portrait Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-[340px] sm:max-w-[370px]">
            
            {/* Neo-Brutalist Frame Container */}
            <div className="bg-slate-900 border-3 border-black p-3.5 shadow-[8px_8px_0px_#3b82f6] rounded-2xl">
              
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border-2 border-black bg-slate-950">
                <img 
                  src={profileImg} 
                  alt="Shubham Rajpoot" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/profile.png';
                  }}
                />

                {/* Neo-Brutalist Name Strip at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 bg-black/90 py-2.5 px-3 border-t-2 border-black flex items-center justify-between">
                  <div>
                    <div className="font-mono text-xs font-black text-cyan-300 tracking-wider">
                      SHUBHAM RAJPOOT
                    </div>
                    <div className="font-mono text-[10px] text-slate-400">
                      B.Tech IT &bull; CGPA 6.0
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Neo-Brutalist Direct Buttons on Photo Card */}
              <div className="mt-3.5 grid grid-cols-2 gap-2.5 font-mono text-xs">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-950 border-2 border-black text-cyan-300 font-bold shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#06b6d4] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000000] transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GITHUB</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-indigo-600 border-2 border-black text-white font-bold shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#8b5cf6] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000000] transition-all"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
