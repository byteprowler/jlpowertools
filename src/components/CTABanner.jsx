import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function CTABanner({
  heading = "Ready to Get Started?",
  subheading = "Visit our Lagos showroom or contact us for bulk pricing and expert advice.",
}) {
  return (
    <section className="bg-gray-900 py-16 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
        >
          {subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/2348035717860?text=Hello%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>

          <a
            href="tel:+2348035717860"
            className="inline-flex items-center gap-2 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
