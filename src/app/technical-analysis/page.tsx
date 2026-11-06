import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Technical Analysis Guide | Chart Geometry & Price Action Learning',
  description:
    'Master technical analysis: support and resistance zones, trendlines, moving averages, RSI, and price-action confirmation without indicator clutter.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/technical-analysis',
  },
};

export default function TechnicalAnalysisPage() {
  return (
    <EducationalPageLayout
      title="Technical Analysis: Principles, Chart Geometry & Price Action"
      subtitle="Learn how market technicians study historical price and volume data to evaluate supply-demand dynamics and formulate disciplined risk-defined setups."
      badge="Core Analytical Skill"
      difficulty="Intermediate"
      readTime="14 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Core Foundations of Technical Analysis (Dow Theory Axioms)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Market Discounts Everything</strong>
              <p className="text-slate-500">Known news, earnings reports, and macroeconomic data are already reflected in the current market price.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Prices Move in Trends</strong>
              <p className="text-slate-500">Price action tends to persist in recognizable directional trends (Uptrend, Downtrend, or Sideways range).</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. History Tends to Repeat</strong>
              <p className="text-slate-500">Human market psychology (fear and greed) creates recurring visual chart geometry across different timeframes.</p>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'support-and-resistance',
          title: 'Understanding Support & Resistance Zones',
          content: (
            <>
              <p>
                <strong>Support</strong> represents a price level or price zone where buying interest is strong enough to overcome selling pressure. <strong>Resistance</strong> is the opposing zone where selling interest overwhelms buying demand.
              </p>
              <p>
                In professional technical analysis, these are treated as <em>flexible zones</em> rather than razor-thin exact numbers. When a resistance zone is decisively breached on elevated volume, the principle of <strong>role reversal</strong> dictates that it often transforms into potential future support.
              </p>
            </>
          ),
        },
        {
          id: 'trend-identification',
          title: 'Trend Geometry: Higher Highs & Lower Lows',
          content: (
            <>
              <p>
                A classic uptrend is structurally defined by a sequence of <strong>Higher Highs (HH)</strong> and <strong>Higher Lows (HL)</strong>. Conversely, a downtrend consists of <strong>Lower Lows (LL)</strong> and <strong>Lower Highs (LH)</strong>.
              </p>
              <p>
                A trend remains intact until price breaks below the prior higher low (in an uptrend) or above the prior lower high (in a downtrend), signaling market structure transition or consolidation.
              </p>
            </>
          ),
        },
        {
          id: 'volume-and-indicators',
          title: 'Volume Spread Analysis & Indicator Usage',
          content: (
            <>
              <p>
                Price shows direction, but <strong>volume</strong> validates institutional participation. A breakout above resistance accompanied by surging volume reflects strong demand; a breakout with low volume indicates higher probability of a false trap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Relative Strength Index (RSI)</strong>
                  <p className="text-xs text-slate-600 mt-1">Measures the velocity and magnitude of recent price moves to identify momentum divergence.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-xs uppercase text-slate-800 block">Moving Averages (EMA 20 / 50 / 200)</strong>
                  <p className="text-xs text-slate-600 mt-1">Smooth out short-term fluctuations to highlight the prevailing intermediate and macro trend direction.</p>
                </div>
              </div>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Does technical analysis predict the future with certainty?',
          answer:
            'No. Technical analysis does not predict the future. It is a probabilistic framework used to identify asymmetric risk-reward setups where the upside potential outweighs the defined risk.',
        },
        {
          question: 'Which timeframe is best for technical analysis?',
          answer:
            'Professional analysts utilize multi-timeframe analysis: examining higher timeframes (Weekly and Daily) to determine macro trend direction and key support/resistance zones, and lower timeframes (1-hour or 15-minute) for trade execution.',
        },
        {
          question: 'Should beginners rely on dozens of indicators?',
          answer:
            'No. Relying on too many indicators creates analysis paralysis and conflicting signals. Mastering clean price action, support-resistance zones, and volume spread analysis is far more effective than lagging indicator overload.',
        },
      ]}
      relatedLinks={[
        { title: 'Candlestick Patterns Guide', href: '/candlestick-patterns' },
        { title: 'Risk Management Principles', href: '/risk-management' },
        { title: 'Trading Psychology Mastery', href: '/trading-psychology' },
      ]}
    />
  );
}
