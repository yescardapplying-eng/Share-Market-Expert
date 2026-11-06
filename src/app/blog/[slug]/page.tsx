import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  BookOpen,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  Share2,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blogArticles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Article Not Found | Share Market Expert' };

  return {
    title: `${post.title} | Educational Research Article`,
    description: post.excerpt,
    alternates: {
      canonical: `https://sharemarketexpert.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastUpdated,
      authors: ['Share Market Expert Academic Research Team'],
      images: [
        {
          url: 'https://sharemarketexpert.in/images/brand/share-market-expert-logo.png',
          width: 1024,
          height: 341,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    dateModified: post.lastUpdated,
    author: {
      '@type': 'Organization',
      name: 'Share Market Expert Academic Research Team',
      url: 'https://sharemarketexpert.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Share Market Expert',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sharemarketexpert.in/images/brand/share-market-expert-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sharemarketexpert.in/blog/${post.slug}`,
    },
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <article className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#176B55]">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-none" aria-current="page">
              {post.category}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B55] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Blog Articles</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#EBF5F2] text-[#176B55] font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Published: {post.publishDate}
            </span>
            <span>•</span>
            <span>Last Updated: {post.lastUpdated}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-[#176B55] pl-4 italic">
            {post.excerpt}
          </p>

          {/* Authoritative Sources Bar */}
          <div className="mt-6 pt-6 border-t border-slate-100 bg-slate-50/70 p-4 rounded-xl text-xs text-slate-600">
            <strong className="text-slate-800 block mb-1">Authoritative Research Sources:</strong>
            <ul className="list-disc pl-5 space-y-1">
              {post.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
          <div
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-[#142B45] mt-6 mb-3">$1</h3>')
                .replace(/#### (.*?)\n/g, '<h4 class="text-base font-bold text-slate-900 mt-4 mb-2">$1</h4>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
            }}
          />
        </div>

        {/* Educational Disclaimer */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 text-xs text-amber-900 leading-relaxed mb-10">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Compliance Disclosure: </strong>
              This research article is published purely for academic and financial education purposes. Share Market Expert is not registered with SEBI as a Research Analyst or Investment Adviser. Nothing herein constitutes investment advice or a recommendation to buy or sell securities.
            </div>
          </div>
        </div>

        {/* Other Recommended Articles */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
          <h3 className="text-lg font-bold text-[#142B45] mb-4">Read Related Research Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherPosts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-[#EBF5F2] border border-slate-200 hover:border-[#176B55]/40 transition-colors block group"
              >
                <span className="text-[10px] font-bold uppercase text-[#176B55] block mb-1">{p.category}</span>
                <h4 className="text-xs font-bold text-[#142B45] group-hover:text-[#176B55] transition-colors line-clamp-2">
                  {p.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
