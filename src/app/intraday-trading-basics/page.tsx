import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Intraday Trading Basics | Day Trading Rules, MIS Orders & Risk',
  description:
    'Learn intraday trading mechanics in India: MIS vs CNC orders, broker auto-square-off, market hours, transaction costs, and capital preservation.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/intraday-trading-basics',
  },
};

export default function IntradayTradingBasicsPage() {
  return (
    <EducationalPageLayout
      title="Intraday Trading Basics: Day Trading Execution & Risk Control"
      subtitle="Understand the high-velocity mechanics of day trading: MIS order types, auto square-off rules, transaction cost friction, and SEBI regulatory risk realities."
      badge="Active Participation"
      difficulty="Intermediate"
      readTime="12 min read"
      visualCallout={
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-300">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
            The Intraday Trading Reality: Regulatory Disclosure
          </h3>
          <p className="text-xs text-amber-900 leading-relaxed">
            Intraday trading requires intense psychological discipline and rapid decision-making. High-frequency day trading incurs significant friction from brokerage, Securities Transaction Tax (STT), GST, and exchange fees. The majority of day traders incur net losses due to emotional overtrading.
          </p>
        </div>
      }
      sections={[
        {
          id: 'what-is-intraday',
          title: 'What is Intraday Trading & How Does it Work?',
          content: (
            <>
              <p>
                <strong>Intraday trading</strong> (commonly referred to as day trading) refers to entering and closing out an equity or derivative position within the exact same trading session. In India, equity market hours run from <strong>9:15 AM to 3:30 PM IST</strong>.
              </p>
              <p>
                Because intraday positions are not held overnight, day traders are immune to overnight gap-downs caused by geopolitical news or foreign market crashes. However, they must contend with rapid intra-day noise, sudden false breaks, and constant screen time.
              </p>
            </>
          ),
        },
        {
          id: 'order-products',
          title: 'MIS vs CNC Order Products Explained',
          content: (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-[#142B45] mb-2">MIS (Margin Intraday Square-off)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed strictly for intraday positions. If you do not manually close your MIS position by approximately 3:15 PM to 3:20 PM, your broker&apos;s automated risk management software will auto-square-off your trade at prevailing market prices, often incurring an additional square-off penalty fee.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-[#142B45] mb-2">CNC (Cash and Carry)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Used for long-term equity delivery. You pay 100% of the share price upfront, and shares are delivered to your Demat account on T+1. CNC positions are never forcibly squared off at the end of the day.
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'intraday-rules',
          title: 'Three Non-Negotiable Intraday Rules',
          content: (
            <>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Maximum 2 Trades Per Session:</strong> Overtrading is the leading cause of account destruction. Stop trading once you reach your daily loss limit.</li>
                <li><strong>Never Average a Losing Position:</strong> Adding more capital to an intraday position that is dropping is gambling, not trading.</li>
                <li><strong>Factor in Taxes &amp; Slippage:</strong> Intraday trades incur brokerage, STT, SEBI turnover charges, and stamp duty. A strategy that generates razor-thin gross gains often results in net losses after accounting for friction.</li>
              </ol>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Can I convert an intraday (MIS) position to delivery (CNC)?',
          answer:
            'Yes. Most brokers permit you to convert an open MIS position to CNC before market close, provided your trading account has sufficient cash balance to cover the full 100% delivery value of the shares.',
        },
        {
          question: 'What is the best time of the day for intraday market volume?',
          answer:
            'The highest liquidity and price expansion typically occur in the opening hour (9:15 AM to 10:30 AM) as the market discounts overnight global developments, and during the final European session alignment hour (1:30 PM to 3:15 PM). The mid-day period (11:30 AM to 1:00 PM) frequently exhibits choppy, range-bound behavior.',
        },
        {
          question: 'Can someone do intraday trading while working a demanding 9-to-5 corporate job?',
          answer:
            'Generally no. Intraday trading demands continuous attention, real-time chart monitoring, and swift execution. Working professionals are substantially better suited to swing trading on Daily charts or systematic long-term investing.',
        },
      ]}
      relatedLinks={[
        { title: 'Swing Trading Explained', href: '/swing-trading-explained' },
        { title: 'Risk Management Principles', href: '/risk-management' },
        { title: 'Brokerage Calculator Tool', href: '/tools/brokerage-calculator' },
      ]}
    />
  );
}

