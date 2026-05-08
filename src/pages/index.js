import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import DrawCircleText from '@/components/DrawCircleText';
import DrawOutline from '@/components/DrawOutline';
import { posts, ladders, faqs, testimonials } from "@/data/data";
import { ChevronDown, Phone, MessageCircle, MapPin, ArrowRight, Shield, Award, Users, Globe } from "lucide-react";
import ProductCard from '@/components/ProductCard';
import TrustStats from '@/components/TrustStats';
import SEOFAQ from '@/components/SEOFAQ';
import CTABanner from '@/components/CTABanner';
import AnimatedSection from '@/components/AnimatedSection';
import { FaStar } from 'react-icons/fa';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "J & L Powertools LTD",
  "url": "https://www.jlpowertools.biz",
  "logo": "https://www.jlpowertools.biz/Logo.webp",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+2348035717860",
    "contactType": "customer service",
    "areaServed": ["NG","GH","BJ","TG"],
    "availableLanguage": "English"
  }],
  "sameAs": []
};

const WHY_ITEMS = [
  {
    icon: <Shield className="w-7 h-7 text-[#FACC15]" />,
    title: "Quality Inspection In Person",
    desc: "Inspect every ladder and scaffold at our Lagos showroom before purchasing. No guesswork.",
  },
  {
    icon: <Award className="w-7 h-7 text-[#FACC15]" />,
    title: "Competitive Bulk Pricing",
    desc: "Better rates than importing directly. We pass wholesale savings straight to contractors.",
  },
  {
    icon: <Users className="w-7 h-7 text-[#FACC15]" />,
    title: "Expert Technical Support",
    desc: "Our experienced team guides you through product selection, safety specs, and installation.",
  },
  {
    icon: <Globe className="w-7 h-7 text-[#FACC15]" />,
    title: "Serving All of West Africa",
    desc: "Clients from Nigeria, Ghana, Benin, and Togo trust us for consistent supply and quality.",
  },
];

const CATEGORIES = [
  { label: "Extension Ladders", image: "/extension-ladder.webp", alt: "Industrial extension ladders in Lagos Nigeria", href: "/products" },
  { label: "Step Ladders", image: "/step-ladder.webp", alt: "Aluminium and fiberglass step ladders Lagos", href: "/products" },
  { label: "Scaffold Towers", image: "/aluminium-scaffold-tower.webp", alt: "Aluminium scaffold tower supplier Lagos Nigeria", href: "/products" },
  { label: "3-Section Ladders", image: "/3-section.webp", alt: "3-section aluminium ladder heavy duty Nigeria", href: "/products" },
];

