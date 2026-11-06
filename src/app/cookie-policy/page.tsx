import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy | Share Market Expert',
  description:
    'Learn how Share Market Expert utilizes cookies and browser local storage to preserve language settings and deliver a secure browsing experience.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'What Are Cookies & Local Storage?',
          content: (
            <p>
              Cookies and browser local storage are small text data files placed on your device when you visit websites. They enable the platform to remember your navigation preferences, selected language, and maintain session security.
            </p>
          ),
        },
        {
          title: 'Categories of Cookies We Utilize',
          content: (
            <>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Essential Strictly Necessary Cookies:</strong> Required for the fundamental operation of the website, such as preventing CSRF attacks, managing secure contact form submissions, and remembering modal dismissal states.
                </li>
                <li>
                  <strong>Functional &amp; Localization Storage:</strong> We use browser localStorage (key: <code className="bg-slate-100 px-1 py-0.5 rounded">sme_lang</code>) to preserve your preferred Indian regional language across different pages.
                </li>
                <li>
                  <strong>Aggregated Performance Analytics:</strong> Anonymous, aggregated metrics (such as page visit durations and device screen sizes) used solely to enhance responsive layouts and optimize Core Web Vitals.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'Managing & Disabling Browser Cookies',
          content: (
            <p>
              You can control or disable cookies through your browser settings at any time. Please note that disabling functional cookies may prevent the platform from remembering your selected regional language preference between sessions.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Do your cookies track my browsing activity across other websites?',
          a: 'No. Share Market Expert uses first-party cookies and storage only for site functionality. We do not participate in cross-site tracking advertising networks.',
        },
        {
          q: 'How does the language preference cookie work?',
          a: 'When you select an Indian regional language (like Hindi or Marathi) from our header menu, the code is saved locally on your device so subsequent pages load in that language automatically.',
        },
        {
          q: 'How do I clear stored cookies from my device?',
          a: 'You can clear cookies and site data through your browser settings: under "Privacy and Security" &rarr; "Clear Browsing Data" &rarr; select "Cookies and other site data."',
        },
      ]}
    />
  );
}

