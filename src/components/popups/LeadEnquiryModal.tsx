'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X, CheckCircle2, Shield, Lock, User, MapPin, TrendingUp, DollarSign } from 'lucide-react';
import { INDIAN_STATES_AND_UTS, TRADING_SEGMENT_OPTIONS, CAPITAL_RANGE_OPTIONS } from '@/data/indianStates';
import { useLanguage } from '@/context/LanguageContext';
import { API_ENDPOINTS } from '@/lib/api';

export default function LeadEnquiryModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState('Share Market Expert');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [segment, setSegment] = useState('Option (Call-Put)');
  const [capitalRange, setCapitalRange] = useState('Below Rs 50,000');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useLanguage();

  // Functional popup configuration from backend settings with frequency window check
  useEffect(() => {
    let isCancelled = false;
    let timer: NodeJS.Timeout | null = null;

    const checkAndSchedulePopup = async () => {
      let isEnabled = true;
      let delaySeconds = 3;
      let frequencyHours = 24;

      try {
        const res = await fetch(API_ENDPOINTS.SETTINGS, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            const d = json.data;
            isEnabled = d.popup_enabled === true || d.popup_enabled === '1' || d.popup_enabled === 1;
            delaySeconds = Math.max(1, parseInt(d.popup_delay_seconds || '3', 10));
            frequencyHours = Math.max(1, parseInt(d.popup_frequency_hours || '24', 10));
            if (d.popup_heading) {
              setModalHeading(d.popup_heading);
            }
          }
        }
      } catch {
        // Fallback to default 3s delay & 24h frequency
      }

      if (isCancelled || !isEnabled) return;

      // Check frequency window: prevent repeated display within configured frequency window
      const lastClosed = localStorage.getItem('sme_popup_last_closed');
      if (lastClosed) {
        const elapsedHours = (Date.now() - parseInt(lastClosed, 10)) / (1000 * 60 * 60);
        if (elapsedHours < frequencyHours) {
          return; // Frequency window still active
        }
      }

      timer = setTimeout(() => {
        if (!isCancelled) {
          setIsOpen(true);
        }
      }, delaySeconds * 1000);
    };

    checkAndSchedulePopup();

    return () => {
      isCancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    // Record timestamp to enforce frequency window
    localStorage.setItem('sme_popup_last_closed', Date.now().toString());
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
      const response = await fetch(API_ENDPOINTS.LEAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          mobile_number: cleanPhone,
          state: selectedState || null,
          segment: segment || 'Option (Call-Put)',
          capital_range: capitalRange || 'Below Rs 50,000',
          source_page: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setStatus('error');
        setErrorMessage(
          data?.error ||
          'Unable to submit enquiry to database. Please check your details or contact our helpline at +91 70396 54680.'
        );
        return;
      }

      // Verified successful insertion in MySQL database
      setStatus('success');
      localStorage.setItem('sme_popup_last_closed', Date.now().toString());
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 3000);
    } catch {
      setStatus('error');
      setErrorMessage(
        'Network error connecting to API. Please ensure your connection is active or call our academic desk at +91 70396 54680.'
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200"
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
            {modalHeading}
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="touch-target absolute top-4 right-4 text-slate-300 hover:text-white rounded-lg p-1 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[82vh] overflow-y-auto">
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
                  FULL NAME *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900 outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Mobile Number (Required) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  MOBILE NUMBER *
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
                    className="w-full pl-11 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900 outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  STATE
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                    className="w-full text-left pl-3 pr-8 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-800 flex items-center justify-between cursor-pointer focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] outline-hidden"
                  >
                    <span className={selectedState ? 'text-slate-900 font-medium' : 'text-slate-400'}>
                      {selectedState || 'Select State'}
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
                          className="w-full px-2 py-1 text-xs border border-slate-200 rounded outline-hidden"
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
                          className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 transition-colors cursor-pointer ${
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

              {/* Segment */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  SEGMENT
                </label>
                <div className="relative">
                  <TrendingUp className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900 cursor-pointer outline-hidden transition-colors"
                  >
                    {TRADING_SEGMENT_OPTIONS.map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Capital Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  CAPITAL RANGE
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={capitalRange}
                    onChange={(e) => setCapitalRange(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900 cursor-pointer outline-hidden transition-colors"
                  >
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
                className="w-full touch-target py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500 leading-tight">
                <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>We strictly protect your privacy. We never offer stock tips, advisory services, or ask for account credentials.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
