import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { 
  ArrowRight, Github, Linkedin, BookOpen, Music, Server, Cloud, 
  BarChart3, Terminal, Code, Database, Settings, Globe, Shield, 
  Activity, Users, Heart, Anchor, Mic2, Users2, Code2, ArrowUpRight, Mail, Phone 
} from 'lucide-react';

const Motion = motion as any;

// --- CONSTANTS ---
const SOCIAL_LINKS = {
  github: "https://github.com/patelarchie027",
  linkedin: "https://www.linkedin.com/in/archie-patel-7752762a7",
  medium: "https://medium.com/@softcodedsoul",
  spotify: "https://open.spotify.com/show/1Ii9HrzcjKnkVi6Euy4Vf1",
  email: "codebyarchie@gmail.com"
};

const SKILLS = [
  { name: 'AWS (EC2, S3, IAM)', category: 'Cloud', icon: <Cloud size={20} /> },
  { name: 'Linux (RHEL, Ubuntu)', category: 'System', icon: <Terminal size={20} /> },
  { name: 'Ansible & Bash', category: 'DevOps', icon: <Settings size={20} /> },
  { name: 'Java & Python', category: 'Coding', icon: <Code size={20} /> },
  { name: 'MySQL', category: 'Coding', icon: <Database size={20} /> },
  { name: 'CloudWatch', category: 'Cloud', icon: <Activity size={20} /> },
  { name: 'Git / DevOps', category: 'DevOps', icon: <Server size={20} /> },
];

const EXPERIENCES = [
  {
    company: 'InnovationsHub Services Pvt. Ltd.',
    role: 'Trainee Business Consultant',
    period: 'Current',
    location: 'Nashik, Maharashtra',
    description: [
      'Developing enterprise software solutions and automating critical internal workflows.',
      'Collaborating with cross-functional teams to identify bottlenecks and improve efficiency.',
      'Integrating modern tech stacks to drive business impact.'
    ]
  },
  {
    company: 'Tecsys Solutions Pvt. Ltd.',
    role: 'Linux & DevOps Intern',
    period: 'Completed',
    location: 'Nashik, Maharashtra',
    description: [
      'Managed RHEL servers and automated deployments using Ansible and Bash.',
      'Achieved ~60% reduction in manual effort through custom automation scripts.',
      'Monitored and troubleshot production systems to ensure maximum uptime.'
    ]
  },
  {
    company: 'InternPe',
    role: 'Java Programming Intern',
    period: 'Completed',
    location: 'Jaipur, Rajasthan',
    description: [
      'Built backend Java applications and applied core OOP principles.',
      'Managed code versions and collaboration using Git workflows.',
      'Optimized algorithm efficiency for specific data-processing tasks.'
    ]
  }
];

const LEADERSHIP = [
  { title: 'Core Team, GDG', role: 'DevFest Host', description: 'Coordinating large-scale technical conferences.', icon: <Users className="text-blue-500" /> },
  { title: 'Host, Sandip Utsav', role: 'University Anchor', description: 'Anchored the university’s flagship fest for thousands.', icon: <Mic2 className="text-indigo-500" /> },
  { title: 'College Organization', role: 'Event Coordinator', description: 'Spearheaded planning of diverse tech and cultural events.', icon: <Users2 className="text-amber-500" /> },
  { title: 'NGO Member', role: 'Social Impact', description: 'Community welfare programs at Sukhada Foundation.', icon: <Heart className="text-rose-500" /> },
  { title: 'Scout Guide Captain', role: 'Leadership', description: 'Led leadership and teamwork activities.', icon: <Anchor className="text-emerald-500" /> }
];

