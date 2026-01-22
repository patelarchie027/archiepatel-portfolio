
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Motion = motion as any;

const Navbar: React.FC = () => {
  const [active, setActive] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Core', id: 'skills' },
    { name: 'Story', id: 'experience' },
    { name: 'Impact', id: 'leadership' },
    { name: 'Labs', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionIds = links.map(l => l.id);
      for (const id of sectionIds.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 150) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center p-3 sm:p-4 md:p-6 pointer-events-none">
      <Motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center gap-0.5 sm:gap-1 p-1 rounded-full border transition-all duration-500 max-w-[95vw] ${
          isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
          : 'bg-transparent border-transparent'
        }`}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative px-2.5 sm:px-4 md:px-6 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest transition-colors duration-300 rounded-full whitespace-nowrap ${
              active === link.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-800'
            }`}
          >
            <span className="relative z-10">{link.name}</span>
            {active === link.id && (
              <Motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-zinc-900 rounded-full -z-0"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </a>
        ))}
      </Motion.div>
    </nav>
  );
};

export default Navbar;
