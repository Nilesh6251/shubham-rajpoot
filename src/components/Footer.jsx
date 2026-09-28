import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, ShieldCheck } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const Footer = ({ playSound }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(new Intl.DateTimeFormat([], options).format(new Date()) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playSound?.(600, 'sine', 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t-2 border-black bg-slate-950 font-mono text-xs py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Information */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-base sm:text-lg font-black text-white font-mono tracking-tight">
            {personalInfo.name}
          </div>
          <p className="text-slate-400 text-xs">
            B.Tech in Information Technology ({education.duration}) &bull; {education.status}
          </p>
          <p className="text-[11px] text-cyan-400/90 font-mono">
            C++ &bull; Web Development (HTML, CSS, JS) &bull; Python &bull; Generative AI &bull; HackerRank
          </p>
        </div>

        {/* Live Clock & Back to Top */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-2 bg-slate-900 border-2 border-black text-center flex items-center gap-2 shadow-[2px_2px_0px_#000]">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-300 font-bold text-xs">{time || '00:00:00 IST'}</span>
          </div>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-2.5 bg-indigo-600 border-2 border-black text-white flex items-center justify-center shadow-[3px_3px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#06b6d4] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-slate-900 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
        <span>&copy; {new Date().getFullYear()} Shubham Rajpoot. All rights reserved.</span>
        <span className="text-slate-400 font-mono">
          C++ &bull; PYTHON &bull; WEB DEV &bull; GENERATIVE AI &bull; HACKERRANK
        </span>
      </div>
    </footer>
  );
};
