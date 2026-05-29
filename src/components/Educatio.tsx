import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  Terminal,
  Activity,
  Layers
} from "lucide-react";

// --- FRAMER MOTION STAGGER CONFIGS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 16 }
  }
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

interface EducationItem {
  degree: string;
  institution: string;
  board: string;
  timeline: string;
  location: string;
  status?: string;
  metrics: string;
  details: string[];
  accentColor: string;
}

export default function EducationSection(): React.JSX.Element {
  const academicPath: EducationItem[] = [
    {
      degree: "BSc. Computer Science & Information Technology (CSIT)",
      institution: "Himalaya College of Engineering",
      board: "Tribhuvan University",
      timeline: "2022 — Present",
      location: "Chyasal, Lalitpur, Nepal",
      status: "Currently in 7th Semester",
      metrics: "CGPA: 3.78 / 4.00 (Current Track)",
      details: [
        "Specializing in Advanced Web Architecture, Distributed Systems, and Data Structures.",
        "Building end-to-end full-stack systems alongside regular engineering lab coursework.",
        "Active contributor to college tech bootcamps and algorithmic hackathons."
      ],
      accentColor: "from-cyan-400 to-blue-500"
    },
    {
      degree: "+2 Higher Secondary Education (Science Stream)",
      institution: "Little Star Higher Secondary Boarding School",
      board: "National Examination Board (NEB)",
      timeline: "2020 — 2022",
      location: "Kathmandu, Nepal",
      metrics: "Top 5% Tier Performance",
      details: [
        "Major Modules: Physics, Mathematics, and Computer Science architectures.",
        "Developed custom standalone core automation utilities using foundational C/C++ tracks."
      ],
      accentColor: "from-blue-500 to-indigo-500"
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Little Star Higher Secondary Boarding School",
      board: "Government of Nepal",
      timeline: "Graduated 2020",
      location: "Kathmandu, Nepal",
      metrics: "GPA: 3.90 / 4.00",
      details: [
        "Graduated with distinction honors, accelerating directly into tech streams.",
        "Elected Student Tech Group Leader handling basic networking configurations."
      ],
      accentColor: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <section id="education" className="relative bg-slate-950 text-slate-100 font-sans antialiased px-6 py-28 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Visual Canvas Mesh Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-20">
        
        {/* Header Block Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 font-mono uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Academic Node Branches
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
            Education Profile
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Tracking the timeline parameters of my system knowledge base from foundational mathematics down into computer science abstractions.
          </p>
        </motion.div>

        {/* Timeline Pipeline Section Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          
          {/* THE STEPPER AXIS LINE (Hidden on Mobile) */}
          <div className="hidden md:flex md:col-span-1 justify-center relative">
            <motion.div 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-900 origin-top" 
            />
          </div>

          {/* MAIN CHANNELS DATA LIST CARDS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-11 space-y-12 relative"
          >
            {academicPath.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="relative flex flex-col md:flex-row gap-6 group"
              >
                {/* Stepper Node Pointer Bubble Anchor (Transforms position over center tracking vector line) */}
                <div className="hidden md:block absolute -left-[49px] top-6 z-20">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-cyan-400 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors" />
                  </div>
                </div>

                {/* Primary Content Glass Frame Slat */}
                <div className="w-full p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-xl group-hover:border-slate-800/80 transition-all duration-300 shadow-xl relative overflow-hidden text-left">
                  
                  {/* Subtle top horizontal accent ribbon border */}
                  <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${item.accentColor} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-medium">
                        <span className="text-slate-200 font-semibold">{item.institution}</span>
                        <span className="text-slate-600 font-mono">|</span>
                        <span>{item.board}</span>
                      </div>
                    </div>

                    {/* Timeline Tracker Stamp Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-900 font-mono text-[11px] text-slate-400 font-semibold shrink-0 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.timeline}
                    </div>
                  </div>

                  {/* Operational Tags (Semester Status + Metrics Trackers) */}
                  <div className="flex flex-wrap gap-2.5 mt-5">
                    {item.status && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/5 border border-cyan-500/20 text-[11px] font-mono font-bold text-cyan-400">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        {item.status}
                      </div>
                    )}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/5 border border-indigo-500/10 text-[11px] font-mono font-medium text-indigo-400">
                      <Award className="w-3.5 h-3.5" />
                      {item.metrics}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 text-[11px] font-mono text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </div>
                  </div>

                  {/* Bullet Summary Lists block */}
                  <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-900/60">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2.5">
                        <BookOpen className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}