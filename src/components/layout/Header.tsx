'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronDown, BookOpen, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, supportedLanguages } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [pathname]);

  // Handle scroll state for sticky header shadow/blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside language dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // The 5 strict main navigation links in exact order
  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/our-services' },
    { name: t.nav.packages, href: '/our-packages' },
    { name: t.nav.about, href: '/about-us' },
    { name: t.nav.contact, href: '/contact-us' },
  ];

  const currentLangObj = supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      {/* Top Compliance Micro-Banner */}
      <div className="bg-[#142B45] text-slate-100 py-1.5 px-4 text-xs font-medium border-b border-[#1F3858]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1CA37E] shrink-0" aria-hidden="true" />
            <span className="truncate">
              Share Market Expert — 100% Educational Platform | Vashi, Navi Mumbai | Non-Advisory
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300">
            <span>Call: +91 12345 67890</span>
            <span className="text-slate-500">•</span>
            <Link href="/contact-us" className="hover:text-white transition-colors underline-offset-2 hover:underline">
              Student Helpdesk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo on Left */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#176B55] rounded-md transition-opacity hover:opacity-95"
              aria-label="Share Market Expert Home"
            >
              <div className="relative brand-logo-header flex items-center">
                <Image
                  src="/images/brand/share-market-expert-logo.png"
                  alt="Share Market Expert — Stock Market Education"
                  width={1024}
                  height={341}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation on Right */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-[15px] font-semibold transition-colors duration-150 relative ${
                    isActive
                      ? 'text-[#142B45] bg-[#EBF5F2] font-bold'
                      : 'text-slate-700 hover:text-[#142B45] hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#176B55] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar (Language Switcher + CTA) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="touch-target px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#176B55]"
                aria-expanded={langMenuOpen}
                aria-haspopup="true"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#176B55]" aria-hidden="true" />
                <span>{currentLangObj.nativeLabel}</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                    langMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Select Language / भाषा
                  </div>
                  {supportedLanguages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLanguage(item.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between transition-colors ${
                        language === item.code
                          ? 'bg-[#EBF5F2] text-[#176B55] font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                      role="menuitem"
                    >
                      <span>{item.nativeLabel}</span>
                      <span className="text-xs text-slate-400 font-normal">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Header CTA Button */}
            <Link
              href="/our-packages"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#142B45] focus-visible:ring-offset-2"
            >
              <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
              {t.nav.startLearning}
            </Link>
          </div>

          {/* Mobile Right Controls: Language Button + Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Compact Mobile Language Button */}
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="touch-target px-2.5 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50"
              aria-label="Change Language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#176B55] inline mr-1" />
              <span>{currentLangObj.code.toUpperCase()}</span>
            </button>

            {/* Hamburger Button (Min 44px tap target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target p-2 rounded-lg text-slate-700 hover:text-[#142B45] hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#176B55]"
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#142B45]" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-[#142B45]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Dropdown Modal */}
      {langMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-xs shadow-2xl border border-slate-100 p-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-slate-800 text-base">Select Language</span>
              <button
                type="button"
                onClick={() => setLangMenuOpen(false)}
                className="touch-target text-slate-500 hover:text-slate-800"
                aria-label="Close language selector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 max-h-72 overflow-y-auto">
              {supportedLanguages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setLangMenuOpen(false);
                  }}
                  className={`touch-target px-3 py-2 rounded-lg text-xs font-semibold flex flex-col items-center justify-center text-center transition-colors ${
                    language === item.code
                      ? 'bg-[#176B55] text-white'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-bold">{item.nativeLabel}</span>
                  <span className="text-[10px] opacity-80">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation (Slide-in, no horizontal overflow, 320px safe) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[112px] bottom-0 z-40 bg-white/95 backdrop-blur-md overflow-y-auto border-t border-slate-200 p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Main Navigation</p>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`touch-target w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-[#142B45] text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#1CA37E]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-200 mt-6 space-y-3">
            <Link
              href="/our-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="touch-target w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold text-white bg-[#176B55] hover:bg-[#125543] shadow-md transition-all"
            >
              <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
              {t.nav.startLearning}
            </Link>

            <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-200/80">
              <p className="text-xs font-medium text-slate-600">
                Educational Helpdesk: <strong className="text-slate-800">+91 12345 67890</strong>
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">Vashi, Navi Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
