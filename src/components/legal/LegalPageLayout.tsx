'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ChevronDown, Scale, AlertCircle } from 'lucide-react';

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalFaq {
  q: string;
  a: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  faqs: LegalFaq[];
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  faqs,
}: LegalPageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Legal &amp; Policy</li>
          </ol>
        </nav>

        {/* Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            <Scale className="w-3.5 h-3.5" />
            Statutory &amp; Operational Policy
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated &amp; In Effect: {lastUpdated} • Applicable to Share Market Expert Platform
          </p>
        </div>

        {/* Advisory Template Notice */}
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-10 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice &amp; Compliance Statement: </strong>
            This policy document represents an operational compliance draft for Share Market Expert. While prepared in accordance with applicable Indian Information Technology Acts and consumer protection guidelines, platform users are advised to seek independent legal or financial counsel for specific corporate governance queries.
          </div>
        </div>

        {/* Policy Body Sections */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 space-y-8">
          {sections.map((sec, idx) => (
            <section key={idx} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
              <h2 className="text-lg sm:text-xl font-bold text-[#142B45] mb-3">
                {idx + 1}. {sec.title}
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                {sec.content}
              </div>
            </section>
          ))}
        </div>

        {/* Page FAQs (At least 3 required) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">
            Policy Clarification FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all ${
                    isOpen ? 'border-[#176B55] bg-white' : 'border-slate-200 bg-slate-50/70'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full touch-target text-left px-5 py-3.5 flex items-center justify-between gap-4 font-bold text-[#142B45] text-xs sm:text-sm"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-[#176B55]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

