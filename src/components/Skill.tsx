import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Terminal,
  Database,
  Wrench,
  Cpu,
  BrainCircuit,
  BarChart3
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-4 h-4" />,
    skills: [
      { name: "Python", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "Scikit-learn", level: 78 },
      { name: "Machine Learning", level: 75 },
      { name: "Data Analysis", level: 82 },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-4 h-4" />,
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
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "RESTful API Design", level: 92 },
    ],
  },
  {
    title: "Database & Data",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose ODM", level: 88 },
      { name: "SQL", level: 65 },
      { name: "Data Visualization", level: 75 },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Vercel", level: 80 },
      { name: "Render", level: 75 },
    ],
  },
];

const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const categoryCard: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const skillBarGrow = (targetLevel: number): Variants => ({
  hidden: { width: "0%" },
  visible: {
    width: `${targetLevel}%`,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    },
  },
});

export default function TechSkills(): React.JSX.Element {
  return (
    <section
      id="skills"
      className="relative bg-[#0a0a0a] text-neutral-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-3 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span className="w-6 h-[1px] bg-neutral-600" />
            <span>Technology Stack</span>
            <span className="w-6 h-[1px] bg-neutral-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-100">
            Skills & Technologies
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            A combination of full-stack engineering and AI/ML capabilities,
            with a focus on building practical, scalable, and data-driven
            applications.
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
              whileHover={{ y: -2 }}
              className="group relative rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800/60 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {cat.icon}
                  </div>

                  <h3 className="text-base font-medium tracking-tight text-neutral-100">
                    {cat.title}
                  </h3>
                </div>

                <span className="text-[10px] font-mono font-medium tracking-widest text-neutral-500 uppercase">
                  Layer {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-4 relative z-10">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-normal text-neutral-300">
                        {skill.name}
                      </span>

                      <span className="font-mono text-xs text-neutral-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-neutral-950 border border-neutral-800 rounded-full overflow-hidden relative">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillBarGrow(skill.level)}
                        className="absolute left-0 top-0 h-full rounded-full bg-neutral-100"
                      />
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
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[11px] font-mono tracking-widest text-neutral-500 border-t border-neutral-800/80"
        >
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-3.5 h-3.5 text-neutral-400" />
            <span>AI/ML DEVELOPMENT</span>
          </div>

          <div className="flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5 text-neutral-400" />
            <span>DATA-DRIVEN SYSTEMS</span>
          </div>

          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-neutral-400" />
            <span>FULL-STACK ENGINEERING</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}