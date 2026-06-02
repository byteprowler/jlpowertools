import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import { Shield, Layers, Wrench, Globe } from 'lucide-react';
import Link from 'next/link';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "J & L Powertools LTD",
  "foundingDate": "2000",
  "description": "Leading supplier of industrial scaffolding and aluminium ladders in Lagos, Nigeria. Serving contractors across West Africa since 2000.",
  "url": "https://www.jlpowertools.biz",
  "logo": "https://www.jlpowertools.biz/Logo.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "73 Cemetery Street, Ebute-Metta",
    "addressLocality": "Yaba",
    "addressRegion": "Lagos",
    "addressCountry": "NG"
  }
};

const milestones = [
  { number: 25, suffix: "+", label: "Years in Business" },
  { number: 20000, suffix: "+", label: "Units Supplied" },
  { number: 8, suffix: "+", label: "Countries Served" },
];

function CounterBlock({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <AnimatedSection delay={index * 0.15} className="text-center">
      <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-[#FACC15] mb-2">
        {isInView ? <CountUp start={0} end={item.number} duration={2.5} separator="," /> : '0'}
        {item.suffix}
      </div>
      <p className="text-white font-semibold text-lg">{item.label}</p>
    </AnimatedSection>
  );
}

const VALUES = [
  { icon: <Shield className="w-8 h-8 text-[#FACC15]" />, title: "Quality First", desc: "Every product is safety-rated and quality-tested before reaching our showroom floor." },
  { icon: <Wrench className="w-8 h-8 text-[#FACC15]" />, title: "Expert Service", desc: "Our knowledgeable team helps you pick the right equipment for your specific job site needs." },
  { icon: <Globe className="w-8 h-8 text-[#FACC15]" />, title: "Pan-African Reach", desc: "While based in Lagos, we serve contractors from Nigeria, Ghana, Benin, Togo, and beyond." },
];

const OFFERINGS = [
  { icon: <Layers className="w-5 h-5" />, label: "Extension Ladders" },
  { icon: <Layers className="w-5 h-5" />, label: "Step Ladders" },
  { icon: <Layers className="w-5 h-5" />, label: "Scaffold Towers" },
  { icon: <Layers className="w-5 h-5" />, label: "Fiberglass Ladders" },
  { icon: <Layers className="w-5 h-5" />, label: "Aluminium Ladders" },
  { icon: <Layers className="w-5 h-5" />, label: "3-Section Ladders" },
];

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About J & L Powertools | Leading Ladder & Scaffolding Supplier in Nigeria"
        description="Since 2000, J & L Powertools LTD has been the trusted wholesale supplier of industrial scaffolding and aluminium ladders in Lagos, serving contractors across West Africa. Learn our story."
        canonical="https://www.jlpowertools.biz/about"
        additionalMetaTags={[{ name: "robots", content: "index, follow" }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>

        {/* Hero */}
        <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/showroom.jpeg"
            alt="J & L Powertools showroom — industrial ladders and scaffolding in Lagos, Nigeria"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-6 mt-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">About J & L Powertools</h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              West Africa&apos;s trusted supplier of industrial ladders and scaffolding since 2000
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/store-front.webp"
                  alt="J & L Powertools storefront at 73 Cemetery Street, Yaba, Lagos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in <strong>Lagos in 2000</strong>, J & L Powertools LTD began as a small supplier of industrial ladders to local construction companies. Today, we serve <strong>over 500 contractors</strong> across West Africa.
                </p>
                <p>
                  We specialize in <strong>aluminium scaffolding systems</strong> and <strong>safety ladders</strong> engineered for Nigeria&apos;s demanding climate — resistant to corrosion, extreme heat, and heavy usage.
                </p>
                <p>
                  Our products meet international safety standards while remaining affordable for African markets. Every item on our showroom floor can be inspected and tested before purchase — no ordering sight unseen.
                </p>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-6 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-bold px-6 py-3 rounded-full transition-colors"
              >
                Browse Our Products
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Milestones */}
        <section className="bg-gray-900 py-20 px-6">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-10">
            {milestones.map((item, index) => (
              <CounterBlock key={index} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Offer</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A comprehensive range of industrial access equipment available at our Lagos showroom.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {OFFERINGS.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.07} direction="up">
                  <Link
                    href="/products"
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#FACC15] hover:shadow-md transition-all group"
                  >
                    <span className="text-[#FACC15]">{item.icon}</span>
                    <span className="font-medium text-gray-800 group-hover:text-gray-900">{item.label}</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Values</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {VALUES.map((v, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="up">
                  <div className="text-center p-7 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm h-full">
                    <div className="flex justify-center mb-4">{v.icon}</div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <AnimatedSection className="py-16 px-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border-l-4 border-[#FACC15]">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Our Mission</h2>
            <blockquote className="text-xl italic text-gray-700 leading-relaxed">
              &ldquo;To empower West African builders with durable, affordable access equipment that meets
              international safety standards — while creating local jobs and expertise.&rdquo;
            </blockquote>
            <p className="mt-5 text-gray-500 font-medium">
              — Obinna Eboh, <span className="text-gray-800 font-semibold">Managing Director</span>
            </p>
          </div>
        </AnimatedSection>

        <CTABanner
          heading="Visit Our Lagos Showroom"
          subheading="73 Cemetery Street, Ebute-Metta, Yaba, Lagos. Open Mon–Sat. No appointment needed."
        />
      </main>
    </>
  );
}