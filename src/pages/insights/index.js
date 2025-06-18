import Link from "next/link";
import { posts } from "@/data/data";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const LETTER_DELAY = 0.050;
const BOX_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 50000;

const Typewrite = ({ examples }) => {
  const [restartKey, setRestartKey] = useState(0);
  const current = examples[restartKey % examples.length];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRestartKey((prev) => prev + 1); // re-trigger animation
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 rounded-md bg-neutral-950" />
      <span className="ml-2">
        Description:{" "}
        {current.split("").map((l, i) => (
          <motion.span
            key={`${restartKey}-${i}`} // force restart on key change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: i * LETTER_DELAY,
              duration: 0,
            }}
            className="relative"
          >
            {l}
            <motion.span
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};


export default function Insights() {
  return (
    <>
    <NextSeo
    title="Construction Equipment Insights | J&L Powertools LTD Blog"
    description="Expert Articles on scaffolding safety and ladder maintenance"
    canonical="https://www.jlpowertools.biz/insights" />
    <main className="space-y-16">
      <section
      id="hero"
      className="relative min-h-screen flex space-y-8 flex-col overflow-hidden items-center justify-center text-center px-6 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519143009590-e3800b9df468?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <h1 className="text-6xl uppercase font-bold mb-8">Insights</h1>
      <p>Experts advice for the West African Construction professionals</p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <ul className="space-y-12 divide-y divide-gray-200">
        {posts.map((post) => (
          <motion.li 
          key={post.slug}
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}>
            <Link href={`/insights/${post.slug}`} className="group">
              <article className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-64 h-48 overflow-hidden rounded-lg bg-gray-100">
                  {post.image && (
                    <Image
                     src={post.image}
                     alt={""}
                     fill
                     loading="lazy"
                     className="object-cover" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#FACC15] transition-colors">{post.title}</h2>
                  <Typewrite examples={post.description} />
                  <div className="flex items-center mt-3 text-sm text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(post.date).toLocaleDateString("en-NG")}
                  </div>
                </div>
              </article>
            </Link>
          </motion.li>
        ))}
      </ul>
      </div>
    </main>
    </>
  );
}