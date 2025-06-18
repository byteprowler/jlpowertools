import { posts, products } from '@/data/data'; // Import from your local data

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Homepage -->
      <url>
        <loc>https://www.jlpowertools.biz</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>

      <!-- Blog Posts -->
      ${posts.map(post => `
        <url>
          <loc>https://www.jlpowertools.biz/insights/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
        </url>
      `).join('')}

      <!-- Product Pages -->
      ${products.map(product => `
        <url>
          <loc>https://www.jlpowertools.biz/products/${product.slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `).join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}