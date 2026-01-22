
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Globe } from 'lucide-react';
import { LEADERSHIP } from '../constants.tsx';

const Motion = motion as any;

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-32">
      <div className="max-w-5xl space-y-20">
        <div className="space-y-4">
          <Motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-mono text-xs font-black uppercase tracking-[0.5em]"
          >
            Community & Culture
          </Motion.span>
          <h2 className="text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-900">
            Leadership <span className="text-zinc-300 italic font-light">& Impact.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-2xl">
            Driving professional growth through open source contributions, public hosting, and university-wide leadership roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP.map((item, idx) => (
            <Motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] space-y-6 hover:shadow-2xl hover:border-indigo-100 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                {item.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block">
                  {item.role}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 leading-tight">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </Motion.div>
          ))}
          
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 border-2 border-dashed border-zinc-100 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-4 group hover:border-indigo-200 transition-all bg-white/30 backdrop-blur-sm"
          >
             <div className="text-zinc-300 group-hover:text-indigo-300 transition-colors">
               <Code2 size={40} strokeWidth={1} />
             </div>
             <div>
               <h4 className="text-sm font-bold text-zinc-400">Open Source Contributor</h4>
               <p className="text-[10px] uppercase tracking-widest text-zinc-300 mt-1 font-mono">Tech Forums & Communities</p>
             </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