export default function Home() {
  const latest = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  const topProducts = ladders.slice(0, 3);

  return (
    <>
      <NextSeo
        title="Industrial Ladders & Scaffolding Supplier in Lagos, Nigeria | J & L Powertools LTD"
        description="Buy industrial aluminium ladders, fiberglass ladders, and scaffold towers at our Lagos showroom. J & L Powertools — trusted supplier in Nigeria and West Africa since 2000."
        canonical="https://www.jlpowertools.biz"
        openGraph={{
          url: "https://www.jlpowertools.biz",
          title: "Industrial Ladders & Scaffolding Showroom in Lagos | J & L Powertools LTD",
          description: "Visit our Yaba, Lagos showroom for quality aluminium ladders, scaffold towers, and construction access equipment. Serving contractors across West Africa.",
          images: [{
            url: "https://www.jlpowertools.biz/Logo.webp",
            width: 1200,
            height: 630,
            alt: "J & L Powertools LTD — Lagos Ladder & Scaffolding Showroom",
          }],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: "keywords", content: "industrial ladders Lagos, aluminium ladders Nigeria, scaffolding supplier Lagos, scaffold tower Nigeria, buy ladders Lagos, construction equipment Nigeria, ladders and scaffolding Lagos" },
          { name: "geo.placename", content: "Lagos, Nigeria" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col overflow-hidden items-center justify-center text-center px-6 text-white"
        >
          <Image
            src="/why-invest-in-scaffoldings.webp"
            alt="Industrial scaffolding and ladders showroom in Lagos Nigeria — J & L Powertools"
            priority
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <DrawCircleText />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg transition-colors"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2348035717860?text=Hello%20J%26L%20Powertools%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-full shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full backdrop-blur-sm transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Visit Showroom
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 mt-16 flex flex-col items-center text-white/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-7 h-7" />
            </motion.div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ────────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Why Clients Across West Africa Choose Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Over 25 years of supplying certified industrial ladders and scaffolding to contractors in Nigeria and beyond.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_ITEMS.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="up">
                  <div className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-[#FACC15] h-full">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ──────────────────────────────────── */}
        <TrustStats />

        {/* ── PRODUCT CATEGORIES ───────────────────────────── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Industrial Ladders & Scaffolding in Lagos
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Inspect our full range of aluminium ladders, fiberglass ladders, and scaffold towers at our Yaba, Lagos showroom.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CATEGORIES.map((cat, i) => (
                <AnimatedSection key={i} delay={i * 0.08} direction="up">
                  <Link href={cat.href} className="group block relative rounded-2xl overflow-hidden shadow-md h-52">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white font-bold text-lg">{cat.label}</span>
                      <p className="text-[#FACC15] text-sm font-medium mt-0.5 flex items-center gap-1">
                        View Products <ArrowRight className="w-3 h-3" />
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ─────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Featured Products
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Aluminium ladders and scaffolding available for inspection at our Lagos showroom.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {topProducts.map((product, i) => (
                <AnimatedSection key={product.id || i} delay={i * 0.1} direction="up">
                  <ProductCard ladder={product} priority={i === 0} />
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border-2 border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15] hover:text-gray-900 font-semibold px-7 py-3 rounded-full transition-all duration-200"
              >
                View Full Catalogue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Trusted by Professionals Across West Africa
              </h2>
              <p className="text-gray-500">What our clients say about working with J & L Powertools.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <AnimatedSection key={i} delay={i * 0.12} direction="up">
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating || 5 }).map((_, s) => (
                        <FaStar key={s} className="text-[#FACC15] w-4 h-4" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic flex-1 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      {t.location && <p className="text-sm text-gray-500">{t.location}</p>}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSIGHTS ──────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Construction Insights
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Expert tips on scaffolding safety, ladder selection, and construction access equipment for West African job sites.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {latest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 0.1} direction="up">
                  <Link href={`/insights/${post.slug}`} className="group block bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={`${post.title} — J & L Powertools Insights`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-400 mb-2">
                        {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
                      </p>
                      <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#FACC15] transition-colors">{post.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {Array.isArray(post.description) ? post.description[0] : post.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[#FACC15] font-medium text-sm mt-3">
                        Read Article <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:border-[#FACC15] hover:text-[#FACC15] px-7 py-3 rounded-full font-medium transition-all"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* ── SHOWROOM / LOCATION ───────────────────────────── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Visit Our Lagos Showroom
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Inspect and test every product before you buy. Our showroom in Yaba, Lagos is open six days a week.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-2xl shadow-md p-7 space-y-5">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src="/store-front.webp"
                      alt="J & L Powertools showroom storefront — 73 Cemetery Street, Yaba, Lagos"
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-sm">73 Cemetery Street, Ebutte-Metta, Yaba, Lagos 100001, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Hotline</p>
                        <a href="tel:+2348035717860" className="text-sm hover:text-[#FACC15] transition-colors">+234 803 571 7860</a>
                        <br />
                        <a href="tel:+2348184077464" className="text-sm hover:text-[#FACC15] transition-colors">+234 818 407 7464</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <div>
                        <p className="font-semibold text-gray-900">Opening Hours</p>
                        <p className="text-sm">Mon–Fri: 8:00 AM – 5:00 PM</p>
                        <p className="text-sm">Saturday: 9:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://maps.app.goo.gl/mKRjzvTuGq9cpZHU9?g_st=com.google.maps.preview.copy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                    <a
                      href="tel:+2348035717860"
                      className="inline-flex items-center gap-2 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call Us
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="rounded-2xl overflow-hidden shadow-md h-96 md:h-full min-h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2819994781858!2d3.383022573541852!3d6.485928293506036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d007f647cc3%3A0xfc0655f7e2900e4a!2sJ%20%26%20L%20POWERTOOLS%20LTD!5e0!3m2!1sen!2sng!4v1749918015202!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '360px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="J & L Powertools LTD — 73 Cemetery Street, Yaba, Lagos"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <div className="bg-white">
          <SEOFAQ faqs={faqs} />
        </div>

        {/* ── CTA BANNER ────────────────────────────────────── */}
        <CTABanner
          heading="Get a Quote for Ladders or Scaffolding"
          subheading="Call us, WhatsApp, or visit our Yaba, Lagos showroom. Serving Nigeria, Ghana, Benin, and Togo."
        />
      </main>
    </>
  );
}