import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Share Market Expert',
  description:
    'Read the Refund and Cancellation Policy of Share Market Expert: cooling-off windows, batch transfer conditions, and digital course access guidelines.',
  alternates: {
    canonical: 'https://sharemarketexpert.in/refund-and-cancellation',
  },
};

export default function RefundAndCancellationPage() {
  return (
    <LegalPageLayout
      title="Refund and Cancellation Policy"
      lastUpdated="February 2026"
      sections={[
        {
          title: 'Enrollment Cancellation Prior to Batch Commencement',
          content: (
            <p>
              Students who have registered for an upcoming live cohort program may request a full cancellation and tuition refund up to <strong>7 calendar days prior</strong> to the officially scheduled batch commencement date. In such instances, 100% of the tuition paid will be reimbursed, less any non-refundable payment gateway processing fees (typically 2% to 3%).
            </p>
          ),
        },
        {
          title: 'Post-Commencement Policy & Digital Goods',
          content: (
            <p>
              Once a live cohort has commenced, or once credentials granting access to digital proprietary curriculum notes, video lecture archives, and e-books have been issued and activated, tuition fees are non-refundable. This policy reflects the irreversible delivery of intellectual property and digital educational content.
            </p>
          ),
        },
        {
          title: 'Batch Transfer & Academic Rescheduling',
          content: (
            <p>
              In the event of unforeseen personal medical emergencies or corporate obligations preventing attendance, students may request a one-time transfer to a subsequent scheduled batch within 6 months of original enrollment, subject to academic desk approval.
            </p>
          ),
        },
        {
          title: 'Refund Processing Timelines',
          content: (
            <p>
              Eligible refunds approved by our administration are initiated within 5 to 7 business days and credited back to the original source bank account or payment method utilized during registration.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          q: 'How do I submit an eligible refund request?',
          a: 'Eligible cancellation requests must be submitted in writing by emailing info@sharemarketexpert.in with your payment receipt, registered phone number, and reason for withdrawal.',
        },
        {
          q: 'Can I transfer my enrollment to a family member if I cannot attend?',
          a: 'Yes, prior to batch commencement, you may request a one-time transfer of your enrollment to a direct family member by contacting our Navi Mumbai desk.',
        },
        {
          q: 'What if Share Market Expert cancels or reschedules a scheduled batch?',
          a: 'In the rare event that our academy cancels a scheduled batch due to faculty emergency or technical failure, enrolled students are offered the choice between priority seat transfer to the next available batch or a 100% full refund.',
        },
      ]}
    />
  );
}
