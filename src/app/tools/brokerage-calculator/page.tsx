'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Percent, ArrowRight, ShieldCheck } from 'lucide-react';

type SegmentType = 'delivery' | 'intraday' | 'futures';

export default function BrokerageCalculatorPage() {
  const [segment, setSegment] = useState<SegmentType>('delivery');
  const [buyPrice, setBuyPrice] = useState<number>(500);
  const [sellPrice, setSellPrice] = useState<number>(520);
  const [quantity, setQuantity] = useState<number>(100);
  const [brokeragePerOrder, setBrokeragePerOrder] = useState<number>(20);

  const buyTurnover = buyPrice * quantity;
  const sellTurnover = sellPrice * quantity;
  const totalTurnover = buyTurnover + sellTurnover;
  const grossPL = sellTurnover - buyTurnover;

  // Brokerage: Min of 20 or 0.05%
  let totalBrokerage = brokeragePerOrder * 2;
  if (segment === 'delivery') {
    // Many discount brokers charge 0 for equity delivery or flat 20
    totalBrokerage = Math.min(40, totalTurnover * 0.001);
  } else {
    totalBrokerage = Math.min(40, totalTurnover * 0.0003 * 2);
  }

  // STT
  let stt = 0;
  if (segment === 'delivery') {
    stt = Math.round(totalTurnover * 0.001); // 0.1% on buy & sell
  } else if (segment === 'intraday') {
    stt = Math.round(sellTurnover * 0.00025); // 0.025% on sell
  } else {
    stt = Math.round(sellTurnover * 0.0002); // Futures 0.02% on sell
  }

  // Exchange txn fee (NSE ~ 0.00297%)
  const exchangeFee = Number((totalTurnover * 0.0000297).toFixed(2));

  // Stamp Duty (0.015% on buy delivery, 0.003% on intraday buy)
  const stampDutyRate = segment === 'delivery' ? 0.00015 : 0.00003;
  const stampDuty = Math.round(buyTurnover * stampDutyRate);

  // SEBI charges (₹10 / crore => 0.0001%)
  const sebiCharges = Number((totalTurnover * 0.000001).toFixed(2));

  // GST (18% on Brokerage + Exchange Fee + SEBI Charges)
  const gst = Number(((totalBrokerage + exchangeFee + sebiCharges) * 0.18).toFixed(2));

  const totalCharges = Number((totalBrokerage + stt + exchangeFee + stampDuty + sebiCharges + gst).toFixed(2));
  const netPL = Number((grossPL - totalCharges).toFixed(2));
  const breakevenPoints = quantity > 0 ? (totalCharges / quantity).toFixed(2) : '0';

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
            <li className="text-slate-800 font-semibold" aria-current="page">Brokerage Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
            Tax &amp; Regulatory Friction Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Brokerage &amp; Statutory Tax Calculator
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            See the exact itemized breakdown of brokerage, STT, exchange fees, GST, SEBI charges, and stamp duty for Indian markets.
          </p>
        </div>

        {/* Segment Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-200/80 p-1 rounded-2xl flex gap-1 text-xs sm:text-sm font-bold">
            <button
              type="button"
              onClick={() => setSegment('delivery')}
              className={`touch-target px-4 sm:px-6 py-2 rounded-xl transition-all ${
                segment === 'delivery' ? 'bg-[#142B45] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Equity Delivery (CNC)
            </button>
            <button
              type="button"
              onClick={() => setSegment('intraday')}
              className={`touch-target px-4 sm:px-6 py-2 rounded-xl transition-all ${
                segment === 'intraday' ? 'bg-[#142B45] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Equity Intraday (MIS)
            </button>
            <button
              type="button"
              onClick={() => setSegment('futures')}
              className={`touch-target px-4 sm:px-6 py-2 rounded-xl transition-all ${
                segment === 'futures' ? 'bg-[#142B45] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Futures (F&amp;O)
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-[#142B45] border-b border-slate-100 pb-3">
              Trade Inputs
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Buy Price (₹)
                </label>
                <input
                  type="number"
                  min={1}
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
                  min={1}
                  value={sellPrice}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:border-[#176B55] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Quantity (Shares)
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
              <div>Total Turnover: <strong>₹{totalTurnover.toLocaleString('en-IN')}</strong></div>
              <div>Breakeven Points Needed: <strong>₹{breakevenPoints}</strong> per share</div>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 border border-[#1F3858] shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold border-b border-[#1F3858] pb-3 text-slate-200">
                Itemized Statutory Deductions
              </h2>

              <div className="mt-4 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                  <span>Brokerage</span>
                  <span className="font-semibold text-white">₹{totalBrokerage.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                  <span>Securities Transaction Tax (STT)</span>
                  <span className="font-semibold text-white">₹{stt.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                  <span>Exchange Turnover Charges (NSE)</span>
                  <span className="font-semibold text-white">₹{exchangeFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                  <span>State Stamp Duty</span>
                  <span className="font-semibold text-white">₹{stampDuty.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                  <span>SEBI Turnover Fees</span>
                  <span className="font-semibold text-white">₹{sebiCharges.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                  <span>GST (18% on Brokerage &amp; Fees)</span>
                  <span className="font-semibold text-white">₹{gst.toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-2 pt-3 font-bold text-sm text-[#1CA37E] border-t border-white/20">
                  <span>Total Taxes &amp; Charges:</span>
                  <span>₹{totalCharges.toFixed(2)}</span>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center text-sm">
                  <span>Net Estimated P&amp;L:</span>
                  <strong className={`font-bold ${netPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {netPL >= 0 ? '+' : ''}₹{netPL.toLocaleString('en-IN')}
                  </strong>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1F3858] text-[11px] text-slate-400">
              Tax rates updated per Union Budget &amp; SEBI statutory tariff schedule.
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#142B45] mb-6">Brokerage &amp; Taxes FAQs</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is Securities Transaction Tax (STT)?</h3>
              <p className="text-slate-600">STT is a direct tax levied by the Government of India on securities transactions. In equity delivery, it is 0.1% on both the buy and sell sides. In intraday equity, it is 0.025% on the sell side only.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">Why do I pay GST on trading?</h3>
              <p className="text-slate-600">GST at 18% is not charged on the value of shares, but on the financial services consumed: specifically brokerage commission, exchange turnover charges, and clearing fees.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-[#142B45] mb-1">What is the "breakeven point"?</h3>
              <p className="text-slate-600">The breakeven point is the minimum price increase per share required purely to cover all statutory charges and brokerage so that your net trade outcome is zero.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

