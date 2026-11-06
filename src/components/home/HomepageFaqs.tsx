'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'What is Share Market Expert?',
    answer:
      'Share Market Expert is an educational platform based in Vashi, Navi Mumbai, dedicated to providing structured stock market learning. We teach financial market concepts, candlestick charts, price action, and risk management so participants can build an independent understanding of the market.',
  },
  {
    question: 'Do you provide stock market tips?',
    answer:
      'No. We provide education, not buy/sell calls or trading tips. Share Market Expert is not registered with SEBI as a Research Analyst or Investment Adviser. We believe long-term success comes from conceptual knowledge and disciplined risk control, not speculative tips.',
  },
  {
    question: 'Is this suitable for beginners?',
    answer:
      'Yes, absolutely. Our foundational modules are specifically structured for absolute beginners who have never traded or analyzed a stock before. We start with basics such as demat accounts, how exchanges match orders, and basic chart geometry before progressing to complex topics.',
  },
  {
    question: 'What topics can I learn?',
    answer:
      'Our curriculum covers stock market mechanics, technical analysis, candlestick patterns, corporate fundamental analysis, options and futures theory, option chain interpretation, capital risk management, position sizing, and trading psychology.',
  },
  {
    question: 'Do you provide live educational sessions?',
    answer:
      'Yes. Depending on your chosen learning plan (Silver, Gold, or Platinum), we conduct scheduled live interactive educational webinars and doubt-clearing sessions where students can examine historical charts and ask concept-related questions directly to educators.',
  },
  {
    question: 'Is stock market trading risk-free?',
    answer:
      'No. Trading and investing in securities carry substantial risk of financial loss. Market prices fluctuate due to numerous macroeconomic, company-specific, and liquidity factors. Education helps you understand these risks, but it cannot eliminate market risk.',
  },
];

export default function HomepageFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3 border border-[#176B55]/20">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Clear, honest answers to help you understand our educational philosophy and learning process.
          </p>
        </div>

        {/* Accordion Container (Only one open at a time) */}
        <div className="space-y-3.5">
          {HOMEPAGE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#176B55] bg-white shadow-md ring-1 ring-[#176B55]/20'
                    : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full touch-target text-left px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-[#176B55] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg text-[#142B45] font-bold">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#176B55] text-white rotate-180 shadow-xs' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
