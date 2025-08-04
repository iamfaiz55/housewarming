// File: components/WelcomeSection.tsx
'use client';
import { motion } from 'framer-motion';

export default function WelcomeSection({ data, image }) {
  return (
   <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative py-16 px-6 text-center overflow-hidden bg-white"
>
  {/* Background image blur layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
    style={{ backgroundImage: `url(${image})` }}
  />

  <div className="relative z-10 max-w-4xl mx-auto">
    {/* Header block */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-10"
    >
      <div className="text-base font-medium text-yellow-700 tracking-wide mb-3">{data.greeting}</div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        {data.title}
      </h1>

      <p className="text-lg md:text-xl text-yellow-600 font-semibold mb-2">{data.subtitle}</p>

      <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">{data.family}</div>

      {/* House Name */}
      {data.houseName && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-xl md:text-2xl text-gray-800 font-semibold mb-6"
  >
    {data.houseName}
  </motion.div>
)}

      
    </motion.div>

    {/* House Image */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mb-10"
    >
      <img
        src={image}
        alt="House"
        className="w-full max-w-2xl mx-auto rounded-3xl shadow-xl border-4 border-white"
      />
    </motion.div>

    {/* Message */}
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6"
    >
      {data.message}
    </motion.p>
    

    {/* Quote */}
    {data.quote && (
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="italic text-gray-600 text-base md:text-lg mt-6"
      >
        “{data.quote}”
      </motion.blockquote>
    )}
{data.fullAddress && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.85 }}
    className="mt-8 text-lg md:text-base text-gray-600"
  >
    📍 {data.fullAddress}
  </motion.div>
)}

    {/* Note */}
    {data.note && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-sm text-gray-500"
      >
        {data.note}
      </motion.div>
    )}
  </div>
</motion.section>

  );
}
