import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function ProductCard({ ladder, priority = false }) {
  const waMessage = `Hello J%26L Powertools%2C I%27d like to enquire about the ${encodeURIComponent(ladder.name)}${ladder.modelNumber ? ` (Model: ${ladder.modelNumber})` : ''}.`;

  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group"
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
        <Image
          src={ladder.image}
          alt={`${ladder.name} — ${ladder.material || ''} ladder available at J & L Powertools showroom in Lagos, Nigeria`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-[#FACC15] text-gray-900 text-xs font-semibold px-2 py-1 rounded-full shadow">
          {ladder.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{ladder.name}</h3>

        <ul className="text-sm text-gray-600 space-y-1 mb-4 flex-1">
          {ladder.height && (
            <li><span className="font-medium text-gray-800">Height:</span> {ladder.height}</li>
          )}
          {ladder.capacity && (
            <li><span className="font-medium text-gray-800">Capacity:</span> {ladder.capacity}</li>
          )}
          {ladder.material && (
            <li><span className="font-medium text-gray-800">Material:</span> {ladder.material}</li>
          )}
        </ul>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <a
            href={`https://wa.me/2348035717860?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp enquiry for ${ladder.name}`}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <FaWhatsapp className="flex-shrink-0" />
            Enquire
          </a>
          <a
            href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See this product in our Lagos showroom"
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors"
          >
            <FaMapMarkerAlt className="flex-shrink-0" />
            Showroom
          </a>
        </div>
      </div>
    </motion.article>
  );
}
