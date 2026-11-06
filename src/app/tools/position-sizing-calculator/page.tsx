'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, HelpCircle, ArrowRight, Calculator } from 'lucide-react';

export default function PositionSizingCalculatorPage() {
  const [accountCapital, setAccountCapital] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [entryPrice, setEntryPrice] = useState<number>(500);
  const [stopLossPrice, setStopLossPrice] = useState<number>(480);

  const riskPerShare = Math.abs(entryPrice - stopLossPrice);
  const totalRiskAllowed = (accountCapital * riskPercent) / 100;
  const positionSizeShares = riskPerShare > 0 ? Math.floor(totalRiskAllowed / riskPerShare) : 0;
  const totalCapitalRequired = positionSizeShares * entryPrice;
  const capitalExposurePercent = accountCapital > 0 ? ((totalCapitalRequired / accountCapital) * 100).toFixed(1) : '0';

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
            <li className="text-slate-800 font-semibold" aria-current="page">Position Sizing Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Capital Protection Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Position Sizing Calculator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Determine the exact share quantity to purchase so that triggering your stop-loss risks no more than your predetermined capital limit.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Inputs Card */}
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-100 pb-3">
              Input Your Trade Parameters
            </h2>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Total Trading Capital (₹)
              </label>
              <input
                type="number"
                min={1000}
                value={accountCapital}
                onChange={(e) => setAccountCapital(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:border-[#176B55] bg-white"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Risk Limit Per Trade (%): {riskPercent}%
                </label>
                <span className="text-xs font-bold text-[#176B55]">
                  Max Loss: ₹{totalRiskAllowed.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={0.25}
                max={5}
                step={0.25}
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full accent-[#176B55]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0.5% (Defensive)</span>
                <span>1% (Standard)</span>
                <span>2% (Max)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Entry Price (₹)
                </label>
                <input
                  type="number"
                  min={1}
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:border-[#176B55] bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Stop Loss Price (₹)
                </label>
                <input
                  type="number"
                  min={1}
                  value={stopLossPrice}
                  onChange={(e) => setStopLossPrice(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:border-[#176B55] bg-white"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600">
              Risk Per Share: <strong>₹{riskPerShare.toFixed(2)}</strong> ({((riskPerShare / entryPrice) * 100).toFixed(2)}% drop to SL)
            </div>
          </div>

          {/* Results Card */}
          <div className="md:col-span-6 bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 border border-[#1F3858] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-[#1F3858] pb-3 text-slate-200">
                Recommended Execution Sizing
              </h2>

              <div className="mt-6 space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-slate-300 block">
                    Recommended Share Quantity
                  </span>
                  <span className="text-4xl font-black text-[#1CA37E] mt-1 block">
                    {positionSizeShares.toLocaleString('en-IN')} <span className="text-base text-white font-normal">Shares</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Total Investment Required</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      ₹{totalCapitalRequired.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Account Capital Exposure</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      {capitalExposurePercent}%
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-200 leading-relaxed">
                  ✓ If stopped out at ₹{stopLossPrice}, your total loss is capped at ₹{(positionSizeShares * riskPerShare).toLocaleString('en-IN')} ({riskPercent}% of account).
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F3858] text-[11px] text-slate-400">
              Formula: Size = (Account × Risk%) ÷ |Entry - StopLoss|
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">Position Sizing FAQs</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What if the required investment exceeds my total account capital?</h3>
              <p className="text-slate-600">If your total capital required exceeds your available cash, it means your stop-loss is very tight relative to your share price. In such cases, you must cap your position size to what your cash capital allows.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Why should risk limit never exceed 2% per trade?</h3>
              <p className="text-slate-600">Keeping risk under 2% ensures that even an anomalous cluster of 5 to 8 consecutive losses leaves over 85% of your capital intact, avoiding deep emotional distress and account devastation.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Can this calculator be applied to F&amp;O index lots?</h3>
              <p className="text-slate-600">Yes. Divide the recommended share quantity by the exchange lot size (e.g., 25 for Nifty) and round down to the nearest whole integer lot number.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
