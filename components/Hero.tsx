
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, BookOpen, Music, Server, Cloud, BarChart3, Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Motion = motion as any;

const Hero: React.FC = () => {
  const doodleVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start pt-48 md:pt-56 lg:pt-0 lg:justify-center overflow-hidden">
      {/* Kinetic Doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <Motion.div custom={1} animate="animate" variants={doodleVariants} className="absolute top-[20%] left-[15%] text-indigo-200/40"><Cloud size={120} strokeWidth={0.5} /></Motion.div>
        <Motion.div custom={2} animate="animate" variants={doodleVariants} className="absolute bottom-[20%] left-[20%] text-emerald-200/40"><Server size={100} strokeWidth={0.5} /></Motion.div>
        <Motion.div custom={3} animate="animate" variants={doodleVariants} className="absolute top-[25%] right-[15%] text-amber-200/40"><BarChart3 size={110} strokeWidth={0.5} /></Motion.div>
        <Motion.div custom={4} animate="animate" variants={doodleVariants} className="absolute bottom-[25%] right-[20%] text-rose-200/40"><Terminal size={90} strokeWidth={0.5} /></Motion.div>
      </div>

      <div className="z-10 text-center space-y-10 max-w-4xl px-6 transition-transform duration-500">
        <div className="space-y-4">
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-zinc-900"
          >
            Archie <span className="italic font-light text-indigo-600">Patel.</span>
          </Motion.h1>
          
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 text-zinc-700 font-mono text-[10px] uppercase tracking-[0.4em]"
          >
            <span className="font-bold">Technology Architect</span>
            <span className="text-zinc-200">|</span>
            <span className="text-indigo-600 font-black">Business Consultant</span>
            <span className="text-zinc-200">|</span>
            <span className="font-bold">Cloud Engineer</span>
          </Motion.div>
        </div>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Architecting resilient cloud ecosystems and delivering high-impact business strategy through technical excellence.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects"
              onClick={scrollToProjects}
              className="px-10 py-5 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-xl"
            >
              Explore Works <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-6 px-8 py-5 border border-zinc-100 bg-white/50 backdrop-blur-md rounded-2xl">
              <a href={SOCIAL_LINKS.medium} target="_blank" className="text-zinc-500 hover:text-indigo-600 transition-all hover:scale-110"><BookOpen size={20} /></a>
              <a href={SOCIAL_LINKS.spotify} target="_blank" className="text-zinc-500 hover:text-emerald-600 transition-all hover:scale-110"><Music size={20} /></a>
              <div className="w-[1px] h-4 bg-zinc-200 mx-1" />
              <a href={SOCIAL_LINKS.github} target="_blank" className="text-zinc-500 hover:text-zinc-900 transition-all hover:scale-110"><Github size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-zinc-500 hover:text-zinc-900 transition-all hover:scale-110"><Linkedin size={20} /></a>
            </div>
          </div>
        </Motion.div>
      </div>

      <Motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-zinc-400">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-200 to-transparent" />
      </Motion.div>
    </section>
  );
};

export default Hero;
