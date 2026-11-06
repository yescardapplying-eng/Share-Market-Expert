import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Stock Market Basics | Beginner Guide to Indian Share Market',
  description:
    'Learn Indian stock market basics from scratch: NSE, BSE, SEBI regulation, Demat vs Trading accounts, order types, and the T+1 settlement cycle.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/stock-market-basics',
  },
};

export default function StockMarketBasicsPage() {
  return (
    <EducationalPageLayout
      title="Stock Market Basics: A Comprehensive Beginner's Guide"
      subtitle="Understand how the Indian equity ecosystem works: exchanges, depositories, regulatory safeguards, order placement, and market liquidity."
      badge="Foundation Module"
      difficulty="Beginner"
      readTime="12 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Core Architecture of Indian Equity Markets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">Regulator</span>
              <span className="text-slate-500">SEBI Oversight</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">Exchanges</span>
              <span className="text-slate-500">NSE &amp; BSE Matching</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">Depositories</span>
              <span className="text-slate-500">CDSL &amp; NSDL Custody</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">Settlement</span>
              <span className="text-slate-500">T+1 Rolling Cycle</span>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'what-is-stock-market',
          title: 'What is the Stock Market?',
          content: (
            <>
              <p>
                A stock market is a centralized marketplace where buyers and sellers trade fractional ownership units (shares or equities) of publicly listed corporations. By purchasing shares, an investor acquires a proportional claim on the enterprise’s assets, voting rights, and potential future dividend distributions.
              </p>
              <p>
                In India, stock trading is conducted electronically across two premier exchanges: the <strong>National Stock Exchange (NSE)</strong> and the <strong>Bombay Stock Exchange (BSE)</strong>. These exchanges aggregate orders through sophisticated electronic matching engines without physical trading pits.
              </p>
            </>
          ),
        },
        {
          id: 'market-participants',
          title: 'Key Market Participants & The Regulatory Framework',
          content: (
            <>
              <p>
                The integrity of Indian financial markets is safeguarded by the <strong>Securities and Exchange Board of India (SEBI)</strong>. Established by the SEBI Act of 1992, SEBI regulates brokers, mutual funds, listed firms, and merchant bankers to ensure market transparency and prevent unfair trade practices.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Retail Investors:</strong> Individuals deploying personal capital for wealth creation.</li>
                <li><strong>Domestic Institutional Investors (DIIs):</strong> Indian mutual funds, insurance companies, and pension funds.</li>
                <li><strong>Foreign Portfolio Investors (FPIs):</strong> International institutions investing capital in listed Indian scrips.</li>
                <li><strong>Clearing Corporations:</strong> Entities like NCL and ICCL that guarantee trade counterparty obligations.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'order-types',
          title: 'Understanding Order Types: Market, Limit & Stop-Loss',
          content: (
            <>
              <p>
                When entering an order on your broker terminal, choosing the proper order type is critical:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Market Order</strong>
                  <p className="text-xs text-slate-600 mt-1">Executes immediately at the best available bid or ask price.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Limit Order</strong>
                  <p className="text-xs text-slate-600 mt-1">Executes only at a specified price or better, guarding against slippage.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Stop-Loss Order</strong>
                  <p className="text-xs text-slate-600 mt-1">Triggers a defensive exit order once the price crosses a predetermined threshold.</p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'settlement-cycle',
          title: 'The T+1 Settlement Cycle Explained',
          content: (
            <>
              <p>
                India is one of the pioneer global markets to implement the <strong>T+1 settlement cycle</strong> across all equity scrips. This means if you buy shares on Monday (Trade Day &lsquo;T&rsquo;), the shares are legally credited to your Demat account, and fund pay-in/pay-out is completed by the clearing corporation on Tuesday (T+1).
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Can someone start learning the stock market with small capital?',
          answer:
            'Yes. In the Indian equity cash market, you can purchase as few as 1 single share of a company. There is no minimum lot requirement for delivery in the cash segment, making it accessible to learn with small amounts.',
        },
        {
          question: 'What is the difference between BSE and NSE?',
          answer:
            'Both are recognized national electronic stock exchanges in India. BSE is the oldest exchange in Asia (founded in 1875) with its flagship index SENSEX. NSE was incorporated in 1992, pioneering electronic order books, with its benchmark index NIFTY 50 representing the top 50 large-cap companies.',
        },
        {
          question: 'Is stock market trading safe for beginners?',
          answer:
            'The institutional infrastructure (SEBI, depositories, exchanges) is exceptionally safe against counterparty defaults. However, market risk exists on every trade due to asset price volatility. Beginners should focus on structured education and risk management before committing significant capital.',
        },
      ]}
      relatedLinks={[
        { title: 'Demat Account Basics', href: '/demat-account-basics' },
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
        { title: 'Candlestick Patterns Explained', href: '/candlestick-patterns' },
      ]}
    />
  );
}
