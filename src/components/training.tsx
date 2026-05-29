import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  Terminal, 
  Calendar, 
  MapPin, 
  Code2, 
  FolderGit2, 
  Award, 
  ChevronRight,
  TrendingUp,
  Boxes,
  Sparkles,
  FileText
} from "lucide-react";
import certificate from "../assets/mern-certificate.pdf";

// --- MOTION ANIMATION STACK ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const frameVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 16 }
  }
};

const progressLineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 1, ease: "linear" }
  }
};

interface TechBadge {
  name: string;
  style: string;
}

export default function TrainingExperience(): React.JSX.Element {
  
  const mernStackBadges: TechBadge[] = [
    { name: "React.js", style: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" },
    { name: "Node.js", style: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
    { name: "Express.js", style: "bg-slate-500/10 border-slate-500/20 text-slate-300" },
    { name: "MongoDB", style: "bg-green-500/10 border-green-500/20 text-green-400" },
    { name: "Redux Toolkit", style: "bg-purple-500/10 border-purple-500/20 text-purple-400" },
    { name: "JWT Auth", style: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
    { name: "REST APIs", style: "bg-teal-500/10 border-teal-500/20 text-teal-400" },
    { name: "Tailwind CSS", style: "bg-sky-500/10 border-sky-500/20 text-sky-400" }
  ];

  return (
    <section id="experience" className="relative bg-slate-950 text-slate-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Dynamic Ambiance Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-[160px] animate-pulse pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-16">
        
        {/* Section Title Unit */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Engineering_Labs: production_readiness
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
            Training & Experience
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Supercharging raw logic into production-grade systems through rigorous, hands-on full-stack development.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* THE PROGRESSION VERTICAL BAR VECTOR */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative">
            <motion.div 
              variants={progressLineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-600 to-transparent origin-top" 
            />
          </div>

          {/* MAIN COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-11 text-left relative"
          >
            <motion.div 
              variants={frameVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-xl hover:border-slate-800/80 transition-all duration-300 shadow-2xl group overflow-hidden"
            >
              {/* Top Accent Tech Bar Glow */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <Code2 className="absolute right-6 top-8 w-32 h-32 text-slate-900/10 pointer-events-none group-hover:text-cyan-500/5 group-hover:rotate-6 transition-all duration-500" />

              {/* Node Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-900/60 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="px-2.5 py-1 text-[10px] font-mono font-black rounded-md border bg-slate-950 border-slate-900 text-cyan-400 tracking-wider uppercase">
                      Hands-on Experience
                    </div>
                    <div className="inline-flex items-center gap-1 font-mono text-[11px] text-indigo-400 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" /> Full-Stack Curriculum
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                    MERN Stack Developer Training
                  </h3>
                  <p className="text-base font-bold text-slate-300">
                    Broadway Infosys
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start gap-2 sm:items-end shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-900 font-mono text-[11px] text-slate-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> Completed
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[10px] font-mono text-slate-500">
                    <MapPin className="w-3 h-3" /> Kathmandu, Nepal
                  </div>
                </div>
              </div>

              {/* SKILLS BADGE HARDWARE MATRIX */}
              <div className="py-6 space-y-3 relative z-10">
                <h4 className="text-[10px] font-mono font-black uppercase text-slate-500 tracking-widest flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5" /> Core Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mernStackBadges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2.5 py-1 rounded-md border text-xs font-mono font-semibold transition-all hover:scale-105 duration-200 ${badge.style}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* CORE E-COMMERCE LAB IMPLEMENTATION */}
              <div className="pt-6 border-t border-slate-900/60 space-y-4 relative z-10">
                <h4 className="text-[10px] font-mono font-black uppercase text-slate-500 tracking-widest flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5" /> Production Build Highlight
                </h4>
                
                <div className="p-5 rounded-xl border border-slate-900/80 bg-slate-950/40 hover:border-slate-800 transition-all group/project shadow-inner">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="text-base font-bold text-slate-200 group-hover/project:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover/project:text-cyan-500 transition-transform group-hover/project:translate-x-0.5" />
                        KinmelNow — Full-Scale E-Commerce Application
                      </h5>
                      <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded font-bold">
                        Cap Stone Build
                      </span>
                    </div>
                    
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      Gained rigorous, industry-grade hands-on experience by architecting an end-to-end e-commerce store. 
                      Engineered secure stateless token routing architectures (**JWT**), structured **RESTful API endpoints** via Express, built atomic **Redux Toolkit** pipelines, and configured absolute database schemas in **MongoDB** for seamless CRUD management routines.
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT Auth"].map((t, i) => (
                        <span key={i} className="text-[10px] font-mono font-bold bg-slate-900 border border-slate-800/60 px-2 py-0.5 rounded text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SYSTEM VERIFICATION FOOTER */}
              <div className="mt-8 pt-6 border-t border-slate-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-cyan-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">MERN Stack Certification Verified</p>
                    <p className="text-[10px] font-mono text-slate-500">Broadway Infosys // Credential Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <a 
                    href={certificate}
                    target="_bin"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-bold text-slate-950 transition-all duration-200 active:scale-95 shadow-lg shadow-cyan-500/10"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    View Certificate
                  </a>

                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-900 text-[10px] font-mono font-bold text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    HANDS-ON CORE COMPLETE
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}