import React from 'react';
import { motion } from 'framer-motion';
import "../assets/style/index.css"

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="py-32 border-t border-slate-900 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-12 md:p-16 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/20 border border-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Initiate Connection</h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed mb-12">
          Seeking an entry-level opportunity to solve complex technical challenges within a professional development team. Drop a query over my contact end-points.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="mailto:sumansah029@gmail.com" className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-colors">
            ✉️ sumansah029@gmail.com
          </a>
          <a href="tel:+9779702790990" className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 font-bold text-sm transition-colors">
            📞 +977 9702790990
          </a>
          <a href="https://github.com/sumanCx31" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/40 font-bold text-sm transition-colors">
            🌐 GitHub Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
}