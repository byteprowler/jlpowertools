import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import MainLayout from "@/components/Layout";

const SEO_CONFIG = {
  titleTemplate: "%s | J & L Powertools LTD- Ladders & Scaffolding (Lagos)",
  defaultTitle: "J & L Powertools LTD- Premium Construction Equipment Showroom in Lagos",
  description: "Visit our Lagos showroom for quality inspection of industrial scaffolding and ladders. Serving clients from Nigeria and across West Africa.",
  canonical: "https://www.jlpowertools.biz",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.jlpowertools.biz",
    siteName: "J & L Powertools",
    images: [
      {
        url: "https://www.jlpowertools.biz/Logo.webp",
        width: 1200,
        height: 630,
        alt: "J & L Powertools LTD Lagos Showroom - Scaffolding & Ladders",
      },
    ],
  },
  twitter: {
    handle: "@jlpowertools_ng",
    site: "@jlpowertools_ng",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "Scaffolding showroom Lagos, buy ladders Nigeria, construction equipment West Africa, industrial ladders showroom, J & L Powertools",
    },
    { name: "geo.region", content: "NG-LA" },
    { name: "geo.placename", content: "Lagos, Nigeria" },
    { name: "geo.position", content: "6.4859;3.3830" },
    { name: "ICBM", content: "6.4859, 3.3830" },

    { name: "business:contact_data:street_address", content: "73 Cemetery Street, Ebutte-Metta" },
    { name: "business:contact_data:locality", content: "Yaba" },
    { name: "business:contact_data:region", content: "Lagos" },
    { name: "business:contact_data:phone_number", content: "+2348035717860" },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <meta property="og:locale:alternate" content="fr_FR" />
      </Head>
      <DefaultSeo {...SEO_CONFIG} />
      <Component {...pageProps} />
    </MainLayout>
  );
}