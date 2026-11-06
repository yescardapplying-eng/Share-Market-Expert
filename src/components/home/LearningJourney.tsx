import React from 'react';
import {
  Compass,
  BookOpen,
  LineChart,
  Layers,
  ShieldCheck,
  Award,
} from 'lucide-react';

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Foundations & Market Structure',
    description:
      'Learn how stock exchanges operate, the role of SEBI, clearing corporations, demat vs trading accounts, and order matching systems.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Market Terminology & Financial Basics',
    description:
      'Understand market capitalization, dividend yield, PE ratio, EPS, quarterly corporate results, and sector classification.',
    icon: BookOpen,
  },
  {
    step: '03',
    title: 'Chart Reading & Price Action Geometry',
    description:
      'Master candlestick anatomy, trend lines, support and resistance zones, volume analysis, and momentum indicators.',
    icon: LineChart,
  },
  {
    step: '04',
    title: 'Derivatives & Option Chain Theory',
    description:
      'Study futures contracts, call and put options, open interest shifts, option Greeks (Delta, Theta, Gamma, Vega), and defensive hedging.',
    icon: Layers,
  },
  {
    step: '05',
    title: 'Risk Management & Position Sizing',
    description:
      'Learn risk-reward ratio optimization, strict stop-loss discipline, portfolio risk limits, and emotional trading psychology.',
    icon: ShieldCheck,
  },
  {
    step: '06',
    title: 'Independent Analytical Discipline',
    description:
      'Synthesize fundamental and technical methods to formulate a structured, repeatable market analysis checklist without relying on tips.',
    icon: Award,
  },
];

export default function LearningJourney() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B1928] text-white border-b border-[#1F3858]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#176B55]/30 text-[#1CA37E] border border-[#1CA37E]/30 mb-3">
            Systematic Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Your Beginner-to-Advanced Learning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            True market competence is built layer upon layer. Here is our progressive curriculum roadmap designed to transform raw curiosity into disciplined analysis.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {JOURNEY_STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative bg-gradient-to-b from-[#142B45] to-[#10243B] p-6 sm:p-7 rounded-2xl border border-[#1F3858] hover:border-[#1CA37E]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#176B55]/40 text-[#1CA37E] flex items-center justify-center border border-[#1CA37E]/30 group-hover:bg-[#176B55] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-600 group-hover:text-[#1CA37E] transition-colors">
                    {s.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#1CA37E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

