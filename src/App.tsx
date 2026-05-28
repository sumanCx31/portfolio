import React from 'react';
import { type  Variants } from 'framer-motion';

// Layout Structural Core Sections
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Skills from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Educatio';
import Contact from './components/Contact';

import "./assets/style/index.css";

// Shared Animation Keyframes Configuration
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function App(): React.JSX.Element {
  return (
    <div className="text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative antialiased">
      <BackgroundGrid />
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <Hero fadeUp={fadeUp} staggerContainer={staggerContainer} />
        <Skills />
        <Experience />
        <Education fadeUp={fadeUp} />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-900/50 text-center text-xs text-slate-600 tracking-wider">
        <p>&copy; 2026 SUNIL KUMAR SAH. DEVELOPED VIA REACT + TSX + MOTION.</p>
      </footer>
    </div>
  );
}