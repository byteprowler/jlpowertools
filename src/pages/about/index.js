import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About J & L Powertools LTD | Leading Scaffolding & Ladder Supplier in Nigeria"
        description="Since 2000, J & L Powertools LTD has been the trusted wholesale supplier of industrial scaffolding and aluminium ladders across West Africa. Learn our story."
        canonical="https://www.jlpowertools.biz/about"
        additionalMetaTags={[
          {
            name: "robots",
            content: "index, follow",
          },
        ]}
      />

      <main className="px-6 py-12 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl mt-8 font-bold mb-6">
            Building West Africa&apos;s Infrastructure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by construction firms and contractors across Nigeria, Ghana, Benin, and Togo
          </p>
        </div>

        <div className="grid md:grid-cols-2 overflow-hidden gap-12 items-center">
          <div>
            <Image
              src="/why-invest-in-scaffoldings.webp"
              alt="Managing Director of J & L Powertools at a construction site in Lagos"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in <strong>Lagos (2000)</strong>, J & L Powertools began as a small supplier of 
                industrial ladders to local construction companies. Today, we serve <strong>over 500+ 
                contractors</strong> across West Africa.
              </p>
              <p>
                We specialize in <strong>aluminium scaffolding systems</strong> and <strong>safety 
                ladders</strong> engineered for Nigeria&apos;s harsh climate conditions — resistant to 
                corrosion, extreme heat, and heavy usage.
              </p>
              <p>
                Our <strong>ISO-certified manufacturing</strong> process ensures every product meets 
                international safety standards while remaining affordable for African markets.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { number: 25, suffix: "+", label: "Years in Business" },
            { number: 20000, suffix: "+", label: "Ladders Supplied" },
            { number: 8, suffix: "+", label: "West African Countries Served" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-yellow-50 p-6 rounded-xl border border-yellow-100"
            >
              <p className="text-4xl font-bold text-yellow-600">
                <CountUp duration={6} start={1} end={item.number} />{item.suffix}
              </p>
              <p className="mt-2 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 bg-gray-50 p-8 rounded-xl shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <blockquote className="relative text-xl italic text-gray-700 border-l-4 border-yellow-400 pl-6 py-4">
            &ldquo;To empower West African builders with durable, affordable access equipment that meets 
            international safety standards while creating local jobs and expertise.&rdquo;
          </blockquote>
          <p className="mt-6 text-gray-600 font-medium">
            – Obinna Eboh, <span className="text-gray-800 font-semibold">Managing Director</span>
          </p>
        </motion.div>
      </main>
    </>
  );
}