const PROJECTS = [
  { title: 'AWS Web Deployment', tech: ['AWS', 'Linux', 'Nginx'], description: 'Production WordPress site with full SSL orchestration.', icon: <Globe className="text-blue-400" />, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000' },
  { title: 'PhishNet AI', tech: ['Python', 'AI/ML'], description: 'AI-driven system for phishing detection using URL analysis.', icon: <Shield className="text-red-400" />, image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000' },
  { title: 'Food Management', tech: ['MySQL', 'JS', 'CSS'], description: 'Web platform for NGOs to streamline food distribution.', icon: <Activity className="text-green-400" />, image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000' }
];

// --- COMPONENTS ---

const Navbar = () => {
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
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center p-2 sm:p-4 pointer-events-none">
      <Motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`pointer-events-auto flex items-center gap-1 p-1 rounded-full border transition-all duration-500 overflow-x-auto max-w-[95vw] sm:max-w-none no-scrollbar ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border-zinc-200 shadow-lg' : 'bg-transparent border-transparent'
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
            className={`relative px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-colors rounded-full whitespace-nowrap ${
              active === link.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-900'
            }`}
          >
            <span className="relative z-10">{link.name}</span>
            {active === link.id && (
              <Motion.div layoutId="nav-pill" className="absolute inset-0 bg-zinc-900 rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
            )}
          </a>
        ))}
      </Motion.div>
    </nav>
  );
};

const Hero = () => {
  const doodleVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start pt-32 sm:pt-48 lg:justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 lg:opacity-100">
        <Motion.div custom={1} animate="animate" variants={doodleVariants} className="absolute top-[15%] left-[10%] text-indigo-300"><Cloud size={80} /></Motion.div>
        <Motion.div custom={2} animate="animate" variants={doodleVariants} className="absolute bottom-[20%] left-[15%] text-emerald-300"><Server size={70} /></Motion.div>
        <Motion.div custom={3} animate="animate" variants={doodleVariants} className="absolute top-[20%] right-[10%] text-amber-300"><BarChart3 size={75} /></Motion.div>
      </div>
      <div className="z-10 text-center space-y-6 sm:space-y-10 max-w-4xl px-6">
        <div className="space-y-4">
          <Motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-tighter text-zinc-900">
            Archie <span className="italic font-light text-indigo-600">Patel.</span>
          </Motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-3 text-zinc-700 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em]">
            <span className="font-bold">Technology Architect</span>
            <span className="text-zinc-200">|</span>
            <span className="text-indigo-600 font-black">Business Consultant</span>
            <span className="text-zinc-200">|</span>
            <span className="font-bold">Cloud Engineer</span>
          </div>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
          Architecting resilient cloud ecosystems and delivering high-impact business strategy through technical excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-xl">
            Explore Works <ArrowRight size={16} />
          </a>
          <div className="flex items-center gap-6 px-8 py-5 border border-zinc-100 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm">
            <a href={SOCIAL_LINKS.github} target="_blank" className="text-zinc-500 hover:text-zinc-900 transition-all hover:scale-110"><Github size={20} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-zinc-500 hover:text-zinc-900 transition-all hover:scale-110"><Linkedin size={20} /></a>
            <a href={SOCIAL_LINKS.spotify} target="_blank" className="text-zinc-500 hover:text-emerald-500 transition-all hover:scale-110"><Music size={20} /></a>
            <a href={SOCIAL_LINKS.medium} target="_blank" className="text-zinc-500 hover:text-indigo-500 transition-all hover:scale-110"><BookOpen size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Cloud': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'System': return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'DevOps': return 'bg-indigo-50 border-indigo-200 text-indigo-700';
      case 'Coding': return 'bg-rose-50 border-rose-200 text-rose-700';
      default: return 'bg-white border-zinc-100';
    }
  };

  const getIconActiveColor = (cat: string) => {
    switch(cat) {
      case 'Cloud': return 'text-blue-600';
      case 'System': return 'text-emerald-600';
      case 'DevOps': return 'text-indigo-600';
      case 'Coding': return 'text-rose-600';
      default: return 'text-indigo-600';
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto space-y-12 sm:space-y-20">
        <div className="space-y-4 text-center sm:text-left">
          <span className="text-indigo-600 font-mono text-xs font-black uppercase tracking-[0.5em]">Core Competencies</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-zinc-900">Tech <span className="text-zinc-600">Architecture.</span></h2>
          <p className="text-zinc-500 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">Interactive expertise matrix. Move your cursor over cards to reveal architectural focus and color signatures.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {SKILLS.map((skill, idx) => (
            <Motion.div 
              key={skill.name} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: idx * 0.05 }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              className={`p-6 rounded-[2rem] border transition-all duration-300 cursor-default text-center space-y-4 shadow-sm hover:shadow-md ${
                activeSkill === skill.name ? getCategoryColor(skill.category) : 'bg-white border-zinc-100 hover:border-indigo-100'
              }`}
            >
              <Motion.div 
                animate={activeSkill === skill.name ? { scale: 1.3, rotate: 12, y: -4 } : { scale: 1, rotate: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto transition-all ${
                  activeSkill === skill.name 
                  ? 'bg-white shadow-lg ' + getIconActiveColor(skill.category)
                  : 'bg-zinc-50 text-zinc-400'
                }`}
              >
                {skill.icon}
              </Motion.div>
              <div>
                <h3 className="text-sm font-bold text-zinc-800 leading-tight">{skill.name}</h3>
                <span className={`text-[8px] font-mono uppercase tracking-widest transition-opacity ${activeSkill === skill.name ? 'opacity-70' : 'text-zinc-400'}`}>{skill.category}</span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ exp: any; idx: number }> = ({ exp, idx }) => (
  <Motion.div 
    initial={{ opacity: 0, y: 30 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, delay: idx * 0.1 }}
    className="grid lg:grid-cols-[1fr,2fr] gap-8 sm:gap-12 pb-16 sm:pb-24 border-b border-zinc-100 last:border-0 items-start"
  >
    <div className="space-y-4 lg:sticky lg:top-24">
      <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
        {exp.period}
      </div>
      <h3 className="text-3xl sm:text-4xl font-serif font-black text-zinc-900 leading-tight">{exp.role}</h3>
      <div>
        <p className="text-xl font-bold text-zinc-700">{exp.company}</p>
        <p className="text-zinc-400 italic text-sm">{exp.location}</p>
      </div>
    </div>
    <div className="bg-white/60 border border-zinc-100 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl p-8 sm:p-12 space-y-6 hover:shadow-2xl hover:border-indigo-100 transition-all group">
      <ul className="space-y-6">
        {exp.description.map((item: string, i: number) => (
          <li key={i} className="text-lg text-zinc-500 font-light leading-relaxed flex gap-4 items-start">
            <span className="text-indigo-300 font-mono font-bold text-sm mt-1">/</span>
            <span className="group-hover:text-zinc-900 transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Motion.div>
);

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
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
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
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
        <p className="text-zinc-500 text-sm font-light leading-relaxed">{project.description}</p>
        <div className="pt-4 flex items-center justify-between">
          <Motion.a whileHover={{ x: 5 }} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-900 cursor-pointer">
            Launch <ArrowUpRight size={14} />
          </Motion.a>
          <Github size={18} className="text-zinc-200 group-hover:text-zinc-900 transition-colors cursor-pointer" />
        </div>
      </div>
    </Motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="mb-20 space-y-4">
      <span className="text-indigo-600 font-mono text-[10px] font-bold uppercase tracking-[0.5em]">Case Studies</span>
      <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-zinc-900">Proof of Impact.</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={{...project, image: project.title === 'AWS Web Deployment' ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000' : project.title === 'PhishNet AI' ? 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000' : 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000'}} />
      ))}
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    const subject = encodeURIComponent(`Inquiry from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(`Hello Archie,\n\n${formData.message}\n\nFrom, ${formData.name}`);
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="bg-white border border-zinc-100 rounded-[3rem] sm:rounded-[5rem] p-8 sm:p-12 md:p-24 shadow-2xl relative overflow-hidden min-h-fit">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 relative z-10">
          <div className="space-y-8 sm:space-y-12 h-fit">
            <div className="space-y-6">
              <span className="text-indigo-600 font-mono text-[10px] font-bold uppercase tracking-[0.5em]">Direct Channel</span>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-serif font-black tracking-tighter text-zinc-900 leading-none">
                Let's <br /><span className="text-indigo-600 italic font-light">Collaborate.</span>
              </h2>
              <p className="text-zinc-500 text-xl font-light">Available for high-impact roles in cloud and strategy.</p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="group flex items-center gap-6 p-6 bg-zinc-50 rounded-3xl hover:bg-zinc-900 hover:text-white transition-all duration-500">
                <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0"><Mail size={24} /></div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Email</span>
                  <span className="text-base sm:text-lg font-light truncate block">{SOCIAL_LINKS.email}</span>
                </div>
              </a>
              <div className="flex items-center gap-6 p-6 border border-zinc-50 rounded-3xl">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0"><Phone size={24} /></div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Contact</span>
                  <span className="text-lg sm:text-xl font-light">+91 8830115691</span>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-white shadow-xl p-8 sm:p-12 rounded-[3rem] border border-zinc-100 space-y-8 h-fit self-start" onSubmit={handleSend}>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Your Identity</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b-2 border-zinc-100 py-4 text-xl font-light outline-none focus:border-indigo-500 transition-all" placeholder="E.g. Elon Musk" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Brief Intent</label>
              <textarea rows={2} required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b-2 border-zinc-100 py-4 text-xl font-light outline-none focus:border-indigo-500 transition-all resize-none" placeholder="Describe the mission..." />
            </div>
            <Motion.button whileTap={{ scale: 0.98 }} className="w-full py-6 bg-zinc-900 text-white rounded-3xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-indigo-600 shadow-xl transition-all">
              Establish Connection <ArrowRight size={18} />
            </Motion.button>
          </form>
        </div>
      </div>
      <footer className="mt-24 pt-12 border-t border-zinc-100 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-8 pb-12">
        <div className="space-y-2">
          <span className="text-3xl font-serif font-black text-zinc-900">AP<span className="text-indigo-600">.</span></span>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300">NASHIK, MH / INDIA</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-10">
          <a href={SOCIAL_LINKS.github} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Github</a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Linkedin</a>
          <a href={SOCIAL_LINKS.spotify} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-emerald-600 transition-colors">Spotify</a>
          <a href={SOCIAL_LINKS.medium} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-indigo-600 transition-colors">Medium</a>
        </div>
      </footer>
    </section>
  );
};

// --- MAIN APP ---
const App = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const bgColor = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.5, 0.8, 1], 
    ['#ffffff', '#f8fafc', '#fffbeb', '#f0fdf4', '#fdf2f8']
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    const unsubscribe = bgColor.on('change', (latest) => {
      document.body.style.backgroundColor = latest;
    });
    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [bgColor]);

  return (
    <div className="relative min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <AnimatePresence>
        {loading ? (
          <Motion.div key="loader" exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-white">
            <Motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-10 h-10 border-2 border-indigo-600 border-t-transparent rounded-full" />
          </Motion.div>
        ) : (
          <Motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 sm:px-8">
              <Hero />
              <Skills />
              <section id="experience" className="py-24 space-y-20">
                <div className="space-y-4">
                  <span className="text-indigo-600 font-mono text-xs font-black uppercase tracking-[0.5em]">Career Path</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black">Professional <span className="text-zinc-300 italic font-light">Path.</span></h2>
                </div>
                <div className="space-y-12">
                  {EXPERIENCES.map((e, idx) => <ExperienceCard key={e.company} exp={e} idx={idx} />)}
                </div>
              </section>
              <section id="leadership" className="py-24 space-y-16">
                <h2 className="text-4xl sm:text-5xl font-serif font-black">Impact.</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {LEADERSHIP.map((l, idx) => (
                    <Motion.div 
                      key={l.title} 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      whileInView={{ opacity: 1, scale: 1 }} 
                      transition={{ delay: idx * 0.1 }}
                      className="p-8 bg-white border border-zinc-100 rounded-[2.5rem] space-y-6 hover:shadow-xl hover:border-indigo-100 transition-all group"
                    >
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-50 transition-colors">{l.icon}</div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block">{l.role}</span>
                        <h3 className="text-xl font-bold text-zinc-900 leading-tight">{l.title}</h3>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed">{l.description}</p>
                      </div>
                    </Motion.div>
                  ))}
                </div>
              </section>
              <Projects />
              <Contact />
            </main>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);