import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact J&L Powertools LTD | Scaffolding & Ladders (Nigeria)"
        description="Visit our Lagos office or call ☎ +234 812 345 6789 for wholesale scaffolding & ladders. Serving Nigeria, Ghana, Benin, Togo."
        canonical="https://www.jlpowertools.com.ng/contact"
      />

      <main className="px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Visit or Call J&L Powertools</h1>
        
        {/* Google Maps Embed */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2819994781858!2d3.383022573541852!3d6.485928293506036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d007f647cc3%3A0xfc0655f7e2900e4a!2sJ%20%26%20L%20POWERTOOLS%20LTD!5e0!3m2!1sen!2sng!4v1749918015202!5m2!1sen!2sng" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowfullscreen 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="J&L Powertools LTD" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Nigeria HQ */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🇳🇬</span> Lagos Headquarters
            </h2>
            <address className="not-italic">
              <p className="mb-3">
                <strong>Address:</strong><br />
                73 Cemetry Road,<br />
                Yaba, Lagos 100001, Lagos, Nigeria.
              </p>
              <p className="mb-3">
                <strong>Phone:</strong><br />
                <a href="tel:+2348123456789" className="text-blue-600 hover:underline">
                  +234 812 345 6789
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong><br />
                <a 
                  href="https://wa.me/2348123456789" 
                  className="text-green-600 hover:underline inline-flex items-center"
                >
                  Chat Now <span className="ml-1">→</span>
                </a>
              </p>
            </address>
          </div>

          {/* Ghana Branch */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🇬🇭</span> Accra Branch
            </h2>
            <address className="not-italic">
              <p className="mb-3">
                <strong>Address:</strong><br />
                23 Construction Avenue,<br />
                Industrial Area, Accra, Ghana
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+233123456789" className="text-blue-600 hover:underline">
                  +233 123 456 789
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-100">
          <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
          <ul className="space-y-2">
            <li className="flex justify-between max-w-xs">
              <span className="font-medium">Monday - Friday:</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between max-w-xs">
              <span className="font-medium">Saturday:</span>
              <span>10:00 AM - 3:00 PM</span>
            </li>
            <li className="flex justify-between max-w-xs">
              <span className="font-medium">Sunday:</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}