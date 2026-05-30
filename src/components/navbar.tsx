import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Code2 } from "lucide-react";

export default function Navbar(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
  ];


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      
      const offset = isScrolled ? 90 : 110; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center ${
          isScrolled
            ? "top-4 px-4 md:px-0"
            : "top-0 px-0"
        }`}
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 18 }}
          className={`w-full max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center transition-all duration-500 relative ${
            isScrolled
              ? "rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl shadow-2xl shadow-slate-950/50"
              : "border-b border-slate-900 bg-transparent backdrop-blur-0"
          }`}
        >
          
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group relative z-50"
          >
            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-sans">
              S<span className="text-cyan-400">.</span>SAH
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-2 text-[11px] uppercase font-mono font-bold tracking-widest text-slate-400">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-slate-400 hover:text-slate-100 transition-colors rounded-lg duration-300"
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navbarHoverHighlight"
                    className="absolute inset-0 bg-slate-900/60 border border-slate-800/40 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  />
                )}
                {link.name}
              </a>
            ))}

            <div className="pl-4">
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/20 hover:to-indigo-500/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400/40 font-mono tracking-normal capitalize text-xs font-bold transition-all shadow-lg shadow-cyan-500/5"
              >
                <Terminal className="w-3.5 h-3.5" />
                Connect_
              </motion.a>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100 rounded-xl transition-all relative z-50"
            aria-label="Toggle Command Interface"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-2xl border border-slate-900 bg-slate-950/95 backdrop-blur-2xl shadow-2xl flex flex-col space-y-4 md:hidden"
          >
            <div className="flex flex-col space-y-1">
              <p className="text-[9px] font-mono font-bold tracking-widest text-slate-600 uppercase">Directory Routes</p>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="py-3 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors border-b border-slate-900 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">// 0{idx + 1}</span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-slate-950" />
              Initialize Handshake
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}