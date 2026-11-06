import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Share Market Expert',
  description:
    'Read the Privacy Policy of Share Market Expert: data collection, storage, cookie usage, learner rights, and adherence to Indian IT laws.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Information We Collect',
          content: (
            <>
              <p>
                Share Market Expert collects only minimal personal information necessary to deliver our educational programs and manage student inquiries. This includes your Full Name, Mobile Telephone Number, State/City of residence, and educational preferences submitted voluntarily via our contact and inquiry forms.
              </p>
              <p>
                <strong>What We Never Collect:</strong> We never collect, store, or ask for sensitive financial credentials such as trading passwords, demat login details, bank account PINs, OTPs, or credit card numbers.
              </p>
            </>
          ),
        },
        {
          title: 'Purpose of Data Processing',
          content: (
            <p>
              Collected contact data is used solely to provide educational counseling, issue batch schedule updates, deliver curriculum materials, and communicate regarding enrolled learning plans. We do not sell, rent, or trade student personal information to third-party telemarketers or external brokerages.
            </p>
          ),
        },
        {
          title: 'Data Security & Storage',
          content: (
            <p>
              All submitted data is stored in secure database environments protected by industry-standard encryption, firewalls, and strict access controls. Administrative access to learner inquiries is restricted to authorized academic personnel.
            </p>
          ),
        },
        {
          title: 'Learner Rights & Erasure',
          content: (
            <p>
              Under Indian Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, learners may request review, modification, or complete deletion of their contact records from our database by emailing info@sharemarketexpert.in.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Do you share student phone numbers with stockbrokers or telecallers?',
          a: 'No. We maintain strict confidentiality. Your contact number is used solely by our academic counselors in Navi Mumbai to answer your educational inquiries and coordinate batch access.',
        },
        {
          q: 'How long do you retain contact form submissions?',
          a: 'Inquiry records are retained for 12 months for administrative follow-up and compliance logging, after which inactive lead records are purged from our database.',
        },
        {
          q: 'How do I request deletion of my personal details?',
          a: 'You can submit a formal data deletion request by emailing info@sharemarketexpert.in with the subject line "Data Erasure Request." Our compliance desk will process the request within 7 business days.',
        },
      ]}
    />
  );
}

