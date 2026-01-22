
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Leadership from './components/Leadership.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';

const Motion = motion as any;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  // Dynamic background colors for the whole page
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['#ffffff', '#f8fafc', '#fffbeb', '#f0f9ff', '#fdf2f8']
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = bgColor.on('change', (latest) => {
      document.body.style.backgroundColor = latest;
    });
    return () => unsubscribe();
  }, [bgColor]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <Motion.div
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-12 h-12 border-2 border-indigo-500 border-t-transparent rounded-full"
            />
          </Motion.div>
        ) : (
          <Motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main className="max-w-7xl mx-auto px-6">
              <Hero />
              <Skills />
              <Experience />
              <Leadership />
              <Projects />
              <Contact />
            </main>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
