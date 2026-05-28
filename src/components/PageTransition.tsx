import React, {type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

// Explicitly typing the Framer Motion configuration variants
const transitionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Snappy cubic-bezier curve
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps): React.JSX.Element {
  return (
    <motion.div
      variants={transitionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      exit="exit"
    >
      {children}
    </motion.div>
  );
}