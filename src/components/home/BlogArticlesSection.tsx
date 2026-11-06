import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogArticles';

export default function BlogArticlesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
              Research &amp; Market Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
              Evidence-Based Market Education
            </h2>
            <p className="mt-3 text-base text-slate-600">
              In-depth educational articles citing regulatory frameworks, exchange guidelines, and classic financial research.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-[#176B55] hover:text-[#125543] hover:underline"
          >
            <span>Explore All Blog Articles</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.slice(0, 4).map((post, idx) => (
            <article
              key={post.slug}
              className={`bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#176B55]/50 hover:bg-white hover:shadow-xl card-hover-lift reveal-on-scroll stagger-${idx + 1} transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#142B45] text-white font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Published: {post.publishDate}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span>Updated: {post.lastUpdated}</span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#142B45] hover:text-[#176B55] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Sources note */}
                <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Official Sources: </strong>
                  <span>{post.sources.join(' • ')}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#176B55]">Verified Educational Topic</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142B45] hover:text-[#176B55] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

