'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

export default function ProfitLossCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState<number>(250);
  const [sellPrice, setSellPrice] = useState<number>(275);
  const [quantity, setQuantity] = useState<number>(200);

  const buyTotal = buyPrice * quantity;
  const sellTotal = sellPrice * quantity;
  const turnover = buyTotal + sellTotal;
  const grossPL = sellTotal - buyTotal;
  const percentageReturn = buyTotal > 0 ? ((grossPL / buyTotal) * 100).toFixed(2) : '0';
  const isProfit = grossPL >= 0;

  // Approximate statutory charges (STT 0.1% on delivery buy+sell or 0.025% intraday, exchange ~0.003%, GST, SEBI)
  const estimatedCharges = Number((turnover * 0.0012).toFixed(2));
  const netPL = Number((grossPL - estimatedCharges).toFixed(2));

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
            <li className="text-slate-800 font-semibold" aria-current="page">Profit &amp; Loss Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Trade Math Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Profit and Loss (P&amp;L) Calculator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Calculate gross gains, percentage return on capital, and estimated net outcomes after statutory charges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-100 pb-3">
              Trade Inputs
            </h2>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Buy Price (₹)
              </label>
              <input
                type="number"
                min={0.1}
                value={buyPrice}
                onChange={(e) => setBuyPrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Sell Price (₹)
              </label>
              <input
                type="number"
                min={0.1}
                value={sellPrice}
                onChange={(e) => setSellPrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Quantity (Shares / Units)
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
              <div>Total Capital Deployed (Buy Total): <strong>₹{buyTotal.toLocaleString('en-IN')}</strong></div>
              <div>Gross Sale Proceeds (Sell Total): <strong>₹{sellTotal.toLocaleString('en-IN')}</strong></div>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 border border-[#1F3858] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-[#1F3858] pb-3 text-slate-200">
                Performance Calculation
              </h2>

              <div className="mt-6 space-y-4">
                <div className={`p-4 rounded-2xl border ${
                  isProfit ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'
                }`}>
                  <span className="text-xs uppercase tracking-wider text-slate-300 block">
                    {isProfit ? 'Gross Profit' : 'Gross Loss'}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className={`text-3xl font-black ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isProfit ? '+' : ''}₹{grossPL.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-sm font-bold ${isProfit ? 'text-emerald-300' : 'text-rose-300'}`}>
                      ({percentageReturn}%)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Total Trade Turnover</span>
                    <span className="text-base font-bold text-white mt-0.5 block">
                      ₹{turnover.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block">Est. Statutory Charges</span>
                    <span className="text-base font-bold text-slate-300 mt-0.5 block">
                      ~₹{estimatedCharges.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs flex justify-between items-center">
                  <span className="text-slate-300">Net Estimated Outcome:</span>
                  <strong className={`font-bold text-sm ${netPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {netPL >= 0 ? '+' : ''}₹{netPL.toLocaleString('en-IN')}
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1F3858] text-[11px] text-slate-400">
              Note: Actual broker commissions may vary based on your specific brokerage tariff plan.
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">P&amp;L Calculation FAQs</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is trade turnover?</h3>
              <p className="text-slate-600">Turnover is the combined absolute value of all buy orders plus all sell orders executed. In India, regulatory turnover charges and GST are calculated based on this combined turnover.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is the difference between Gross P&amp;L and Net P&amp;L?</h3>
              <p className="text-slate-600">Gross P&amp;L is the pure price difference between exit and entry. Net P&amp;L is what actually lands in your bank account after deducting STT, exchange fees, SEBI turnover charges, stamp duty, and broker commissions.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Can small profits be completely wiped out by charges?</h3>
              <p className="text-slate-600">Yes. If you scalp for 0.1% or 0.2% gains in small quantities, statutory taxes and fixed DP charges can easily convert a gross profit into a net financial loss.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

