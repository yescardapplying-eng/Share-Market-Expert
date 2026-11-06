import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogArticles';

export const metadata: Metadata = {
  title: 'Educational Blog & Research Articles | Share Market Expert',
  description:
    'Research-backed educational articles on Indian stock market mechanics, candlestick analysis, option chains, and risk management with official regulatory citations.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/blog',
  },
};

export default function BlogListingPage() {
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Educational Blog</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
            Market Research &amp; Analysis
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Stock Market Educational Blog
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth, research-backed educational analyses grounded in official publications from SEBI, NSE, and BSE. Pure financial learning without sensationalism.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#142B45] text-white">
            All Categories ({BLOG_POSTS.length})
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#176B55]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EBF5F2] text-[#176B55] font-bold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    Published: {post.publishDate}
                  </span>
                  <span>•</span>
                  <span>Updated: {post.lastUpdated}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#142B45] hover:text-[#176B55] transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                {/* Sources List */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 mb-6">
                  <strong className="text-slate-700 block mb-0.5">Authoritative References:</strong>
                  <span>{post.sources.join(' • ')}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#176B55] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Educational Content
                </span>
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
    </div>
  );
}

