import React from 'react';
import { motion, type Variants } from 'framer-motion';
import profileImage from "../assets/profile.jpg";
import "./../assets/style/index.css";
import { ArrowUpRight, Terminal } from 'lucide-react';

interface HeroProps {
  fadeUp: Variants;
  staggerContainer: Variants;
}

// Custom internal animation variants for an ultra-premium feel
const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Hero({ fadeUp, staggerContainer }: HeroProps): React.JSX.Element {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-0 bg-slate-950 font-sans antialiased">
      
      {/* Background Tech Mesh & Dynamic Light Bleeds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] delay-1000 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* TYPOGRAPHY CONTENT COLUMN */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="md:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Status Badge */}
          <motion.div 
            variants={fadeUp} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs font-semibold text-cyan-400 uppercase tracking-wider shadow-xl shadow-slate-950/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> Available for Roles
            </span>
          </motion.div>
          
          {/* Main Name Header */}
          <div className="overflow-hidden">
            <motion.h1 
              variants={fadeUp} 
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-100 leading-[1.05]"
            >
              Sunil Kumar Sah
            </motion.h1>
          </div>

          {/* Dynamic Stack Sub-header */}
          <div className="overflow-hidden w-full">
            <motion.div variants={letterAnimation} className="inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Web Developer
              </span>
            </motion.div>
          </div>

          {/* Description Body */}
          <motion.p 
            variants={fadeUp} 
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl font-medium"
          >
            BSc. CSIT student and <span className="text-slate-200 font-semibold">MERN Stack Developer</span> specializing in engineered web layers. Focused on structuring highly integrated microservices, secure socket modules, and high-performance layout trees that reduce application workflows seamlessly.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2 w-full">
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300 text-sm shadow-md"
            >
              Let's Collaborate 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
              whileTap={{ scale: 0.98 }}
              href="#skills" 
              className="px-6 py-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm text-sm font-semibold text-slate-300 hover:text-slate-100 transition-all duration-200"
            >
              Explore Stack
            </motion.a>
          </motion.div>
        </motion.div>

        {/* IMMERSIVE PHOTO FRAME COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem]">
            
            {/* Ambient Outer Glow Frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-700" />
            
            {/* Background Wireframe Box Behind */}
            <div className="absolute top-6 -left-6 w-full h-full rounded-2xl border border-dashed border-slate-800/80 pointer-events-none transform group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 ease-out" />
            <div className="absolute -top-6 left-6 w-full h-full rounded-2xl border border-dashed border-cyan-500/10 pointer-events-none transform group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-500 ease-out" />
            
            {/* Glass Container Housing Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 p-2 backdrop-blur-xl shadow-2xl shadow-slate-950/80 group-hover:border-slate-700/60 transition-colors duration-500">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-950">
                <img 
                  src={profileImage} 
                  alt="Sunil Kumar Sah"
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] grayscale group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-100 transition-all duration-700 ease-out" 
                />
                {/* Advanced Multi-Stop Lighting Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>

            {/* Micro Tech Data Callout Box */}
            <div className="absolute -bottom-4 -right-4 bg-slate-900/90 border border-slate-800 p-3 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block shadow-xl">
              <p className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase font-bold">System Status</p>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">Compilation Complete</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}