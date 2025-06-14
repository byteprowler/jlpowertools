"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { ladders } from "@/data/data";

const categories = ["All", "Aluminium", "Fiberglass", "Extension", "Industrial"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");

  const filteredLadders = filter === "All" 
    ? ladders 
    : ladders.filter(ladder => ladder.category === filter);

  return (
    <main className="px-4 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Premium Ladders & Scaffolding
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Available for inspection at our Lagos showroom
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-[#FACC15] text-black shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLadders.map((ladder, index) => (
          <motion.div
            key={ladder.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Product Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={`/jlpics/products/${ladder.image}`}
                alt={`${ladder.name} - Available at J&L Powertools Lagos`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
                <li>Height: {ladder.height}</li>
                <li>Capacity: {ladder.capacity}</li>
                <li>Material: {ladder.material}</li>
              </ul>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={`https://wa.me/2348035717860?text=Hello%20J&L%20Powertools,%20I'm%20interested%20in%20the%20${encodeURIComponent(ladder.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                
                <a
                  href="https://maps.app.goo.gl/Z9SCxYUJy8mDDm926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <FaMapMarkerAlt /> Visit
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Showroom Notice */}
      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-3">Visit Our Lagos Showroom</h3>
        <p className="text-gray-700 mb-4">
          All products available for physical inspection at our Ikeja facility.
          Test quality before purchase with our experts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+2348035717860"
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium"
          >
            Call Now: +234 803 571 7860
          </a>
          <a
            href="https://maps.google.com?q=J%26L+Powertools+Lagos+Showroom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium"
          >
            <FaMapMarkerAlt /> Get Directions
          </a>
        </div>
      </div>
    </main>
  );
}