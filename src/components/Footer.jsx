import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from 'framer-motion';
import Image from 'next/image';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "J & L Powertools LTD",
  "image": "https://www.jlpowertools.biz/Logo.webp",
  "description": "Leading supplier of industrial scaffolding and aluminium ladders in Lagos, Nigeria. Serving contractors across West Africa since 2000.",
  "@id": "https://www.jlpowertools.biz",
  "url": "https://www.jlpowertools.biz",
  "telephone": ["+2348035717860", "+2348184077464"],
  "email": "jlpowertools@yahoo.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "73 Cemetery Street, Ebutte-Metta",
    "addressLocality": "Yaba",
    "addressRegion": "Lagos",
    "postalCode": "100001",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.485928,
    "longitude": 3.383022
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "16:00" }
  ],
  "areaServed": ["Nigeria", "Ghana", "Benin", "Togo"],
  "priceRange": "$$"
};

export default function Footer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <motion.footer
        className="bg-gray-900 text-white px-6 py-14 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/footer.webp"
              width={100}
              height={60}
              alt="J & L Powertools LTD — Industrial Ladders & Scaffolding, Lagos"
              className="mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Leading supplier of industrial scaffolding and aluminium ladders in Lagos, Nigeria.
              Serving contractors across West Africa for over 25 years.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-[#FACC15] transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Our Products</Link></li>
              <li><Link href="/insights" className="hover:text-[#FACC15] transition-colors">Insights</Link></li>
              <li><Link href="/about" className="hover:text-[#FACC15] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FACC15] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Products links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base mb-4 text-white">Our Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Extension Ladders</Link></li>
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Step Ladders</Link></li>
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Scaffold Towers</Link></li>
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Fiberglass Ladders</Link></li>
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Aluminium Ladders</Link></li>
            </ul>
          </motion.div>

          {/* Contact & hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-base mb-4 text-white">Our Showroom</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <Link
                href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy"
                className="flex items-start hover:text-[#FACC15] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-[#FACC15]" />
                <span>73 Cemetery Street, Ebutte-Metta, Yaba, Lagos</span>
              </Link>

              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-[#FACC15] flex-shrink-0" />
                <a href="tel:+2348035717860" className="hover:text-[#FACC15] transition-colors">+234 803 571 7860</a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-[#FACC15] flex-shrink-0" />
                <a href="tel:+2348184077464" className="hover:text-[#FACC15] transition-colors">+234 818 407 7464</a>
              </div>
              <div className="flex items-center">
                <CiMail className="mr-2 text-[#FACC15] flex-shrink-0 text-base" />
                <a href="mailto:jlpowertools@yahoo.com" className="hover:text-[#FACC15] transition-colors">jlpowertools@yahoo.com</a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/2348035717860"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="bg-gray-700 hover:bg-[#25D366] text-white p-2 rounded-full transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <div className="text-xs text-gray-500 pt-1 border-t border-gray-800">
                <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 4:00 PM</p>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-12 pt-6 border-t border-gray-800">
          <p>&copy; 2000 – {new Date().getFullYear()} J & L Powertools LTD. All rights reserved.</p>
          <p className="mt-1">
            Designed & built by{' '}
            <Link href="https://byteprowler.vercel.app" target="_blank" rel="noopener" className="text-[#FACC15] hover:underline">
              ByteProwler
            </Link>
          </p>
        </div>
      </motion.footer>
    </>
  );
}