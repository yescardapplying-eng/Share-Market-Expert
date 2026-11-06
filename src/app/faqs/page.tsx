'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';

interface FaqCategory {
  category: string;
  items: { q: string; a: string }[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    category: 'About Share Market Expert',
    items: [
      {
        q: 'What is Share Market Expert?',
        a: 'Share Market Expert is an educational academy based in Vashi, Navi Mumbai, dedicated to providing structured stock market learning. We teach financial market concepts, candlestick charts, price action, and risk management so participants can build an independent understanding of the market.',
      },
      {
        q: 'Are you registered with SEBI as an Investment Adviser?',
        a: 'No. Share Market Expert is strictly an educational platform and is NOT registered with SEBI as a Research Analyst or Investment Adviser. We do not provide buy/sell recommendations, stock calls, trading signals, or portfolio management.',
      },
      {
        q: 'Where are you located?',
        a: 'Our educational center is located in Vashi, Navi Mumbai, Maharashtra, India. We conduct both live online cohort programs for learners nationwide and scheduled physical educational seminars in Navi Mumbai.',
      },
    ],
  },
  {
    category: 'Courses & Packages',
    items: [
      {
        q: 'What packages do you offer?',
        a: 'We offer three structured plans: Silver Plan (₹24,999 / 3 Months), Gold Plan (₹42,999 / 6 Months - Most Popular), and Platinum Plan (₹79,999 / 12 Months). Each plan includes structured modules, live webinars, doubt clearing, and educational completion certificates.',
      },
      {
        q: 'What is the nature of the completion certificate?',
        a: 'Our certificate verifies that you have completed our academic curriculum and coursework. It is strictly an educational completion certificate; it does not confer SEBI certification, government accreditation, or employment guarantees.',
      },
      {
        q: 'Can I access recordings if I miss a live session?',
        a: 'Yes. All scheduled live educational sessions are recorded in high-definition and uploaded to your student portal within 24 hours.',
      },
    ],
  },
  {
    category: 'Market Risks & Compliance',
    items: [
      {
        q: 'Do you give stock market tips or trading calls on WhatsApp/Telegram?',
        a: 'Never. We strictly refuse to provide tips, trading calls, or stock recommendations. We empower students with analytical frameworks so they can evaluate charts independently.',
      },
      {
        q: 'Will anyone from Share Market Expert ask for my trading password?',
        a: 'Never. As highlighted in our security policy, we will NEVER ask for your trading account login credentials, OTPs, or money to trade on your behalf.',
      },
      {
        q: 'Is stock market trading risk-free after completing the course?',
        a: 'No. Financial markets involve substantial risk of capital loss. Education helps you recognize risks and implement position sizing, but cannot eliminate market uncertainty.',
      },
    ],
  },
];

export default function FaqsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>('About Share Market Expert-0');

  const allFaqs = FAQ_DATA.flatMap((cat) => cat.items);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const filteredCategories = FAQ_DATA.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Frequently Asked Questions</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Find immediate answers regarding our educational curriculum, package fees, session schedules, and strict compliance principles.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-12">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. tips, packages, certificates, beginners)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:border-[#176B55] shadow-xs"
          />
        </div>

        {/* FAQ Groups */}
        <div className="space-y-10 mb-16">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-3">
              <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-200 pb-2">
                {group.category}
              </h2>

              <div className="space-y-3">
                {group.items.map((item, idx) => {
                  const key = `${group.category}-${idx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={item.q}
                      className={`rounded-2xl border transition-all ${
                        isOpen ? 'border-[#176B55] bg-white shadow-xs' : 'border-slate-200 bg-white/70'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="w-full touch-target text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                      >
                        <span className="text-[#142B45]">{item.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${
                            isOpen ? 'rotate-180 text-[#176B55]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-3 shadow-xs">
          <h3 className="text-base font-bold text-[#142B45]">Have a Question Not Listed Here?</h3>
          <p className="text-xs text-slate-600">
            Our academic counseling desk in Vashi is available Monday to Saturday to answer any questions about our curriculum.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#176B55] text-white text-xs font-bold hover:bg-[#125543] transition-colors"
          >
            <span>Contact Education Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

