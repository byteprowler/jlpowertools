// pages/sitemap.xml.js
import { getAllPosts, getAllProducts } from '@/lib/api';

export async function getServerSideProps({ res }) {
  const posts = await getAllPosts();
  const products = await getAllProducts();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.jlpowertools.com.ng</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${posts.map(post => `
        <url>
          <loc>https://www.jlpowertools.com.ng/blog/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
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