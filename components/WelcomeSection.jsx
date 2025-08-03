// File: components/WelcomeSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function WelcomeSection({ data, image }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-12 px-4 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8">
          <div className="text-sm font-medium text-yellow-600 mb-2 tracking-wide">{data.greeting}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">{data.title}</h1>
          <p className="text-xl md:text-2xl text-yellow-600 font-medium mb-2">{data.subtitle}</p>
          <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-6">{data.family}</div>
        </motion.div>

        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="mb-8">
          <img src={image} alt="House" className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          {data.message}
        </motion.p>

        {data.quote && (
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 italic text-gray-600 text-base md:text-lg"
          >
            “{data.quote}”
          </motion.blockquote>
        )}

        {data.note && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-sm text-gray-500"
          >
            {data.note}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
