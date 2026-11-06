import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/educational/../legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Delivery and Access Policy | Share Market Expert',
  description:
    'Learn how educational course materials, live webinar invitations, student portal access, and digital study notes are delivered upon enrollment.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/delivery-and-access',
  },
};

export default function DeliveryAndAccessPage() {
  return (
    <LegalPageLayout
      title="Delivery and Access Policy"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Digital Delivery Method',
          content: (
            <p>
              Share Market Expert provides purely digital educational services, electronic curriculum handbooks, and live virtual webinar access. No physical goods or boxed hardware products are shipped through postal or courier services.
            </p>
          ),
        },
        {
          title: 'Access Credentials Fulfillment Timeline',
          content: (
            <p>
              Upon successful registration and confirmation of tuition payment:
              <br />
              1. <strong>Within 2 Hours:</strong> You will receive a confirmation receipt and welcome onboarding email.
              <br />
              2. <strong>Within 24 Hours:</strong> Your student portal login credentials and calendar invites for scheduled live sessions will be issued to your registered email address and mobile number.
            </p>
          ),
        },
        {
          title: 'Technical Hardware & Bandwidth Requirements',
          content: (
            <p>
              To ensure optimal participation in live webinars and access to recorded lectures, students are responsible for maintaining a stable internet connection (minimum 5 Mbps broadband/4G/5G) and a modern desktop, laptop, tablet, or smartphone equipped with an updated web browser (Chrome, Edge, Safari, or Firefox).
            </p>
          ),
        },
        {
          title: 'Access Duration by Package Tier',
          content: (
            <p>
              Access to the online lecture library and doubt-clearing sessions is strictly linked to your enrolled plan: 3 months for Silver, 6 months for Gold, and 12 months for Platinum. Downloadable PDF handbooks and e-books remain accessible permanently on your personal devices.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'What should I do if I have not received my access email within 24 hours?',
          a: 'Please check your email spam/promotions folder first. If credentials are still not found, contact our support desk immediately at +91 12345 67890 or email info@sharemarketexpert.in with your transaction details.',
        },
        {
          q: 'Can I access the student portal from a mobile smartphone?',
          a: 'Yes. Our student learning platform is fully mobile-responsive and accessible on any smartphone or tablet browser without requiring bulky downloads.',
        },
        {
          q: 'Are live session recordings downloadable for offline viewing?',
          a: 'Video recordings are streamable on-demand within the secure student portal to protect intellectual property. Accompanying PDF summary notes and worksheets can be downloaded for offline study.',
        },
      ]}
    />
  );
}
