import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
} from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from '@/components/icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0B1928] text-slate-300 border-t border-[#1F3858] mt-auto">
      {/* Main 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-10">
          {/* Column 1: Brand Information */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block" aria-label="Share Market Expert Home">
              <div className="bg-white/95 p-2 rounded-lg inline-block brand-logo-footer shadow-sm">
                <Image
                  src="/images/brand/share-market-expert-logo.png"
                  alt="Share Market Expert — Stock Market Education"
                  width={1024}
                  height={341}
                  className="w-full h-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering learners across India with structured, concept-driven stock market education. Master price action, technical analysis, and prudent risk management from Navi Mumbai.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#142B45] text-[#1CA37E] font-medium border border-[#1F3858]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1CA37E]" />
                100% Non-Advisory Education
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link href="/our-packages" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>Our Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Learning Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Learning Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/stock-market-basics" className="hover:text-white transition-colors">
                  Stock Market Basics
                </Link>
              </li>
              <li>
                <Link href="/technical-analysis" className="hover:text-white transition-colors">
                  Technical Analysis
                </Link>
              </li>
              <li>
                <Link href="/fundamental-analysis" className="hover:text-white transition-colors">
                  Fundamental Analysis
                </Link>
              </li>
              <li>
                <Link href="/fo-basics" className="hover:text-white transition-colors">
                  F&amp;O Basics
                </Link>
              </li>
              <li>
                <Link href="/risk-management" className="hover:text-white transition-colors">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Educational Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Financial Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Legal &amp; Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/risk-disclosure" className="hover:text-white transition-colors">
                  Risk Disclosure &amp; Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/refund-and-cancellation" className="hover:text-white transition-colors">
                  Refund &amp; Cancellation
                </Link>
              </li>
              <li>
                <Link href="/delivery-and-access" className="hover:text-white transition-colors">
                  Delivery and Access Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/grievance-redressal" className="hover:text-white transition-colors">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="/copyright-policy" className="hover:text-white transition-colors">
                  Copyright &amp; Content Usage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Social Media */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact &amp; Support</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1CA37E] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Vashi, Navi Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1CA37E] shrink-0" aria-hidden="true" />
                <a href="tel:+917039654680" className="hover:text-white transition-colors">
                  +91 70396 54680
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1CA37E] shrink-0" aria-hidden="true" />
                <a href="mailto:info@sharemarketexpert.in" className="hover:text-white transition-colors break-all">
                  info@sharemarketexpert.in
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Connect With Us</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#142B45] hover:bg-[#176B55] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-[#1F3858]"
                  aria-label="Instagram (Opens in new window)"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#142B45] hover:bg-[#176B55] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-[#1F3858]"
                  aria-label="Facebook (Opens in new window)"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#142B45] hover:bg-[#176B55] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-[#1F3858]"
                  aria-label="YouTube (Opens in new window)"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#142B45] hover:bg-[#176B55] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-[#1F3858]"
                  aria-label="LinkedIn (Opens in new window)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Educational Disclaimer (SEPARATE from copyright row) */}
      <div className="border-t border-[#1F3858] bg-[#0E1F32] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Important Regulatory Disclaimer: </strong>
            Share Market Expert is an educational platform and is NOT registered with SEBI as a Research Analyst or Investment Adviser. Nothing here is investment advice or a recommendation. Securities trading involves substantial risk of loss. Consult a SEBI-registered adviser before investing.
          </p>
        </div>
      </div>

      {/* Copyright Row (Clean, separate section) */}
      <div className="border-t border-[#142B45] bg-[#07111D] py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © 2026 Share Market Expert. All Rights Reserved.
          </div>
          <div>
            Designed by{' '}
            <a
              href="http://noorweb.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1CA37E] font-medium hover:underline hover:text-white transition-colors"
            >
              Noorweb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
