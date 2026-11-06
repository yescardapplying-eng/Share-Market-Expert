'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Activity,
  BarChart2,
  Target,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#142B45] via-[#10243B] to-[#0B1928] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1CA37E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B55]/30 border border-[#1CA37E]/40 text-[#1CA37E] text-xs sm:text-sm font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#1CA37E]" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              {t.hero.heading}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subheading}
            </p>

            {/* Compliance Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>Zero Trading Tips or Stock Recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>100% Pure Educational Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>Strict Mathematical Risk Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>Live Interactive Learning Cohorts</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/our-packages"
                className="touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about-us"
                className="touch-target w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.aboutBtn}</span>
              </Link>
            </div>

            {/* Location & Disclaimer micro note */}
            <p className="text-xs text-slate-400 pt-2">
              📍 Learning Center based in Vashi, Navi Mumbai • Registered educational curriculum
            </p>
          </div>

          {/* Right Column: Dedicated Stock Market Educational Chart Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-br from-white/12 to-white/5 border border-white/15 rounded-3xl p-5 sm:p-6 backdrop-blur-md shadow-2xl">
              {/* Corner accent glow */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#176B55]/30 rounded-full blur-3xl pointer-events-none" />

              {/* Chart Top Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#176B55] flex items-center justify-center text-white">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>NIFTY 50 PRICE ACTION</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                        15M
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">Case Study #04 • Breakout Analysis</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Cohort Studio
                </span>
              </div>

              {/* Simulated Price Action Technical Analysis Chart */}
              <div className="bg-[#0c1a29] rounded-2xl p-4 border border-white/10 relative overflow-hidden">
                {/* Horizontal Level Guides */}
                <div className="flex justify-between items-center text-[10px] text-amber-300/80 mb-1 border-b border-dashed border-amber-400/30 pb-1">
                  <span>Resistance Pivot: 24,650</span>
                  <span className="text-slate-400 font-mono">Target R:R 1:2.5</span>
                </div>

                {/* SVG Candlestick Diagram */}
                <div className="relative h-32 w-full my-2">
                  <svg className="w-full h-full" viewBox="0 0 320 120" preserveAspectRatio="none">
                    {/* Background Grid Lines */}
                    <line x1="0" y1="30" x2="320" y2="30" stroke="#1F3858" strokeDasharray="3 3" />
                    <line x1="0" y1="65" x2="320" y2="65" stroke="#1F3858" strokeDasharray="3 3" />
                    <line x1="0" y1="95" x2="320" y2="95" stroke="#1F3858" strokeDasharray="3 3" />

                    {/* Support Line */}
                    <line x1="20" y1="88" x2="310" y2="88" stroke="#1CA37E" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="25" y="82" fill="#1CA37E" fontSize="9" fontWeight="bold">Key Demand Base: 24,180</text>

                    {/* Candle 1 (Red) */}
                    <line x1="45" y1="45" x2="45" y2="95" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="38" y="52" width="14" height="32" rx="2" fill="#EF4444" />

                    {/* Candle 2 (Green) */}
                    <line x1="75" y1="58" x2="75" y2="92" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="68" y="65" width="14" height="22" rx="2" fill="#10B981" />

                    {/* Candle 3 (Red Hammer/Reversal) */}
                    <line x1="105" y1="60" x2="105" y2="94" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="98" y="62" width="14" height="18" rx="2" fill="#EF4444" />

                    {/* Candle 4 (Green Accumulation) */}
                    <line x1="135" y1="48" x2="135" y2="89" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="128" y="55" width="14" height="28" rx="2" fill="#10B981" />

                    {/* Candle 5 (Green Strong Bullish Wick) */}
                    <line x1="165" y1="40" x2="165" y2="85" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="158" y="44" width="14" height="35" rx="2" fill="#10B981" />

                    {/* Candle 6 (Green Breakout Candle) */}
                    <line x1="195" y1="28" x2="195" y2="70" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="188" y="32" width="14" height="34" rx="2" fill="#10B981" />

                    {/* Candle 7 (Pullback Test) */}
                    <line x1="225" y1="32" x2="225" y2="60" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="218" y="35" width="14" height="15" rx="2" fill="#EF4444" />

                    {/* Candle 8 (Impulse Candle) */}
                    <line x1="255" y1="15" x2="255" y2="52" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="248" y="20" width="14" height="30" rx="2" fill="#10B981" />

                    {/* Candle 9 (Target Reach) */}
                    <line x1="285" y1="8" x2="285" y2="42" stroke="#10B981" strokeWidth="1.5" />
                    <rect x="278" y="12" width="14" height="26" rx="2" fill="#10B981" />

                    {/* Breakout Arrow & Label */}
                    <path d="M 195 24 L 275 14" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
                  </svg>
                </div>

                {/* Technical Indicators Strip */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
                  <div className="p-1.5 rounded-lg bg-white/5">
                    <span className="text-[10px] text-slate-400 block">RSI (14)</span>
                    <span className="text-xs font-bold text-emerald-400">58.4 (Neutral)</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Trend Model</span>
                    <span className="text-xs font-bold text-white">Higher Lows</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Risk Matrix</span>
                    <span className="text-xs font-bold text-[#1CA37E]">Max 1% Sizing</span>
                  </div>
                </div>
              </div>

              {/* Educational Stats Banner */}
              <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-white/10 text-left">
                <div className="bg-[#142B45]/70 p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <BarChart2 className="w-5 h-5 text-[#1CA37E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Curriculum Depth</span>
                    <span className="text-xs font-bold text-white">13+ Modules</span>
                  </div>
                </div>
                <div className="bg-[#142B45]/70 p-3 rounded-xl border border-white/10 flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Risk Principle</span>
                    <span className="text-xs font-bold text-[#1CA37E]">Capital First</span>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="mt-3 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-200/90 text-left leading-relaxed">
                ⚠️ <strong>Educational Chart Study:</strong> For technical demonstration &amp; risk simulation only. We do not provide trading tips or buy/sell calls.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
