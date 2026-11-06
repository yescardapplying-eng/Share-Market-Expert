'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scale, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function RiskRewardCalculatorPage() {
  const [entryPrice, setEntryPrice] = useState<number>(1000);
  const [stopLossPrice, setStopLossPrice] = useState<number>(960);
  const [targetPrice, setTargetPrice] = useState<number>(1100);
  const [quantity, setQuantity] = useState<number>(100);

  const riskPerShare = Math.abs(entryPrice - stopLossPrice);
  const rewardPerShare = Math.abs(targetPrice - entryPrice);
  const totalRisk = riskPerShare * quantity;
  const totalReward = rewardPerShare * quantity;
  const rrRatio = riskPerShare > 0 ? (rewardPerShare / riskPerShare) : 0;
  const breakevenWinRate = rrRatio > 0 ? ((1 / (1 + rrRatio)) * 100).toFixed(1) : '0';

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
            <li className="text-slate-800 font-semibold" aria-current="page">Risk-Reward Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Setup Feasibility Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Risk-Reward Ratio Calculator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Evaluate whether a setup offers statistical asymmetry before taking action. Calculate risk vs reward and the minimum required win-rate to break even.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-100 pb-3">
              Trade Pricing Inputs
            </h2>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Entry Price (₹)
              </label>
              <input
                type="number"
                min={1}
                value={entryPrice}
                onChange={(e) => setEntryPrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Stop Loss (₹)
                </label>
                <input
                  type="number"
                  min={1}
                  value={stopLossPrice}
                  onChange={(e) => setStopLossPrice(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Target Price (₹)
                </label>
                <input
                  type="number"
                  min={1}
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Shares / Quantity
              </label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
              />
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
              <div>Downside Risk / Share: <strong>₹{riskPerShare.toFixed(2)}</strong></div>
              <div>Upside Reward / Share: <strong>₹{rewardPerShare.toFixed(2)}</strong></div>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 border border-[#1F3858] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-[#1F3858] pb-3 text-slate-200">
                Setup Statistical Analysis
              </h2>

              <div className="mt-6 space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-300 block">
                      Risk to Reward Ratio
                    </span>
                    <span className="text-3xl font-black text-[#1CA37E] mt-1 block">
                      1 : {rrRatio.toFixed(2)}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    rrRatio >= 2 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {rrRatio >= 2 ? 'Favorable Setup (≥ 1:2)' : 'Sub-Optimal Setup (< 1:2)'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                    <span className="text-rose-300 block">Total Risk at Stop-Loss</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      -₹{totalRisk.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <span className="text-emerald-300 block">Total Reward at Target</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      +₹{totalReward.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Required Win-Rate to Break Even:</span>
                    <strong className="text-white font-bold">{breakevenWinRate}%</strong>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    At a 1:{rrRatio.toFixed(1)} ratio, winning just {breakevenWinRate}% of trades ensures you don&apos;t lose money.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F3858] text-[11px] text-slate-400">
              Rule of Thumb: Target setups with at least 1:2 R:R to keep long-term statistical edge.
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">Risk-Reward FAQs</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Why is a 1:1 risk-reward ratio discouraged?</h3>
              <p className="text-slate-600">At a 1:1 ratio, you must achieve a win rate above 50% just to cover taxes and brokerage commissions. With a 1:2 ratio, you remain profitable even with a 40% win rate.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Should I artificially widen my target to force a 1:3 ratio?</h3>
              <p className="text-slate-600">No. Targets must be based on genuine technical resistance or chart extensions. Artificially placing a target in unchartered territory reduces the probability of it ever being reached.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What does "statistical expectancy" mean?</h3>
              <p className="text-slate-600">Expectancy = (Win% × Average Win) - (Loss% × Average Loss). A positive expectancy over 50+ trades ensures your account grows over time despite individual losing trades.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
