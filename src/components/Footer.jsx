import React from 'react';
import Link from 'next/link';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { CiMail } from "react-icons/ci";
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function Footer() {
  return (
    <>
      <NextSeo noindex={false} nofollow={false} />

      <motion.footer
        className="bg-gray-900 text-white px-6 py-12 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Image 
              src="/footer.webp"
              width={100}
              height={100}
              alt="J & L Powertools Logo"
            />
            <p className="text-gray-300">
              Leading supplier of industrial scaffolding and aluminum ladders in Lagos, Nigeria. 
              Serving contractors across West Africa for more than 25 years.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/products" className="hover:text-[#FACC15] transition-colors">Our Products</Link></li>
              <li><Link href="/insights" className="hover:text-[#FACC15] transition-colors">Insights</Link></li>
              <li><Link href="/about" className="hover:text-[#FACC15] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FACC15] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Showroom Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold text-lg mb-4">Our Showroom</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <Link 
                href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy" 
                className="flex items-start hover:text-[#FACC15]" 
                target="_blank" rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>73 Cemetry Street Ebutte-Metta, Yaba, Lagos</span>
              </Link>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <Link href="tel:+2348035717860" className="hover:text-[#FACC15] font-semibold transition-colors">
                  Hotline: +234 803 571 7860
                </Link>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <Link href="tel:+2348184077464" className="hover:text-[#FACC15] transition-colors">
                  Alt Line: +234 818 407 7464
                </Link>
              </div>
              <div className="flex items-center">
                <CiMail className="mr-2 text-base" />
                <Link href="mailto:jlpowertools@yahoo.com" className="hover:text-[#FACC15] transition-colors">
                  jlpowertools@yahoo.com
                </Link>
              </div>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link 
                href="https://wa.me/2348035717860" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-[#25D366] text-white p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>
            </div>
            <div className="text-gray-300 text-sm">
              <p>Hours: Mon–Fri 8AM–5PM</p>
              <p>Sat 9AM–4PM</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center text-xs text-gray-400 mt-12 pt-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p>&copy; 2000 - {new Date().getFullYear()} J & L Powertools LTD. All rights reserved.</p>
          <p className="mt-2">
            Designed by <Link href="https://byteprowler.vercel.app" target="_blank" rel="noopener" className="text-[#FACC15] hover:underline">ByteProwler</Link>
          </p>
        </motion.div>
      </motion.footer>
    </>
  );
}