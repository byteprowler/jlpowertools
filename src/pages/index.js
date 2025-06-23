"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import DrawOutline from '@/components/DrawOutline'
import DrawCircleText from '@/components/DrawCircleText';
import { posts, products, testimonials, ladders } from "@/data/data";
import { ChevronDown } from "lucide-react";


export default function Home() {
  const latest = posts.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  const topProducts = ladders.slice(0, 3);

  return (
    <>
    <NextSeo
      title="Premium Aluminium Ladders & Scaffolding | J & L Powertools LTD (Lagos, Nigeria)"
      description="Nigeria's premier showroom for industrial ladders & scaffolding. Serving clients from across West Africa. Visit our Lagos facility for quality inspection."
      canonical="https://www.jlpowertools.biz"
      openGraph={{
        url: "https://www.jlpowertools.biz",
        title: "Industrial Ladders & Scaffolding Showroom | J & L Powertools LTD",
        description: "Wholesale construction equipment available at our Lagos facility",
        images: [
          {
            url: "/Logo.png", // Show actual showroom image
            width: 1200,
            height: 630,
            alt: "J & L Powertools Lagos Showroom",
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: "keywords",
          content: "aluminium ladders Lagos, scaffolding showroom Nigeria, construction equipment West Africa, buy ladders in Nigeria, industrial ladders showroom",
        },
        {
          name: "geo.placename",
          content: "Lagos, Nigeria" 
        }
      ]}
    />
    
    <main className="space-y-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col overflow-hidden items-center justify-center text-center px-6 text-white">
        <Image
          src="/ladder-ceo.jpg"
          alt="Hero"
          loading='lazy'
          fill
          style={{ objectFit: "cover", objectPosition: "center"}} 
        />
        <div className="absolute inset-0 bg-black/60 z-0"/>
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-2">
            <DrawCircleText />
          </motion.h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block">
            <DrawOutline href="/visit">
              Visit Our Showroom
            </DrawOutline>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden block">
              <Link
               href={'/products'}
               className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow transition">
                Browse Products
              </Link>
          </motion.div>
          <motion.div
          className="absolute left-1/2 -translate-x-1/2 block md:hidden items-center justify-center text-white py-2"
          animate={{ y: [0, 10, 0]}}
          transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-8 h-8 opacity-70" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6">
        <h2 className='text-3xl font-bold text-center mb-10'>Why Clients Across West Africa Choose Us</h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {["Local Quality Inspection", "Competitive Bulk Pricing", "Technical Support"].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: false}}>
              <h3 className="font-semibold text-xl">{feature}</h3>
              <p className="text-gray-600 mt-2">
                {i === 0 ? "Inspect every product at our Lagos facility before purchase" : 
                 i === 1 ? "Better pricing than importing directly from overseas" :
                 "Our engineers will guide you through proper installation"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Showroom Products</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {topProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}>
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={`${product.name} - Available at our Lagos showroom`}
                className="rounded-t-xl w-full h-64 object-cover" />
              <div className="p-4 shadow-md rounded-t-xl overflow-hidden">
                <h4 className="font-bold text-lg mt-1">{product.name}</h4>
                <p className="text-gray-500 font-bold mt-1">Height: {product.height}</p>
                <p className="text-gray-500 font-bold mt-1">Material: {product.material}</p>
                <Link href={'https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy'} className="text-yellow-600 font-semibold mt-2">Inspect in Lagos</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-block bg-white transition-colors hover:bg-yellow-400 text-[#FACC15] border hover:text-white px-6 py-2 rounded-full font-semibold">
            View Full Catalog
          </Link>
        </div>
      </section>

       {/* RESTORED Insights SECTION */}
      <div className="px-6 py-12">
        <h2 className="text-2xl text-center font-bold mb-6">Construction Insights</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
          Latest tips for scaffolding and ladder safety in West African climates
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((post) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hover:shadow-lg p-4 rounded-md shadow"
            >
              <Image 
                src={post.image}
                width={300}
                height={200}
                alt={`${post.title} - J & L Powertools Insights`}
                className="w-full h-40 object-cover mb-3 rounded-t-lg"
              />
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <Link 
                href={`/insights/${post.slug}`} 
                className="text-yellow-600 hover:underline mt-3 inline-block font-medium"
              >
                Read Article →
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/insights"
            className="inline-block border border-yellow-400 text-yellow-600 px-6 py-2 rounded-full font-medium hover:bg-yellow-600 hover:text-white transition"
          >
            View All Articles
          </Link>
        </div>
      </div>

      {/* Location Section */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Office</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Visit Us in Lagos</h3>
              <p className="text-gray-700 mb-4">
                While we don&apos;t offer delivery, our showroom in Yaba, Lagos welcomes clients from across West Africa for quality inspection and purchase.
              </p>
              <div className="space-y-2">
                <p><strong>Address:</strong> 73 Cemetry Street Ebutte-Metta, Yaba, Lagos 100001, Lagos, Nigeria.</p>
                <p><strong>Hours:</strong> Mon-Fri: 8AM - 5PM | Sat: 9AM - 4PM</p>
                <p><strong>Hotline:</strong>{' '}<a className="hover:underline" href={"tel:+234803717860"}>+234 803 571 7860</a></p>
                <p><strong>Alt Line:</strong>{' '}<a className='hover:underline' href={'tel:+2348184077464'}>+234 818 407 7464</a></p>
              </div>
              <Link 
                href={'https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy'} 
                className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Get Directions
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-96">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2819994781858!2d3.383022573541852!3d6.485928293506036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d007f647cc3%3A0xfc0655f7e2900e4a!2sJ%20%26%20L%20POWERTOOLS%20LTD!5e0!3m2!1sen!2sng!4v1749918015202!5m2!1sen!2sng" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="J & L Powertools LTD" 
                />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="px-6 bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trusted by Professionals Across West Africa
        </h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="snap-center min-w-[300px] bg-white rounded-md shadow border p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true}}>
              <p className="italic text-gray-700">&quot;{t.quote}&quot;</p>
              <div className="mt-4 font-bold text-blue-600">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </section> */}
    </main>
    </>
  )
}