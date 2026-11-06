import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Calculator, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learning Resources Directory | Stock Market Guides & Official Portals',
  description:
    'Explore all Share Market Expert educational resources: 13 structured stock market guides, 6 interactive financial tools, and verified regulatory study links.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/resources',
  },
};

const EDUCATIONAL_GUIDES = [
  { title: 'Stock Market Basics', href: '/stock-market-basics', desc: 'Exchanges, depositories, order types, and T+1 settlement.' },
  { title: 'Technical Analysis', href: '/technical-analysis', desc: 'Support and resistance, trend geometry, and momentum indicators.' },
  { title: 'Fundamental Analysis', href: '/fundamental-analysis', desc: 'Balance sheets, P&L, ROCE, P/E ratios, and economic moats.' },
  { title: 'Trading Education', href: '/trading-education', desc: 'Trade planning, journaling, time horizons, and execution rules.' },
  { title: 'Risk Management', href: '/risk-management', desc: '1% rule, mathematical position sizing, and drawdown recovery.' },
  { title: 'Trading Psychology', href: '/trading-psychology', desc: 'Conquering FOMO, revenge trading, and emotional discipline.' },
  { title: 'F&O Basics', href: '/fo-basics', desc: 'Futures, options, leverage mechanics, and SEBI risk studies.' },
  { title: 'Option Chain Explained', href: '/option-chain-explained', desc: 'Deciphering strikes, open interest accumulation, and PCR.' },
  { title: 'IPO Basics', href: '/ipo-basics', desc: 'DRHP prospectus analysis, ASBA mandates, and retail quotas.' },
  { title: 'Demat Account Basics', href: '/demat-account-basics', desc: 'CDSL and NSDL electronic custody and TPIN security.' },
  { title: 'Candlestick Patterns', href: '/candlestick-patterns', desc: 'Hammers, stars, engulfing patterns, and confirmation rules.' },
  { title: 'Intraday Trading Basics', href: '/intraday-trading-basics', desc: 'MIS vs CNC orders, market hours, and tax friction.' },
  { title: 'Swing Trading Explained', href: '/swing-trading-explained', desc: 'Daily chart momentum, GTT orders, and overnight risk management.' },
];

const OFFICIAL_PORTALS = [
  { name: 'Securities and Exchange Board of India (SEBI)', url: 'https://sebi.gov.in', desc: 'Official Indian securities market regulator.' },
  { name: 'National Stock Exchange of India (NSE)', url: 'https://nseindia.com', desc: 'Live quote data, option chain matrix, and exchange notices.' },
  { name: 'Bombay Stock Exchange (BSE)', url: 'https://bseindia.com', desc: 'Asia&apos;s oldest exchange, corporate filings, and announcements.' },
  { name: 'SEBI Investor Education Portal (Saarthi)', url: 'https://investor.sebi.gov.in', desc: 'Official investor awareness materials and guidelines.' },
];

export default function ResourcesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Learning Resources</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Resource Directory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Comprehensive Learning Resources Hub
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Access our complete educational library: in-depth guides, financial calculators, research articles, and links to official Indian market regulators.
          </p>
        </div>

        {/* 13 Guides Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-[#142B45] flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#176B55]" />
              Structured Educational Modules (13 Guides)
            </h2>
            <span className="text-xs font-bold text-slate-400">100% Free Self-Study</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATIONAL_GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#176B55]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#142B45] group-hover:text-[#176B55] transition-colors mb-2">
                    {g.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#176B55]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Financial Calculators Teaser */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-[#142B45] flex items-center gap-2">
                <Calculator className="w-6 h-6 text-[#176B55]" />
                Interactive Financial Calculators
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                6 tools covering Position Sizing, Risk-Reward, Brokerage &amp; Taxes, P&amp;L, SIP, and Compounding.
              </p>
            </div>
            <Link
              href="/tools"
              className="touch-target px-5 py-2.5 rounded-xl bg-[#176B55] text-white text-xs font-bold hover:bg-[#125543] transition-colors self-start sm:self-auto"
            >
              Open Calculators Hub &rarr;
            </Link>
          </div>
        </div>

        {/* Official Regulatory Portals */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <h2 className="text-xl font-bold text-[#142B45] mb-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#176B55]" />
            Official Regulatory &amp; Exchange Portals
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            We encourage all learners to verify market data directly on official source websites.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OFFICIAL_PORTALS.map((portal) => (
              <a
                key={portal.url}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 transition-all block group"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-[#142B45] group-hover:text-[#176B55] transition-colors">
                    {portal.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#176B55]" />
                </div>
                <p className="text-xs text-slate-500">{portal.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

