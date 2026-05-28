import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  Database, 
  Cpu, 
  Layers, 
  ExternalLink,  
  Sparkles, 
  Code2, 
  Workflow, 
  Terminal 
} from "lucide-react";

// --- ANIMATION VARIANTS (Matches your core design) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 }
  }
};

export default function TechAndProjects() {
  
  // Dummy data representing your real project metrics
  const projects = [
    {
      title: "Nexus Chat",
      category: "Full Stack / Socket Ecosystem",
      description: "A high-fidelity workspace messaging engine deploying modular sub-rooms, real-time message stream caching, and responsive asynchronous layout states.",
      metrics: "Reduced state synchronization delay by 40%",
      tech: ["React", "TypeScript", "Node.js", "Socket.io", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "CoreEngine E-Comm",
      category: "Backend / Microservices",
      description: "An optimized RESTful transaction api handling distributed inventories, JWT session tracking, and decoupled gateway routing layers.",
      metrics: "Optimized workflow: Reduced checkout friction by 20%",
      tech: ["MongoDB", "Express", "Node.js", "Redis", "REST API"],
      liveLink: "#",
      githubLink: "#",
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen px-6 py-24 relative overflow-hidden">
      
      {/* Background Decorative Grid Mask */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)] opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-32">
        
        {/* =========================================================
            SECTION 1: THE BENTO TECH STACK
            ========================================================= */}
        <section id="skills" className="space-y-12">
          
          {/* Section Header */}
          <div className="text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" /> Core Competencies
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight"> Engineered Toolkit </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl"> Architecture patterns and tech stack applied to scale client layers. </p>
          </div>

          {/* Bento Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[12rem]"
          >
            {/* Box 1: Core MERN Stack (Large Card) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.4)" }}
              className="md:col-span-8 md:row-span-2 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl p-8 flex flex-col justify-between group transition-colors duration-300 shadow-xl shadow-slate-950/20"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase font-bold">Stack 01</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight text-slate-200">The MERN Monolith & Beyond</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  Advanced structuring using <span className="text-slate-200 font-semibold">MongoDB</span> for transactional storage, lightweight routing on <span className="text-slate-200 font-semibold">Express</span>, building declarative modular layouts inside <span className="text-slate-200 font-semibold">React</span>, and backing computations over asynchronous <span className="text-slate-200 font-semibold">Node.js execution kernels</span>.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["React", "Node.js", "Express", "MongoDB", "TypeScript"].map((t) => (
                    <span key={t} className="text-xs bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 text-slate-400 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Box 2: Asynchronous Systems (Medium Square) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(34, 211, 238, 0.4)" }}
              className="md:col-span-4 md:row-span-2 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl p-8 flex flex-col justify-between group transition-colors duration-300 shadow-xl shadow-slate-950/20"
            >
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl w-fit">
                <Workflow className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-tight text-slate-200">Real-Time Routing</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deeply familiar with duplex state links via WebSockets (Socket.io) to synchronize client clusters, event-driven pipes, and RESTful CRUD payload design patterns.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Socket.io", "REST APIs", "WebSockets"].map((t) => (
                    <span key={t} className="text-[11px] bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800 text-slate-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Box 3: Performance Metric Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(16, 185, 129, 0.4)" }}
              className="md:col-span-5 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl p-6 flex items-center gap-6 group transition-colors duration-300 shadow-xl shadow-slate-950/20"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">-20%</div>
              <div>
                <h4 className="text-sm font-bold text-slate-200">User Workflow Optimization</h4>
                <p className="text-xs text-slate-400 mt-0.5">Proven deployment metric tracking and architecture layout logic to slash user checkout friction blocks.</p>
              </div>
            </motion.div>

            {/* Box 4: Environment & Tooling */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(168, 85, 247, 0.4)" }}
              className="md:col-span-7 rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-xl p-6 flex flex-col justify-center space-y-2 group transition-colors duration-300 shadow-xl shadow-slate-950/20"
            >
              <div className="flex items-center gap-2 text-purple-400">
                <Terminal className="w-4 h-4" />
                <h4 className="text-sm font-bold text-slate-200">Tooling & Foundations</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Version control pipeline handling via Git/GitHub, runtime bundle compilation, state structures, and writing fluid utility layouts with Tailwind CSS.
              </p>
            </motion.div>
          </motion.div>
        </section>


        {/* =========================================================
            SECTION 2: FEATURED ARTIFACTS / PROJECTS
            ========================================================= */}
        <section id="projects" className="space-y-12">
          
          {/* Section Header */}
          <div className="text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Production Build History
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight"> Featured Projects </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl"> Real-world platforms built to run cleanly under production conditions. </p>
          </div>

          {/* Alternating Projects List */}
          <div className="space-y-8">
            {projects.map((proj, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-2xl border border-slate-800/60 bg-slate-900/20 backdrop-blur-md items-stretch ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Fake Interactive Component Blueprint Visual Box */}
                  <div className="w-full lg:w-[45%] rounded-xl bg-slate-950 border border-slate-800/80 p-6 flex flex-col justify-center items-center relative overflow-hidden group min-h-[16rem]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />
                    
                    {/* Mock Layout Wireframe Accent */}
                    <div className="w-full space-y-2.5 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                      <div className="h-3 w-1/3 bg-slate-800 rounded-md" />
                      <div className="h-8 w-full bg-slate-900 border border-slate-800 rounded-lg flex items-center px-3 justify-between">
                        <div className="h-2 w-1/2 bg-slate-700 rounded" />
                        <div className="h-4 w-4 rounded-full bg-indigo-500/40" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-14 bg-slate-900 border border-slate-800/60 rounded-lg" />
                        <div className="h-14 bg-slate-900 border border-slate-800/60 rounded-lg" />
                        <div className="h-14 bg-slate-900 border border-slate-800/60 rounded-lg" />
                      </div>
                    </div>
                    
                    <Code2 className="absolute text-slate-800 w-12 h-12 group-hover:scale-110 group-hover:text-indigo-500/20 transition-all duration-500" />
                  </div>

                  {/* Project Details */}
                  <div className="w-full lg:w-[55%] flex flex-col justify-between space-y-6 py-2">
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold tracking-wider text-cyan-400/90 uppercase">{proj.category}</span>
                        <h3 className="text-2xl font-bold tracking-tight text-slate-100 mt-0.5">{proj.title}</h3>
                      </div>
                      
                      <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
                        {proj.description}
                      </p>

                      {/* Performance Highlight Sticker */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        {proj.metrics}
                      </div>
                    </div>

                    {/* Bottom Action Footer info */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.tech.map((t) => (
                          <span key={t} className="text-[11px] bg-slate-900 px-2 py-0.5 border border-slate-800 rounded font-medium text-slate-400">{t}</span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <a href={proj.githubLink} className="p-2 text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-slate-700 bg-slate-950/40 rounded-lg transition-all" title="View Source">
                          {/* <Github className="w-4 h-4" /> */}
                        </a>
                        <a href={proj.liveLink} className="p-2 text-slate-950 hover:opacity-90 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-bold text-xs flex items-center gap-1 transition-all" title="Live Deploy">
                          <span className="hidden sm:inline">Launch</span> <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </section>

      </div>
    </div>
  );
}