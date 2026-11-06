import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Candlestick Patterns Guide | Visual Formations & Confirmation Rules',
  description:
    'Master candlestick patterns: Hammer, Shooting Star, Bullish & Bearish Engulfing, Doji, and Morning Star. Learn price action confirmation to avoid false traps.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/candlestick-patterns',
  },
};

export default function CandlestickPatternsPage() {
  return (
    <EducationalPageLayout
      title="Candlestick Patterns: Formations, Psychology & Confirmation"
      subtitle="Understand the battle between buyers and sellers displayed through Japanese candlesticks: single-candle signals, multi-candle structures, and false breakout avoidance."
      badge="Chart Geometry"
      difficulty="Beginner"
      readTime="13 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Anatomy of Bullish &amp; Bearish Candlesticks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
              <strong className="text-emerald-900 block mb-1 text-sm">Green / Bullish Candle</strong>
              <p className="text-emerald-800">
                <strong>Close &gt; Open:</strong> Buyers seized control during the session and pushed the closing price higher than where the period opened. The upper wick shows intra-session rejection of the extreme high.
              </p>
            </div>
            <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200">
              <strong className="text-rose-900 block mb-1 text-sm">Red / Bearish Candle</strong>
              <p className="text-rose-800">
                <strong>Open &gt; Close:</strong> Sellers dominated the period, dragging the price down. The long body reflects aggressive supply exceeding available liquidity at higher levels.
              </p>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'single-candle-patterns',
          title: 'High-Probability Single-Candle Patterns',
          content: (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">The Hammer</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Small body at the top with a lower shadow at least twice the length of the body. Found at support zones, indicating strong buyer rejection of lower prices.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">The Shooting Star</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Small body at the bottom with a long upper wick. Occurs at key resistance zones, indicating buyers tried to push up but were forcefully rejected by institutional supply.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">The Doji</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Open and Close are virtually identical. Represents a temporary state of equilibrium and hesitation between bulls and bears.
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'multi-candle-patterns',
          title: 'Multi-Candle Reversal Formations',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Bullish Engulfing:</strong> A small red candle followed immediately by a large green candle whose real body completely engulfs the prior candle&apos;s range. Demonstrates swift takeover by aggressive buyers.
                </li>
                <li>
                  <strong>Bearish Engulfing:</strong> A green candle followed by an expansive red candle that completely engulfs the prior day&apos;s gains, signaling heavy institutional distribution.
                </li>
                <li>
                  <strong>Morning Star:</strong> A three-candle pattern (downtrend candle &rarr; small indecision star &rarr; strong green reversal candle closing well into the first candle&apos;s body), signaling the conclusion of an oversold swing.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: 'confirmation-rules',
          title: 'The Cardinal Rule: Context Over Pattern',
          content: (
            <>
              <p>
                A candlestick pattern in the middle of a sideways range without horizontal support or resistance is virtually random noise. Professional technicians demand:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm">
                <li>Location: Is the pattern appearing at a major horizontal support, resistance, or moving average?</li>
                <li>Volume: Was the reversal candle accompanied by rising volume?</li>
                <li>Confirmation: Did the subsequent candle break beyond the high (for bullish) or low (for bearish) of the formation?</li>
              </ol>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Do candlestick patterns work on 1-minute or 5-minute charts?',
          answer:
            'While candlesticks form on all timeframes, lower timeframes (1-min or 3-min) contain immense high-frequency algorithmic noise and lower reliability. Higher timeframes (Daily and 4-hour) offer significantly stronger reliability because they represent aggregated institutional capital decisions.',
        },
        {
          question: 'Can a trader trade solely based on candlestick patterns?',
          answer:
            'No. Relying solely on pattern recognition without evaluating market structure, overall trend direction, and volume leads to frequent false signals. Candlesticks should be the final execution trigger within a broader analytical checklist.',
        },
        {
          question: 'What is a "false breakout" (bull trap or bear trap)?',
          answer:
            'A false breakout occurs when price moves past a key level, enticing retail traders to enter in breakout direction, only for institutional participants to absorb liquidity and push price sharply back inside the range, trapping late breakout traders.',
        },
      ]}
      relatedLinks={[
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
        { title: 'Risk Management Principles', href: '/risk-management' },
        { title: 'Swing Trading Explained', href: '/swing-trading-explained' },
      ]}
    />
  );
}

