'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  XCircle,
  ArrowRight,
  ShieldAlert,
  ChevronDown,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  audience: string;
  topics: string[];
  format: string;
  duration: string;
  language: string;
  pricing: string;
  ctaText: string;
  ctaHref: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'stock-market-course',
    name: 'Structured Stock Market Foundation Course',
    audience: 'Beginners with little to zero prior financial market experience.',
    topics: [
      'Indian financial market architecture & regulatory bodies (SEBI, RBI)',
      'Primary market (IPOs) vs Secondary market operations',
      'Order types, bid-ask spreads, and demat settlement cycles',
      'Basic price action, candlestick anatomy & trend identification',
      'Essential risk management & capital protection principles',
    ],
    format: 'Live Online Cohort + Recorded Archive Access',
    duration: '3 Months (Part of Silver Plan)',
    language: 'English, Hindi, Marathi',
    pricing: 'Included in Silver & Above Plans',
    ctaText: 'View Package Options',
    ctaHref: '/our-packages',
  },
  {
    id: 'technical-analysis-workshop',
    name: 'Technical Analysis & Chart Geometry Workshops',
    audience: 'Learners seeking rigorous chart-reading methodologies.',
    topics: [
      'Multi-timeframe price analysis (Daily, Hourly, 15-min)',
      'Support & resistance zones, swing highs & lows',
      'Chart patterns: Double Tops/Bottoms, Head & Shoulders, Flags',
      'Volume spread analysis & momentum indicators (RSI, Moving Averages)',
      'Formulating rule-based entry, stop-loss, and exit checklists',
    ],
    format: 'Weekend Live Educational Workshops + Case Study Reviews',
    duration: '6 Months (Part of Gold Plan)',
    language: 'English, Hindi',
    pricing: 'Included in Gold & Above Plans',
    ctaText: 'View Gold Package',
    ctaHref: '/our-packages',
  },
  {
    id: 'derivatives-fno-masterclass',
    name: 'Derivatives & Option Chain Theory Masterclass',
    audience: 'Advanced learners seeking mathematical derivatives awareness.',
    topics: [
      'Futures contracts: pricing, basis, and roll-over mechanics',
      'Options theory: Call & Put payoff matrices, moneyness (ITM, ATM, OTM)',
      'Option Greeks: Delta, Gamma, Theta decay, and Vega volatility',
      'Deciphering the NSE Option Chain: Open Interest (OI) & PCR',
      'Defensive hedging strategies and the severe risks of naked selling',
    ],
    format: 'Live Deep-Dive Webinars + Option Simulation Demos',
    duration: 'Part of Gold & Platinum Plans',
    language: 'English, Hindi',
    pricing: 'Included in Gold & Platinum Plans',
    ctaText: 'Explore Syllabus',
    ctaHref: '/our-packages',
  },
  {
    id: 'recorded-lectures-portal',
    name: 'Self-Paced Recorded Lecture Portal',
    audience: 'Working professionals and students requiring flexible timing.',
    topics: [
      'High-definition video library with modular chapter breakdowns',
      'Searchable transcriptions and downloadable slide summaries',
      'Real-world chart breakdowns recorded during market hours',
      'Self-assessment quizzes at the end of each module',
    ],
    format: '24/7 On-Demand Portal Access',
    duration: 'Full Access during plan duration',
    language: 'English, Hindi',
    pricing: 'Included with all Active Plans',
    ctaText: 'Access Syllabus',
    ctaHref: '/our-packages',
  },
  {
    id: 'curated-study-notes',
    name: 'Curated Study Notes & Technical E-Books',
    audience: 'Self-directed learners building a permanent reference library.',
    topics: [
      'Comprehensive Candlestick Pattern Handbook (PDF)',
      'Risk-Reward & Position Sizing Calculation Worksheets',
      'Corporate Financial Ratio Cheat-Sheet (P/E, ROCE, Debt/Equity)',
      'Glossary of 200+ Indian Stock Market Terms',
    ],
    format: 'Digital PDF Downloads & Printable Workbooks',
    duration: 'Permanent Personal Access',
    language: 'English & Hindi editions',
    pricing: 'Free with any enrolled package',
    ctaText: 'Request Notes Sample',
    ctaHref: '/contact-us',
  },
  {
    id: 'doubt-clearing-sessions',
    name: 'Educational Doubt-Clearing Sessions',
    audience: 'Students who require personalized academic clarification.',
    topics: [
      'Reviewing homework assignments and chart markups',
      'Clarifying technical indicators and formula calculations',
      'Addressing specific conceptual hurdles one-on-one or in small groups',
      'Strengthening psychological discipline and trading journaling',
    ],
    format: 'Small-Group & 1-on-1 Academic Video Calls',
    duration: 'Weekly & Monthly Slots',
    language: 'English, Hindi, Marathi',
    pricing: 'Tiered by Package (1-on-1 in Gold & Platinum)',
    ctaText: 'Speak With Counselor',
    ctaHref: '/contact-us',
  },
];

