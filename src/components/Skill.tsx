import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  Cpu, 
  Zap, 
  Layers 
} from "lucide-react";


interface Skill {
  name: string;
  level: number; 
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accentColor: string; 
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-5 h-5" />,
    accentColor: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux Toolkit", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "CSS3 & Semantic HTML", level: 95 },
    ],
  },
  {
    title: "Backend Architecture",
    icon: <Terminal className="w-5 h-5" />,
    accentColor: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "RESTful API Design", level: 92 },
    ],
  },
  {
    title: "Database Models",
    icon: <Database className="w-5 h-5" />,
    accentColor: "from-green-500 to-emerald-600",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose ODM", level: 88 },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: <Wrench className="w-5 h-5" />,
    accentColor: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Git Engine", level: 88 },
      { name: "GitHub Workflows", level: 85 },
      { name: "Postman Testing", level: 90 },
    ],
  },
];

const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const categoryCard: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

const skillBarGrow = (targetLevel: number): Variants => ({
  hidden: { width: "0%" },
  visible: {
    width: `${targetLevel}%`,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
  }
});

export default function TechSkills(): React.JSX.Element {
  return (
    <section id="skills" className="relative bg-slate-950 text-slate-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
        
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-16">
     
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-3 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/80 backdrop-blur-md text-xs font-semibold text-cyan-400 uppercase tracking-wider shadow-lg shadow-slate-950/50">
            <Cpu className="w-3.5 h-3.5 animate-spin [animation-duration:6s]" /> Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
            Capabilities & Tools
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            A comprehensive breakdown of architectural stacks and tooling environments engineered to build stable, responsive full-stack applications.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        >
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={categoryCard}
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(15, 23, 42, 0.45)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300"
            >
              
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${cat.accentColor} opacity-0 group-hover:opacity-10 blur-md transition-all duration-500 pointer-events-none`} />
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/60 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 group-hover:text-cyan-400 transition-colors`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                  Layer 0{idx + 1}
                </span>
              </div>

              <div className="space-y-5 relative z-10">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-slate-300 group-hover:text-slate-200 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 w-full bg-slate-950 border border-slate-900/60 rounded-full overflow-hidden relative shadow-inner">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillBarGrow(skill.level)}
                        className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${cat.accentColor} relative`}
                      >
                        <span className="absolute right-0 top-0 h-full w-2 bg-white blur-[2px] opacity-40 animate-pulse" />
                      </motion.div>
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[11px] font-mono tracking-wider text-slate-500 border-t border-slate-900"
        >
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-500" />
            <span>ASYNC-READY ARCHITECTURES</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>MODULAR STATE PARSING</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}