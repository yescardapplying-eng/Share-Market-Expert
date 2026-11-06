'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

interface AccordionFaqProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function AccordionFaq({
  items,
  defaultOpenIndex = 0,
  className = '',
}: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `accordion-panel-${idx}`;
        const buttonId = `accordion-btn-${idx}`;

        return (
          <div
            key={item.q}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#176B55]/30 shadow-md ring-1 ring-[#176B55]/15'
                : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
            >
              <span
                className={`text-sm sm:text-base font-bold transition-colors ${
                  isOpen ? 'text-[#176B55]' : 'text-slate-900'
                }`}
              >
                {item.q}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'rotate-180 bg-[#EBF5F2] text-[#176B55]'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 animate-in fade-in duration-150"
              >
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

