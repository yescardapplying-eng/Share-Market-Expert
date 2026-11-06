import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Swing Trading Explained | Capturing Multi-Day Trends on Daily Charts',
  description:
    'Complete guide to swing trading in India: Daily and Weekly chart analysis, managing overnight gap risk, ideal setups for working professionals, and trade checklists.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/swing-trading-explained',
  },
};

export default function SwingTradingExplainedPage() {
  return (
    <EducationalPageLayout
      title="Swing Trading Explained: Capturing Multi-Day Market Momentum"
      subtitle="Learn how swing traders identify high-probability price swings over days to weeks using Daily charts: balancing trend continuation with disciplined overnight risk control."
      badge="Strategic Framework"
      difficulty="Intermediate"
      readTime="12 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Why Swing Trading Appeals to Working Professionals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">No Screen Glued Stress</strong>
              <p className="text-slate-500">Analysis is done peacefully in the evening on completed Daily candles. Orders can be set with GTT (Good-Till-Triggered) alerts.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Higher Asymmetric R:R</strong>
              <p className="text-slate-500">Targeting 5% to 15% price expansions allows for generous 1:2 to 1:4 risk-to-reward ratios compared to tiny intraday scalps.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Lower Friction</strong>
              <p className="text-slate-500">Fewer trade executions mean brokerage and STT take a tiny fraction of profits compared to high-frequency day trading.</p>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'what-is-swing-trading',
          title: 'What is Swing Trading & How Does it Function?',
          content: (
            <>
              <p>
                <strong>Swing trading</strong> is an active trading methodology that aims to capture a single &lsquo;swing&rsquo; or directional move in an asset price over a timeframe spanning anywhere from <strong>two days to several weeks</strong>.
              </p>
              <p>
                Swing traders operate primarily on <strong>Daily (D)</strong> and <strong>Weekly (W)</strong> chart timeframes. They look for stocks emerging from multi-week bases, testing key moving averages (like the 20-day or 50-day EMA), or pulling back into previous breakout support levels.
              </p>
            </>
          ),
        },
        {
          id: 'managing-overnight-risk',
          title: 'Managing Overnight & Weekend Gap Risk',
          content: (
            <>
              <p>
                Because swing positions are held overnight, a swing trader is exposed to unexpected global events, earnings announcements, or macroeconomic policy shifts that can cause a stock to open significantly below its previous close (a gap down).
              </p>
              <p>
                <strong>How Disciplined Swing Traders Manage Gap Risk:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Strict Portfolio Allocation:</strong> Never allocate more than 10% to 15% of your total portfolio into any single swing position.</li>
                <li><strong>Avoid Earnings Roulette:</strong> Avoid initiating new swing trades 1 or 2 days before a company announces its quarterly financial earnings report.</li>
                <li><strong>Diversify Across Sectors:</strong> Ensure swing positions are distributed across non-correlated sectors (e.g., Pharma, Banking, IT, Auto).</li>
              </ul>
            </>
          ),
        },
        {
          id: 'gtt-orders',
          title: 'Using GTT (Good-Till-Triggered) Orders for Automation',
          content: (
            <>
              <p>
                Most modern Indian brokers offer <strong>GTT orders</strong> valid for up to one year. This allows a swing trader to place an entry trigger price and pre-define both a stop-loss and a target sell order simultaneously. 
              </p>
              <p>
                The exchange matching engine monitors the price automatically, freeing the student from having to stare at broker screens during office hours.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Do swing trades incur delivery charges (DP charges)?',
          answer:
            'Yes. Since swing trades involve holding shares in your Demat account for more than 1 business day, selling delivery shares incurs a small DP charge (typically ₹13 to ₹20 + GST per company per day, charged by CDSL/NSDL and the broker).',
        },
        {
          question: 'What is the ideal holding duration for a swing trade?',
          answer:
            'Typically between 3 to 15 trading sessions. If a stock does not develop momentum or stalls near entry for over 2 weeks, many swing traders close the position to reallocate capital into faster-moving setups.',
        },
        {
          question: 'Can swing trading be practiced on futures or options?',
          answer:
            'While experienced derivative participants swing trade futures contracts, swing trading options contracts is dangerous due to rapid daily Theta decay. Option buyers holding multi-day swing positions face severe premium erosion over weekends.',
        },
      ]}
      relatedLinks={[
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
        { title: 'Candlestick Patterns Guide', href: '/candlestick-patterns' },
        { title: 'Intraday Trading Basics', href: '/intraday-trading-basics' },
      ]}
    />
  );
}

