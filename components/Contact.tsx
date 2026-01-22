
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Motion = motion as any;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Archie,\n\n${formData.message}\n\nBest regards,\n${formData.name}`);
    
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="bg-white border border-zinc-100 rounded-[2.5rem] sm:rounded-[5rem] p-6 sm:p-12 md:p-24 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div className="space-y-10 md:space-y-16">
            <div className="space-y-4 md:space-y-6">
              <Motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-indigo-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em]">Direct Channel</Motion.span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black tracking-tighter text-zinc-900 leading-[1.1] md:leading-none">
                Let's <br /> <span className="text-indigo-600 italic font-light">Collaborate.</span>
              </h2>
              <p className="text-zinc-500 text-lg sm:text-2xl font-light leading-relaxed max-w-sm">
                Open for high-impact roles in cloud architecture and technical consulting.
              </p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="group flex items-center gap-4 md:gap-8 p-4 md:p-6 bg-zinc-50 rounded-2xl md:rounded-3xl hover:bg-zinc-900 hover:text-white transition-all duration-500 shadow-sm">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-400 group-hover:text-zinc-500 block mb-0.5 md:mb-1"> Email </span>
                  <span className="text-base sm:text-xl md:text-2xl font-light truncate block">{SOCIAL_LINKS.email}</span>
                </div>
              </a>
              <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6 border border-zinc-50 rounded-2xl md:rounded-3xl">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-emerald-50 text-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-400 block mb-0.5 md:mb-1"> Contact </span>
                  <span className="text-base sm:text-xl md:text-2xl font-light">+91 8830115691</span>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-8 md:space-y-12 bg-white shadow-2xl p-6 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-zinc-100 mt-8 lg:mt-0" onSubmit={handleSend}>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-400">Your Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b-2 border-zinc-100 py-4 md:py-6 text-xl sm:text-3xl font-light outline-none focus:border-indigo-500 transition-all placeholder:text-zinc-100" 
                placeholder="E.g. Elon Musk" 
              />
            </div>
            <div className="space-y-2 md:space-y-4">
              <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-400">Brief Intent</label>
              <textarea 
                required
                rows={2} 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b-2 border-zinc-100 py-4 md:py-6 text-xl sm:text-3xl font-light outline-none focus:border-indigo-500 transition-all resize-none placeholder:text-zinc-100" 
                placeholder="Describe the mission..." 
              />
            </div>
            <Motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 md:py-8 bg-zinc-900 text-white rounded-[1.5rem] md:rounded-[2.5rem] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] flex items-center justify-center gap-4 md:gap-6 hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100"
            >
              Establish Connection <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Motion.button>
          </form>
        </div>
      </div>

      <footer className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 pb-12">
        <div className="space-y-4">
           <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-zinc-900">AP<span className="text-indigo-600">.</span></span>
           <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400">Archie Patel </p>
        </div>

        <div className="grid grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-4 md:space-y-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Social</span>
            <div className="flex flex-col gap-2 md:gap-4 text-sm text-zinc-400">
              <a href={SOCIAL_LINKS.github} target="_blank" className="hover:text-indigo-600 transition-colors">GitHub</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Content</span>
            <div className="flex flex-col gap-2 md:gap-4 text-sm text-zinc-400">
              <a href={SOCIAL_LINKS.medium} target="_blank" className="hover:text-indigo-600 transition-colors">Medium Blogs</a>
              <a href={SOCIAL_LINKS.spotify} target="_blank" className="hover:text-indigo-600 transition-colors">Spotify Audio</a>
            </div>
          </div>
        </div>

        <div className="text-[9px] md:text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] md:text-right">
           &copy; {new Date().getFullYear()} / RESILIENT SYSTEMS <br /> DESIGNED IN NASHIK, MH
        </div>
      </footer>
    </section>
  );
};

export default Contact;
