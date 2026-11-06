import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FeaturedPackagesTeaser() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md card-hover-lift reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-4">
            <Package className="w-3.5 h-3.5" />
            Curriculum Options
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight max-w-2xl mx-auto">
            Choose a Learning Plan That Matches Your Learning Goals
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you want a 3-month foundation in stock market basics, a 6-month deep dive into technical analysis, or a comprehensive 12-month mentorship, we offer structured educational plans.
          </p>

          {/* Plan Highlights Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 text-left max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 card-hover-lift">
              <span className="text-xs font-bold text-slate-500 uppercase">Quarterly Plan</span>
              <h4 className="text-base font-bold text-[#142B45] mt-0.5">Silver Plan</h4>
              <p className="text-xs text-slate-600 mt-1">3 Months structured foundation modules &amp; weekly live sessions.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#EBF5F2] border border-[#176B55]/30 card-hover-lift">
              <span className="text-xs font-bold text-[#176B55] uppercase">Most Popular</span>
              <h4 className="text-base font-bold text-[#142B45] mt-0.5">Gold Plan</h4>
              <p className="text-xs text-slate-600 mt-1">6 Months advanced modules, 2 live sessions/week &amp; 1-on-1 doubts.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 card-hover-lift">
              <span className="text-xs font-bold text-slate-500 uppercase">Yearly Plan</span>
              <h4 className="text-base font-bold text-[#142B45] mt-0.5">Platinum Plan</h4>
              <p className="text-xs text-slate-600 mt-1">12 Months comprehensive mentorship, personalized roadmap &amp; priority support.</p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/our-packages"
              className="touch-target inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] shadow-md transition-all gap-2 btn-smooth"
            >
              <span>View Packages &amp; Syllabus Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#176B55]" />
            <span>Includes educational completion certificates • Pure education with no trading calls</span>
          </div>
        </div>
      </div>
    </section>
  );
}

