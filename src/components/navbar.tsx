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
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = isScrolled ? 80 : 100; 
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
        className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          isScrolled
            ? "top-4 px-4 md:px-0"
            : "top-0 px-0"
        }`}
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center transition-all duration-300 relative ${
            isScrolled
              ? "rounded-xl border border-neutral-800 bg-neutral-950/90 backdrop-blur-xl shadow-2xl shadow-neutral-950/50"
              : "border-b border-neutral-950 bg-transparent"
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
            <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
              <Code2 className="w-4 h-4 text-neutral-300" />
            </div>
            <span className="text-xl font-medium tracking-tighter text-neutral-100 font-sans">
              SKS
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-1 text-xs font-mono font-medium tracking-wider text-neutral-400">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3.5 py-2 text-neutral-400 hover:text-neutral-100 transition-colors rounded-md"
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navbarHoverHighlight"
                    className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-md -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}

            <div className="pl-3">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-mono text-xs font-medium transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                Connect_
              </motion.a>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-neutral-100 rounded-lg transition-colors relative z-50"
            aria-label="Toggle Command Interface"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-xl border border-neutral-800 bg-neutral-950/95 backdrop-blur-2xl shadow-2xl flex flex-col space-y-4 md:hidden"
          >
            <div className="flex flex-col space-y-1">
              <p className="text-[10px] font-mono font-medium tracking-widest text-neutral-500 uppercase">Directory Routes</p>
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="py-3 text-sm font-medium text-neutral-300 hover:text-neutral-100 transition-colors border-b border-neutral-900 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-neutral-600">// 0{idx + 1}</span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="w-full text-center py-2.5 rounded-lg bg-neutral-100 text-neutral-950 font-medium text-xs font-mono shadow-md flex items-center justify-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-neutral-950" />
              Initialize Handshake
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}