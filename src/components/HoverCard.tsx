import React, {type  ReactNode } from 'react';
import { motion,type MotionProps } from 'framer-motion';

// Merge custom props with standard Framer Motion div props
interface HoverCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = "", ...props }: HoverCardProps): React.JSX.Element {
  return (
    <motion.div
      {...props} // Spreads parent variants (like fadeUp) smoothly
      whileHover={{ 
        y: -8,
        scale: 1.02,
        borderColor: "rgba(34, 211, 238, 0.4)",
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.7)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}