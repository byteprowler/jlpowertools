import { NextSeo } from 'next-seo';
import { FaWhatsapp, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Scaffolding Supplier in West Africa | J & L Powertools LTDContact"
        description="Lagos-based industrial ladder specialists serving Nigeria, Ghana, Benin & Togo. Visit our showroom at 73 Cemetery Street or call ☎ +234 803 571 7860."
        canonical="https://www.jlpowertools.biz/contact"
        openGraph={{
          type: 'website',
          locale: 'en_NG',
          url: 'https://www.jlpowertools.biz/contact',
          siteName: 'J & L Powertools',
          images: [{
            url: '/store-front.webp',
            width: 1200,
            height: 630,
            alt: 'J & L Powertools LTDWest Africa Coverage',
          }],
        }}
        additionalMetaTags={[
          {
            name: 'geo.region',
            content: 'NG,GH,BJ,TG'
          },
          {
            name: 'keywords',
            content: 'scaffolding Nigeria, ladders Ghana, construction equipment Benin, industrial ladders Togo, West Africa supplier'
          },
          {
            name: 'bussiness:contact_data:phone_number',
            content: '+2348035717860, +2348184077464', 
          }
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "J & L Powertools LTD",
          "image": "/Logo.webp",
          "description": "Industrial scaffolding and ladder supplier serving West Africa",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "73 Cemetery Street",
            "addressLocality": "Yaba",
            "addressRegion": "Lagos",
            "postalCode": "100001",
            "addressCountry": "NG"
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 6.485928,
              "longitude": 3.383022
            },
            "geoRadius": 1000000
          },
          "telephone": [
            "+2348035717860",
            "+2348184077464",
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+2348035717860",
              "contactType": "customer support",
              "areaServed": ["NG", "GH", "BJ", "TG"],
              "availableLanguage": "English",
              "name": "Hotline (Call & WhatsApp)"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+2348184877464",
              "contactType": "customer support",
            }
          ]
        }}
      />

      <main className="px-4 mt-12 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Serving West Africa from Lagos</h1>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-3 text-blue-800">Regional Coverage</h2>
          <p className="mb-4">
            While our showroom is in Lagos, we serve clients across:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Nigeria', 'Ghana', 'Benin', 'Togo'].map(country => (
              <li key={country} className="bg-white px-3 py-2 rounded-md shadow-sm text-center">
                {country}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            Lagos Headquarters (Main Showroom)
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="mb-4">
                  <strong>Address:</strong><br />
                  73 Cemetery Street, Yaba,<br />
                  Lagos, Nigeria
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhoneAlt className='mr-1' /><span className="mr-2 flex items-center">Hotline: {' '}</span>
                  <Link href="tel:+2348135717860" className="flex items-center text-lg hover:text-[#FACC15] transition-colors">
                    +234 813 571 7860
                  </Link>
                  </div>
                  <div className="flex items-center">
                    <FaPhoneAlt className='mr-1' /><span className="mr-2 flex items-center">Alt-line: {' '}</span>
                  <Link href="tel:+2348184077464" className="flex items-center text-lg hover:text-[#FACC15] transition-colors">
                    +234 818 407 7464
                  </Link>
                  </div>
                  <Link 
                    href="https://wa.me/2348135717860" 
                    target="_blank"
                    rel="noopener"
                    className="flex items-center text-lg hover:text-[#FACC15] transition-colors"
                  >
                    <FaWhatsapp className="mr-2" /> +234 813 571 7860 
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <FaClock className="mr-2" />
                  Opening Hours
                </h3>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Mon-Fri</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">For International Clients</h2>
          <p className="mb-4">
            We arrange shipping to all West African countries. Contact us for:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Bulk order discounts</li>
            <li>Customs documentation assistance</li>
            <li>Regional delivery timelines</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:jlpowertools@yahoo.com"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium"
            >
              <CiMail className="mr-2" /> Export Inquiry
            </a>
          </div>
        </div>
      </main>
    </>
  );
}