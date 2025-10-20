import React from 'react';
import { motion } from 'framer-motion';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  [key: string]: any;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className, delay = 0, ...rest }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;