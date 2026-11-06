import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Risk Management in Trading | Position Sizing & Capital Preservation',
  description:
    'Master risk management in stock trading: the 1% risk rule, mathematical position sizing formulas, drawdown recovery tables, and stop-loss execution.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/risk-management',
  },
};

export default function RiskManagementPage() {
  return (
    <EducationalPageLayout
      title="Risk Management: The Mathematics of Capital Preservation"
      subtitle="Why survival is rule number one in financial markets. Master mathematical position sizing, capital protection formulas, and drawdown mitigation."
      badge="Essential Defense"
      difficulty="Beginner"
      readTime="13 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            The Asymmetric Reality of Capital Drawdown Recovery
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600 font-bold uppercase">
                  <th className="py-2 px-3">Capital Lost</th>
                  <th className="py-2 px-3">Remaining Capital</th>
                  <th className="py-2 px-3 text-red-600">Gain Required Just to Break Even</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-2 px-3 font-semibold">10% Loss</td>
                  <td className="py-2 px-3">90% Remaining</td>
                  <td className="py-2 px-3 font-bold text-slate-900">+11.1% Gain Needed</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">20% Loss</td>
                  <td className="py-2 px-3">80% Remaining</td>
                  <td className="py-2 px-3 font-bold text-slate-900">+25.0% Gain Needed</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">50% Loss</td>
                  <td className="py-2 px-3">50% Remaining</td>
                  <td className="py-2 px-3 font-bold text-red-600">+100.0% Gain Needed (Double account!)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold">75% Loss</td>
                  <td className="py-2 px-3">25% Remaining</td>
                  <td className="py-2 px-3 font-bold text-red-600">+300.0% Gain Needed (Quadruple account!)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            Notice that losses compound geometrically against your account. This is why preserving your initial capital is the foremost priority in professional trading.
          </p>
        </div>
      }
      sections={[
        {
          id: 'one-percent-rule',
          title: 'The Golden 1% Risk Rule',
          content: (
            <>
              <p>
                The <strong>1% rule</strong> dictates that an active trader should never risk losing more than 1% of their total trading capital on any single setup. 
              </p>
              <p>
                For example, if your total account capital is ₹1,00,000, 1% risk equates to exactly ₹1,000. Even if you experience 5 consecutive losing trades in a choppy market, your account capital declines by only ~5% (₹95,000 remaining), leaving your emotional composure and financial capacity completely intact.
              </p>
            </>
          ),
        },
        {
          id: 'position-sizing-formula',
          title: 'The Exact Position Sizing Mathematical Formula',
          content: (
            <>
              <p>
                Beginners often purchase a round number of shares (like 100 or 500) based on feelings. Professional traders determine share quantity strictly by mathematics:
              </p>
              <div className="p-4 bg-[#142B45] text-white rounded-xl font-mono text-xs sm:text-sm my-3">
                Position Size (Shares) = Total Capital at Risk (₹) ÷ (Entry Price - Stop Loss Price)
              </div>
              <p>
                <strong>Practical Example:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Total Account: ₹2,00,000 | 1% Max Risk = ₹2,000</li>
                <li>Stock Entry Price: ₹500</li>
                <li>Technical Stop Loss: ₹480 (Risk per share = ₹20)</li>
                <li><strong>Correct Position Size:</strong> ₹2,000 ÷ ₹20 = <strong>100 Shares</strong></li>
              </ul>
              <p className="text-xs text-slate-500 mt-2">
                If the stop loss is triggered at ₹480, you lose exactly 100 × ₹20 = ₹2,000 (your predetermined 1% risk), regardless of how the broader market behaves.
              </p>
            </>
          ),
        },
        {
          id: 'stop-loss-discipline',
          title: 'Why Moving or Cancelling Stop Losses is Fatal',
          content: (
            <>
              <p>
                When a trade moves into a loss, fear of admitting an error tempts undisciplined participants to widen or remove their stop-loss order in the hope that price will rebound. This converts a controlled, small statistical loss into an uncontrollable account catastrophe. 
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is a mental stop loss versus an exchange system stop loss?',
          answer:
            'A mental stop loss is an intention to exit when price reaches a certain level, whereas an exchange system stop loss is an actual pending order placed directly on the broker terminal. Market participants should always place physical system stop-loss orders to eliminate emotional hesitation during fast market drops.',
        },
        {
          question: 'Can trailing stop losses protect unrealized profits?',
          answer:
            'Yes. A trailing stop loss adjusts your stop level upward as the asset price advances in your favorable direction, locking in accumulated gains while maintaining risk protection.',
        },
        {
          question: 'What is portfolio correlation risk?',
          answer:
            'Correlation risk occurs when a trader takes multiple positions in the same sector (e.g., buying four different bank stocks). If an adverse banking policy is announced, all four positions trigger stop losses simultaneously, effectively multiplying your single-theme risk.',
        },
      ]}
      relatedLinks={[
        { title: 'Position Sizing Calculator Tool', href: '/tools/position-sizing-calculator' },
        { title: 'Trading Psychology Lessons', href: '/trading-psychology' },
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
      ]}
    />
  );
}

