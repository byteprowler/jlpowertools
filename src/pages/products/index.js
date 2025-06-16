"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { NextSeo } from "next-seo";
import { ladders } from "@/data/data";

const categories = ["All", "Aluminium", "Fiberglass", "Extension", "Industrial"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");

  const filteredLadders = filter === "All" 
    ? ladders 
    : ladders.filter(ladder => ladder.category === filter);

  return (
    <>
      <NextSeo
        title="Premium Ladders & Scaffolding | J&L Powertools Lagos"
        description="Inspect industrial-grade ladders and scaffolding at our Lagos showroom. Available for contractors across Nigeria."
        canonical="https://www.jlpowertools.com.ng/products"
        openGraph={{
          url: 'https://www.jlpowertools.com.ng/products',
          images: [{
            url: '/jlpics/products-og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'J&L Powertools product showcase',
          }]
        }}
      />

      <main className="px-4 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Industrial-Grade Equipment
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test quality in person at our Ikeja showroom
          </p>
        </section>

        {/* Filter Controls */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-[#FACC15] text-black shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLadders.map((ladder, index) => (
            <motion.article
              key={ladder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={`/jlpics/products/${ladder.image}`}
                  alt={`${ladder.name} - ${ladder.material} ladder available in Lagos`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800">{ladder.name}</h2>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    {ladder.category}
                  </span>
                </div>

                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li><strong>Height:</strong> {ladder.height}</li>
                  <li><strong>Capacity:</strong> {ladder.capacity}</li>
                  <li><strong>Material:</strong> {ladder.material}</li>
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={`https://wa.me/2348035717860?text=Hello%20J%26L%20Powertools,%20I'm%20interested%20in%20your%20${encodeURIComponent(ladder.name)}%20(model:%20${ladder.modelNumber || 'N/A'})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    <FaWhatsapp /> Inquire
                  </a>
                  
                  <a
                    href="https://goo.gl/maps/Z9SCxYUJy8mDDm926"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    <FaMapMarkerAlt /> View
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Showroom CTA */}
        <motion.section 
          className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">Visit Our Ikeja Showroom</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            See and test our equipment in person at 12 Industrial Estate Road, Ikeja. Open Mon-Fri: 8AM-5PM, Sat: 9AM-2PM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+2348035717860"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
            >
              <FaPhone /> +234 803 571 7860
            </a>
            <a
              href="https://goo.gl/maps/Z9SCxYUJy8mDDm926"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium"
            >
              <FaMapMarkerAlt /> Get Directions
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}