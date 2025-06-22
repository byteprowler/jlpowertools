// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
  const SITE_URL = 'https://www.jlpowertools.biz';
  const currentDate = new Date().toISOString();

  const existingUrls = [
    '/',
    '/about',
    '/contact',
    '/products',
    '/insights',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${existingUrls
      .map(
        (url) => `
        <url>
          <loc>${SITE_URL}${url}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${url === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `
      )
      .join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
