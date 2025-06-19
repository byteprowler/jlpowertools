import { posts, products } from '@/data/data';

export async function getServerSideProps({ res }) {
  const SITE_URL = 'https://www.jlpowertools.biz';
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Homepage -->
      <url>
        <loc>${SITE_URL}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>

      <!-- Nigerian Cities -->
      <url>
        <loc>${SITE_URL}/lagos-scaffolding</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${SITE_URL}/abuja-construction</loc>
        <lastmod>${currentDate}</lastmod>
      </url>

      <!-- Blog Posts -->
      ${posts.map(post => `
        <url>
          <loc>${SITE_URL}/blog/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
          ${post.title.includes('Nigeria') ? '<priority>0.8</priority>' : ''}
        </url>
      `).join('')}

      <!-- Products -->
      ${products.map(product => `
        <url>
          <loc>${SITE_URL}/products/${product.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          ${product.category === 'scaffolding' ? '<priority>0.7</priority>' : ''}
        </url>
      `).join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() { return null; }