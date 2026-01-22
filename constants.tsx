
import React from 'react';
import { Cloud, Terminal, Code, Cpu, Database, Server, Settings, Globe, Shield, Activity, BookOpen, Music, Users, Award, Heart, Anchor, GraduationCap, Users2, Mic2 } from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/patelarchie027",
  linkedin: "https://www.linkedin.com/in/archie-patel-7752762a7",
  medium: "https://medium.com/@softcodedsoul",
  spotify: "https://open.spotify.com/show/1Ii9HrzcjKnkVi6Euy4Vf1",
  email: "codebyarchie@gmail.com"
};

export const SKILLS = [
  { name: 'AWS (EC2, S3, IAM)', category: 'Cloud', level: 90, icon: <Cloud size={20} /> },
  { name: 'Linux (RHEL, Ubuntu)', category: 'System', level: 95, icon: <Terminal size={20} /> },
  { name: 'Ansible & Bash', category: 'DevOps', level: 85, icon: <Settings size={20} /> },
  { name: 'Java & Python', category: 'Coding', level: 80, icon: <Code size={20} /> },
  { name: 'MySQL', category: 'Coding', level: 70, icon: <Database size={20} /> },
  { name: 'CloudWatch', category: 'Cloud', level: 85, icon: <Activity size={20} /> },
  { name: 'Git / DevOps', category: 'DevOps', level: 90, icon: <Server size={20} /> },
];

export const LEADERSHIP = [
  {
    title: 'Core Team Member, GDG',
    role: 'DevFest Host',
    description: 'Coordinating large-scale technical conferences and fostering the developer ecosystem in the region.',
    icon: <Users className="text-blue-500" />
  },
  {
    title: 'Host, Sandip Utsav 2K24',
    role: 'University Flagship Host',
    description: 'Anchored the university’s flagship fest, managing and engaging thousands of attendees with technical & cultural sessions.',
    icon: <Mic2 className="text-indigo-500" />
  },
  {
    title: 'College Organization Team',
    role: 'Event Coordinator',
    description: 'Spearheaded the planning and execution of diverse tech & cultural events for the student body.',
    icon: <Users2 className="text-amber-500" />
  },
  {
    title: 'Member, Sukhada Foundation',
    role: 'Social NGO Work',
    description: 'Participated in community welfare programs and grassroots initiatives for social impact.',
    icon: <Heart className="text-rose-500" />
  },
  {
    title: 'Scout Guide Captain',
    role: 'Leadership & Discipline',
    description: 'Led school-level leadership and teamwork activities, establishing a foundation for disciplined team management.',
    icon: <Anchor className="text-emerald-500" />
  }
];

export const EXPERIENCES = [
  {
    company: 'InnovationsHub Services Pvt. Ltd.',
    role: 'Trainee Business Consultant | Software Engineer',
    period: 'Current',
    location: 'Nashik, Maharashtra, India',
    description: [
      'Developing enterprise software solutions and automating critical internal workflows.',
      'Collaborating with cross-functional teams to identify bottlenecks and improve operational efficiency.',
      'Integrating modern tech stacks to drive business impact through technical innovation.'
    ],
    isCurrent: true
  },
  {
    company: 'Tecsys Solutions Pvt. Ltd.',
    role: 'Linux & DevOps Intern',
    period: 'Onsite, Completed',
    location: 'Nashik, Maharashtra, India',
    description: [
      'Managed RHEL servers and automated deployments using Ansible and Bash.',
      'Achieved ~60% reduction in manual effort through custom automation scripts.',
      'Monitored, patched, and troubleshot production systems to ensure maximum uptime.'
    ]
  },
  {
    company: 'InternPe',
    role: 'Java Programming Intern',
    period: 'Remote, Completed',
    location: 'Jaipur, Rajasthan, India',
    description: [
      'Built backend Java applications and applied core OOP principles.',
      'Managed code versions and collaboration using Git workflows.',
      'Optimized algorithm efficiency for specific data-processing tasks.'
    ]
  }
];

export const PROJECTS = [
  {
    title: 'AWS Web Platform Deployment',
    description: 'Managed production WordPress site with full SSL implementation, DNS orchestration, and uptime optimization on AWS EC2.',
    tech: ['AWS', 'EC2', 'Route53', 'Linux', 'Nginx'],
    icon: <Globe className="text-blue-400" />
  },
  {
    title: 'PhishNet',
    description: 'AI-driven system for phishing detection using advanced URL analysis to protect users from malicious cyber threats.',
    tech: ['Python', 'AI/ML', 'Cybersecurity', 'API'],
    icon: <Shield className="text-red-400" />
  },
  {
    title: 'Food Management System',
    description: 'A dedicated web platform designed for NGOs to efficiently manage and streamline food distribution processes.',
    tech: ['HTML/CSS', 'MySQL', 'JavaScript'],
    icon: <Activity className="text-green-400" />
  }
];

export const CERTIFICATIONS = [
  'RHCSA (Red Hat Certified System Administrator)',
  'AWS Solutions Architect – Associate (Training)',
  'Ansible Automation Platform',
  'Google Cloud AI',
  'Microsoft Copilot',
  'Innovera Hackathon Winner'
];
