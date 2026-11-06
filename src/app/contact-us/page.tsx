'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '@/data/indianStates';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { API_ENDPOINTS } from '@/lib/api';

const CONTACT_FAQS = [
  {
    q: 'Where is your educational learning center located?',
    a: 'Our academic office is located in Vashi, Navi Mumbai, Maharashtra, India. We conduct both live online cohort programs for learners across India and organized physical weekend workshops for local students.',
  },
  {
    q: 'How quickly does your academic counseling desk respond?',
    a: 'Enquiries submitted during working hours (Monday to Saturday, 9:30 AM to 6:30 PM IST) are typically responded to within 2 to 4 hours via telephone call or official email.',
  },
  {
    q: 'Will anyone from Share Market Expert ever ask for my trading account credentials?',
    a: 'Never. As highlighted in our safety note, Share Market Expert will NEVER ask for your trading account passwords, demat login details, bank OTPs, or funds to trade on your behalf. We are purely an educational institute.',
  },
];

export default function ContactUsPage() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [message, setMessage] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!consentGiven) {
      setErrorMessage('Please accept the privacy consent declaration to submit your inquiry.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          mobile_number: cleanPhone,
          state: selectedState || null,
          message: message.trim() || null,
          consent: true,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setStatus('error');
        setErrorMessage(
          data?.error ||
          'Unable to send message to database. Please try again or reach our helpdesk at +91 70396 54680.'
        );
        return;
      }

      setStatus('success');
      setFullName('');
      setMobileNumber('');
      setSelectedState('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage(
        'Network error connecting to API. Please ensure your connection is active or reach us at +91 70396 54680.'
      );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#176B55]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-slate-800 font-semibold" aria-current="page">Contact Us</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
            Academic Counseling Desk
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#142B45] tracking-tight">
            Connect With Our Education Desk
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about our syllabus, session timings, or package details? Reach out to our student counselors in Vashi, Navi Mumbai.
          </p>
        </div>

        {/* Contact Safety Note (Mandatory Exact Requirement) */}
        <div className="max-w-4xl mx-auto mb-12 bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 shadow-xs text-amber-950 flex items-start sm:items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            <span className="uppercase tracking-wider font-extrabold text-amber-900 block sm:inline mr-2">
              Security Notice:
            </span>
            &ldquo;We never give trading tips or ask for passwords, OTPs or money to trade.&rdquo;
          </p>
        </div>

        {/* Main Grid: Form on Left, Details & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-[#142B45] mb-2">Send an Educational Enquiry</h2>
            <p className="text-xs text-slate-500 mb-6">
              Our academic counselors will guide you through the syllabus according to your learning goals.
            </p>

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#176B55] mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Enquiry Received Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Share Market Expert. An academic counselor will contact you shortly with the syllabus details.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-[#142B45] text-white text-xs font-bold hover:bg-[#1F3858] transition-colors"
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="9876543210"
                      className="w-full pl-12 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    State
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#176B55] bg-white text-slate-900"
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES_AND_UTS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Message / Question (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your learning goals or questions regarding the packages..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#176B55] bg-white text-slate-900"
                  />
                </div>

                {/* Mandatory Privacy & Educational Consent Checkbox (Unticked by default) */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="privacy-consent"
                    type="checkbox"
                    required
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-[#176B55] rounded cursor-pointer shrink-0"
                  />
                  <label htmlFor="privacy-consent" className="text-xs text-slate-600 leading-snug cursor-pointer">
                    I agree to the <Link href="/privacy-policy" className="text-[#176B55] font-semibold underline underline-offset-2">Privacy Policy</Link> and consent to being contacted for educational course queries only. I understand Share Market Expert does NOT provide stock tips, trade calls, or investment advisory services.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="touch-target w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                </button>

                <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Your information is protected under our Privacy Policy. Never shared.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Vashi Location Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#142B45] text-white rounded-3xl p-8 border border-[#1F3858] shadow-sm">
              <h3 className="text-xl font-bold mb-6">Official Business Information</h3>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1CA37E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Location:</strong>
                    <span>Vashi, Navi Mumbai, Maharashtra, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1CA37E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Telephone / WhatsApp:</strong>
                    <a href="tel:+917039654680" className="hover:text-white transition-colors underline-offset-2 hover:underline">
                      +91 70396 54680
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1CA37E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Official Email:</strong>
                    <a href="mailto:info@sharemarketexpert.in" className="hover:text-white transition-colors break-all underline-offset-2 hover:underline">
                      info@sharemarketexpert.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1CA37E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Academic Hours:</strong>
                    <span>Monday – Saturday: 9:30 AM to 6:30 PM IST</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Approximate Vashi Location Map (Clean Google Maps Embed centered on Vashi, Navi Mumbai) */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-2 mb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#176B55]" />
                  Approximate Location: Vashi, Navi Mumbai
                </span>
                <p className="text-[11px] text-slate-500">
                  Sector &amp; building directions provided upon confirmed batch enrollment.
                </p>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                <iframe
                  title="Share Market Expert Vashi Navi Mumbai Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact FAQs (At least 3 required) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142B45]">
              Contact Desk FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions regarding communication, counseling, and physical visits.
            </p>
          </div>

          <AccordionFaq items={CONTACT_FAQS} defaultOpenIndex={0} />
        </section>
      </div>
    </div>
  );
}

