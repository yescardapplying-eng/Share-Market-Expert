'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  BookOpen,
  ShieldAlert,
  ArrowRight,
  Clock,
  Compass,
  CheckCircle2,
  Share2,
} from 'lucide-react';

export interface EducationalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface EducationalFaq {
  question: string;
  answer: string;
}

interface EducationalPageProps {
  title: string;
  subtitle: string;
  badge: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  sections: EducationalSection[];
  faqs: EducationalFaq[];
  relatedLinks: { title: string; href: string }[];
  visualCallout?: React.ReactNode;
}

export default function EducationalPageLayout({
  title,
  subtitle,
  badge,
  difficulty,
  readTime,
  sections,
  faqs,
  relatedLinks,
  visualCallout,
}: EducationalPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/our-services" className="hover:text-[#176B55]">Education</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-none" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        {/* Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55]">
              {badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              Level: {difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#142B45] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-10">
            {/* Optional Visual Callout */}
            {visualCallout && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                {visualCallout}
              </div>
            )}

            {/* Sections */}
            {sections.map((sec, idx) => (
              <section
                key={sec.id}
                id={sec.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#EBF5F2] text-[#176B55] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#142B45] tracking-tight">
                    {sec.title}
                  </h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                  {sec.content}
                </div>
              </section>
            ))}

            {/* Educational Disclaimer */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Educational Purpose Only: </strong>
                  This guide is published solely for informational and educational purposes. Securities, price charts, indicators, and calculation models mentioned are strictly for illustrative study and do NOT constitute investment advice, research analysis, or trading recommendations.
                </div>
              </div>
            </div>

            {/* Page-Specific FAQs (At least 3) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#142B45] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Specific clarifications on this educational topic.
              </p>

              <div className="space-y-3">
                {faqs.map((f, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div
                      key={f.question}
                      className={`rounded-xl border transition-all ${
                        isOpen ? 'border-[#176B55] bg-white shadow-xs' : 'border-slate-200 bg-slate-50/60'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(i)}
                        className="w-full touch-target text-left px-5 py-3.5 flex items-center justify-between gap-3 font-bold text-[#142B45] text-sm sm:text-base"
                      >
                        <span>{f.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? 'rotate-180 text-[#176B55]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                          {f.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Navigation, Related Guides & CTA */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Navigation Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs sticky top-28">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Page Table of Contents
              </h3>
              <ul className="space-y-2 text-xs font-semibold text-slate-600">
                {sections.map((sec, i) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="hover:text-[#176B55] hover:underline flex items-center gap-2 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <span>{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Related Guides */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Related Educational Topics
                </h3>
                <div className="space-y-2">
                  {relatedLinks.map((rl) => (
                    <Link
                      key={rl.href}
                      href={rl.href}
                      className="block p-2.5 rounded-lg bg-slate-50 hover:bg-[#EBF5F2] hover:text-[#176B55] text-xs font-semibold text-slate-700 transition-colors"
                    >
                      {rl.title} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar Package Enrollment CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="bg-gradient-to-br from-[#142B45] to-[#0B1928] text-white p-5 rounded-xl text-center space-y-3">
                  <BookOpen className="w-8 h-8 text-[#1CA37E] mx-auto" />
                  <h4 className="text-sm font-bold">Want Guided Learning?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Join our live cohort sessions in Navi Mumbai with personalized doubt-clearing.
                  </p>
                  <Link
                    href="/our-packages"
                    className="block touch-target py-2 px-4 rounded-lg bg-[#176B55] hover:bg-[#125543] text-white text-xs font-bold transition-colors"
                  >
                    View Learning Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

