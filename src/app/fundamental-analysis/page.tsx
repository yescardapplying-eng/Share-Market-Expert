import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Fundamental Analysis Guide | Financial Statement & Ratio Analysis',
  description:
    'Learn fundamental analysis for Indian stocks: balance sheets, P&L statements, P/E ratios, ROCE, debt-to-equity, cash flow, and economic moats.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/fundamental-analysis',
  },
};

export default function FundamentalAnalysisPage() {
  return (
    <EducationalPageLayout
      title="Fundamental Analysis: Valuation Ratios & Financial Statements"
      subtitle="Understand the intrinsic financial health of businesses by examining balance sheets, income statements, operating cash flows, and sustainable competitive advantages."
      badge="Value & Investment Module"
      difficulty="Intermediate"
      readTime="13 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            The Three Pillars of Financial Statement Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Profit &amp; Loss (P&amp;L)</strong>
              <p className="text-slate-500">Tracks revenue (topline), operating profit margin (OPM), and net profit after tax (bottomline) over a financial quarter or year.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Balance Sheet</strong>
              <p className="text-slate-500">Snapshots what a company owns (Assets) versus what it owes (Liabilities and Equity capital) at a specific date.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Cash Flow Statement</strong>
              <p className="text-slate-500">Verifies whether recorded accounting profits are actually translating into genuine cash from operations (CFO).</p>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'essential-ratios',
          title: 'Essential Financial Ratios Explained',
          content: (
            <>
              <p>
                Ratios normalize corporate data so analysts can compare companies of varying sizes within the same industry sector:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Price-to-Earnings (P/E) Ratio</strong>
                  <p className="text-xs text-slate-600 mt-1">Share Price divided by Earnings Per Share (EPS). Indicates how much the market is willing to pay per rupee of current profit.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Return on Capital Employed (ROCE)</strong>
                  <p className="text-xs text-slate-600 mt-1">EBIT divided by Total Capital Employed. Measures how efficiently corporate management allocates capital to generate operating returns.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Debt-to-Equity (D/E) Ratio</strong>
                  <p className="text-xs text-slate-600 mt-1">Total Borrowings divided by Shareholders&apos; Equity. High leverage increases vulnerability during economic contractions.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Operating Cash Flow (CFO / PAT)</strong>
                  <p className="text-xs text-slate-600 mt-1">A healthy business consistently generates CFO equal to or exceeding its reported Net Profit.</p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'economic-moat',
          title: 'Evaluating Economic Moats & Management Quality',
          content: (
            <>
              <p>
                Quantitative numbers alone do not reveal whether a business will thrive over the coming decade. An <strong>economic moat</strong> is a structural competitive advantage that protects a company from competitors eroding its pricing power:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Brand Equity &amp; Pricing Power:</strong> Consumers consistently pay a premium regardless of generic alternatives.</li>
                <li><strong>High Switching Costs:</strong> Customers incur significant expense, friction, or operational risk if they migrate to a competitor.</li>
                <li><strong>Network Effects:</strong> Each additional participant makes the platform exponentially more valuable for all participants.</li>
                <li><strong>Cost Advantages:</strong> Low-cost raw material access, automated logistics, or economies of scale competitors cannot duplicate.</li>
              </ul>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Is a low P/E ratio always a sign of an undervalued bargain stock?',
          answer:
            'No. A company can have a low P/E because the market anticipates future earnings decline, significant corporate governance issues, or structural disruption in its industry. This is commonly known as a "value trap."',
        },
        {
          question: 'Can technical analysis and fundamental analysis be combined?',
          answer:
            'Yes. Many professional market participants practice "techno-fundamental" analysis: using fundamental metrics to identify high-quality businesses with strong return ratios, and technical price action to time low-risk entry points.',
        },
        {
          question: 'Where can Indian investors find verified corporate financial statements?',
          answer:
            'All publicly listed firms in India must file audited financial results quarterly with BSE and NSE. Official filings and annual reports can be downloaded directly from company investor relations portals and the NSE/BSE corporate announcements feeds.',
        },
      ]}
      relatedLinks={[
        { title: 'Stock Market Basics', href: '/stock-market-basics' },
        { title: 'IPO Basics & Valuation', href: '/ipo-basics' },
        { title: 'Risk Management Principles', href: '/risk-management' },
      ]}
    />
  );
}
