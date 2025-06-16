import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-NG"> 
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#FACC15" /> {/* Brand yellow */}
        <meta name="author" content="J&L Powertools LTD" />
        <meta name="robots" content="index, follow" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Nigeria/West Africa Geo Tags */}
        <meta name="geo.region" content="NG" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "J&L Powertools",
              "image": "https://jlpowertools.vercel.app/Logo.jpg",
              "description": "Leading supplier of aluminium ladders and scaffolding in Nigeria & West Africa",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "73 Cemetry Road",
                "addressLocality": "Yaba",
                "addressRegion": "Lagos",
                "postalCode": "100001",
                "addressCountry": "NG"
              },
              "telephone": "+2348123456789",
              "openingHours": "Mo-Fr 08:00-17:00",
              "priceRange": "₦₦₦₦"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* WhatsApp Widget Script (for Nigerian customers) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.whatsappWidget = {
                phone: '2348123456789',
                callToAction: 'Chat with us on WhatsApp!'
              };
            `
          }}
        />
      </body>
    </Html>
  )
}