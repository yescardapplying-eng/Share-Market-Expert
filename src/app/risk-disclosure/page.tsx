import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Risk Disclosure & Statutory Disclaimer | Share Market Expert',
  description:
    'Mandatory Risk Disclosure and Regulatory Disclaimer: financial market volatility, derivatives risk warnings, SEBI retail trader statistics, and non-advisory declaration.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/risk-disclosure',
  },
};

export default function RiskDisclosurePage() {
  return (
    <LegalPageLayout
      title="Risk Disclosure and Regulatory Disclaimer"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Securities Trading Inherent Risk',
          content: (
            <p>
              Trading and investing in equities, derivatives, commodities, and currencies carry substantial financial risk. Market prices are subject to rapid, unpredictable fluctuations driven by macroeconomic shocks, corporate earnings surprises, regulatory announcements, and liquidity contractions. A participant may lose some or all of their invested capital.
            </p>
          ),
        },
        {
          title: 'Mandatory Derivatives (F&O) Warning per SEBI Research',
          content: (
            <>
              <p>
                In accordance with public circulars issued by the Securities and Exchange Board of India (SEBI):
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Over <strong>9 out of 10 individual traders</strong> in equity futures and options incurred net financial losses over multi-year empirical review periods.</li>
                <li>Incurring traders experienced substantial capital erosion, with significant additional friction spent on transaction fees and taxes.</li>
                <li>Derivatives involve extreme leverage; minor price changes in the underlying asset can trigger total loss of the invested margin.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'No Investment Advice or Performance Guarantees',
          content: (
            <p>
              Share Market Expert is an educational academy. We are NOT registered with SEBI as an Investment Adviser or Research Analyst. No communication, lecture, chart example, or social media post from our educators should be interpreted as financial advice, buy/sell targets, or guaranteed returns. Past historical chart demonstrations do not guarantee future market behavior.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Can taking a stock market course eliminate market risk?',
          a: 'No. Financial market risk is an inherent systemic reality. Education teaches you how to identify potential risk and calculate mathematical position sizing, but cannot eliminate market volatility or prevent losing trades.',
        },
        {
          q: 'Should I trade with borrowed funds or loans?',
          a: 'Never. You should only participate in financial markets with discretionary risk capital that you can afford to lose without jeopardizing personal welfare, family obligations, or living expenses.',
        },
        {
          q: 'Who should I consult for personalized financial planning?',
          a: 'You should consult a SEBI-registered Investment Adviser (RIA) who is legally licensed to evaluate your personal risk profile, financial obligations, and design an appropriate asset allocation strategy.',
        },
      ]}
    />
  );
}
