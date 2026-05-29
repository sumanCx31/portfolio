import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 

  ShoppingBag, 
  MessageSquare, 
  Bus, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

// --- INTERFACES ---
interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Real-Time" | "System-Design";
  description: string;
  tech: string[];
  github: string;
  demo: string;
  metric: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const projectsData: Project[] = [
  {
    id: "kinmelnow",
    title: "KinmelNow – MERN E-Commerce",
    category: "Full-Stack",
    description: "A secure, production-grade e-commerce engine featuring granular JWT user sessions, active inventory mutation tracks, custom admin analytics dashboards, and automated Stripe gateway checkout processing workflows.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
    github: "#",
    demo: "#",
    metric: "Integrated Webhooks & Secure Checkout",
    icon: <ShoppingBag className="w-5 h-5" />,
    bgGradient: "from-cyan-500/10 via-blue-500/5 to-transparent"
  },
  {
    id: "chat-room",
    title: "Real-Time Chat Ecosystem",
    category: "Real-Time",
    description: "A decoupled instant messaging core leveraging multi-room event duplexing via Socket.IO. Manages volatile state streams fluidly using Zustand with localized client packet caches to prevent layout re-render stutters.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Zustand", "Context API", "Tailwind CSS"],
    github: "#",
    demo: "#",
    metric: "Sub-10ms Bidirectional Latency",
    icon: <MessageSquare className="w-5 h-5" />,
    bgGradient: "from-indigo-500/10 via-purple-500/5 to-transparent"
  },
  {
    id: "bus-transport",
    title: "Online Bus Transit System",
    category: "System-Design",
    description: "An optimization-focused transit automation platform handling matrix-based vector seat selection, algorithmic structural route timetables, dynamic pricing rules, and atomic reservation logs.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Mongoose Structural Hooks"],
    github: "#",
    demo: "#",
    metric: "Atomic Matrix Seat Reservation Lock",
    icon: <Bus className="w-5 h-5" />,
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent"
  }
];

const filterCategories = [
  { id: "all", label: "All Artifacts" },
  { id: "Full-Stack", label: "Full-Stack Web" },
  { id: "Real-Time", label: "Real-Time WebSockets" },
  { id: "System-Design", label: "System Architectures" }
];

// --- ANIMATION SCHEMES ---
const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 16 }
  },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }
};

export default function ProjectShowcase(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" className="relative bg-slate-950 text-slate-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Structural Blueprint Mesh Canvas Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-900 pb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-left space-y-3 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" /> Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Production Builds
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A curated directory of full-stack systems built around concrete data flows, real-time message streams, and transactional integrity.
            </p>
          </motion.div>

          {/* Filtering Engine Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-1.5 p-1.5 bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-xl w-fit"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeFilter === cat.id ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeFilter === cat.id && (
                  <motion.div 
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Project Grid Layout */}
        <motion.div 
          layout
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(56, 189, 248, 0.3)",
                }}
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-900 bg-slate-900/20 backdrop-blur-xl overflow-hidden transition-colors duration-300 shadow-xl shadow-slate-950/40"
              >
                {/* Micro Ambient Glow Drop backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-b ${project.bgGradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

                {/* Top Interactive Blueprint Box Cover (Replaces raw screen mockups) */}
                <div className="p-6 pb-0 relative z-10">
                  <div className="w-full h-40 rounded-xl bg-slate-950/80 border border-slate-900/80 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-slate-800/60 transition-colors duration-300">
                    {/* Abstract grid lines inside the thumbnail box */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-10" />
                    
                    {/* Floating Component Wireframe Accents */}
                    <div className="w-4/5 space-y-2 opacity-20 group-hover:opacity-40 group-hover:scale-[1.02] transition-all duration-500 ease-out">
                      <div className="h-2 w-1/4 bg-slate-700 rounded" />
                      <div className="h-10 w-full bg-slate-900 border border-slate-800 rounded-md" />
                      <div className="h-6 w-2/3 bg-slate-900 border border-slate-800 rounded-md" />
                    </div>

                    <div className="absolute p-3 bg-slate-900/90 border border-slate-800 rounded-xl shadow-xl text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/20 transition-all duration-500 ease-out">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content Block Details */}
                <div className="p-6 space-y-4 relative z-10 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Optimization/Metric Indicator Badge */}
                  <div className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 text-[11px] font-semibold text-emerald-400/90">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    {project.metric}
                  </div>
                </div>

                {/* Interactive Card Action Footer */}
                <div className="p-6 pt-0 border-t border-slate-900/60 mt-2 relative z-10 space-y-4">
                  {/* Badges Flow Grid */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tech.map((badge) => (
                      <span 
                        key={badge} 
                        className="text-[10px] font-mono font-medium tracking-wide bg-slate-950/80 text-slate-400 px-2 py-0.5 border border-slate-900 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Actions Link Cluster */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <a 
                      href={project.github} 
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 border border-slate-800 bg-slate-950/40 rounded-lg transition-colors"
                      title="Inspect Architecture Source"
                    >
                      {/* <Github className="w-3.5 h-3.5" /> Source Code */}
                    </a>
                    <a 
                      href={project.demo} 
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:opacity-95 shadow-md shadow-cyan-500/5 transition-opacity"
                      title="Launch Web Infrastructure"
                    >
                      Deploy App <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Core Architecture Footer Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-6 flex justify-center text-[10px] font-mono tracking-widest text-slate-600 gap-2 items-center"
        >
          <Layers className="w-3 h-3 text-slate-600" /> DEPLOYED ARTIFACT RECORDS COMPILING SUCCESSFULLY
        </motion.div>

      </div>
    </section>
  );
}