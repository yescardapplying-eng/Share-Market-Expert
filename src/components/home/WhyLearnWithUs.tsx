import React from 'react';
import {
  CheckCircle,
  BookCheck,
  Compass,
  FileCheck2,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

const HONEST_BENEFITS = [
  {
    title: 'Structured Learning Approach',
    description:
      'No scattered YouTube videos or disjointed concepts. Our syllabus moves systematically from fundamental mechanics to nuanced technical analysis.',
    icon: BookCheck,
  },
  {
    title: 'Beginner-Friendly Explanations',
    description:
      'We strip away intimidating jargon and explain market dynamics using clear, relatable real-world analogies and visual examples.',
    icon: Lightbulb,
  },
  {
    title: 'Practical Educational Examples',
    description:
      'Study historical market charts and balance sheet case studies to understand what actually drives price trends and institutional interest.',
    icon: FileCheck2,
  },
  {
    title: 'Clear Learning Progression',
    description:
      'Step-by-step milestones ensure you master basic chart geometry before encountering derivative mathematics and option risk profiles.',
    icon: Compass,
  },
  {
    title: 'Concept-Focused Lessons',
    description:
      'Rather than memorizing indicator formulas, learn the underlying logic of liquidity, supply-demand imbalances, and market depth.',
    icon: CheckCircle,
  },
  {
    title: 'Uncompromising Risk Awareness',
    description:
      'We emphasize capital preservation, stop losses, and defensive sizing. We teach why retail participants struggle when they ignore risk.',
    icon: AlertTriangle,
  },
];

export default function WhyLearnWithUs() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#142B45] text-white mb-3">
            Honest Educational Value
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Why Learn With Share Market Expert?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus strictly on education, disciplined logic, and genuine financial understanding.
            No false claims, no overnight riches — just structured market literacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HONEST_BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-[#176B55]/50 hover:shadow-md card-hover-lift reveal-on-scroll stagger-${idx + 1} transition-all`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F2] text-[#176B55] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#142B45] mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

