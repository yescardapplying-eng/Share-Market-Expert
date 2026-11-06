import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Share Market Expert',
  description:
    'Review the Terms and Conditions governing your use of Share Market Expert educational services, course access, intellectual property, and platform policies.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions of Service"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Acceptance of Educational Terms',
          content: (
            <p>
              By accessing https://sharemarketexpert.in or enrolling in our learning programs, you agree to be bound by these Terms and Conditions. Share Market Expert provides educational training in financial market literacy only. If you do not agree with any part of these terms, you should discontinue use of the platform.
            </p>
          ),
        },
        {
          title: 'Non-Advisory & Non-Fiduciary Declaration',
          content: (
            <p>
              The platform and its instructors do not operate as SEBI-registered Investment Advisers (IA) or Research Analysts (RA). No information provided in live webinars, study notes, or videos constitutes financial advice, stock recommendations, or portfolio management. Learners bear sole responsibility for their personal investment decisions.
            </p>
          ),
        },
        {
          title: 'Intellectual Property & Prohibition of Resale',
          content: (
            <p>
              All curriculum handbooks, video recordings, slide decks, and website content are the exclusive intellectual property of Share Market Expert. Learners are granted a non-transferable personal license to view materials. Screen recording, unauthorized redistribution, public streaming, or commercial resale of materials is strictly prohibited and subject to legal prosecution under the Indian Copyright Act.
            </p>
          ),
        },
        {
          title: 'Governing Law & Jurisdiction',
          content: (
            <p>
              These terms shall be governed by and construed in accordance with the substantive laws of the Republic of India. Any legal dispute or proceeding arising out of platform use or enrollment shall fall under the exclusive jurisdiction of the competent courts in Navi Mumbai / Thane / Mumbai, Maharashtra.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Can I share my course portal login with a friend?',
          a: 'No. Each course enrollment is assigned to a single student. Sharing portal credentials or concurrent multiple logins from different IP addresses will trigger automated account suspension.',
        },
        {
          q: 'Are live session schedules subject to change?',
          a: 'While we adhere strictly to announced timetables, schedules may occasionally be adjusted due to gazetted holidays, faculty illness, or exchange holiday calendar shifts. All enrolled students are notified via email or student portal announcements in advance.',
        },
        {
          q: 'What conduct is expected in live interactive batches?',
          a: 'Students are required to maintain academic decorum, refrain from sharing speculative stock tips in group chats, and treat fellow learners and educators with respect.',
        },
      ]}
    />
  );
}
