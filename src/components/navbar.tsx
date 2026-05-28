import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/40 bg-slate-950/50 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#" 
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
        >
          S<span className="text-cyan-400">.</span>SAH
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center space-x-8 text-xs uppercase font-semibold tracking-widest text-slate-400"
        >
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-xl bg-slate-800/80 text-white border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            Connect
          </a>
        </motion.div>
      </nav>
    </header>
  );
}