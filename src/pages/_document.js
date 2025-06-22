import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en-NG">
      <Head>
        <meta name="google-site-verification" content="gV33MiDhACZrwGXbYNqtsysuQng4T6c0BIvjsr6Xrw8" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#FACC15" />
        <meta name="author" content="J & L Powertools LTD" />
        <meta name="robots" content="index, follow" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geo Tags */}
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "J & L Powertools",
              image: "https://jlpowertools.biz/Logo.png",
              description: "Leading supplier of aluminium ladders and scaffolding in Nigeria & West Africa",
              address: {
                "@type": "PostalAddress",
                streetAddress: "73 Cemetry Road",
                addressLocality: "Yaba",
                addressRegion: "Lagos",
                postalCode: "100001",
                addressCountry: "NG"
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+2348035717860",
                  contactType: "customer support",
                  areaServed: "NG",
                  availableLanguage: "English",
                  name: "Hotline (Call & WhatsApp)"
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+2348123456789",
                  contactType: "customer support",
                  areaServed: "NG",
                  availableLanguage: "English",
                  name: "Customer Support (Call Only)"
                }
              ],
              openingHours: "Mo-Fr 08:00-17:00",
              priceRange: "₦₦₦₦"
            })
          }}
        />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5M4PWCLP7E"></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5M4PWCLP7E');
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />

        {/* WhatsApp Widget Script (optional, no external widget loaded here) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.whatsappWidget = {
                phone: '2348035717860',
                callToAction: 'Chat with us on WhatsApp!'
              };
            `,
          }}
        />
      </body>
    </Html>
  );
}