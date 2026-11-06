import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Trading Education | Disciplined Trading Frameworks & Strategy',
  description:
    'Comprehensive trading education: compare intraday, swing, and positional approaches; learn trade checklists, risk-to-reward ratios, and journal tracking.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/trading-education',
  },
};

export default function TradingEducationPage() {
  return (
    <EducationalPageLayout
      title="Trading Education: Disciplined Frameworks & Execution"
      subtitle="Discover the structural difference between active market participation styles, trade preparation routines, and why statistical consistency requires a written plan."
      badge="Methodology Module"
      difficulty="Beginner"
      readTime="11 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Market Participation Time Horizons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Intraday Trading</strong>
              <p className="text-slate-500">Positions opened and closed within the same trading session (9:15 AM to 3:30 PM). Zero overnight gap risk, but high emotional and transaction load.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Swing Trading</strong>
              <p className="text-slate-500">Positions held across a few days to several weeks to capture multi-day price momentum. Suitable for working professionals.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Positional / Investing</strong>
              <p className="text-slate-500">Holdings maintained across months to years aligned with fundamental business compounding and macroeconomic growth.</p>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'trading-vs-investing',
          title: 'Trading vs. Investing: Clear Conceptual Boundaries',
          content: (
            <>
              <p>
                A widespread mistake beginners make is confusing trading with investing. <strong>Investing</strong> is about owning a business piece and allowing corporate compound interest to build long-term wealth over multi-year cycles.
              </p>
              <p>
                <strong>Trading</strong>, by contrast, is an active inventory management operation. A trader is not committed to holding a business through multi-year downswings. A trader defines a specific entry point, a strict defensive stop-loss price, and a target profit zone based on mathematical probability.
              </p>
            </>
          ),
        },
        {
          id: 'trade-plan-anatomy',
          title: 'Anatomy of a Professional Trade Plan',
          content: (
            <>
              <p>
                Every professional trading setup must answer four questions <em>before</em> clicking the buy or sell button:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li><strong>Setup Rationale:</strong> What structural price-action pattern or support-resistance level confirms this idea?</li>
                <li><strong>Invalidation Level (Stop-Loss):</strong> At what exact price is this idea proven completely false?</li>
                <li><strong>Position Size:</strong> How many shares or contracts can be purchased such that hitting the stop-loss risks no more than 1% of total account capital?</li>
                <li><strong>Profit Target:</strong> Does the prospective gain offer at least a 1:2 risk-to-reward ratio compared to the defined stop-loss?</li>
              </ol>
            </>
          ),
        },
        {
          id: 'trading-journal',
          title: 'The Indispensable Role of a Trade Journal',
          content: (
            <>
              <p>
                Without a written record of every execution, improvement is impossible. A trading journal tracks entry price, exit price, timeframe, emotional state during the trade, whether the written rules were followed, and screenshots of before/after chart setups.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Is trading suitable as a full-time career for a beginner?',
          answer:
            'No. Beginners should never attempt full-time trading before establishing consistent statistical discipline over a multi-year period in small size. Trading without deep education and sufficient capital reserves almost invariably leads to rapid emotional burnout and capital erosion.',
        },
        {
          question: 'What is the minimum recommended risk-to-reward ratio?',
          answer:
            'Most disciplined technicians seek setups offering a minimum of 1:2 (risking ₹1,000 to potentially capture ₹2,000). At a 1:2 ratio, a trader can maintain account profitability even with a modest 40% win rate.',
        },
        {
          question: 'Can paper trading (simulated trading) help beginners?',
          answer:
            'Yes, paper trading is invaluable for learning terminal navigation, understanding order types, and testing whether a checklist functions. However, paper trading cannot replicate the intense emotional pressure of risking real capital.',
        },
      ]}
      relatedLinks={[
        { title: 'Intraday Trading Basics', href: '/intraday-trading-basics' },
        { title: 'Swing Trading Explained', href: '/swing-trading-explained' },
        { title: 'Risk Management Rules', href: '/risk-management' },
      ]}
    />
  );
}
