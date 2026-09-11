import React from "react";
import { motion, type Variants } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  location: string;
}

export default function EducationSection(): React.JSX.Element {
  const education: EducationItem[] = [
    {
      degree: "BSc. Computer Science & Information Technology (CSIT)",
      institution: "Himalaya College of Engineering (Tribhuvan University)",
      timeline: "2023 — Present",
      location: "Chyasal, Lalitpur, Nepal",
    },
    {
      degree: "+2 Science Stream",
      institution: "Little Star Higher Secondary Boarding School (NEB)",
      timeline: "2021 — 2023",
      location: "Kathmandu, Nepal",
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Little Star Higher Secondary Boarding School",
      timeline: "2020",
      location: "Lahan, Siraha, Nepal",
    },
  ];

  return (
    <section id="education" className="relative bg-[#0a0a0a] text-neutral-100 font-sans antialiased px-6 py-32 overflow-hidden min-h-screen flex flex-col justify-center selection:bg-neutral-200 selection:text-neutral-900">
      
      {/* Subtle background grid & ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-neutral-800/10 via-neutral-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-400" /> Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-100">
            Education Profile
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Tracing formal academic pathways and foundational milestones in science and computer engineering.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Stepper Axis Line */}
          <div className="hidden md:flex md:col-span-1 justify-center relative">
            <motion.div 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute top-2 bottom-2 w-[1px] bg-neutral-800 origin-top" 
            />
          </div>

          {/* Main List Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:col-span-11 space-y-6 relative"
          >
            {education.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="relative flex flex-col md:flex-row gap-6 group"
              >
                {/* Stepper Node Pointer Anchor */}
                <div className="hidden md:block absolute -left-[49px] top-6 z-20">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border border-neutral-700 group-hover:border-neutral-400 transition-colors duration-200 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-neutral-200 transition-colors" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="w-full p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md group-hover:border-neutral-700 transition-all duration-300 shadow-xl relative overflow-hidden text-left">
                  
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-40" />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-normal text-neutral-100 tracking-tight group-hover:text-neutral-200 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-light text-neutral-400 flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                        <span>{item.institution}</span>
                      </p>
                    </div>

                    {/* Timeline Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-300 shrink-0 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      {item.timeline}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-neutral-800/80 text-xs font-mono text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{item.location}</span>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}