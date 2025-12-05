/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroScene } from './components/QuantumScene';
import { 
  DesignPrincipleVisualizer, 
  ToolkitComparison, 
  ColorTheoryWheel, 
  PrintVsScreen, 
  TypographyAnatomy, 
  VectorVsRaster, 
  WorkflowVisualizer, 
  EthioFlatVectorDemo,
  GridSystemVisualizer,
  TypePairingGuide,
  HygieneChecklist,
  VectorMasterclassModal
} from './components/Diagrams';

import { MotionMicroInteractions } from './components/Motion';
import { AiWorkflowDiagram } from './components/Intelligence';
import { PortfolioCaseStudyTemplate, PricingStrategyCalculator } from './components/Career';
import { WhiteSpaceVisualizer, ProductionReadyGuide, ResponsiveGuide, AccessibilityCheck } from './components/Essentials';

import { ArrowDown, Menu, X, Globe, Layout, Zap, Sun, Moon, Printer, Box, Layers, Scissors, Briefcase, Smartphone, Github, Linkedin, Mail, ExternalLink, MousePointer, Type } from 'lucide-react';

// --- Section Component ---
const Section = ({ id, title, children, className = "" }: { id: string, title: string, children?: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-24 md:py-32 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300 scroll-mt-24 ${className}`}>
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-16">
        <h2 className="font-serif text-4xl md:text-6xl text-ethio-ink dark:text-ethio-teff leading-tight">{title}</h2>
        <div className="h-px bg-ethio-tibeb flex-1 mb-4 opacity-50 hidden md:block"></div>
        <span className="text-xs font-mono text-ethio-tibeb tracking-widest uppercase mb-2 md:mb-4">
          // {id.toUpperCase()}
        </span>
      </div>
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('principles');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Masterclass Modal

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Dark Mode Toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { id: 'principles', label: '7 Laws' },
    { id: 'spectrum', label: 'Work' },
    { id: 'technical', label: 'Tech' },
    { id: 'workflow', label: 'Process' },
    { id: 'motion', label: 'Motion' },
    { id: 'lexicon', label: 'Context' },
    { id: 'portfolio', label: 'Career' },
    { id: 'roadmap', label: 'Map' },
  ];

  // ScrollSpy Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Highlights when section is in the middle of viewport
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach(link => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Instant feedback
    }
  };

  const TelegramIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.509 1.793.997 3.592 1.48 5.388.16.69.508 1.287 1.005 1.752.497.464 1.13.743 1.77.897.809.195 1.637-.184 2.253-.746l3.398-3.084 4.544 3.344a2.29 2.29 0 0 0 2.238.22c.98-.445 1.485-1.42 1.714-2.45l2.654-12.72c.163-.77.108-1.57-.156-2.288a2.26 2.26 0 0 0-1.848-1.543 2.19 2.19 0 0 0-.946.018z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-ethio-paper dark:bg-ethio-charcoal text-ethio-ink dark:text-ethio-teff selection:bg-ethio-tibeb selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
      
      <VectorMasterclassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-ethio-paper/90 dark:bg-ethio-charcoal/90 backdrop-blur-md border-gray-200 dark:border-white/10 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 border border-ethio-tibeb rounded-full flex items-center justify-center relative overflow-hidden group-hover:bg-ethio-tibeb transition-colors duration-500">
               <div className="absolute inset-0 bg-ethio-tibeb opacity-0 group-hover:opacity-20 transition-opacity"></div>
               <span className="font-serif font-bold text-xl text-ethio-ink dark:text-ethio-teff">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest uppercase">Lalu Graphics</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wide hidden md:block">Visual Sovereignty</span>
            </div>
          </div>
          
          {/* Desktop Nav Pills */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-black/20 p-1.5 rounded-full border border-gray-200 dark:border-white/5 backdrop-blur-sm shadow-sm">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)} 
                className={`
                   px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 relative
                   ${activeSection === link.id 
                      ? 'bg-ethio-tibeb text-white shadow-lg shadow-ethio-tibeb/25 transform scale-105' 
                      : 'text-gray-500 hover:text-ethio-ink dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}
                `}
              >
                {link.label}
              </button>
            ))}
            
            {/* Theme Toggle Separator */}
            <div className="w-px h-5 bg-gray-300 dark:bg-white/10 mx-2"></div>
            
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 mr-1 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-ethio-tibeb"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
                onClick={() => setIsDark(!isDark)} 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-ethio-tibeb"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="text-ethio-ink dark:text-ethio-teff p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-ethio-paper dark:bg-ethio-charcoal flex flex-col items-center justify-center gap-6"
          >
              {navLinks.map(link => (
                <button 
                  key={link.id} 
                  onClick={() => handleNavClick(link.id)} 
                  className={`font-serif text-3xl transition-colors cursor-pointer ${activeSection === link.id ? 'text-ethio-tibeb italic' : 'text-ethio-ink dark:text-ethio-teff hover:text-ethio-tibeb'}`}
                >
                  {link.label}
                </button>
              ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
        
        {/* Grain Overlay & Gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-ethio-paper dark:from-ethio-charcoal via-transparent to-transparent"></div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 border border-ethio-tibeb/30 rounded-full bg-ethio-tibeb/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-ethio-tibeb animate-pulse"></span>
              <span className="text-xs font-mono text-ethio-tibeb tracking-widest uppercase">Exclusively for Lalu</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.9] mb-8 text-ethio-ink dark:text-ethio-teff mix-blend-difference dark:mix-blend-normal">
              Visual <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ethio-tibeb to-ethio-cyan italic font-light">Sovereignty</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed border-l-2 border-ethio-tibeb pl-6 mb-12">
              Lalu, this is your complete companion. We aren't just making apps; we are crafting the visual language of the future. From print to pixels, this is everything you need.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <button onClick={() => handleNavClick('principles')} className="px-8 py-4 bg-ethio-ink dark:bg-ethio-teff text-ethio-paper dark:text-ethio-charcoal font-bold tracking-wider uppercase text-sm hover:scale-105 transition-transform shadow-lg shadow-ethio-tibeb/10">
                  Start Learning
               </button>
               <button onClick={() => handleNavClick('roadmap')} className="px-8 py-4 border border-ethio-ink dark:border-ethio-teff text-ethio-ink dark:text-ethio-teff font-bold tracking-wider uppercase text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  View Syllabus
               </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
           <ArrowDown className="text-ethio-tibeb opacity-50" />
        </div>
      </header>

      <main>
        {/* I. PRINCIPLES */}
        <Section id="principles" title="The 7 Immutable Laws">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lalu, these 7 laws govern every single thing you will ever create. Whether it is a wedding card or a bank app, if it looks "wrong", it is because you broke one of these laws.
                </p>
                <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-ethio-tibeb font-mono text-xs uppercase tracking-widest mb-4">Core Law: Gestalt Theory</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The brain is lazy. It hates chaos. Your job is to organize shapes so the brain doesn't have to work hard to understand them.</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                 <DesignPrincipleVisualizer />
              </div>
           </div>

           {/* Expanded Principles Grid (7 LAWS) */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {[
                { title: 'Balance', icon: <Layout />, desc: 'Visual gravity. Don\'t let your design "tip over". Symmetrical is traditional; Asymmetrical is modern.' },
                { title: 'Hierarchy', icon: <Globe />, desc: 'Who is the boss? Make the most important thing the biggest or brightest. Guide Lalu\'s eye.' },
                { title: 'Contrast', icon: <Zap />, desc: 'Drama. Light vs Dark. Big vs Small. Without contrast, design is invisible.' },
                { title: 'Repetition', icon: <Layers />, desc: 'Consistency. Repeat fonts, colors, and shapes to create a "Brand Identity".' },
                { title: 'Alignment', icon: <Scissors />, desc: 'Order. Invisible lines connect every element. Nothing should be placed arbitrarily.' },
                { title: 'Proximity', icon: <Box />, desc: 'Grouping. Items related to each other must be close together. Distance implies difference.' },
                { title: 'Color (60-30-10)', icon: <Sun />, desc: '60% Neutral (Background), 30% Brand Color (Identity), 10% Accent (Call to Action).' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-ethio-tibeb dark:hover:border-ethio-tibeb/50 transition-colors shadow-sm dark:shadow-none group rounded-xl"
                >
                   <div className="mb-4 text-ethio-tibeb group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h3 className="font-serif text-xl mb-2 text-ethio-ink dark:text-white">{item.title}</h3>
                   <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
           </div>

           {/* GRID SYSTEMS */}
           <div className="mt-20 pt-16 border-t border-gray-200 dark:border-white/5">
              <h3 className="text-3xl font-serif text-ethio-ink dark:text-white mb-8 text-center">The "Invisible" Grid Systems</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                 Beginners align by eye. Professionals align by grid. Whether it is a photo or a website, these invisible lines control where everything sits.
              </p>
              <GridSystemVisualizer />
              <WhiteSpaceVisualizer />
           </div>
        </Section>

        {/* II. SPECTRUM OF WORK */}
        <Section id="spectrum" title="The Spectrum of Work">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
            Graphic design is not just one thing. Lalu, you will be asked to wear many hats. Here are the four main pillars where you will find work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Identity */}
            <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 hover:border-ethio-tibeb/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Briefcase size={64} /></div>
              <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-4">Brand Identity</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-tibeb rounded-full"></div>Logo Design (Vector)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-tibeb rounded-full"></div>Color Palettes</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-tibeb rounded-full"></div>Brand Guidelines PDF</li>
              </ul>
              <div className="px-3 py-1 bg-ethio-tibeb/10 text-ethio-tibeb text-xs font-bold inline-block rounded">High Value ($$$)</div>
            </div>

            {/* 2. Marketing */}
            <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 hover:border-ethio-cyan/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Zap size={64} /></div>
              <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-4">Marketing & Social</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-cyan rounded-full"></div>Instagram Carousels (1080px)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-cyan rounded-full"></div>YouTube Thumbnails</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-cyan rounded-full"></div>Facebook Ads</li>
              </ul>
              <div className="px-3 py-1 bg-ethio-cyan/10 text-ethio-cyan text-xs font-bold inline-block rounded">High Volume (Daily)</div>
            </div>

            {/* 3. Print */}
            <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 hover:border-ethio-gold/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Printer size={64} /></div>
              <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-4">Print & Packaging</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-gold rounded-full"></div>Business Cards</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-gold rounded-full"></div>Product Labels</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-ethio-gold rounded-full"></div>Event Flyers / Billboards</li>
              </ul>
              <div className="px-3 py-1 bg-ethio-gold/10 text-ethio-gold text-xs font-bold inline-block rounded">Tangible Output</div>
            </div>

            {/* 4. Web UI */}
            <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 hover:border-white/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Smartphone size={64} /></div>
              <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-4">Web & UI</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Landing Pages</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Mobile App Screens</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-white rounded-full"></div>Icon Sets</li>
              </ul>
              <div className="px-3 py-1 bg-gray-500/10 text-gray-500 text-xs font-bold inline-block rounded">Interactive</div>
            </div>
          </div>
        </Section>

        {/* III. TECHNICAL REALITIES */}
        <Section id="technical" title="Technical Realities">
           <div className="space-y-20">
             
             {/* Vector vs Raster */}
             <div>
                <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-6">1. Vector vs. Raster</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                  This is the most common mistake beginners make. <br/>
                  <strong className="text-ethio-tibeb">Vector (AI, SVG)</strong> is math. It scales infinitely. Use this for logos.<br/>
                  <strong className="text-ethio-cyan">Raster (JPG, PNG)</strong> is pixels. It gets blurry if you zoom. Use this for photos.
                </p>
                <VectorVsRaster />
             </div>

             {/* Print vs Screen */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-gray-200 dark:border-white/5">
                <div>
                   <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-6">2. Screen (RGB) vs. Print (CMYK)</h3>
                   <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Lalu, physics is real here. Screens use Light (RGB). Printers use Ink (CMYK). If you send an RGB file to a printer, the colors will look muddy and dead.
                   </p>
                   <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                         <div className="p-3 bg-ethio-tibeb/10 text-ethio-tibeb rounded-lg"><Printer size={24} /></div>
                         <div>
                            <h4 className="font-serif text-xl font-bold text-ethio-ink dark:text-white">Bleed & Trim</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                               Printers are not perfect. You must extend your design 3mm beyond the edge (Bleed) so when they cut the paper, there are no white edges.
                            </p>
                         </div>
                      </div>
                   </div>
                   
                   {/* RESPONSIVE GUIDE */}
                   <ResponsiveGuide />
                </div>
                <div>
                   <PrintVsScreen />
                   {/* ACCESSIBILITY CHECK */}
                   <AccessibilityCheck />
                </div>
             </div>
           </div>
        </Section>

        {/* IV. PROFESSIONAL WORKFLOW */}
        <Section id="workflow" title="The Professional Process">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
            Don't just jump into the software, Lalu. Professionals follow a 5-step process. This saves you from "revision hell" later.
          </p>
          <WorkflowVisualizer />
          
          <div className="mt-20">
             <HygieneChecklist />
             <ProductionReadyGuide />
          </div>

          <div className="mt-20 border-t border-gray-200 dark:border-white/10 pt-16">
            <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-8">AI as Assistant</h3>
            <AiWorkflowDiagram />
          </div>
        </Section>
        
        {/* V. TOOLKIT & MARKET */}
        <Section id="toolkit" title="The Toolbox & Market">
           <ToolkitComparison />
           
           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm rounded-xl">
                 <h4 className="flex items-center gap-2 font-serif text-lg mb-2 text-ethio-ink dark:text-white"><Globe size={18} className="text-ethio-cyan"/> No-Code Revolution</h4>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Webflow & Framer allow you to build international standard sites without deep coding knowledge.</p>
              </div>
              <div className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm rounded-xl">
                 <h4 className="flex items-center gap-2 font-serif text-lg mb-2 text-ethio-ink dark:text-white"><Type size={18} className="text-ethio-gold"/> Font Resources</h4>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Use <strong>Google Fonts</strong> for free Noto Ethiopic. Use <strong>FontShare</strong> for beautiful English sans-serifs.</p>
              </div>
              <div className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm rounded-xl">
                 <h4 className="flex items-center gap-2 font-serif text-lg mb-2 text-ethio-ink dark:text-white"><Zap size={18} className="text-ethio-tibeb"/> Inspiration</h4>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Don't start from blank. Look at <strong>Behance</strong>, <strong>Pinterest</strong>, and <strong>Awwwards</strong> before you design.</p>
              </div>
               <div className="p-6 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm rounded-xl">
                 <h4 className="flex items-center gap-2 font-serif text-lg mb-2 text-ethio-ink dark:text-white"><MousePointer size={18} className="text-purple-500"/> Icon Design</h4>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Draw on a 24x24 grid. Outline stroke before export. Run SVGs through <strong>SVGOMG</strong> to reduce file size by 50%.</p>
              </div>
           </div>
        </Section>
        
        {/* VI. MOTION */}
        <Section id="motion" title="Motion & Interaction">
           <MotionMicroInteractions />
        </Section>

        {/* VII. ETHIOPIAN LEXICON (STRATEGIC CONTEXT) */}
        <Section id="lexicon" title="Strategic Context: Ethiopia">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                 {/* TYPOGRAPHY ANATOMY */}
                 <div className="mb-12">
                   <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-4">Typography Strategy</h3>
                   <div className="bg-ethio-tibeb/10 p-6 rounded-xl border border-ethio-tibeb/20 mb-6">
                      <h4 className="font-bold text-ethio-tibeb mb-2">💡 Lalu's Pro Tip:</h4>
                      <p className="text-sm text-ethio-ink dark:text-gray-300">
                        Default Amharic fonts look outdated. For UI, always use <strong>Google Noto Sans Ethiopic</strong>. For Logos, do NOT use a font. Draw the Fidel shapes yourself in Illustrator to make them unique and modern.
                      </p>
                   </div>
                   <TypographyAnatomy />
                 </div>
                 
                 {/* TYPE PAIRING */}
                 <div className="mb-12">
                    <TypePairingGuide />
                 </div>

                 <div className="mt-12">
                    <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mb-4">Color Blending Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      International clients like "Minimalist." Ethiopian culture loves "Vibrant." How do you win? <strong>Blend them.</strong> Use a neutral background (White/Grey) but use Ethiopian colors for Accents (Buttons, Icons).
                    </p>
                    <ColorTheoryWheel />
                 </div>
              </div>

              <div className="bg-white dark:bg-ethio-charcoal border border-gray-200 dark:border-white/10 p-8 relative rounded-xl shadow-xl dark:shadow-none sticky top-32">
                 <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ethiopian_Cross.svg/1200px-Ethiopian_Cross.svg.png" className="w-24 h-24 dark:invert" alt="Pattern" />
                 </div>
                 <h4 className="font-mono text-ethio-tibeb text-xs uppercase tracking-widest mb-6">The High-Value Skill: Custom Illustration</h4>
                 
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The market is flooded with generic Western stock photos. The highest value skill you can offer is creating <strong>Flat Vector Art</strong> of Ethiopian people—capturing our hair, our clothes, and our coffee culture.
                    </p>
                    
                    {/* ENHANCED DEMO */}
                    <div className="bg-gray-100 dark:bg-black/40 rounded-lg flex items-center justify-center border border-dashed border-gray-400 dark:border-gray-700 p-4 overflow-hidden">
                       <EthioFlatVectorDemo onStart={() => setIsModalOpen(true)}/>
                    </div>
                 </div>
                 
                 {/* Mock UI Card */}
                 <div className="mt-8 bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl max-w-sm mx-auto">
                    <div className="flex justify-between items-center mb-6">
                       <div className="w-8 h-8 bg-ethio-tibeb rounded-full shadow-lg shadow-ethio-tibeb/30"></div>
                       <Menu size={16} className="text-ethio-ink dark:text-white"/>
                    </div>
                    <div className="space-y-2 mb-6">
                       <div className="h-2 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                       <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-800 rounded"></div>
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="w-full py-3 bg-ethio-tibeb text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-ethio-tibeb transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                    >
                       Vector Masterclass <ArrowDown size={14} className="-rotate-90"/>
                    </button>
                    <p className="text-[10px] text-center text-gray-500 mt-2">Learn to draw vectors now</p>
                 </div>
              </div>
           </div>
        </Section>
        
        {/* VIII. PORTFOLIO */}
        <Section id="portfolio" title="The Portfolio">
            <PortfolioCaseStudyTemplate />
        </Section>
        
        {/* IX. PRICING */}
        <Section id="pricing" title="Pricing & Money">
            <PricingStrategyCalculator />
        </Section>

        {/* X. ROADMAP */}
        <Section id="roadmap" title="Syllabus for Lalu">
           <div className="relative border-l border-gray-300 dark:border-white/10 ml-4 md:ml-12 space-y-12">
              {[
                { 
                  phase: 'Phase I', 
                  title: 'The Foundation', 
                  time: 'Weeks 1-4',
                  desc: 'Learning to See',
                  items: [
                     'Master the 7 Immutable Laws', 
                     'Sketching ideas on paper (No computer yet!)', 
                     'Understanding RGB vs CMYK', 
                     'History of Ethiopian Art & Patterns'
                  ] 
                },
                { 
                  phase: 'Phase II', 
                  title: 'Digital Tools', 
                  time: 'Weeks 5-12',
                  desc: 'The Software',
                  items: [
                     'Figma: For Websites & App Interfaces', 
                     'Illustrator/Inkscape: For Logos & Vector Art', 
                     'Photoshop/GIMP: For Photo Editing & Posters', 
                     'InDesign: For Books & Magazines'
                  ] 
                },
                { 
                  phase: 'Phase III', 
                  title: 'The Tangible World', 
                  time: 'Weeks 13-20',
                  desc: 'Print & Packaging',
                  items: [
                     'Designing a Business Card (Bleed & Trim)', 
                     'Packaging Design (Coffee bags, Boxes)', 
                     'Merchandise (T-shirt design, Sticker prep)', 
                     'Paper selection & printing finishes'
                  ] 
                },
                { 
                  phase: 'Phase IV', 
                  title: 'Identity & Branding', 
                  time: 'Weeks 21-24',
                  desc: 'Systems',
                  items: [
                     'Logo Design: Symbol vs Wordmark', 
                     'Creating Brand Guidelines (The Rules)', 
                     'Social Media Kits (Insta/Telegram templates)', 
                     'Personal Branding for Lalu'
                  ] 
                },
                { 
                  phase: 'Phase V', 
                  title: 'The Professional', 
                  time: 'Forever',
                  desc: 'Career',
                  items: [
                     'Building a Portfolio PDF', 
                     'Pricing your work (Don\'t undercharge!)', 
                     'Client Communication (The Workflow)', 
                     'Freelancing on Upwork'
                  ] 
                }
              ].map((phase, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                   <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-ethio-tibeb rounded-full ring-4 ring-ethio-paper dark:ring-ethio-charcoal group-hover:scale-125 transition-transform"></div>
                   <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <span className="text-ethio-tibeb font-mono text-xs uppercase tracking-widest">{phase.phase}</span>
                        <h3 className="text-2xl font-serif text-ethio-ink dark:text-white mt-1">{phase.title}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{phase.desc}</p>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-xs font-bold rounded-full text-ethio-ink dark:text-white">{phase.time}</span>
                   </div>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                           <div className="h-1.5 w-1.5 bg-ethio-gold rounded-full"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </Section>
      </main>

      <footer className="bg-ethio-paper dark:bg-black py-20 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Branding */}
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-ethio-tibeb rounded-full flex items-center justify-center">
                       <span className="font-serif font-bold text-xl text-ethio-ink dark:text-ethio-teff">L</span>
                    </div>
                    <h3 className="font-display font-bold uppercase tracking-widest text-sm">Lalu Graphics</h3>
                 </div>
                 <p className="text-sm text-gray-500 leading-relaxed">
                    A digital love letter to the Ethiopian creative spirit. Designed to equip Lalu with the tools of tomorrow.
                 </p>
              </div>

              {/* Developer */}
              <div>
                 <h4 className="font-mono text-xs text-ethio-tibeb uppercase tracking-widest mb-6">Built By Leul</h4>
                 <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-3">
                       <Mail size={16} /> 
                       <a href="mailto:leulman2@gmail.com" className="hover:text-ethio-tibeb transition-colors">leulman2@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-3">
                       <TelegramIcon size={16} /> 
                       <a href="https://t.me/fabbin" target="_blank" rel="noopener noreferrer" className="hover:text-ethio-tibeb transition-colors">@fabbin</a>
                    </li>
                 </ul>
              </div>

              {/* Links */}
              <div>
                 <h4 className="font-mono text-xs text-ethio-tibeb uppercase tracking-widest mb-6">Network</h4>
                 <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <li>
                       <a href="https://www.linkedin.com/in/leul-t-agonafer-861bb3336/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ethio-cyan transition-colors">
                          <Linkedin size={16} /> LinkedIn
                       </a>
                    </li>
                    <li>
                       <a href="https://github.com/leulTew/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ethio-cyan transition-colors">
                          <Github size={16} /> GitHub
                       </a>
                    </li>
                 </ul>
              </div>

              {/* Portfolios */}
              <div>
                 <h4 className="font-mono text-xs text-ethio-tibeb uppercase tracking-widest mb-6">Portfolios</h4>
                 <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <li>
                       <a href="https://portifolio-leul.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ethio-gold transition-colors">
                          <Globe size={16} /> Portfolio V1 <ExternalLink size={12}/>
                       </a>
                    </li>
                    <li>
                       <a href="https://portifolio-x-leul.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ethio-gold transition-colors">
                          <Zap size={16} /> Portfolio X <ExternalLink size={12}/>
                       </a>
                    </li>
                 </ul>
              </div>
           </div>

           <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-gray-400">
                 © 2025 Lalu Graphics. All Rights Reserved.
              </div>
              <div className="flex gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                 <span>Code</span>
                 <span>•</span>
                 <span>Design</span>
                 <span>•</span>
                 <span>Culture</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;