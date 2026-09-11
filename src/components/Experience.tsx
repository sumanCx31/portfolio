import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import projectsData from "../section/projects";
import { 
  FolderGit2, 
  ArrowUpRight,
} from "lucide-react";

// --- INTERFACES ---
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
    transition: { staggerChildren: 0.1 }
  }
};

const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.2 } }
};

export default function ProjectShowcase(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter((proj: any) => proj.category === activeFilter);

  return (
    <section id="projects" className="relative bg-[#0a0a0a] text-neutral-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      
      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800/80 pb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-3 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span className="w-6 h-[1px] bg-neutral-600" />
              <span>Case Studies</span>
              <span className="w-6 h-[1px] bg-neutral-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-100">
              Production Builds
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              A curated directory of full-stack systems built around concrete data flows, real-time message streams, and transactional integrity.
            </p>
          </motion.div>

          {/* Filtering Engine Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg w-fit"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${
                  activeFilter === cat.id ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {activeFilter === cat.id && (
                  <motion.div 
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-neutral-100 rounded-md z-0"
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
            {filteredProjects.map((project: any) => (
              <motion.div
                layout
                key={project.id}
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between h-full rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-all duration-200 shadow-xl overflow-hidden"
              >
                {/* Top Interactive Blueprint Box Cover */}
                <div className="p-6 pb-0 relative z-10">
                  <div className="w-full h-36 rounded-lg bg-neutral-950 border border-neutral-800/80 flex flex-col justify-center items-center relative overflow-hidden group-hover:border-neutral-700 transition-colors">
                    <div className="absolute p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 group-hover:text-neutral-100 transition-colors">
                      {project.icon || <FolderGit2 className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Content Block Details */}
                <div className="p-6 space-y-3 relative z-10 grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-medium text-neutral-100 group-hover:text-white transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.metric && (
                    <div className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-neutral-400" />
                      {project.metric}
                    </div>
                  )}
                </div>

                {/* Interactive Card Action Footer */}
                <div className="p-6 pt-0 border-t border-neutral-800/60 mt-2 relative z-10 space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tech.map((badge: string) => (
                      <span 
                        key={badge} 
                        className="text-[10px] font-mono font-medium tracking-wide bg-neutral-950 text-neutral-400 px-2 py-0.5 border border-neutral-800 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-200 border border-neutral-800 bg-neutral-950 rounded-md transition-colors"
                      title="Inspect Architecture Source"
                    >
                      {/* <Github className="w-3.5 h-3.5" /> Source */}
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                      title="Launch Web Infrastructure"
                    >
                      Demo <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}