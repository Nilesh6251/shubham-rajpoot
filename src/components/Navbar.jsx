import React, { useState } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about", num: "01" },
    { label: "Skills", href: "#skills", num: "02" },
    { label: "Projects", href: "#projects", num: "03" },
    { label: "Certifications", href: "#certifications", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b-2 border-black px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Neo-Brutalist Badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-indigo-600 border-2 border-black rounded-lg shadow-[3px_3px_0px_#000000] flex items-center justify-center font-mono font-black text-white text-base group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_#06b6d4] transition-all">
            SR
          </div>
          <div>
            <div className="font-black tracking-tight text-base sm:text-lg flex items-center gap-1 text-white font-mono">
              SHUBHAM<span className="text-cyan-400">.DEV</span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 -mt-0.5 hidden sm:block">
              Web Developer &bull; C++ Programmer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links - Neo-Brutalist Pills */}
        <nav className="hidden md:flex items-center gap-2.5 font-mono text-xs">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border-2 border-black text-slate-300 hover:text-white hover:border-black hover:bg-slate-800 shadow-[2px_2px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#06b6d4] transition-all flex items-center gap-1.5 font-bold"
            >
              <span className="text-cyan-400 text-[10px]">{item.num}.</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA Controls - Neo-Brutalist Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Direct Resume Download Link */}
          <a
            href={personalInfo.resumeUrl}
            download="Shubham_Rajpoot_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-indigo-600 border-2 border-black text-white font-mono text-xs font-black shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#8b5cf6] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000] transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Quick Connect CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 border-2 border-black text-cyan-300 hover:text-white font-mono text-xs font-bold shadow-[3px_3px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#06b6d4] transition-all"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border-2 border-black text-slate-300 hover:text-white shadow-[2px_2px_0px_#000]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-3 pt-3 border-t-2 border-black flex flex-col gap-2 font-mono text-xs animate-fadeIn">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-2.5 rounded-lg bg-slate-900 border-2 border-black text-slate-200 hover:text-cyan-300 shadow-[2px_2px_0px_#000] font-bold"
            >
              <span className="text-cyan-400 mr-2">{item.num}.</span> {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalInfo.resumeUrl}
              download="Shubham_Rajpoot_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-lg bg-indigo-600 border-2 border-black text-white flex items-center justify-center gap-1.5 font-black shadow-[3px_3px_0px_#000]"
            >
              <Download className="w-3.5 h-3.5" /> DOWNLOAD RESUME
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
