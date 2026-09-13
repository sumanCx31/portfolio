import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import "./../assets/style/index.css";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import Bio from "../section/bio";
import suman from "./../assets/profile.jpg";

interface HeroProps {
  fadeUp: Variants;
  staggerContainer: Variants;
}

const charContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: 0.1 },
  },
};

const individualChar: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export default function Hero({
  fadeUp,
  staggerContainer,
}: HeroProps): React.JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] text-neutral-100 font-sans antialiased py-32 selection:bg-neutral-200 selection:text-neutral-900 overflow-hidden"
    >
      {/* Subtle atmospheric background glow & fine grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-neutral-800/10 via-neutral-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* TYPOGRAPHY CONTENT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Classic Editorial Metadata Banner */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-xs tracking-widest uppercase text-neutral-400 font-mono"
          >
            <span className="w-8 h-[1px] bg-neutral-700" />
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-neutral-400" /> AI/ML Engineer &
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Elegant Name & Tagline */}
          <div className="space-y-3">
            <motion.div
              variants={charContainer}
              className="flex flex-wrap text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-neutral-100 leading-[1.05]"
            >
              {"Sunil Kumar Sah".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={individualChar}
                  className={`inline-block ${char === " " ? "pr-3.5" : ""} hover:text-neutral-300 transition-colors duration-200`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-neutral-400 text-lg sm:text-xl font-light tracking-wide pt-1"
            >
              Building intelligent applications and data-driven solutions.
            </motion.p>
          </div>

          {/* Core Biography Container */}
          <motion.div
            variants={fadeUp}
            className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal border-l border-neutral-800 pl-4 my-1"
          >
            <Bio />
          </motion.div>

          {/* Refined Actions Group */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3.5 pt-3 w-full"
          >
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group inline-flex items-center gap-2 px-5.5 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-medium hover:bg-white transition-all text-sm tracking-wide shadow-sm"
            >
              <Terminal className="w-4 h-4 text-neutral-800" />
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-800" />
            </motion.a>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#skills"
              className="px-5.5 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-300 hover:text-neutral-100 hover:border-neutral-700 transition-all"
            >
              View Expertise
            </motion.a>
          </motion.div>
        </motion.div>

        {/* STYLISH CLASSIC PHOTO FRAME COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative perspective-[1200px]"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="relative group w-72 h-85 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[460px] cursor-default transition-transform duration-150 ease-out"
          >
            {/* Deep Layered Drop Shadow */}
            <div className="absolute inset-0 rounded-2xl bg-neutral-950/80 shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.05)]" />

            {/* Minimalist Architectural Corner Accents */}
            <div className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-neutral-700 z-20 pointer-events-none transition-colors group-hover:border-neutral-400" />
            <div className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-neutral-700 z-20 pointer-events-none transition-colors group-hover:border-neutral-400" />
            <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-neutral-700 z-20 pointer-events-none transition-colors group-hover:border-neutral-400" />
            <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-neutral-700 z-20 pointer-events-none transition-colors group-hover:border-neutral-400" />

            {/* Inner Frame */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 backdrop-blur-md p-2.5 shadow-inner z-10">
              <div className="w-full h-full rounded-lg overflow-hidden relative bg-neutral-950">
                <img
                  src={suman}
                  alt="Sunil Kumar Sah"
                  className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Cinematic Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-75" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
