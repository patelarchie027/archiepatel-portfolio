
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants.tsx';

const Motion = motion as any;

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getActiveStyles = (category: string) => {
    switch(category) {
      case 'Cloud': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'System': return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'DevOps': return 'bg-indigo-50 border-indigo-200 text-indigo-700';
      case 'Coding': return 'bg-rose-50 border-rose-200 text-rose-700';
      default: return 'bg-zinc-50 border-zinc-200 text-zinc-700';
    }
  };

  return (
    <section id="skills" className="py-32">
      <div className="max-w-5xl space-y-20">
        <div className="space-y-4">
          <Motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-mono text-xs font-black uppercase tracking-[0.5em]"
          >
            Core Competencies
          </Motion.span>
          <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-900">
            Tech <span className="text-zinc-600">Architecture.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-2xl">
            Optimized methodologies for cloud infrastructure and strategic business integration.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SKILLS.map((skill, idx) => (
            <Motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveSkill(skill.name === activeSkill ? null : skill.name)}
              className={`p-6 rounded-[2rem] border transition-all duration-300 group cursor-pointer flex flex-col items-center gap-4 ${
                activeSkill === skill.name 
                ? getActiveStyles(skill.category) + ' shadow-lg scale-[1.02]' 
                : 'border-zinc-100 bg-white hover:bg-zinc-50 hover:border-indigo-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeSkill === skill.name 
                ? 'bg-white/50' 
                : 'bg-zinc-50 text-zinc-400 group-hover:text-indigo-600'
              }`}>
                {skill.icon}
              </div>
              <div className="text-center">
                 <h3 className={`text-sm font-bold transition-colors ${
                   activeSkill === skill.name ? 'text-zinc-900' : 'text-zinc-800'
                 }`}>{skill.name}</h3>
                 <span className={`text-[9px] font-mono uppercase tracking-widest transition-colors ${
                   activeSkill === skill.name ? 'opacity-70' : 'text-zinc-400'
                 }`}>{skill.category}</span>
              </div>
            </Motion.div>
          ))}
        </div>
        
        {/* Prominent Certifications */}
        <div className="space-y-8 pt-10">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Validated Credentials</h4>
          <div className="flex flex-wrap gap-3 md:gap-4 lg:flex-nowrap lg:justify-between">
             {['RHCSA', 'AWS Solutions Architect', 'Ansible Automation', 'Google Cloud AI', 'Microsoft Copilot'].map((cert, idx) => (
               <Motion.div 
                key={cert} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="px-4 py-3 md:px-6 md:py-4 bg-white border-2 border-zinc-50 rounded-2xl flex items-center gap-3 md:gap-4 shadow-sm hover:border-indigo-100 hover:shadow-md transition-all cursor-default whitespace-nowrap flex-grow lg:flex-grow-0"
               >
                  <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm lg:text-base font-bold text-zinc-700 tracking-tight">{cert}</span>
               </Motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
