'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  courseCompleted: string;
  feedback: string;
  isVerified: boolean;
}

// NOTE: Strictly compliance aware. Per client instructions, we DO NOT invent fake customer names,
// photos, or fabricated reviews. This array is intentionally empty until genuine verified testimonials
// are uploaded by the owner.
const VERIFIED_TESTIMONIALS: TestimonialItem[] = [];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // If no genuine permission-approved reviews exist, comply with user instructions: keep section hidden.
  if (VERIFIED_TESTIMONIALS.length === 0) {
    return null;
  }

  const current = VERIFIED_TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? VERIFIED_TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === VERIFIED_TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Verified Student Feedback Carousel"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF5F2] text-[#176B55] mb-3">
          <ShieldCheck className="w-4 h-4" />
          Verified Learner Experiences
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
          What Our Students Say
        </h2>

        {/* Carousel Card */}
        <div className="relative mt-12 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <Quote className="w-12 h-12 text-[#176B55]/20 mx-auto mb-4" />

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic max-w-2xl mx-auto">
            &ldquo;{current.feedback}&rdquo;
          </p>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <h4 className="text-base font-bold text-[#142B45]">{current.name}</h4>
            <p className="text-xs text-slate-500">
              {current.courseCompleted} • {current.location}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              className="touch-target p-2 rounded-full border border-slate-300 text-slate-700 hover:bg-[#142B45] hover:text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {VERIFIED_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-[#176B55] w-6' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="touch-target p-2 rounded-full border border-slate-300 text-slate-700 hover:bg-[#142B45] hover:text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
