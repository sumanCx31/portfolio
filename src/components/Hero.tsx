import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import "./../assets/style/index.css";
import { ArrowUpRight, Terminal, Sparkles, Binary, Check } from "lucide-react";
import Bio from "../section/bio";

interface HeroProps {
  fadeUp: Variants;
  staggerContainer: Variants;
}

const charContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.2 }
  }
};

const individualChar: Variants = {
  hidden: { opacity: 0, y: 60, rotate: 4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  }
};

export default function Hero({ fadeUp, staggerContainer }: HeroProps): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const currentX = (e.clientX - rect.left) / width - 0.5;
    const currentY = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(currentX);
    mouseY.set(currentY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0 bg-slate-950 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Matrix Mesh & Fluid Light Bleeds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-125 h-[500px] bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-[140px] [animation-duration:8s] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
        
        {/* TYPOGRAPHY CONTENT COLUMN */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="md:col-span-7 flex flex-col items-start space-y-8 text-left"
        >
          {/* Status Badge */}
          <motion.div 
            variants={fadeUp} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/60 backdrop-blur-md text-xs font-semibold shadow-2xl shadow-slate-950/80 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </motion.div>
          
          {/* Staggered Kinematic Name Header */}
          <div className="space-y-1">
            <motion.div 
              variants={charContainer}
              className="flex flex-wrap text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-100 leading-none"
            >
              {"Sunil Kumar Sah".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={individualChar}
                  className={`inline-block origin-bottom ${char === " " ? "pr-4" : ""} hover:text-cyan-400 hover:scale-105 transition-all duration-200`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Dynamic Typed Command subheader */}
            <motion.div 
              variants={fadeUp}
              className="flex items-center gap-2.5 font-mono text-xl sm:text-2xl md:text-3xl font-bold pt-1"
            >
              <Binary className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="relative flex items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Full-Stack MERN Developer
                <span className="w-2 h-6 md:h-8 ml-1.5 bg-indigo-400 animate-[ping_1.2s_infinite] inline-block shrink-0" />
              </div>
            </motion.div>
          </div>

          {/* Core Summary */}
          <motion.p 
            variants={fadeUp} 
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl font-medium"
          >
           <Bio />
          </motion.p>

          {/* Embedded Technical Metrics */}
          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-2 gap-4 w-full max-w-md pt-2 border-t border-slate-900"
          >
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-cyan-400" /> UI Layers
              </div>
              <p className="text-sm font-semibold text-slate-300">Asynchronous / Modular</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> State Engine
              </div>
              <p className="text-sm font-semibold text-slate-300">Atomic / Real-Time Link</p>
            </div>
          </motion.div>

          {/* Call to Action Interactive Links */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4 w-full">
            <motion.a 
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              href="#contact" 
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold hover:opacity-95 shadow-xl shadow-cyan-500/10 transition-all text-sm"
            >
              Initialize Handshake
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-slate-950" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.015, backgroundColor: "rgba(15, 23, 42, 0.6)", borderColor: "rgba(56, 189, 248, 0.2)" }}
              whileTap={{ scale: 0.985 }}
              href="#skills" 
              className="px-6 py-3.5 rounded-xl bg-slate-900/30 border border-slate-800 text-sm font-semibold text-slate-300 hover:text-slate-100 transition-all duration-200 shadow-md"
            >
              Inspect Core Stack
            </motion.a>
          </motion.div>
        </motion.div>

        {/* IMMERSIVE 3D PHOTO FRAME COLUMN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center items-center relative [perspective:1000px]"
        >
          <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-[25rem] md:h-[25rem] cursor-crosshair transition-all duration-200 ease-out"
          >
            {/* Immersive Glowing Aura Backing */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700 pointer-events-none" />
            
            {/* Abstract Floating Blueprint Frames */}
            <div className="absolute top-6 -left-6 w-full h-full rounded-2xl border border-dashed border-slate-800/80 pointer-events-none transform group-hover:translate-x-5 group-hover:translate-y-5 group-hover:border-indigo-500/20 transition-all duration-500 ease-out z-0" />
            <div className="absolute -top-6 left-6 w-full h-full rounded-2xl border border-dashed border-cyan-500/5 pointer-events-none transform group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:border-cyan-500/20 transition-all duration-500 ease-out z-0" />
            
            {/* Glass Box Housing Profile Media */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-900 bg-slate-900/20 p-2 backdrop-blur-md shadow-2xl group-hover:border-slate-700/50 transition-colors duration-500 z-10">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-950">
                <img 
                  src={profileImage} 
                  alt="Sunil Kumar Sah"
                  className="w-full h-full object-cover brightness-[0.80] contrast-[1.05] grayscale group-hover:grayscale-0 group-hover:scale-[1.04] group-hover:brightness-100 transition-all duration-700 ease-out" 
                />
                
                {/* Visual Glass Lighting Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 mix-blend-overlay" />
              </div>
            </div>

            {/* Float Monitor Data Callout Tag */}
            <div className="absolute -bottom-4 -right-4 bg-slate-900/95 border border-slate-800/80 px-3.5 py-2.5 rounded-xl backdrop-blur-xl opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 pointer-events-none hidden sm:block shadow-2xl z-20">
              <p className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase font-black">Runtime Matrix</p>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">Fully Compiled</p>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}