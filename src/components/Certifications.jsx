import React from 'react';
import { Award, ShieldCheck, Check, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="space-y-6 pt-6">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 border-2 border-black flex items-center justify-center font-mono font-black text-sm text-white shadow-[2px_2px_0px_#000]">
            04
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
              Certifications &amp; Achievements
            </h2>
            <p className="font-mono text-xs text-slate-400">
              Industry credentials, competitive problem solving milestones &amp; technical verifications
            </p>
          </div>
        </div>

        <span className="font-mono text-xs px-3 py-1 bg-slate-900 border-2 border-black text-violet-300 font-bold shadow-[2px_2px_0px_#000]">
          // 3 CREDENTIALS VERIFIED
        </span>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {certifications.map((cert, idx) => {
          const isIndigo = cert.color === 'indigo';
          const isCyan = cert.color === 'cyan';
          const shadowColor = isIndigo ? '#6366f1' : isCyan ? '#06b6d4' : '#8b5cf6';
          const accentColor = isIndigo ? 'text-indigo-400' : isCyan ? 'text-cyan-400' : 'text-violet-400';

          return (
            <div 
              key={idx}
              className="bg-slate-900 border-2 border-black rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{ boxShadow: `4px 4px 0px ${shadowColor}` }}
            >
              <div className="space-y-4">
                
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-black border border-slate-700 flex items-center justify-center font-mono font-bold text-xs text-white">
                    <Award className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black border border-slate-700 text-white font-bold flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" /> {cert.date}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug font-sans">
                    {cert.title}
                  </h3>
                </div>

                {/* Key Skills */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800 font-mono text-xs">
                  {cert.skills.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-slate-300">
                      <Check className={`w-3.5 h-3.5 ${accentColor}`} />
                      <span className="text-[11px]">{s}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Verification */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">ID: {cert.credentialId}</span>
                <span className={`font-bold flex items-center gap-1 ${accentColor}`}>
                  <ShieldCheck className="w-4 h-4" /> Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
