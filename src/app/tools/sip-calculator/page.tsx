'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DollarSign, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function SipCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  // SIP formula: M * [ (1 + i)^n - 1 ] * (1 + i) / i
  const i = expectedReturnRate / 12 / 100;
  const n = years * 12;
  const totalInvested = monthlyInvestment * n;

  let totalMaturity = 0;
  if (i > 0) {
    totalMaturity = Math.round(
      monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    );
  } else {
    totalMaturity = totalInvested;
  }

  const estimatedReturns = totalMaturity - totalInvested;

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/tools" className="hover:text-[#176B55]">Financial Tools</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">SIP Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Long-Term Compounding Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Systematic Investment Plan (SIP) Calculator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Simulate the long-term wealth compounding of disciplined monthly equity or mutual fund allocations over multi-year horizons.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-100 pb-3">
              SIP Parameters
            </h2>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Monthly Investment (₹)
                </label>
                <span className="text-sm font-extrabold text-[#142B45]">
                  ₹{monthlyInvestment.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full accent-[#176B55]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹500</span>
                <span>₹50,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Expected Return Rate (% p.a.)
                </label>
                <span className="text-sm font-extrabold text-[#176B55]">
                  {expectedReturnRate}%
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={25}
                step={0.5}
                value={expectedReturnRate}
                onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                className="w-full accent-[#176B55]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>8% (Conservative)</span>
                <span>12% (Equity Index Historical)</span>
                <span>18% (Aggressive)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Investment Horizon: {years} Years
                </label>
                <span className="text-sm font-extrabold text-[#142B45]">
                  {n} Months
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={35}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[#176B55]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>3 Years</span>
                <span>15 Years</span>
                <span>35 Years</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 border border-[#1F3858] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-[#1F3858] pb-3 text-slate-200">
                Wealth Projection
              </h2>

              <div className="mt-6 space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-slate-300 block">
                    Expected Total Corpus (Maturity Value)
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-[#1CA37E] mt-1 block">
                    ₹{totalMaturity.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Invested Amount (Principal)</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      ₹{totalInvested.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Est. Compounded Wealth Gain</span>
                    <span className="text-base font-bold text-[#1CA37E] mt-0.5 block">
                      ₹{estimatedReturns.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Visual Ratio Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span>Principal: {((totalInvested / totalMaturity) * 100).toFixed(0)}%</span>
                    <span>Wealth Gain: {((estimatedReturns / totalMaturity) * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
                    <div
                      className="bg-slate-400 h-full"
                      style={{ width: `${(totalInvested / totalMaturity) * 100}%` }}
                    />
                    <div
                      className="bg-[#1CA37E] h-full"
                      style={{ width: `${(estimatedReturns / totalMaturity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F3858] text-[11px] text-slate-400">
              Assumes constant rate of return. Actual equity mutual fund returns vary by market cycle.
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">SIP Calculator FAQs</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is Rupee Cost Averaging in SIPs?</h3>
              <p className="text-slate-600">When stock prices decline, your fixed monthly allocation buys more fund units. When markets advance, you buy fewer units. Over time, this lowers your average cost per unit without needing to time the market.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Is a 12% return guaranteed in equity SIPs?</h3>
              <p className="text-slate-600">No. Equity returns fluctuate year to year. Historically, broad Indian benchmark indices (like NIFTY 50) have generated ~11% to 13% CAGR over multi-decade cycles, but returns in any single year can be negative.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is the advantage of step-up SIPs?</h3>
              <p className="text-slate-600">A step-up SIP increases your monthly contribution by 5% or 10% each year as your income grows, significantly accelerating the final compounding corpus.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

