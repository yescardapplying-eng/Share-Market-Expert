import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  BookOpen,
  Target,
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Award,
  Sparkles,
} from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';

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
  {
    q: 'Where are your learning cohorts conducted?',
    a: 'We conduct both online interactive webinars for learners across India and offline educational workshops from our registered academic center in Vashi, Navi Mumbai, Maharashtra.',
  },
  {
    q: 'Do you offer stock recommendations, tips, or calls via WhatsApp/Telegram?',
    a: 'Never. We strictly comply with Indian regulatory norms and will never provide trading calls, buy/sell recommendations, or guaranteed return schemes. We only provide educational materials and analytical mentoring.',
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
      {/* Schema rendered directly without <head> wrapper */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }}
      />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5F2] text-[#176B55] text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              Rooted in Integrity &amp; Pure Education
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#142B45] leading-tight">
              Honest Financial Market Education for the Serious Learner
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Share Market Expert was founded with one clear purpose: to demystify Indian stock markets through disciplined, academic study — free of trading tips, false profit promises, and speculative hype.
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

          {/* Educational Visual Card (Replaced repetitive emblem with market learning visual) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#142B45] text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#1F3858] max-w-md w-full space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#176B55] flex items-center justify-center text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Academic Curriculum</h3>
                    <p className="text-[11px] text-slate-300">Vashi, Navi Mumbai Studio</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Pure Education
                </span>
              </div>

              {/* Course Structure Highlights */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#176B55]/30 text-[#1CA37E] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Price Action &amp; Chart Geometry</div>
                    <div className="text-[11px] text-slate-300">Support, resistance &amp; multi-timeframe trends</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Quantitative Risk Management</div>
                    <div className="text-[11px] text-slate-300">1% risk rules, stop loss calculation &amp; sizing</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Derivatives &amp; Option Greek Concepts</div>
                    <div className="text-[11px] text-slate-300">Open interest, IV, theta decay &amp; hedging models</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                  <span>Zero stock tips or financial advisory services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                  <span>Structured live cohorts + lifetime community study notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                  <span>Interactive query resolution &amp; case study reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Learners Can Expect */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16">
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

        {/* About FAQs with Interactive Accordion */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5F2] text-[#176B55] text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">
              About Share Market Expert
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions about our background, ethics, and educational standards.
            </p>
          </div>

          <AccordionFaq items={ABOUT_FAQS} defaultOpenIndex={0} />

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Have specific questions about our upcoming batches or curriculum?
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B55] hover:text-[#142B45] transition-colors"
            >
              Contact Our Academic Team
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
