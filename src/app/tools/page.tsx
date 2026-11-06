import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  Percent,
  TrendingUp,
  ShieldCheck,
  Scale,
  DollarSign,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Educational Financial Tools & Calculators | Share Market Expert',
  description:
    'Free interactive financial learning calculators: Profit & Loss, Brokerage & Taxes, SIP, Compound Interest, Risk-Reward, and Position Sizing calculators.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/tools',
  },
};

const CALCULATOR_TOOLS = [
  {
    title: 'Position Sizing Calculator',
    slug: 'position-sizing-calculator',
    description:
      'Determine the exact number of shares or lots to buy based on your total account capital, 1% risk limit, and stop-loss price.',
    icon: ShieldCheck,
    badge: 'Risk Control',
  },
  {
    title: 'Risk-Reward Calculator',
    slug: 'risk-reward-calculator',
    description:
      'Evaluate your trade setups before entry. Calculate the R:R ratio, required win-rate to break even, and potential reward vs downside.',
    icon: Scale,
    badge: 'Trade Setup',
  },
  {
    title: 'Profit & Loss (P&L) Calculator',
    slug: 'profit-loss-calculator',
    description:
      'Calculate gross and net trading returns with percentage gains/drawdowns across equity and derivatives setups.',
    icon: TrendingUp,
    badge: 'Performance Study',
  },
  {
    title: 'Brokerage & Transaction Cost Calculator',
    slug: 'brokerage-calculator',
    description:
      'Understand how brokerage, STT, GST, exchange turnover charges, and stamp duty impact your net returns in India.',
    icon: Percent,
    badge: 'Cost Analysis',
  },
  {
    title: 'SIP (Systematic Investment) Calculator',
    slug: 'sip-calculator',
    description:
      'Visualize the long-term wealth compounding of disciplined monthly equity or mutual fund investments over 5 to 30 years.',
    icon: DollarSign,
    badge: 'Long-Term Wealth',
  },
  {
    title: 'Compound Interest Calculator',
    slug: 'compound-interest-calculator',
    description:
      'Study the mathematical power of compounding with customizable interest frequencies (monthly, quarterly, annually) and additions.',
    icon: Calculator,
    badge: 'Mathematics',
  },
];

export default function ToolsHubPage() {
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
            <li className="text-slate-800 font-semibold" aria-current="page">Financial Calculators</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
            Interactive Learning Utilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Educational Financial Calculators
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Master the mathematical side of financial markets. These illustrative tools help you calculate position sizing, trade risk-reward, brokerage charges, and compounding.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {CALCULATOR_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#176B55]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF5F2] text-[#176B55] group-hover:bg-[#176B55] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#176B55] transition-colors">
                      {tool.badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#142B45] group-hover:text-[#176B55] transition-colors mb-2">
                    {tool.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#142B45] group-hover:text-[#176B55]">
                  <span>Open Interactive Tool</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 text-xs text-amber-900 leading-relaxed max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Educational &amp; Illustrative Notice: </strong>
              All calculators provided on this platform are for educational illustration and self-study only. They do not simulate live market orders or guarantee financial performance. Results are mathematical models based on user inputs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

