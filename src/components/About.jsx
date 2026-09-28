import React from 'react';
import { Target, GraduationCap, Award, BookOpen, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 border-2 border-black flex items-center justify-center font-mono font-black text-xs text-white shadow-[2px_2px_0px_#000]">
          01
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
            Career Objective &amp; Education
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Academic background, core engineering strengths &amp; aspirations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Career Objective Card */}
        <div className="lg:col-span-7 bg-slate-900 border-2 border-black rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[4px_4px_0px_#6366f1]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" /> Career Trajectory
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-bold">
                Aspiring Software Engineer
              </span>
            </div>

            <p className="text-base sm:text-lg font-bold leading-relaxed text-slate-100 border-l-4 border-indigo-500 pl-4 py-1 italic font-sans">
              "{personalInfo.careerObjective}"
            </p>

            <p className="text-slate-300 text-sm leading-relaxed pt-1 font-sans">
              Focused on writing clean, efficient code and developing intuitive web applications. 
              My technical toolkit brings together structured procedural and object-oriented programming in <strong className="text-white">C, C++, and Python</strong> with modern frontend engineering in <strong className="text-cyan-300">HTML, CSS, and JavaScript</strong>, supported by active competitive coding practice and <strong className="text-violet-300">Generative AI certification</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800 font-mono text-xs">
            <div className="p-3 bg-slate-950 border-2 border-black shadow-[2px_2px_0px_#000]">
              <span className="text-indigo-400 font-bold block mb-1">01 / LANGUAGES</span>
              <span className="text-slate-400 text-[11px]">C, C++ and Python fundamentals.</span>
            </div>
            <div className="p-3 bg-slate-950 border-2 border-black shadow-[2px_2px_0px_#000]">
              <span className="text-cyan-400 font-bold block mb-1">02 / WEB DEV</span>
              <span className="text-slate-400 text-[11px]">Responsive UI, modern CSS &amp; JavaScript.</span>
            </div>
            <div className="p-3 bg-slate-950 border-2 border-black shadow-[2px_2px_0px_#000]">
              <span className="text-violet-400 font-bold block mb-1">03 / DSA &amp; AI</span>
              <span className="text-slate-400 text-[11px]">HackerRank certified &amp; LeetCode practice.</span>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="lg:col-span-5 bg-slate-900 border-2 border-black rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[4px_4px_0px_#06b6d4]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" /> Academic Degree
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold">
                  {education.duration}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                  CGPA: 6.0 / 10
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Information Technology Department
              </p>
              <div className="inline-block text-xs font-bold text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/30 mt-1 font-mono">
                {education.degree}
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs text-slate-300 pt-2">
              {education.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-[11px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Score: {education.status}</span>
            <a 
              href="#contact" 
              className="text-cyan-400 hover:text-white font-bold flex items-center gap-1 transition-colors"
            >
              Get In Touch <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
