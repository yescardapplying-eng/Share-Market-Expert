import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  BookOpen,
  Target,
  Compass,
  HeartHandshake,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Stock Market Education Institute in Navi Mumbai',
  description:
    'Learn about Share Market Expert: our honest educational mission, teaching philosophy, and commitment to transparent financial learning without speculative noise or false claims.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/about-us',
  },
};

const ABOUT_FAQS = [
  {
    q: 'Who founded Share Market Expert?',
    a: 'Share Market Expert was initiated by a self-taught market participant and passionate educator who spent years navigating market mechanics, chart geometry, and risk control. Recognizing the pervasive misinformation and false get-rich-quick claims in the trading community, the platform was established to provide structured, honest, and noise-free financial education.',
  },
  {
    q: 'Is Share Market Expert affiliated with any brokerage house or exchange?',
    a: 'No. Share Market Expert is completely independent. We do not receive commissions for pushing specific brokers, trading platforms, or financial products. Our focus is 100% on conceptual education.',
  },
  {
    q: 'Can taking your course guarantee that I will become a profitable trader?',
    a: 'No educational institution can honestly guarantee market profitability. Financial markets involve continuous uncertainty and risk. Our mission is to equip you with structured analytical frameworks, mathematical position sizing, and emotional discipline so you can evaluate market data independently and manage risk objectively.',
  },
];

export default function AboutUsPage() {
  const aboutFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ABOUT_FAQS.map((faq) => ({
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
        />
      </head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
            Honest Financial Education
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Demystifying the Stock Market Through Disciplined Learning
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Share Market Expert is built on a simple conviction: financial literacy should be grounded in structured curriculum, empirical chart analysis, and strict risk control — without misleading hype.
          </p>
        </div>

        {/* Brand Mission & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142B45]">
              Who We Are &amp; Why We Teach
            </h2>
            <p className="text-base leading-relaxed">
              Based in Vashi, Navi Mumbai, <strong>Share Market Expert</strong> is an independent stock market education initiative. We observed that the majority of retail participants entering the Indian equity markets rely on unregulated social media channels, speculative stock tips, and unverified profit screenshots.
            </p>
            <p className="text-base leading-relaxed">
              We chose an alternative path: <strong>uncompromising educational honesty</strong>. Our programs do not promise overnight wealth or market clairvoyance. Instead, we teach market participants how the financial system actually works — from the mechanics of NSE/BSE auction matching to the psychological disciplines of capital preservation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <Target className="w-6 h-6 text-[#176B55] mb-2" />
                <h3 className="text-sm font-bold text-slate-900">Our Mission</h3>
                <p className="text-xs text-slate-500 mt-1">
                  To provide accessible, high-integrity stock market education that empowers learners to think independently.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <Compass className="w-6 h-6 text-[#176B55] mb-2" />
                <h3 className="text-sm font-bold text-slate-900">Our Philosophy</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Risk control precedes profit. A disciplined student manages downside before calculating potential rewards.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#142B45] text-white rounded-3xl p-8 shadow-xl border border-[#1F3858] max-w-md w-full text-center space-y-4">
              <div className="w-24 h-24 mx-auto relative">
                <Image
                  src="/images/brand/share-market-expert-icon.png"
                  alt="Share Market Expert Crest"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Share Market Expert</h3>
              <p className="text-xs text-[#1CA37E] font-semibold">
                Stock Market Education &amp; Financial Literacy
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1CA37E]" />
                  <span>Academic Learning Center: Vashi, Navi Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1CA37E]" />
                  <span>100% Non-Advisory Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1CA37E]" />
                  <span>Interactive Live Cohorts + Notes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Learners Can Expect */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B45] text-center mb-10">
            What You Can Expect From Our Learning Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] text-[#176B55] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Rigorous Chart Reading</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn how to read multi-timeframe price action, support and resistance zones, candlestick wicks, and volume behavior on clean, uncluttered charts.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] text-[#176B55] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Mathematical Risk Sizing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understand why position sizing matters more than entry precision. Calculate lot sizes and portfolio limits mathematically to guard against drawdown.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF5F2] text-[#176B55] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Psychological Discipline</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Master the emotional pitfalls of fear and greed. Establish an objective trade journaling process to maintain consistency without emotional burnout.
              </p>
            </div>
          </div>
        </section>

        {/* Regulatory Disclosure Banner */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-16 text-xs text-amber-900 leading-relaxed">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Honest Institutional Disclosure: </strong>
              Share Market Expert is an educational academy and is NOT registered with SEBI as a Research Analyst or Investment Adviser. We do not provide financial advisory services, stock calls, or portfolio management. All materials, charts, and case studies are for educational study only.
            </div>
          </div>
        </div>

        {/* About FAQs */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">
              About Us FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions about our background, ethics, and educational standards.
            </p>
          </div>

          <div className="space-y-4">
            {ABOUT_FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-[#142B45] mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
