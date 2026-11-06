import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Trading Psychology | Overcoming FOMO, Revenge Trading & Emotional Bias',
  description:
    'Master trading psychology: learn to conquer FOMO, emotional revenge trading, loss aversion bias, and establish emotional discipline in Indian stock markets.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/trading-psychology',
  },
};

export default function TradingPsychologyPage() {
  return (
    <EducationalPageLayout
      title="Trading Psychology: Overcoming Biases & Emotional Impulse"
      subtitle="The hardest element of market participation is not drawing chart lines, but mastering human emotion. Understand the cognitive biases that sabotage retail traders."
      badge="Behavioral Finance"
      difficulty="Intermediate"
      readTime="12 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            The Emotional Rollercoaster Cycle in Financial Markets
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
              <span className="font-bold block">1. Optimism &amp; Euphoria</span>
              <span className="text-[11px]">Traders get reckless, increase lot sizes, ignore risks.</span>
            </div>
            <div className="p-2.5 bg-amber-50 text-amber-800 rounded-lg border border-amber-200">
              <span className="font-bold block">2. Denial &amp; Hope</span>
              <span className="text-[11px]">Pullback begins; traders widen stop loss hoping for rebound.</span>
            </div>
            <div className="p-2.5 bg-red-50 text-red-800 rounded-lg border border-red-200">
              <span className="font-bold block">3. Panic &amp; Capitulation</span>
              <span className="text-[11px]">Severe drawdown triggers exit at the exact bottom.</span>
            </div>
            <div className="p-2.5 bg-blue-50 text-blue-800 rounded-lg border border-blue-200">
              <span className="font-bold block">4. Despondency / FOMO</span>
              <span className="text-[11px]">Market recovers; fear of missing out triggers another chase.</span>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'cognitive-biases',
          title: 'The Five Most Damaging Trading Biases',
          content: (
            <>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900">1. FOMO (Fear Of Missing Out)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Entering an asset after it has already surged 15% without a clear setup, simply because others on social media are celebrating gains.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900">2. Revenge Trading</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Immediately taking an impulse trade in double size right after a loss to try to &lsquo;win back&rsquo; lost funds from the market.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900">3. Loss Aversion (Disposition Effect)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Psychologists Daniel Kahneman and Amos Tversky proved that the emotional pain of losing ₹1,000 is psychologically twice as intense as the pleasure of gaining ₹1,000. This causes beginners to cut winning trades quickly while letting losing trades run deep.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900">4. Confirmation Bias</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Searching only for news, social media posts, and comments that validate your open trade while ignoring glaring technical breakdowns on the chart.
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 'cultivating-discipline',
          title: 'Practical Rules to Build Emotional Equilibrium',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li><strong>Establish a Daily Loss Limit:</strong> If your account incurs 2 consecutive losing trades in one day, shut down the trading screen immediately.</li>
                <li><strong>Pre-Define Exits Before Entry:</strong> Never enter an order without entering the bracket stop-loss order simultaneously.</li>
                <li><strong>Separate Self-Worth from P&amp;L:</strong> Losses are an unavoidable cost of operating in probabilistic financial markets, not a reflection of your human intellect.</li>
              </ul>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'How do professional traders handle a series of losing trades?',
          answer:
            'Professional traders understand the concept of "distribution of outcomes." Even a system with a 60% win rate will occasionally produce 5 consecutive losses. By keeping position risk strictly at 1%, they preserve both their capital and mental clarity.',
        },
        {
          question: 'Does increasing capital size reduce anxiety?',
          answer:
            'The opposite is true. Trading with larger capital than you are emotionally acclimated to exponentially heightens panic and causes decision paralysis. Capital size should only expand gradually as rules-based consistency is demonstrated.',
        },
        {
          question: 'Why is trade journaling considered a psychological tool?',
          answer:
            'A journal forces you to reflect honestly on whether a trade was executed according to your rules or driven by impulse, fear, or greed, providing objective feedback to break destructive behavioral loops.',
        },
      ]}
      relatedLinks={[
        { title: 'Risk Management Mathematics', href: '/risk-management' },
        { title: 'Trading Education Overview', href: '/trading-education' },
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
      ]}
    />
  );
}
