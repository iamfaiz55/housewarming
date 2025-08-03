"use client";
import { motion } from 'framer-motion';

export default function LanguageToggle({ language, onToggle }) {
  return (
    <motion.div 
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        onClick={onToggle}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === 'en' ? 'हिंदी' : 'English'}
      </motion.button>
    </motion.div>
  );
}