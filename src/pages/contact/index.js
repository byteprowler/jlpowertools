import { NextSeo } from 'next-seo';
import { FaWhatsapp, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import SEOFAQ from '@/components/SEOFAQ';
import { faqs } from '@/data/data';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "J & L Powertools LTD",
  "image": "https://www.jlpowertools.biz/Logo.webp",
  "description": "Industrial scaffolding and ladder supplier serving West Africa",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "73 Cemetery Street",
    "addressLocality": "Yaba",
    "addressRegion": "Lagos",
    "postalCode": "100001",
    "addressCountry": "NG"
  },
  "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 6.485928, "longitude": 3.383022 }, "geoRadius": 1000000 },
  "telephone": ["+2348035717860", "+2348184077464"],
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+2348035717860", "contactType": "customer support", "areaServed": ["NG", "GH", "BJ", "TG"], "availableLanguage": "English", "name": "Hotline (Call & WhatsApp)" },
    { "@type": "ContactPoint", "telephone": "+2348184077464", "contactType": "customer support" }
  ]
};

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact J & L Powertools — Ladders & Scaffolding Supplier in Lagos | Nigeria"
        description="Contact J & L Powertools LTD for industrial ladders and scaffolding in Lagos, Nigeria. Visit our showroom at 73 Cemetery Street, Yaba. Call +234 803 571 7860 or WhatsApp us."
        canonical="https://www.jlpowertools.biz/contact"
        openGraph={{
          type: 'website',
          locale: 'en_NG',
          url: 'https://www.jlpowertools.biz/contact',
          siteName: 'J & L Powertools',
          images: [{ url: 'https://www.jlpowertools.biz/store-front.webp', width: 1200, height: 630, alt: 'J & L Powertools Lagos showroom storefront' }],
        }}
        additionalMetaTags={[
          { name: 'geo.region', content: 'NG,GH,BJ,TG' },
          { name: 'keywords', content: 'contact J L Powertools Lagos, scaffolding supplier Nigeria contact, ladder showroom Lagos, buy scaffolding Lagos, industrial ladder supplier contact Nigeria' },
          { name: 'business:contact_data:phone_number', content: '+2348035717860, +2348184077464' }
        ]}
        jsonLd={localBusinessSchema}
      />

      <main>

        {/* Hero */}
        <section className="bg-gray-900 pt-28 pb-16 px-6 text-white text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Contact J & L Powertools
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Ladders & scaffolding supplier in Lagos, Nigeria — serving contractors across West Africa.
            </p>
          </AnimatedSection>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-14">

          {/* Main contact card */}
          <AnimatedSection direction="up">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2">

                {/* Left — showroom image */}
                <div className="relative h-64 md:h-auto min-h-64">
                  <Image
                    src="/showroom1.jpeg"
                    alt="J & L Powertools showroom interior — ladders and scaffolding in Lagos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Right — contact info */}
                <div className="p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-500" />
                    Lagos Showroom
                  </h2>

                  <address className="not-italic text-gray-700 space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-sm leading-relaxed">
                        73 Cemetery Street, Ebute-Metta,<br />
                        Yaba, Lagos 100001, Nigeria
                      </p>
                    </div>

                    <div className="space-y-2">
                      <a href="tel:+2348035717860" className="flex items-center gap-2 text-gray-800 hover:text-[#FACC15] transition-colors">
                        <FaPhoneAlt className="text-[#FACC15] flex-shrink-0" />
                        <span><strong>Hotline:</strong> +234 803 571 7860</span>
                      </a>
                      <a href="tel:+2348184077464" className="flex items-center gap-2 text-gray-800 hover:text-[#FACC15] transition-colors">
                        <FaPhoneAlt className="text-[#FACC15] flex-shrink-0" />
                        <span><strong>Alt Line:</strong> +234 818 407 7464</span>
                      </a>
                      <a
                        href="https://wa.me/2348035717860?text=Hello%20J%26L%20Powertools%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition-colors"
                      >
                        <FaWhatsapp className="text-green-500 flex-shrink-0" />
                        <span><strong>WhatsApp:</strong> +234 803 571 7860</span>
                      </a>
                      <a href="mailto:jlpowertools@yahoo.com" className="flex items-center gap-2 text-gray-800 hover:text-[#FACC15] transition-colors">
                        <CiMail className="text-[#FACC15] flex-shrink-0 text-base" />
                        jlpowertools@yahoo.com
                      </a>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 space-y-1">
                      <p className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
                        <FaClock className="text-[#FACC15]" />
                        Opening Hours
                      </p>
                      <div className="text-sm text-gray-600 pl-5">
                        <div className="flex justify-between"><span>Monday – Friday</span><span>8:00 AM – 5:00 PM</span></div>
                        <div className="flex justify-between"><span>Saturday</span><span>9:00 AM – 4:00 PM</span></div>
                      </div>
                    </div>
                  </address>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="https://wa.me/2348035717860?text=Hello%2C%20I%27d%20like%20to%20request%20a%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
                    >
                      <FaWhatsapp />
                      WhatsApp Us
                    </a>
                    <a
                      href="tel:+2348035717860"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-semibold px-4 py-3 rounded-full transition-colors text-sm"
                    >
                      <FaPhoneAlt />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection direction="up">
            <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2819994781858!2d3.383022573541852!3d6.485928293506036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d007f647cc3%3A0xfc0655f7e2900e4a!2sJ%20%26%20L%20POWERTOOLS%20LTD!5e0!3m2!1sen!2sng!4v1749918015202!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="J & L Powertools LTD — 73 Cemetery Street, Yaba, Lagos"
              />
            </div>
          </AnimatedSection>

          {/* Regional Coverage */}
          <AnimatedSection direction="up">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7">
              <h2 className="text-xl font-bold mb-3 text-blue-900">Regional Coverage</h2>
              <p className="text-gray-600 mb-4">
                While our showroom is in Lagos, we supply to clients across West Africa:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['🇳🇬 Nigeria', '🇬🇭 Ghana', '🇧🇯 Benin', '🇹🇬 Togo'].map(country => (
                  <li key={country} className="bg-white px-4 py-3 rounded-xl shadow-sm text-center font-medium text-gray-800">
                    {country}
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For international clients, we assist with:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Bulk order discounts for large quantities</li>
                  <li>Customs documentation assistance</li>
                  <li>Guidance on regional delivery timelines</li>
                </ul>
              </div>
              <a
                href="mailto:jlpowertools@yahoo.com"
                className="inline-flex items-center gap-2 mt-5 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
              >
                <CiMail className="text-base" />
                Export Inquiry
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50">
          <SEOFAQ faqs={faqs.slice(0, 5)} />
        </div>
      </main>
    </>
  );
}