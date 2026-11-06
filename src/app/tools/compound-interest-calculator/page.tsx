'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CompoundInterestCalculatorPage() {
  const [principal, setPrincipal] = useState<number>(100000);
  const [rate, setRate] = useState<number>(10);
  const [timeYears, setTimeYears] = useState<number>(10);
  const [frequency, setFrequency] = useState<number>(12); // monthly default

  // Formula: A = P * (1 + r / n)^(n * t)
  const r = rate / 100;
  const n = frequency;
  const t = timeYears;

  const maturityAmount = Math.round(principal * Math.pow(1 + r / n, n * t));
  const interestEarned = maturityAmount - principal;

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
            <li className="text-slate-800 font-semibold" aria-current="page">Compound Interest Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Financial Mathematics Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Compound Interest Calculator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Study how interest earned on interest expands capital exponentially over time with varying compounding intervals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-100 pb-3">
              Principal &amp; Rate Inputs
            </h2>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Initial Principal Amount (₹)
              </label>
              <input
                type="number"
                min={1000}
                value={principal}
                onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Annual Rate (% p.a.)
                </label>
                <input
                  type="number"
                  min={1}
                  max={40}
                  step={0.5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Time Period (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={timeYears}
                  onChange={(e) => setTimeYears(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Compounding Frequency
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
              >
                <option value={12}>Compounded Monthly (12 times/year)</option>
                <option value={4}>Compounded Quarterly (4 times/year)</option>
                <option value={2}>Compounded Semi-Annually (2 times/year)</option>
                <option value={1}>Compounded Annually (1 time/year)</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 border border-[#1F3858] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-[#1F3858] pb-3 text-slate-200">
                Compounded Maturity Output
              </h2>

              <div className="mt-6 space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-xs uppercase tracking-wider text-slate-300 block">
                    Total Maturity Amount
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-[#1CA37E] mt-1 block">
                    ₹{maturityAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Principal Deposit</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      ₹{principal.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Total Interest Accrued</span>
                    <span className="text-base font-bold text-[#1CA37E] mt-0.5 block">
                      ₹{interestEarned.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-slate-300">
                  Growth Multiple: Initial capital expanded by <strong>{(maturityAmount / principal).toFixed(2)}x</strong> over {timeYears} years.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F3858] text-[11px] text-slate-400">
              Formula: A = P × (1 + r/n)^(n×t). Illustrative educational model.
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">Compound Interest FAQs</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is the "Rule of 72"?</h3>
              <p className="text-slate-600">The Rule of 72 is a quick mental math shortcut: divide 72 by the annual interest rate to find approximately how many years it will take for your money to double. (e.g., at 12% return, 72 ÷ 12 = 6 years to double).</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">How does compounding frequency impact returns?</h3>
              <p className="text-slate-600">More frequent compounding (e.g., monthly vs annually) generates slightly higher returns because the interest accrued in month one begins generating interest in month two.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Does inflation reduce real compounded gains?</h3>
              <p className="text-slate-600">Yes. Real return = Nominal return - Inflation rate. If an investment compounds at 10% but consumer price inflation is 6%, your real purchasing power expands at roughly 4% per annum.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
