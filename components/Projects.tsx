
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { ArrowUpRight, Github } from 'lucide-react';

const Motion = motion as any;

const ENHANCED_PROJECTS = [
  {
    ...PROJECTS[0],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
  },
  {
    ...PROJECTS[1],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    ...PROJECTS[2],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000',
  }
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const imgX = useTransform(mouseX, [-200, 200], [5, -5]);
  const imgY = useTransform(mouseY, [-200, 200], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-700"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Motion.img 
          style={{ x: imgX, y: imgY, scale: 1.1 }}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover parallax-img"
        />
        <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-900/0 transition-colors duration-500" />
        
        <Motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur shadow-xl rounded-2xl flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500"
        >
          {project.icon}
        </Motion.div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-lg text-[9px] font-bold uppercase tracking-widest text-zinc-500">
              {t}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 text-sm font-light leading-relaxed">
          {project.description}
        </p>

        <div className="pt-4 flex items-center justify-between">
          <Motion.a 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-900"
          >
            Launch <ArrowUpRight size={14} />
          </Motion.a>
          <Github size={18} className="text-zinc-200 group-hover:text-zinc-900 transition-colors cursor-pointer" />
        </div>
      </div>
    </Motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mb-20 space-y-4">
        <Motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-indigo-600 font-mono text-[10px] font-bold uppercase tracking-[0.5em]">Case Studies</Motion.span>
        <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-900">Proof of Impact.</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ENHANCED_PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
