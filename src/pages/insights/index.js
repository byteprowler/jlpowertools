import Link from "next/link";
import { posts } from "@/data/data";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

function getReadTime(content) {
  const words = (content || '').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function Insights() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <NextSeo
        title="Construction & Scaffolding Insights | J & L Powertools LTD"
        description="Expert articles on industrial ladders, scaffolding safety, and construction access equipment for contractors in Nigeria and West Africa."
        canonical="https://www.jlpowertools.biz/insights"
        openGraph={{
          url: 'https://www.jlpowertools.biz/insights',
          title: 'Construction & Scaffolding Insights | J & L Powertools LTD',
          description: 'Expert articles on industrial ladders, scaffolding safety, and construction access equipment for contractors in Nigeria and West Africa.',
          images: [{ url: 'https://www.jlpowertools.biz/why-invest-in-scaffoldings.webp', width: 1200, height: 630, alt: 'J & L Powertools Insights — Construction Equipment Blog' }],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'scaffolding safety Nigeria, aluminium ladder tips, construction equipment insights, ladder types Nigeria, scaffolding West Africa',
        }]}
      />

      <main>

        {/* Hero */}
        <section
          id="hero"
          className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1519143009590-e3800b9df468?q=80&w=1384&auto=format&fit=crop"
            alt="Construction site insights — J & L Powertools Nigeria"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-6 mt-10">
            <h1 className="text-5xl font-extrabold mb-3 uppercase tracking-tight">Insights</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              Expert advice for construction professionals across West Africa
            </p>
          </div>
        </section>

        {/* Articles */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-sm text-gray-500 mb-8">{sortedPosts.length} articles published</p>

          <ul className="space-y-10 divide-y divide-gray-100">
            {sortedPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05} className="pt-10 first:pt-0">
                <Link href={`/insights/${post.slug}`} className="group">
                  <article className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="relative w-full md:w-60 h-44 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      {post.image && (
                        <Image
                          src={post.image}
                          alt={`${post.title} — J & L Powertools Insights`}
                          fill
                          loading={i < 2 ? "eager" : "lazy"}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center flex-1">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#FACC15] transition-colors mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {Array.isArray(post.description) ? post.description[0] : post.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt />
                          {new Date(post.date).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock />
                          {getReadTime(post.content)} min read
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[#FACC15] text-sm font-semibold mt-3">
                        Read Article <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}