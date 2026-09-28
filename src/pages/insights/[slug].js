import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/data";
import { FaCalendarAlt, FaClock, FaShareAlt, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowBack } from "react-icons/md";
import { ArrowRight } from "lucide-react";

// ── SSG ──────────────────────────────────────────────────────────
export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null;

  if (!post) return { notFound: true };

  const related = posts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return { props: { post, related } };
}

// ── Helpers ───────────────────────────────────────────────────────
function getReadTime(content) {
  return Math.max(1, Math.ceil((content || '').split(/\s+/).length / 200));
}

const SocialIcons = {
  Twitter: <FaXTwitter />,
  Facebook: <FaFacebook />,
  LinkedIn: <FaLinkedinIn />,
  WhatsApp: <FaWhatsapp />,
};

function shareArticle(platform, post) {
  const url = `https://www.jlpowertools.biz/insights/${post.slug}`;
  const text = `Check out this article from J & L Powertools LTD: ${post.title}`;
  const map = {
    Twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    LinkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`,
    WhatsApp: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  };
  window.open(map[platform], '_blank');
}

// ── Article schema ────────────────────────────────────────────────
function buildArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.date,
    "description": Array.isArray(post.description) ? post.description[0] : post.description,
    "image": post.image || "https://www.jlpowertools.biz/Logo.webp",
    "author": { "@type": "Organization", "name": "J & L Powertools LTD" },
    "publisher": {
      "@type": "Organization",
      "name": "J & L Powertools LTD",
      "logo": { "@type": "ImageObject", "url": "https://www.jlpowertools.biz/Logo.webp" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.jlpowertools.biz/insights/${post.slug}` }
  };
}

// ── Component ─────────────────────────────────────────────────────
export default function InsightsPost({ post, related }) {
  const readingTime = getReadTime(post.content);
  const description = Array.isArray(post.description) ? post.description[0] : post.description;

  return (
    <>
      <NextSeo
        title={`${post.title} | J & L Powertools LTD`}
        description={description}
        canonical={`https://www.jlpowertools.biz/insights/${post.slug}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.date,
            tags: post.keywords || ['construction', 'scaffolding', 'ladders', 'Nigeria'],
          },
          url: `https://www.jlpowertools.biz/insights/${post.slug}`,
          images: [{ url: post.image || 'https://www.jlpowertools.biz/Logo.webp', width: 1200, height: 630, alt: post.title }],
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: post.keywords?.join(', ') || 'scaffolding, ladders, construction safety, Nigeria',
        }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(post)) }}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#FACC15] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[#FACC15] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-gray-800 line-clamp-1">{post.title}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-[#FACC15] hover:text-yellow-600 mb-8 font-medium transition-colors"
        >
          <MdOutlineArrowBack />
          Back to Insights
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-6">
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt />
                {new Date(post.date).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock />
                {readingTime} min read
              </span>
            </div>

            {post.image && (
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-md">
                <Image
                  src={post.image}
                  alt={`Featured image for ${post.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose max-w-none text-gray-700 prose-headings:text-gray-900
                        prose-a:text-[#FACC15] hover:prose-a:text-yellow-600
                        prose-img:rounded-xl prose-img:shadow-md
                        prose-strong:text-gray-900 prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaShareAlt className="text-[#FACC15]" />
              Share this article
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => shareArticle(platform, post)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-xl transition-colors text-sm font-medium"
                  aria-label={`Share on ${platform}`}
                >
                  <span>{SocialIcons[platform]}</span>
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/insights/${relPost.slug}`}
                  className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={relPost.image}
                      alt={relPost.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#FACC15] transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[#FACC15] text-xs mt-2">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
