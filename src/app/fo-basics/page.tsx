import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'F&O Basics | Futures and Options Trading Concepts Explained',
  description:
    'Comprehensive guide to F&O in India: understand futures contracts, call and put options, leverage risk, lot sizes, and SEBI regulatory study insights.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/fo-basics',
  },
};

export default function FoBasicsPage() {
  return (
    <EducationalPageLayout
      title="F&O Basics: Futures, Options & Derivatives Mechanics"
      subtitle="Understand derivative contracts: how futures lock in obligation, how options purchase rights, and why extreme leverage requires rigorous theoretical education."
      badge="Advanced Derivatives"
      difficulty="Advanced"
      readTime="14 min read"
      visualCallout={
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-300">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2">
            <span>Official SEBI Statutory Warning on Equity Derivatives</span>
          </div>
          <p className="text-xs text-amber-900 leading-relaxed">
            Per SEBI published research, over <strong>90% of individual traders</strong> in the equity F&amp;O segment incur net financial losses. F&amp;O trading carries extreme risk of loss and is not suitable for individuals seeking steady investment or without deep derivatives education.
          </p>
        </div>
      }
      sections={[
        {
          id: 'what-are-derivatives',
          title: 'What are Derivatives & Underlying Assets?',
          content: (
            <>
              <p>
                A <strong>derivative</strong> is a financial contract whose economic value is &lsquo;derived&rsquo; from an underlying asset. In India, equity derivatives derive their value from underlying stock indices (like NIFTY 50, BANK NIFTY) or individual large-cap equities (such as Reliance, TCS, or HDFC Bank).
              </p>
              <p>
                Unlike the equity cash segment where you buy fractional ownership of shares, derivatives are standard contracts with predetermined lot sizes, contract multiplier specifications, and fixed calendar expiration dates.
              </p>
            </>
          ),
        },
        {
          id: 'futures-vs-options',
          title: 'Futures vs. Options: Core Conceptual Contrast',
          content: (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-[#142B45] mb-2">Futures Contracts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An agreement to buy or sell the underlying asset at a predetermined price on a future date. Both buyer and seller have an <strong>obligation</strong> to settle the contract. Both face unlimited potential profit or loss based on market movement.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-[#142B45] mb-2">Options Contracts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    An agreement granting the buyer the <strong>right, but not the obligation</strong>, to buy (Call Option) or sell (Put Option) the underlying asset at a set strike price. The buyer pays an upfront premium to the option seller (writer).
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'calls-and-puts',
          title: 'Calls and Puts Payoff Foundations',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Call Option (CE):</strong> Acquired when the buyer expects the underlying price to advance above the strike price plus premium paid.
                </li>
                <li>
                  <strong>Put Option (PE):</strong> Acquired when the buyer expects the underlying price to decline below the strike price minus premium paid.
                </li>
                <li>
                  <strong>Option Buying vs Selling:</strong> An option buyer faces defined risk (limited to premium paid) but rapid time decay (Theta). An option seller collects premium upfront but faces uncapped risk unless defensively hedged.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What is a lot size in Indian F&O contracts?',
          answer:
            'In India, you cannot buy 1 single share in the F&O segment. SEBI mandates standard standardized lot sizes for each index and stock (for instance, NIFTY lot sizes are standardized by the exchange). If an option moves by ₹10, a contract with a 25-unit lot size changes in value by ₹250.',
        },
        {
          question: 'What does "cash-settled" versus "physically-settled" mean?',
          answer:
            'Index derivative contracts (NIFTY 50, SENSEX) are cash-settled against the final closing index price on expiry. Individual stock derivatives in India are subject to physical settlement on expiry, meaning expiring in-the-money contracts require delivery or receipt of the actual underlying shares.',
        },
        {
          question: 'Why do so many retail traders incur losses in F&O?',
          answer:
            'Primary causes documented by SEBI include excessive leverage, lack of understanding of option Greeks (especially time decay and implied volatility drops), holding out-of-the-money options to expiry, and neglecting stop losses.',
        },
      ]}
      relatedLinks={[
        { title: 'Option Chain Explained', href: '/option-chain-explained' },
        { title: 'Risk Management Principles', href: '/risk-management' },
        { title: 'Stock Market Basics', href: '/stock-market-basics' },
      ]}
    />
  );
}
