import React, { type ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

interface HoverCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = "", ...props }: HoverCardProps): React.JSX.Element {
  return (
    <motion.div
      {...props}
      whileHover={{ 
        y: -3,
        borderColor: "rgb(82, 82, 82)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      className={`bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}