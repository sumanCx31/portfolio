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
  FileText,
  BrainCircuit,
  Database,
  BarChart3
} from "lucide-react";
import certificate from "../assets/mern-certificate.pdf";

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
    { name: "React.js", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Node.js", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Express.js", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "MongoDB", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Redux Toolkit", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "JWT Auth", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "REST APIs", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Tailwind CSS", style: "bg-neutral-900 border-neutral-800 text-neutral-300" }
  ];

  const aiMlBadges: TechBadge[] = [
    { name: "Python", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "NumPy", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Pandas", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Scikit-learn", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Machine Learning", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Data Analysis", style: "bg-neutral-900 border-neutral-800 text-neutral-300" },
    { name: "Matplotlib", style: "bg-neutral-900 border-neutral-800 text-neutral-300" }
  ];

  return (
    <section id="experience" className="relative bg-[#0a0a0a] text-neutral-100 font-sans antialiased px-6 py-32 overflow-hidden min-h-screen flex flex-col justify-center selection:bg-neutral-200 selection:text-neutral-900">
      
      {/* Subtle background grid & ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-neutral-800/10 via-neutral-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <Terminal className="w-3.5 h-3.5 text-neutral-400" /> Engineering_Labs: production_readiness
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-100">
            Training & Experience
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl font-light leading-relaxed">
            Building production-ready software systems while developing practical expertise in AI, machine learning, data analysis, and full-stack development.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Progression Vertical Bar */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative">
            <motion.div 
              variants={progressLineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute top-3 bottom-3 w-[1px] bg-neutral-800 origin-top" 
            />
          </div>

          {/* Main Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-11 text-left relative"
          >
            <motion.div 
              variants={frameVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md hover:border-neutral-700 transition-all duration-300 shadow-2xl group overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-60" />
              
              <Code2 className="absolute right-6 top-8 w-32 h-32 text-neutral-900/40 pointer-events-none group-hover:text-neutral-800/30 group-hover:rotate-6 transition-all duration-500" />

              {/* Node Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-neutral-800/80 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="px-2.5 py-1 text-[10px] font-mono font-medium rounded border bg-neutral-900 border-neutral-800 text-neutral-300 tracking-wider uppercase">
                      Hands-on Experience
                    </div>
                    <div className="inline-flex items-center gap-1 font-mono text-[11px] text-neutral-400">
                      <TrendingUp className="w-3.5 h-3.5" /> Full-Stack + AI/ML
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-neutral-100 tracking-tight group-hover:text-neutral-200 transition-colors">
                    MERN Stack Developer Training
                  </h3>
                  <p className="text-sm font-mono text-neutral-400">
                    Broadway Infosys
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start gap-2 sm:items-end shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" /> Completed
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[10px] font-mono text-neutral-500">
                    <MapPin className="w-3 h-3" /> Kathmandu, Nepal
                  </div>
                </div>
              </div>

              {/* Skills Badge Hardware Matrix */}
              <div className="py-6 space-y-3 relative z-10">
                <h4 className="text-[10px] font-mono font-medium uppercase text-neutral-500 tracking-widest flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5" /> Core Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mernStackBadges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1 rounded-md border text-xs font-mono font-normal transition-all hover:scale-102 duration-200 ${badge.style}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI/ML Training Section */}
              <div className="pt-6 border-t border-neutral-800/80 space-y-4 relative z-10">
                <h4 className="text-[10px] font-mono font-medium uppercase text-neutral-500 tracking-widest flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5" /> Current AI/ML Development
                </h4>

                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/40 hover:border-neutral-700 transition-all group/aiml shadow-inner">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h5 className="text-sm font-medium text-neutral-200 group-hover/aiml:text-neutral-100 transition-colors flex items-center gap-1.5">
                        <BrainCircuit className="w-4 h-4 text-neutral-400" />
                        AI/ML Training & Projects
                      </h5>
                      <span className="text-[10px] font-mono bg-neutral-900 text-neutral-300 border border-neutral-800 px-2.5 py-0.5 rounded">
                        Active Focus
                      </span>
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      Expanding expertise into Python, machine learning, and data science. Working through data preprocessing, exploratory data analysis, feature engineering, model training, and performance evaluation to build intelligent, data-driven applications.
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {aiMlBadges.map((badge, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 rounded-md border text-xs font-mono font-normal transition-all hover:scale-102 duration-200 ${badge.style}`}
                        >
                          {badge.name}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      <div className="flex items-center gap-2 rounded-lg bg-neutral-950 border border-neutral-800/80 px-3 py-2">
                        <Database className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[10px] font-mono text-neutral-400">Data Preprocessing</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-neutral-950 border border-neutral-800/80 px-3 py-2">
                        <BarChart3 className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[10px] font-mono text-neutral-400">EDA & Visualization</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-neutral-950 border border-neutral-800/80 px-3 py-2">
                        <BrainCircuit className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[10px] font-mono text-neutral-400">Model Evaluation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Production Build Highlight */}
              <div className="pt-6 border-t border-neutral-800/80 space-y-4 relative z-10">
                <h4 className="text-[10px] font-mono font-medium uppercase text-neutral-500 tracking-widest flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5" /> Production Build Highlight
                </h4>
                
                <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/40 hover:border-neutral-700 transition-all group/project shadow-inner">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h5 className="text-sm font-medium text-neutral-200 group-hover/project:text-neutral-100 transition-colors flex items-center gap-1.5">
                        <ChevronRight className="w-4 h-4 text-neutral-500 group-hover/project:text-neutral-300 transition-transform group-hover/project:translate-x-0.5" />
                        Full-Scale E-Commerce Application
                      </h5>
                      <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                        JWT Auth & Redux Toolkit
                      </span>
                    </div>
                    
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      Architected an end-to-end e-commerce store with secure stateless token routing architectures (JWT), structured RESTful API endpoints via Express, atomic Redux Toolkit state pipelines, and robust database schemas in MongoDB for seamless CRUD operations.
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT Auth"].map((t, i) => (
                        <span key={i} className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* System Verification Footer */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-200">MERN Stack Certification Verified</p>
                    <p className="text-[10px] font-mono text-neutral-500">Broadway Infosys // Credential Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <a 
                    href={certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 hover:bg-white text-xs font-medium text-neutral-950 transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    View Certificate
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}