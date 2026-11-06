import React from 'react';
import type { Metadata } from 'next';
import EducationalPageLayout from '@/components/educational/EducationalPageLayout';

export const metadata: Metadata = {
  title: 'Demat Account Basics | CDSL, NSDL & Account Safety in India',
  description:
    'Learn how Demat and Trading accounts work in India: the role of CDSL and NSDL, Depository Participants (DPs), TPIN authorization, and account security.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/demat-account-basics',
  },
};

export default function DematAccountBasicsPage() {
  return (
    <EducationalPageLayout
      title="Demat Account Basics: NSDL, CDSL & Electronic Custody"
      subtitle="Understand the electronic custody of Indian securities: the difference between Demat and Trading accounts, depository security, and TPIN electronic debit mandates."
      badge="Account Fundamentals"
      difficulty="Beginner"
      readTime="10 min read"
      visualCallout={
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            The Three-Account Architecture of Equity Trading in India
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Bank Account</strong>
              <p className="text-slate-500">Holds your legal fiat currency (INR). Used to transfer funds into your trading balance and receive dividend payouts directly.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Trading Account</strong>
              <p className="text-slate-500">The software interface provided by your SEBI-registered broker to place buy and sell orders with NSE and BSE.</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Demat Account</strong>
              <p className="text-slate-500">The digital electronic depository locker (maintained with CDSL or NSDL) where shares and bonds reside securely.</p>
            </div>
          </div>
        </div>
      }
      sections={[
        {
          id: 'what-is-demat',
          title: 'What is a Demat Account & Dematerialization?',
          content: (
            <>
              <p>
                Prior to 1996, Indian shares were issued as physical paper certificates, creating frequent issues with forged certificates, postal transit delays, stamp duty hassles, and loss due to fire or wear.
              </p>
              <p>
                <strong>Dematerialization (Demat)</strong> is the process of converting physical share certificates into electronic records. A Demat account holds your equity shares, mutual fund units, sovereign gold bonds (SGBs), and government securities securely in electronic ledger format.
              </p>
            </>
          ),
        },
        {
          id: 'cdsl-vs-nsdl',
          title: 'Depositories: The Role of CDSL & NSDL',
          content: (
            <>
              <p>
                In India, your shares are <em>not</em> stored inside your broker&apos;s app or database. They reside safely with one of the two government-authorized central depositories:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong>NSDL (National Securities Depository Limited):</strong> Established in 1996, primarily promoted by NSE, IDBI Bank, and UTI. Account numbers start with &ldquo;IN&rdquo; followed by 14 digits.
                </li>
                <li>
                  <strong>CDSL (Central Depository Services Limited):</strong> Established in 1999, promoted by BSE and leading Indian banks. Account numbers comprise a 16-digit numeric Beneficiary Owner Identification (BO ID).
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-2">
                Even if your stockbroker goes bankrupt, your shares remain 100% safe in your Demat account directly registered with CDSL or NSDL.
              </p>
            </>
          ),
        },
        {
          id: 'tpin-security',
          title: 'Account Security: e-DIS Mandates & TPIN Authorization',
          content: (
            <>
              <p>
                Under modern SEBI guidelines, Power of Attorney (POA) giving brokers carte blanche debit authority is largely replaced by <strong>e-DIS (electronic Delivery Instruction Slip)</strong>. 
              </p>
              <p>
                Whenever you sell shares from your Demat holding, the depository requires you to enter a secure 6-digit <strong>CDSL TPIN</strong> along with a one-time password (OTP) sent to your Aadhaar-linked mobile number, guaranteeing that unauthorized trades cannot occur without your direct approval.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: 'Can one person hold multiple Demat accounts in India?',
          answer:
            'Yes. An individual can legally open multiple Demat accounts with different registered brokers using the same PAN number. Each account is independently registered and tracked with CDSL or NSDL.',
        },
        {
          question: 'What happens to dividends declared on shares held in a Demat account?',
          answer:
            'Dividends declared by listed companies are credited directly to the primary bank account linked to your Demat profile via National Electronic Clearing Service (NECS). They do not stay inside the broker ledger.',
        },
        {
          question: 'Is adding a nominee mandatory for Demat accounts?',
          answer:
            'Yes, per recent SEBI mandates, all individual Demat account holders must either declare a nominee or explicitly submit a formal declaration to opt out of nomination, ensuring seamless succession without legal complications.',
        },
      ]}
      relatedLinks={[
        { title: 'Stock Market Basics', href: '/stock-market-basics' },
        { title: 'IPO Basics Guide', href: '/ipo-basics' },
        { title: 'Risk Management Principles', href: '/risk-management' },
      ]}
    />
  );
}
