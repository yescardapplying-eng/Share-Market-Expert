import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Option Chain Explained | Reading NSE Open Interest & Greeks',
  description:
    'Learn how to read the NSE option chain: understand strike prices, Call & Put Open Interest (OI), Volume, IV, PCR, and Moneyness (ITM, ATM, OTM).',
  alternates: {
    canonical: 'https://sharemarketexpert.in/option-chain-explained',
  },
};

export default function OptionChainExplainedPage() {
  return (
    <EducationalPageLayout
      title="Option Chain Explained: Decoding Strikes, Open Interest & PCR"
      subtitle="Master the anatomy of the NSE option matrix: learn how to interpret institutional open interest accumulation, identify support/resistance, and calculate the Put-Call Ratio."
      badge="Derivatives Analytics"
      difficulty="Advanced"
      readTime="15 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            NSE Option Chain Structure (Calls on Left, Puts on Right)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">CALL SIDE</span>
              <span className="text-slate-500 text-[11px]">OI • Change in OI • Volume • IV • LTP</span>
            </div>
            <div className="bg-[#142B45] text-white p-3 rounded-lg">
              <span className="font-bold block">STRIKE PRICE</span>
              <span className="text-slate-300 text-[11px]">Central Baseline Anchor</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">PUT SIDE</span>
              <span className="text-slate-500 text-[11px]">LTP • IV • Volume • Change in OI • OI</span>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'what-is-open-interest',
          title: 'Understanding Open Interest (OI) & Change in OI',
          content: (
            <>
              <p>
                <strong>Open Interest (OI)</strong> represents the total count of outstanding derivative contracts currently held by market participants that have not been settled, exercised, or offset by an opposing trade.
              </p>
              <p>
                Unlike volume (which counts every buy and sell transaction that takes place during a single day), Open Interest only increases when fresh contracts are created between a new buyer and a new writer. A substantial change in OI signals institutional positioning.
              </p>
            </>
          ),
        },
        {
          id: 'moneyness-explained',
          title: 'The Three Zones of Moneyness: ITM, ATM & OTM',
          content: (
            <>
              <p>
                Every strike in the option chain falls into one of three classifications relative to the current underlying spot price:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">In-The-Money (ITM)</strong>
                  <p className="text-slate-600">Possesses intrinsic value plus extrinsic time value. Higher premium, higher delta.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">At-The-Money (ATM)</strong>
                  <p className="text-slate-600">The strike closest to the prevailing market spot price. Most active trading volume.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Out-of-The-Money (OTM)</strong>
                  <p className="text-slate-600">Contains zero intrinsic value; consists purely of time value. Expires worthless if spot doesn&apos;t cross it.</p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'put-call-ratio',
          title: 'How to Calculate & Interpret the Put-Call Ratio (PCR)',
          content: (
            <>
              <div className="p-4 bg-[#142B45] text-white rounded-xl font-mono text-xs sm:text-sm my-3">
                PCR (Open Interest) = Total Put Open Interest ÷ Total Call Open Interest
              </div>
              <p>
                Analysts view PCR as a broad sentiment and potential contrarian gauge:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>PCR &gt; 1.2:</strong> Elevated put writing indicating strong theoretical support or potential oversold conditions.</li>
                <li><strong>PCR &lt; 0.7:</strong> Heavy call writing relative to puts, indicating strong theoretical overhead resistance or potential overbought conditions.</li>
              </ul>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Why are option writers (sellers) considered the smart money in OI analysis?',
          answer:
            'Because writing options requires substantial margin capital (typically ₹1 Lakh+ per lot in index contracts) compared to buying options (which requires only the small premium). Consequently, the majority of heavy option writing is conducted by institutional funds and high-net-worth desks.',
        },
        {
          question: 'Can the highest Call OI strike act as guaranteed resistance?',
          answer:
            'No. It indicates where option writers have concentrated their short positions. If aggressive buying occurs and spot surpasses that strike, it can trigger a "short-covering rally," accelerating price upward as writers panic and buy back their contracts.',
        },
        {
          question: 'What is Implied Volatility (IV) on the option chain?',
          answer:
            'IV represents the market consensus regarding the anticipated price volatility of the underlying asset over the contract lifespan. High IV inflates option premiums, while falling IV causes premium collapse (volatility crush).',
        },
      ]}
      relatedLinks={[
        { title: 'F&O Basics Overview', href: '/fo-basics' },
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
        { title: 'Risk Management Principles', href: '/risk-management' },
      ]}
    />
  );
}
