
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants.tsx';

const Motion = motion as any;

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32">
      <div className="mb-24 space-y-4">
        <Motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-indigo-600 font-mono text-xs font-black uppercase tracking-[0.5em] block"
        >
          Career Path
        </Motion.span>
        <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tighter text-zinc-900 leading-tight">
          Professional <span className="text-zinc-300 italic font-light">Journey.</span>
        </h2>
      </div>

      <div className="space-y-24">
        {EXPERIENCES.map((exp, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative grid lg:grid-cols-[1fr,2fr] gap-12 group"
          >
            {/* Meta Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-lg inline-block mb-2">
                  {exp.period}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-zinc-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                  {exp.role}
                </h3>
              </div>
              
              <div className="space-y-1">
                <p className="text-xl font-bold text-zinc-700">
                  {exp.company}
                </p>
                <p className="text-base text-zinc-400 font-light flex items-center gap-2 italic">
                   {exp.location}
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="bg-white/40 border border-zinc-100 rounded-[2.5rem] p-8 md:p-12 hover:border-indigo-100 hover:shadow-xl transition-all duration-500">
               <ul className="space-y-6">
                 {exp.description.map((item, i) => (
                   <Motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed flex gap-6 items-start"
                   >
                     <span className="text-indigo-300 font-mono font-bold text-sm mt-1">/</span>
                     <span className="group-hover:text-zinc-900 transition-colors">
                       {item}
                     </span>
                   </Motion.li>
                 ))}
               </ul>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
