import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'IPO Basics | Understanding Initial Public Offerings in India',
  description:
    'Learn how Initial Public Offerings (IPOs) work in India: DRHP prospectus, price bands, ASBA application process, retail quotas, and allotment mechanics.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/ipo-basics',
  },
};

export default function IpoBasicsPage() {
  return (
    <EducationalPageLayout
      title="IPO Basics: The Primary Market Lifecycle & Allotment"
      subtitle="Discover how private companies raise capital and list on Indian exchanges: understanding the DRHP prospectus, ASBA banking mandates, and retail quota allocation."
      badge="Primary Market"
      difficulty="Beginner"
      readTime="11 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            The IPO Timeline from Issue to Stock Exchange Listing
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">1. Filing DRHP</span>
              <span className="text-slate-500 text-[11px]">Draft prospectus submitted to SEBI for regulatory approval.</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">2. Bidding Window</span>
              <span className="text-slate-500 text-[11px]">Subscription opens for 3 business days via ASBA/UPI.</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">3. Allotment Basis</span>
              <span className="text-slate-500 text-[11px]">Registrar processes bids; lottery drawn if oversubscribed.</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="font-bold text-[#142B45] block">4. Stock Listing</span>
              <span className="text-slate-500 text-[11px]">Shares credited to Demat; trading begins on NSE &amp; BSE.</span>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'what-is-an-ipo',
          title: 'What is an Initial Public Offering (IPO)?',
          content: (
            <>
              <p>
                An <strong>Initial Public Offering (IPO)</strong> is the formal process by which an unlisted private corporation sells shares of stock to the general public for the very first time. This transition enables companies to raise fresh equity capital for expansion, debt repayment, or to allow early venture investors to monetize their stakes (Offer for Sale - OFS).
              </p>
              <p>
                Once an IPO concludes, the company’s equity trades openly on secondary market exchanges (NSE and BSE), subject to continuous public disclosures and SEBI compliance guidelines.
              </p>
            </>
          ),
        },
        {
          id: 'reading-the-drhp',
          title: 'How to Read the Draft Red Herring Prospectus (DRHP)',
          content: (
            <>
              <p>
                Before subscribing to an IPO, an educated learner reviews the <strong>DRHP</strong> filed with SEBI. Vital sections include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Objects of the Issue:</strong> Clarifies whether funds will be used for productive growth (fresh issue) or simply paying out existing promoters (OFS).</li>
                <li><strong>Risk Factors:</strong> Details customer concentration risk, pending legal litigation, and operational vulnerabilities.</li>
                <li><strong>Financial Track Record:</strong> Audited 3-year revenue, EBIDTA margins, and Net Profit history.</li>
                <li><strong>Peer Group Comparison:</strong> Compares the issue&apos;s valuation multiples (P/E, EV/EBIDTA) against already listed competitors.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'asba-process',
          title: 'How ASBA Protects Your Money During IPO Bidding',
          content: (
            <>
              <p>
                In India, all retail IPO bids are processed through <strong>ASBA (Application Supported by Blocked Amount)</strong> using net banking or UPI 2.0 mandate blocking. 
              </p>
              <p>
                Under ASBA, your application money remains in your own bank account, continuing to earn interest. Funds are debited <em>only if and when</em> shares are officially allotted to your demat account. If no shares are allotted, the lien/block is automatically unblocked by your bank.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'What happens when a retail IPO quota is heavily oversubscribed?',
          answer:
            'Under SEBI retail allocation guidelines, when the retail category is oversubscribed, allotment of the minimum lot is conducted via a computerized random lottery system. Having a larger bid amount does not increase retail allotment odds in an oversubscribed issue.',
        },
        {
          question: 'What is the Grey Market Premium (GMP)?',
          answer:
            'GMP is an unofficial, unregulated over-the-counter sentiment price where individuals speculate on shares before listing. SEBI does not endorse or regulate GMP, and GMP can fluctuate wildly without reflecting actual business fundamentals.',
        },
        {
          question: 'Are IPO listing gains guaranteed?',
          answer:
            'No. A newly listed stock can easily list at a discount (below the issue price) if market sentiment turns sour or if the company was priced at an exorbitant valuation. Thorough fundamental study is essential.',
        },
      ]}
      relatedLinks={[
        { title: 'Fundamental Analysis Guide', href: '/fundamental-analysis' },
        { title: 'Demat Account Basics', href: '/demat-account-basics' },
        { title: 'Stock Market Basics', href: '/stock-market-basics' },
      ]}
    />
  );
}
