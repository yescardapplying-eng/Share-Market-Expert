import React from 'react';
import { AlertTriangle, ShieldCheck, Scale, Check } from 'lucide-react';

export default function RiskAwarenessBanner() {
  return (
    <section className="py-12 sm:py-16 bg-[#FDF8F6] border-y border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-300 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Comprehensive Risk Awareness &amp; Statutory Disclosure
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-0.5">
                  Educational Integrity First • SEBI Compliance Guidelines
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
              Mandatory Regulatory Notice
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-600" />
                Education Does Not Remove Risk
              </h4>
              <p className="text-xs text-slate-600">
                Participating in financial markets involves substantial risk of capital loss. Studying price action and technical indicators does not guarantee profits or eliminate market uncertainty.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                F&amp;O Regulatory Reality
              </h4>
              <p className="text-xs text-slate-600">
                Per official SEBI market studies, over 9 out of 10 individual traders in equity futures and options incur net financial losses. Derivatives involve extreme leverage and theta decay.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#176B55]" />
                Zero Advisory Policy
              </h4>
              <p className="text-xs text-slate-600">
                Share Market Expert is not registered with SEBI as an Investment Adviser or Research Analyst. We never manage funds, provide buy/sell calls, or promise returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

