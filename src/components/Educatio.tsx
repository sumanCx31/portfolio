import React from 'react';
import { type Variants } from 'framer-motion';
import HoverCard from './HoverCard';
import "../assets/style/index.css"

interface EducationProps {
  fadeUp: Variants;
}

export default function Education({ fadeUp }: EducationProps): React.JSX.Element {
  return (
    <section id="education" className="py-32 border-t border-slate-900">
      <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">// Theoretical Alignment</p>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16">Academic Foundation</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* University Level */}
        <HoverCard 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-between h-full min-h-[140px]"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400">2023 – 2027 (Ongoing)</span>
            <h3 className="text-xl font-bold tracking-tight mt-2 text-white">BSc. Computer Science & Information Technology</h3>
          </div>
          <p className="text-sm text-slate-400 mt-4">Himalaya College of Engineering, Tribhuvan University</p>
        </HoverCard>

        {/* Higher Secondary Level */}
        <HoverCard 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-between h-full min-h-[140px]"
        >
          <div>
            <span className="text-xs font-mono text-slate-500">Graduated 2023</span>
            <h3 className="text-xl font-bold tracking-tight mt-2 text-white">+2 Science Framework</h3>
          </div>
          <p className="text-sm text-slate-400 mt-4">CCRC, Balkumari, Kathmandu</p>
        </HoverCard>
      </div>
    </section>
  );
}