const SERVICE_FAQS = [
  {
    q: 'Do your educational services include real-time buy or sell signals?',
    a: 'Absolutely not. Share Market Expert is an educational academy and does not provide tips, intraday calls, trading signals, or stock recommendations. All charts and market examples analyzed during sessions are purely for historical study and conceptual understanding.',
  },
  {
    q: 'Can I access session recordings if I miss a live webinar?',
    a: 'Yes. All scheduled live educational webinars are recorded in high-definition and uploaded to the student learning portal within 24 hours. Enrolled students retain access throughout their plan duration.',
  },
  {
    q: 'In what languages are the educational sessions conducted?',
    a: 'Our core curriculum sessions are available in English and Hindi, with doubt-clearing sessions also accommodating Marathi speakers upon request from our Navi Mumbai center.',
  },
];

export default function OurServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const serviceFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SERVICE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Our Services</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3 border border-[#176B55]/20">
            Academic Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Comprehensive Stock Market Educational Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every service is tailored to deliver deep conceptual clarity, rigorous chart-reading methodologies, and objective risk management.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((s, sIdx) => (
            <div
              key={s.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#176B55]/50 card-hover-lift reveal-on-scroll stagger-${sIdx + 1} transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#176B55] bg-[#EBF5F2] px-3 py-1 rounded-full">
                    {s.duration}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Language: {s.language}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#142B45] mb-2">{s.name}</h2>
                <p className="text-xs font-semibold text-slate-500 mb-4">
                  <strong className="text-slate-700">Target Audience:</strong> {s.audience}
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Topics &amp; Competencies Covered:
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {s.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#176B55] mt-2 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Tuition Structure</span>
                  <span className="text-sm font-bold text-[#142B45]">{s.pricing}</span>
                </div>
                <Link
                  href={s.ctaHref}
                  className="touch-target inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#176B55] hover:bg-[#125543] transition-colors gap-1.5 shadow-xs"
                >
                  <span>{s.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* What We Do NOT Provide Section */}
        <section className="bg-red-50/70 border border-red-200 rounded-3xl p-8 sm:p-10 mb-20 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              Non-Advisory Compliance Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What We Do NOT Provide
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              To protect retail market participants, we strictly adhere to educational guidelines and explicitly disclaim any speculative activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'No Buy/Sell Recommendations', desc: 'We never suggest purchasing or offloading specific stocks.' },
              { title: 'No Stock Tips or Signals', desc: 'No Telegram, WhatsApp, or SMS trading alerts of any kind.' },
              { title: 'No Portfolio Management', desc: 'We do not collect money to trade or manage client accounts.' },
              { title: 'No Guaranteed Returns', desc: 'Stock markets are probabilistic; returns can never be promised.' },
              { title: 'No Personal Investment Advice', desc: 'Consult a SEBI-registered Investment Adviser for custom financial planning.' },
              { title: 'No Trading Account Access', desc: 'We never ask for broker logins, passwords, or OTPs.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-4 rounded-xl border border-red-100 shadow-xs">
                <div className="flex items-center gap-2 text-red-600 mb-1.5">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Accordion FAQs (Only one open at a time) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-2">
              Curriculum Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">
              Educational Services FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions regarding class formats, recordings, and learning methodology.
            </p>
          </div>

          <div className="space-y-3.5">
            {SERVICE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#176B55] bg-white shadow-md ring-1 ring-[#176B55]/20'
                      : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full touch-target text-left px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-[#176B55] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base text-[#142B45] font-bold">{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#176B55] text-white rotate-180 shadow-xs' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
