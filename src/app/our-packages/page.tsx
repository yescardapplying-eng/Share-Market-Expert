'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ShieldCheck,
  Award,
  Sparkles,
  HelpCircle,
  AlertCircle,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

interface PackagePlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  highlight?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
}

const PACKAGES: PackagePlan[] = [
  {
    id: 'silver',
    name: 'SILVER PLAN',
    price: '₹24,999',
    duration: 'Quarterly — 3 Months',
    description:
      'Ideal for newcomers seeking a structured, jargon-free introduction to Indian equity market mechanics and candlestick charting.',
    features: [
      'Beginner-friendly structured modules',
      'Weekly live online sessions',
      'Recorded lecture access',
      'Study notes and PDFs',
      'Group doubt support',
      'Educational completion certificate',
    ],
    ctaLabel: 'Enroll in Silver Plan',
  },
  {
    id: 'gold',
    name: 'GOLD PLAN',
    price: '₹42,999',
    duration: 'Six Months',
    highlight: 'Most Popular',
    isPopular: true,
    description:
      'Our most comprehensive curriculum balancing foundational mastery with deep technical analysis and derivatives concept training.',
    features: [
      'All Silver and foundation features',
      'Advanced modules',
      'Two live educational sessions per week',
      'Practical case studies',
      'Assignments and practice tests',
      'One monthly one-on-one doubt session',
      'Monthly learning progress review',
      'Advanced educational completion certificate',
    ],
    ctaLabel: 'Enroll in Gold Plan',
  },
  {
    id: 'platinum',
    name: 'PLATINUM PLAN',
    price: '₹79,999',
    duration: 'Yearly — 12 Months',
    description:
      'Full annual academic immersion with personalized mentorship, weekly 1-on-1 doubt reviews, and advanced market structure mastery.',
    features: [
      'All Gold and advanced features',
      'Expert-level educational modules',
      'One-on-one educational mentorship',
      'Personalized learning roadmap',
      'Weekly doubt-clearing calls',
      'Priority educational support',
      'Private learning community access',
      'Educational completion certificate',
    ],
    ctaLabel: 'Enroll in Platinum Plan',
  },
];

const PACKAGE_FAQS = [
  {
    q: 'Are the completion certificates recognized by SEBI or the Government of India?',
    a: 'No. Our certificates are strictly educational completion certificates verifying that you have completed our academic coursework and curriculum. They do not constitute formal regulatory accreditation, SEBI certification (such as NISM series exams), or university degrees.',
  },
  {
    q: 'Do any of your packages guarantee trading profits or income generation?',
    a: 'No. We strictly teach market theory, charting techniques, and risk management principles. Financial markets carry high risk of financial loss. We never make profit claims, income guarantees, or performance assurances.',
  },
  {
    q: 'Can I upgrade from Silver to Gold during my learning period?',
    a: 'Yes, students enrolled in the Silver Plan can upgrade to the Gold or Platinum Plan within their first 30 days by paying the pro-rata tuition difference. Contact our counseling desk in Vashi to arrange curriculum migration.',
  },
];

export default function OurPackagesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const packageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PACKAGE_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packageSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Our Packages</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3 border border-[#176B55]/20">
            Transparent Tuition Plans
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Choose Your Stock Market Educational Pathway
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Select a learning plan tailored to your educational goals. All plans include live interactive sessions, curated study resources, and academic completion certificates.
          </p>
        </div>

        {/* 3 Package Pricing Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-white border-2 border-[#176B55] shadow-2xl scale-100 lg:-translate-y-2'
                  : 'bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#176B55] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {pkg.highlight}
                </div>
              )}

              <div>
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <h2 className="text-xl font-extrabold tracking-wide text-[#142B45]">{pkg.name}</h2>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.description}</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">{pkg.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/ {pkg.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Included In Plan:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-[#EBF5F2] text-[#176B55] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href="/contact-us"
                  className={`touch-target w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    pkg.isPopular
                      ? 'bg-[#176B55] hover:bg-[#125543] text-white shadow-lg shadow-[#176B55]/20'
                      : 'bg-[#142B45] hover:bg-[#1F3858] text-white'
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-[11px] text-center text-slate-400 mt-3">
                  Non-advisory education • Academic certificate upon completion
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-20">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-[#142B45]">Comprehensive Plan Feature Comparison</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Compare features across our 3-Month, 6-Month, and 12-Month educational tracks.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-slate-200 text-xs font-bold uppercase text-slate-500">
                  <th className="py-3 px-4">Feature / Curriculum Asset</th>
                  <th className="py-3 px-4 text-center">Silver (3 Mo)</th>
                  <th className="py-3 px-4 text-center bg-[#EBF5F2]/50 text-[#176B55]">Gold (6 Mo)</th>
                  <th className="py-3 px-4 text-center">Platinum (12 Mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                <tr>
                  <td className="py-3 px-4 font-semibold">Tuition Fee</td>
                  <td className="py-3 px-4 text-center font-bold">₹24,999</td>
                  <td className="py-3 px-4 text-center font-bold bg-[#EBF5F2]/50 text-[#176B55]">₹42,999</td>
                  <td className="py-3 px-4 text-center font-bold">₹79,999</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Foundation Modules</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-[#EBF5F2]/50">✓ Included</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Live Session Frequency</td>
                  <td className="py-3 px-4 text-center">1 per week</td>
                  <td className="py-3 px-4 text-center font-bold text-[#176B55] bg-[#EBF5F2]/50">2 per week</td>
                  <td className="py-3 px-4 text-center font-bold">2+ per week</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Advanced Technical &amp; F&amp;O Modules</td>
                  <td className="py-3 px-4 text-center text-slate-400">—</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-[#EBF5F2]/50">✓ Included</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">One-on-One Doubt Sessions</td>
                  <td className="py-3 px-4 text-center text-slate-400">Group Only</td>
                  <td className="py-3 px-4 text-center font-bold text-[#176B55] bg-[#EBF5F2]/50">1 Monthly Slot</td>
                  <td className="py-3 px-4 text-center font-bold">Weekly Slots</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Personalized Learning Roadmap</td>
                  <td className="py-3 px-4 text-center text-slate-400">—</td>
                  <td className="py-3 px-4 text-center text-slate-400 bg-[#EBF5F2]/50">—</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Educational Completion Certificate</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold">Standard Certificate</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-[#EBF5F2]/50">Advanced Certificate</td>
                  <td className="py-3 px-4 text-center text-emerald-600 font-bold">Mastery Certificate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Certificate Disclaimer Box */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mb-16 text-xs text-amber-900 leading-relaxed">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Educational Certificate Transparency: </strong>
              All certificates issued upon course completion verify syllabus attendance and theoretical coursework. They are not professional licenses, government credentials, or SEBI certifications. Share Market Expert never promises employment, investment returns, or trading income.
            </div>
          </div>
        </div>

        {/* Interactive Accordion FAQs */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">
              Package &amp; Enrollment FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Frequently asked questions regarding fee structures, plan durations, and certificates.
            </p>
          </div>

          <div className="space-y-3.5">
            {PACKAGE_FAQS.map((faq, index) => {
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
