import React from 'react';
// FIX: Import Variants type from framer-motion to explicitly type animation variants.
// This helps TypeScript correctly interpret the properties like 'ease'.
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface MenuOverlayProps {
    isOpen: boolean;
    closeMenu: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, closeMenu }) => {
  // FIX: Explicitly type menuVariants with the Variants type.
  const menuVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  // FIX: Explicitly type navLinkVariants with the Variants type.
  const navLinkVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 bg-brand-dark text-white p-8 md:p-16"
        >
          <button onClick={closeMenu} className="absolute top-8 right-8 text-3xl font-light transition-transform hover:scale-125 hover:rotate-90">✕</button>

          <div className="flex flex-col h-full items-center justify-center">
            <motion.nav 
              className="flex flex-col space-y-4 text-center"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.a variants={navLinkVariants} href="#" onClick={closeMenu} className="text-5xl font-bold transition-colors hover:text-brand-accent">Home</motion.a>
              <motion.a variants={navLinkVariants} href="#" onClick={closeMenu} className="text-5xl font-bold transition-colors hover:text-brand-accent">Projects</motion.a>
              <motion.a variants={navLinkVariants} href="#" onClick={closeMenu} className="text-5xl font-bold transition-colors hover:text-brand-accent">About Us</motion.a>
              <motion.a variants={navLinkVariants} href="#" onClick={closeMenu} className="text-5xl font-bold transition-colors hover:text-brand-accent">Contact</motion.a>
            </motion.nav>
            <motion.div 
              className="absolute bottom-16 text-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
                <p>creoarchitects1@gmail.com</p>
                <p>+91 9705075741</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;