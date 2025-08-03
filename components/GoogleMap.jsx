"use client";
import { motion } from 'framer-motion';

export default function GoogleMap({ coordinates, mapUrl, buttonText }) {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3757.5!2d${coordinates.split(',')[1]}!3d${coordinates.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="h-64 md:h-80">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6">
        <motion.a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
}