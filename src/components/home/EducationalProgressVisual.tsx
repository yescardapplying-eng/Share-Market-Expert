'use client';

import React, { useState } from 'react';
import { BookOpen, CheckCircle, Award, Sparkles, BarChart2 } from 'lucide-react';

interface SyllabusModule {
  name: string;
  category: string;
  topics: number;
  completedPercent: number;
}

const SAMPLE_CURRICULUM_TRACK: SyllabusModule[] = [
  { name: 'Module 1: Equity Cash & Market Mechanics', category: 'Foundation', topics: 8, completedPercent: 100 },
  { name: 'Module 2: Candlestick Patterns & Price Action', category: 'Technical Analysis', topics: 12, completedPercent: 85 },
  { name: 'Module 3: Corporate Financials & Valuation', category: 'Fundamental Analysis', topics: 10, completedPercent: 70 },
  { name: 'Module 4: Risk Management & Position Sizing', category: 'Risk Control', topics: 6, completedPercent: 90 },
  { name: 'Module 5: Derivatives & Option Greeks Theory', category: 'F&O Concepts', topics: 14, completedPercent: 60 },
  { name: 'Module 6: Independent Trade Plan & Checklist', category: 'Mastery Review', topics: 5, completedPercent: 40 },
];

export default function EducationalProgressVisual() {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'skills'>('syllabus');

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EBF5F2] text-[#176B55]">
              Curriculum Milestone Tracker
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
              Visualize Your Course Completion &amp; Knowledge Growth
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              In structured education, clarity of progress creates discipline. Our learning modules feature step-by-step topic checklists, chapter quizzes, and completion certificates to track how your theoretical knowledge expands.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#176B55] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Concept Milestones:</strong> Understand each topic with review assignments before advancing.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#176B55] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Self-Assessment Tests:</strong> Practice chart identification and risk ratio formulas safely.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#176B55] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Educational Certificate:</strong> Receive an academic completion certificate upon finishing all modules.
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
              📌 <em>Compliance reminder: This visual illustrates academic syllabus progression only. It does not reflect financial returns, trading profit, or investment success.</em>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#142B45] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#1F3858]">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1F3858] gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#1CA37E]" />
                    <h3 className="text-lg font-bold">Standard Learning Pathway Dashboard</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Syllabus Completion &amp; Academic Milestones</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#176B55] text-xs font-bold text-white self-start sm:self-auto">
                  6 Core Modules
                </span>
              </div>

              {/* Progress Rows */}
              <div className="space-y-4 pt-6">
                {SAMPLE_CURRICULUM_TRACK.map((m, idx) => (
                  <div key={m.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-200">{m.name}</span>
                      <span className="font-bold text-[#1CA37E]">{m.completedPercent}% Syllabus Completed</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#176B55] to-[#1CA37E] rounded-full transition-all duration-500"
                        style={{ width: `${m.completedPercent}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Category: {m.category}</span>
                      <span>{m.topics} Lesson Units</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Note in visual */}
              <div className="mt-8 pt-4 border-t border-[#1F3858] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#1CA37E]" />
                  Includes Academic Completion Certificate
                </span>
                <span>Self-Paced or Guided Batches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

