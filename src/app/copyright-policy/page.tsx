import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Copyright & Content Usage Policy | Share Market Expert',
  description:
    'Learn about copyright ownership, fair dealing provisions, permitted educational citations, and intellectual property protection of Share Market Expert materials.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/copyright-policy',
  },
};

export default function CopyrightPolicyPage() {
  return (
    <LegalPageLayout
      title="Copyright and Content Usage Policy"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Ownership of Content & Trademarks',
          content: (
            <p>
              All proprietary materials published on https://sharemarketexpert.in — including text guides, graphic emblems, logo artwork, video presentations, curriculum outlines, and financial calculators — are the exclusive copyrighted property of Share Market Expert, protected under the Indian Copyright Act, 1957, and international intellectual property conventions.
            </p>
          ),
        },
        {
          title: 'Permitted Fair Dealing & Academic Citation',
          content: (
            <p>
              Visitors and educators are permitted to cite short textual excerpts (up to 150 words) from our educational blog articles for non-commercial educational review or fair dealing, provided clear attribution is given with an active backlink to the original article on https://sharemarketexpert.in.
            </p>
          ),
        },
        {
          title: 'Strictly Prohibited Acts',
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Republishing entire guides, curriculum handouts, or video recordings on third-party websites or learning portals.</li>
              <li>Scraping content via automated web bots, crawlers, or AI training pipelines without prior written authorization.</li>
              <li>Selling, redistributing, or bundling our educational PDFs, notes, or course modules in paid channels or online drives.</li>
              <li>Removing or obscuring watermark notices, author attributions, or brand logos from any visual diagrams.</li>
            </ul>
          ),
        },
        {
          title: 'Infringement Takedown & Reporting Procedure',
          content: (
            <p>
              If you identify unauthorized copies of Share Market Expert coursework circulating online, or if you believe any content on our platform infringes upon your copyright under fair use laws, notify us at info@sharemarketexpert.in with proof of ownership for prompt review.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'Can I print downloadable study notes for personal offline study?',
          a: 'Yes. Enrolled learners are fully authorized to print physical paper copies of our PDF study notes and worksheets for their personal, non-commercial self-study.',
        },
        {
          q: 'Can an academic teacher share your blog articles with university students?',
          a: 'Yes, teachers and professors may share links to our public educational articles or quote relevant sections with proper citation to Share Market Expert.',
        },
        {
          q: 'What actions are taken against copyright infringers?',
          a: 'We actively monitor online channels. Infringing parties are issued statutory cease-and-desist notices and reported for DMCA / Indian Copyright Act takedowns, with civil damages pursued where commercial piracy occurs.',
        },
      ]}
    />
  );
}

