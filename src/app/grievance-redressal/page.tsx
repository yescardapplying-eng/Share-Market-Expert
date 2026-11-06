import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Grievance Redressal Policy | Share Market Expert',
  description:
    'Grievance Redressal Mechanism of Share Market Expert in accordance with the Information Technology (Intermediary Guidelines) Rules: escalation matrix and contact details.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/grievance-redressal',
  },
};

export default function GrievanceRedressalPage() {
  return (
    <LegalPageLayout
      title="Grievance Redressal Mechanism"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Regulatory Context & Purpose',
          content: (
            <p>
              In accordance with the Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Share Market Expert maintains a structured, transparent mechanism to address learner grievances, consumer inquiries, and technical complaints.
            </p>
          ),
        },
        {
          title: 'Grievance Redressal Officer Contact Details',
          content: (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5 text-xs sm:text-sm">
              <p><strong>Designation:</strong> Grievance Redressal Officer</p>
              <p><strong>Platform:</strong> Share Market Expert</p>
              <p><strong>Location:</strong> Vashi, Navi Mumbai, Maharashtra, India</p>
              <p><strong>Email for Grievances:</strong> <a href="mailto:info@sharemarketexpert.in" className="text-[#176B55] underline">info@sharemarketexpert.in</a> (Subject: &ldquo;Formal Grievance&rdquo;)</p>
              <p><strong>Helpline:</strong> +91 12345 67890</p>
              <p><strong>Operating Hours:</strong> Monday to Saturday: 10:00 AM to 5:00 PM IST</p>
            </div>
          ),
        },
        {
          title: 'Two-Tier Escalation Matrix',
          content: (
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <strong className="text-slate-900 block text-xs uppercase text-[#142B45]">Level 1: Academic Support Desk</strong>
                <p className="text-xs text-slate-600 mt-1">For general course access issues, schedule queries, or doubt session links, contact our support team via telephone or email. Typical resolution time: 24 to 48 business hours.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <strong className="text-slate-900 block text-xs uppercase text-[#142B45]">Level 2: Formal Grievance Escalation</strong>
                <p className="text-xs text-slate-600 mt-1">If your issue is not resolved within 48 hours, or relates to data privacy, content disputes, or service deficiencies, escalate directly to the Grievance Officer with your prior ticket reference number. Formal acknowledgment within 24 hours; resolution within 15 days.</p>
              </div>
            </div>
          ),
        },
      ]}
      faqs={[
        {
          q: 'What details should I include when filing a formal grievance?',
          a: 'Please state your full name, registered mobile number, description of the grievance, relevant screenshot or documentation, and the prior Level 1 support ticket number if applicable.',
        },
        {
          q: 'How long does it take to resolve a formal complaint?',
          a: 'Under Indian IT Rules, our Grievance Officer acknowledges complaints within 24 hours of receipt and delivers a reasoned resolution within 15 calendar days.',
        },
        {
          q: 'Can I lodge a complaint regarding unauthorized third-party tip providers using your name?',
          a: 'Yes! If you encounter fraudulent Telegram channels or scammers claiming to represent Share Market Expert and offering stock tips, report them to us immediately so our legal desk can take appropriate cybercrime reporting action.',
        },
      ]}
    />
  );
}
