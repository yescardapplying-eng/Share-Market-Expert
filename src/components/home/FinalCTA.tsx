import React from 'react';
import Link from 'next/link';
import { BookOpen, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#142B45] via-[#10243B] to-[#0B1928] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#176B55]/30 text-[#1CA37E] border border-[#1CA37E]/30 mb-6">
          <ShieldCheck className="w-4 h-4" />
          Join The Education-First Community
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Build Independent Market Knowledge?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Step away from random tips and confusing noise. Join our structured stock market education programs in Navi Mumbai and learn price action, fundamentals, and risk control with discipline.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/our-packages"
            className="touch-target w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#176B55] hover:bg-[#125543] active:bg-[#0e4334] shadow-lg shadow-[#176B55]/30 transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            <span>Explore Learning Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact-us"
            className="touch-target w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Speak With Academic Desk</span>
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Academic Helpline: <a href="tel:+917039654680" className="text-slate-300 font-semibold hover:text-white underline-offset-2 hover:underline">+91 70396 54680</a> • Vashi, Navi Mumbai, Maharashtra
        </p>
      </div>
    </section>
  );
}

