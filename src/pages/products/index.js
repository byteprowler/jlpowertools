import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { NextSeo } from "next-seo";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";
import { ladders } from "@/data/data";
import { Search, X } from "lucide-react";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jlpowertools.biz" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.jlpowertools.biz/products" },
  ],
};

export default function ProductsPage() {
  const [filteredLadders, setFilteredLadders] = useState(ladders);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let results = ladders;

    if (selectedCategory !== 'All') {
      results = results.filter(l => l.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(l => {
        const title = l?.name?.toLowerCase() || '';
        const material = l?.material?.toLowerCase() || '';
        const capacity = String(l?.capacity || '').toLowerCase();
        const tags = Array.isArray(l?.tags) ? l.tags : [];
        return (
          title.includes(term) ||
          material.includes(term) ||
          capacity.includes(term) ||
          tags.some(tag => tag.toLowerCase().includes(term))
        );
      });
    }

    setFilteredLadders(results);
  }, [searchTerm, selectedCategory]);

  const categories = Array.from(new Set(ladders.map(l => l.category)));

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <>
      <NextSeo
        title="Industrial Ladders & Scaffolding in Lagos, Nigeria | J & L Powertools LTD"
        description="Buy aluminium ladders, fiberglass ladders, step ladders, extension ladders, and scaffold towers at our Lagos showroom. Trusted by contractors across Nigeria and West Africa."
        canonical="https://www.jlpowertools.biz/products"
        openGraph={{
          url: 'https://www.jlpowertools.biz/products',
          title: "Industrial Ladders & Scaffolding — Lagos Showroom | J & L Powertools",
          description: "Inspect and purchase industrial ladders and scaffolding at J & L Powertools, Lagos. Aluminium, fiberglass, extension, step, and scaffold tower options available.",
          images: [{ url: 'https://www.jlpowertools.biz/Logo.webp', width: 1200, height: 630, alt: 'J & L Powertools product showcase — Lagos Nigeria' }],
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'industrial ladders Lagos, aluminium ladders Nigeria, scaffolding supplier Lagos, fiberglass ladder Nigeria, scaffold tower Lagos, step ladder Nigeria, buy ladders Lagos',
        }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pb-0">

        {/* Page Hero */}
        <section className="bg-gray-900 pt-28 pb-16 px-6 text-white text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              Industrial Ladders & Scaffolding in Lagos, Nigeria
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Inspect every product in person at our Yaba, Lagos showroom. Aluminium ladders, fiberglass ladders, scaffold towers — all in stock.
            </p>
          </AnimatedSection>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, material, or type…"
                aria-label="Search products"
                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FACC15] bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <CategoryFilter
              categories={categories}
              activeCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />

            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={resetFilters}
                className="text-sm text-gray-500 hover:text-[#FACC15] font-medium transition-colors whitespace-nowrap"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredLadders.length} of {ladders.length} products
          </p>

          {/* Product Grid */}
          {filteredLadders.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredLadders.map((ladder, index) => (
                <AnimatedSection key={ladder.id || index} delay={Math.min(index * 0.05, 0.3)} direction="up">
                  <ProductCard ladder={ladder} priority={index < 3} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No products match your search.</p>
              <button
                onClick={resetFilters}
                className="text-[#FACC15] font-semibold hover:underline"
              >
                Clear filters and view all
              </button>
            </div>
          )}

          {/* Can't find CTA */}
          <AnimatedSection className="mt-14 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Can&apos;t find what you need?</h3>
            <p className="text-gray-600 mb-5 max-w-lg mx-auto">
              We carry more products in our Lagos showroom than those listed here. WhatsApp us with your requirements and we&apos;ll help you find the right product.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/2348035717860?text=Hello%2C%20I%27m%20looking%20for%20a%20specific%20ladder%20or%20scaffolding%20product."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>
              <a
                href="tel:+2348035717860"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Call: +234 803 571 7860
              </a>
            </div>
          </AnimatedSection>
        </div>

        <CTABanner
          heading="Request a Bulk Quote"
          subheading="We offer competitive pricing for contractors and project-based buyers. Contact us to discuss quantities and rates."
        />
      </main>
    </>
  );
}