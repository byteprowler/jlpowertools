import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            Chat with us on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="motion-safe:animate-pulse"
      >
        <Link
          href="https://wa.me/2348035717860?text=Hello%20J%26L%20Powertools%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with J & L Powertools on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-2xl transition-colors duration-200"
        >
          <FaWhatsapp size={28} />
        </Link>
      </motion.div>
    </div>
  );
}
