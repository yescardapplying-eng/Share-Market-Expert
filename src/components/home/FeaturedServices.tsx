import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Video,
  Library,
  Users2,
  ArrowRight,
  Check,
} from 'lucide-react';

const FEATURED_SERVICES = [
  {
    title: 'Structured Stock Market Courses',
    target: 'Beginners to Intermediate Learners',
    description:
      'Systematic curriculum covering market structure, equity cash mechanics, candlestick charting, and risk-reward calculation.',
    format: 'Live Online + Recorded Sessions',
    duration: '3 to 12 Months',
    icon: GraduationCap,
  },
  {
    title: 'Live Educational Webinars',
    target: 'Active Market Students',
    description:
      'Weekly live sessions breaking down historical market charts, discussing price-action case studies, and practicing technical analysis.',
    format: 'Interactive Online Sessions',
    duration: 'Weekly Batches',
    icon: Video,
  },
  {
    title: 'Curated Study Notes & E-Books',
    target: 'Self-Paced Learners',
    description:
      'Comprehensive PDF handbooks, candlestick cheat-sheets, risk-management checklists, and reference guides.',
    format: 'Digital Download & Portal Access',
    duration: 'Lifetime Reference Access',
    icon: Library,
  },
  {
    title: 'Educational Doubt-Clearing Sessions',
    target: 'Enrolled Students',
    description:
      'Dedicated academic review hours where students can ask questions about chart formations, technical indicators, and theoretical concepts.',
    format: 'Small Group / 1-on-1 Sessions',
    duration: 'Regular Academic Schedules',
    icon: Users2,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55] mb-3">
              Academic Delivery Models
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
              Featured Educational Services
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Designed for conceptual mastery and independent analytical competence.
            </p>
          </div>

          <Link
            href="/our-services"
            className="inline-flex items-center text-sm font-bold text-[#176B55] hover:text-[#125543] hover:underline"
          >
            <span>View All Services &amp; Delivery Details</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURED_SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between hover:border-[#176B55]/40 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#176B55] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#142B45] mb-1.5">{s.title}</h3>
                  <p className="text-xs font-semibold text-[#176B55] mb-3">For: {s.target}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#176B55]" />
                    {s.format}
                  </span>
                  <Link
                    href="/our-services"
                    className="font-bold text-[#142B45] hover:text-[#176B55] transition-colors"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

