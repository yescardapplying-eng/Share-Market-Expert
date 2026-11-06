'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Award, Users } from 'lucide-react';
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
                <span>Zero Trading Tips or Buy/Sell Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>Risk Management &amp; Capital Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>Hands-on Chart &amp; Price Action Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1CA37E] shrink-0" />
                <span>Beginner to Advanced Structured Modules</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/our-services"
                className="touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] shadow-lg shadow-[#176B55]/25 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about-us"
                className="touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{t.hero.aboutBtn}</span>
              </Link>
            </div>

            {/* Location & Disclaimer micro note */}
            <p className="text-xs text-slate-400 pt-2">
              📍 Learning Center based in Vashi, Navi Mumbai • Registered educational curriculum
            </p>
          </div>

          {/* Right Column: Visual Brand Emblem Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              {/* Corner accent glow */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#176B55]/30 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center space-y-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative flex items-center justify-center">
                  <Image
                    src="/images/brand/share-market-expert-icon.png"
                    alt="Share Market Expert Emblem"
                    width={512}
                    height={512}
                    priority
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Comprehensive Market Literacy
                  </h3>
                  <p className="text-xs text-slate-300">
                    Navi Mumbai&apos;s Dedicated Stock Market Education Platform
                  </p>
                </div>

                {/* Educational stats highlights (Non-speculative) */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-left">
                  <div className="bg-[#142B45]/60 p-3 rounded-xl border border-white/10">
                    <span className="text-xs text-slate-400 block">Curriculum Depth</span>
                    <span className="text-base font-extrabold text-white">13+ Modules</span>
                  </div>
                  <div className="bg-[#142B45]/60 p-3 rounded-xl border border-white/10">
                    <span className="text-xs text-slate-400 block">Learning Model</span>
                    <span className="text-base font-extrabold text-[#1CA37E]">100% Concept</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 text-left leading-relaxed">
                  ⚠️ <strong>Educational Notice:</strong> Trading in securities involves substantial market risk. Our programs do not provide financial advice or tips.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
