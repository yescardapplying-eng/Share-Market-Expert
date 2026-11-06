import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  BarChart3,
  FileSpreadsheet,
  Layers,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
} from 'lucide-react';

interface LearningCard {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

const LEARNING_CARDS: LearningCard[] = [
  {
    title: 'Stock Market Basics',
    description:
      'Learn how the Indian equity ecosystem works: exchanges (NSE/BSE), depositories (CDSL/NSDL), trading vs demat accounts, and auction mechanics.',
    href: '/stock-market-basics',
    icon: TrendingUp,
    badge: 'Foundation',
  },
  {
    title: 'Technical Analysis',
    description:
      'Understand how traders evaluate historical price action, support and resistance levels, candlestick formations, moving averages, and indicators.',
    href: '/technical-analysis',
    icon: BarChart3,
    badge: 'Core Skill',
  },
  {
    title: 'Fundamental Analysis',
    description:
      'Explore corporate balance sheets, P/E ratios, EPS, debt-to-equity, cash flow statements, and sector trends to understand business valuations.',
    href: '/fundamental-analysis',
    icon: FileSpreadsheet,
    badge: 'Value Learning',
  },
  {
    title: 'F&O Basics',
    description:
      'Demystify futures contracts, call and put options, strike prices, option chain mechanics, and why derivatives require strict risk discipline.',
    href: '/fo-basics',
    icon: Layers,
    badge: 'Advanced Concepts',
  },
  {
    title: 'Risk Management',
    description:
      'Master the mathematical rules of capital preservation: position sizing, stop-loss strategy, risk-to-reward ratios, and defensive asset allocation.',
    href: '/risk-management',
    icon: ShieldCheck,
    badge: 'Crucial Pillar',
  },
  {
    title: 'Trading Psychology',
    description:
      'Overcome cognitive biases like FOMO, revenge trading, and emotional over-leverage by adopting a structured rules-based trading discipline.',
    href: '/trading-psychology',
    icon: BrainCircuit,
    badge: 'Mindset',
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
            Structured Learning Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
            What You Will Learn
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our curriculum is built from the ground up to give you comprehensive financial literacy.
            Every topic is taught with conceptual clarity and realistic risk awareness.
          </p>
        </div>

        {/* 6 Educational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {LEARNING_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`group relative bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#176B55]/40 hover:shadow-xl card-hover-lift reveal-on-scroll stagger-${idx + 1} transition-all duration-200 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#176B55] border border-slate-200 group-hover:border-[#176B55] flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6 text-[#176B55] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#176B55] transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#142B45] group-hover:text-[#176B55] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#142B45] group-hover:text-[#176B55]">
                  <span>Explore Module</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-center text-xs text-slate-500">
          <span>
            💡 <strong>Educational Note:</strong> All curriculum modules are strictly educational. We do not provide trading recommendations, buy/sell targets, or portfolio management.
          </span>
        </div>
      </div>
    </section>
  );
}

