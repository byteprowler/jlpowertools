import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";

import Loader from "@/components/Loader";
import { posts } from "@/data/data";
import { FaCalendarAlt, FaClock, FaShareAlt, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowBack } from "react-icons/md";


export default function InsightsPost() {
  const router = useRouter();

  const SocialIcons ={
    Twitter: <FaXTwitter />,
    Facebook: <FaFacebook />,
    LinkedIn: <FaLinkedinIn />,
    WhatsApp: <FaWhatsapp />, // Placeholder, replace with actual LinkedIn icon
  }

  const { slug } = router.query;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return (
    <div className="flex w-screen h-screen items-center justify-center flex-col bg-[#FACC15]">
      <Loader />
      <p className="mt-4 text-black font-medium">Loading Article...</p>
    </div>
  );

  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      <NextSeo
        title={`${post.title} | J&L Powertools - Scaffolding Experts`}
        description={post.description}
        canonical={`https://www.jlpowertools.com.ng/insights/${post.slug}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.date,
            tags: post.tags || ['construction', 'scaffolding', 'ladders'],
          },
          url: `https://www.jlpowertools.com.ng/insights/${post.slug}`,
          images: [
            {
              url: `/jlpics/insights/${post.featuredImage || 'default-og.jpg'}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: post.keywords?.join(', ') || 'scaffolding, ladders, construction safety, Nigeria',
          },
        ]}
      />

      <main className="max-w-3xl mx-auto mt-12 px-4 sm:px-6 py-12">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/insights')}
          className="flex items-center text-[#FACC15] hover:text-yellow-600 mb-8 hover:cursor-pointer transition-colors"
        >
          <MdOutlineArrowBack className="mr-2" />
          Back to insights
        </button>

        {/* Article Header */}
        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-6">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                {new Date(post.date).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" />
                {readingTime} min read
              </span>
            </div>

            {post.image && (
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={`Featured image for ${post.title}`}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div 
            className="prose max-w-none text-gray-700 prose-headings:text-gray-900
                      prose-a:text-[#FACC15] hover:prose-a:text-yellow-600
                      prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-3">
              {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => shareArticle(platform, post)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaShareAlt />
                  {platform}
                  <span className="ml-0 mr-1 inline-flex items-center">
                  {SocialIcons [platform]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

// Helper function for sharing
const shareArticle = (platform, post) => {
  const url = `https://www.jlpowertools.com.ng/insights/${post.slug}`;
  const text = `Check out this article from J&L Powertools LTD: ${post.title}`;

  switch(platform) {
    case 'Twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
      break;
    case 'Facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      break;
    case 'LinkedIn':
      window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}`, '_blank');
      break;
    case 'WhatsApp':
      window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank');
      break;
  }
};