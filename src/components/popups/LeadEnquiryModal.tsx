'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, Lock, Phone, User, MapPin, TrendingUp, DollarSign } from 'lucide-react';
import { INDIAN_STATES_AND_UTS, TRADING_SEGMENT_OPTIONS, CAPITAL_RANGE_OPTIONS } from '@/data/indianStates';
import { useLanguage } from '@/context/LanguageContext';

export default function LeadEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [segment, setSegment] = useState('');
  const [capitalRange, setCapitalRange] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    // Check if dismissed in this session
    const hasDismissed = sessionStorage.getItem('sme_lead_dismissed');
    if (hasDismissed) return;

    // Trigger after ~3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('sme_lead_dismissed', 'true');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const filteredStates = INDIAN_STATES_AND_UTS.filter((st) =>
    st.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Frontend validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName.trim(),
          mobile_number: cleanPhone,
          state: selectedState || null,
          segment: segment || null,
          capital_range: capitalRange || null,
          source_page: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      if (!response.ok) {
        // Fallback for mock/static mode
        console.warn('API returned non-200 status, recording lead locally.');
      }

      // Store in backup local storage leads for admin inspection
      const existingLeads = JSON.parse(localStorage.getItem('sme_local_leads') || '[]');
      existingLeads.push({
        id: Date.now(),
        fullName: fullName.trim(),
        mobileNumber: cleanPhone,
        state: selectedState,
        segment,
        capitalRange,
        date: new Date().toISOString(),
      });
      localStorage.setItem('sme_local_leads', JSON.stringify(existingLeads));

      setStatus('success');
      sessionStorage.setItem('sme_lead_dismissed', 'true');
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    } catch {
      // Even if network fails or backend is offline, store locally and show success
      const existingLeads = JSON.parse(localStorage.getItem('sme_local_leads') || '[]');
      existingLeads.push({
        id: Date.now(),
        fullName: fullName.trim(),
        mobileNumber: cleanPhone,
        state: selectedState,
        segment,
        capitalRange,
        date: new Date().toISOString(),
      });
      localStorage.setItem('sme_local_leads', JSON.stringify(existingLeads));

      setStatus('success');
      sessionStorage.setItem('sme_lead_dismissed', 'true');
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#142B45] text-white p-5 pr-12 relative border-b border-[#1F3858]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#176B55] text-xs font-semibold text-white mb-2">
            <Shield className="w-3.5 h-3.5" />
            100% Stock Market Education
          </div>
          <h2 id="modal-title" className="text-xl font-bold tracking-tight text-white">
            {t.popup.title}
          </h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {t.popup.subtitle}
          </p>

          <button
            type="button"
            onClick={handleClose}
            className="touch-target absolute top-4 right-4 text-slate-300 hover:text-white rounded-lg p-1 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-[#176B55] mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-slate-900">{t.popup.successTitle}</h3>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                {t.popup.successMsg}
              </p>
              <p className="text-xs text-slate-400">Closing automatically...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Full Name (Required) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t.popup.nameLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Mobile Number (Required) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t.popup.phoneLabel}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className="w-full pl-11 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* State (Optional Searchable Dropdown) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t.popup.stateLabel} (Optional)
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                    className="w-full text-left pl-3 pr-8 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-800 flex items-center justify-between"
                  >
                    <span className={selectedState ? 'text-slate-900' : 'text-slate-400'}>
                      {selectedState || 'Select State / UT'}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>

                  {isStateDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-30 max-h-48 overflow-y-auto">
                      <div className="p-2 border-b border-slate-100 sticky top-0 bg-white">
                        <input
                          type="text"
                          placeholder="Search state..."
                          value={stateSearch}
                          onChange={(e) => setStateSearch(e.target.value)}
                          className="w-full px-2 py-1 text-xs border border-slate-200 rounded"
                          autoFocus
                        />
                      </div>
                      {filteredStates.map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => {
                            setSelectedState(st);
                            setIsStateDropdownOpen(false);
                            setStateSearch('');
                          }}
                          className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 transition-colors ${
                            selectedState === st ? 'bg-[#EBF5F2] text-[#176B55] font-bold' : 'text-slate-700'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Segment (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t.popup.segmentLabel} (Optional)
                </label>
                <div className="relative">
                  <TrendingUp className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] bg-white text-slate-900"
                  >
                    <option value="">Select learning area...</option>
                    {TRADING_SEGMENT_OPTIONS.map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Capital Range (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  {t.popup.capitalLabel} (Optional)
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={capitalRange}
                    onChange={(e) => setCapitalRange(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] bg-white text-slate-900"
                  >
                    <option value="">Select capital scale...</option>
                    {CAPITAL_RANGE_OPTIONS.map((cap) => (
                      <option key={cap} value={cap}>
                        {cap}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full touch-target py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] transition-all shadow-md flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? t.popup.submitting : t.popup.submitBtn}
              </button>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500 leading-tight">
                <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{t.popup.privacyNote}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
