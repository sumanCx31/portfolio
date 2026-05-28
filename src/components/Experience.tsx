import React from 'react';
import { motion } from 'framer-motion';
import "./../assets/style/index.css"

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-32 border-t border-slate-900">
      <div className="max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">// Career Progress Track</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16">Training & Experience</h2>
      </div>

      <div className="relative border-l border-slate-800/80 pl-8 ml-4 space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-[3px] border-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          <div className="text-xs font-mono text-cyan-400 mb-1">PROFESSIONAL SPECIALIZATION</div>
          <h3 className="text-2xl font-bold tracking-tight text-white">MERN Stack Development Training</h3>
          <p className="text-slate-400 text-sm font-semibold">Broadway Infosys, Kathmandu</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 text-xs text-slate-400">
              Built fully functional end-to-end full-stack web architectures.
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 text-xs text-slate-400">
              Implemented complete modular API integrations & asynchronous interface states.
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 text-xs text-slate-400">
              Gained substantial execution insights via structured real-world micro-deployments.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}