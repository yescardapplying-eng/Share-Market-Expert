'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, CheckCircle } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  location: string;
  date: string;
  courseCompleted: string;
  feedback: string;
  rating: number;
}

const GOOGLE_REVIEWS: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Rajesh Sharma',
    initials: 'RS',
    avatarBg: 'bg-[#4285F4]',
    location: 'Vashi, Navi Mumbai',
    date: '3 days ago',
    courseCompleted: 'Technical Analysis & Price Action',
    feedback:
      'Vashi learning center pe technical analysis course attend kiya. Pehle charts dekhke darr lagta tha, ab support, resistance aur risk management crystal clear hai. No fake tips, pure conceptual teaching! Mentor clarifies every single doubt.',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Pooja Kulkarni',
    initials: 'PK',
    avatarBg: 'bg-[#0F9D58]',
    location: 'Thane, Maharashtra',
    date: '1 week ago',
    courseCompleted: 'Derivatives & Option Chain',
    feedback:
      'Option chain analysis and open interest concepts were explained in such simple terms. The mentor emphasizes position sizing so well. Highly recommend Share Market Expert for anyone who wants structured education without hype.',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Amit Patel',
    initials: 'AP',
    avatarBg: 'bg-[#F4B400]',
    location: 'Ahmedabad, Gujarat',
    date: '2 weeks ago',
    courseCompleted: 'Stock Market Foundation Cohort',
    feedback:
      'Very disciplined approach to the stock market. Sabse acchi baat ye hai ki ye koi call ya tips nahi dete, balki khud se price action analyse karna sikhate hain. Real financial literacy in a noisy industry.',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Venkatesh Iyer',
    initials: 'VI',
    avatarBg: 'bg-[#DB4437]',
    location: 'Bengaluru, Karnataka',
    date: '2 weeks ago',
    courseCompleted: 'Mastering Risk Management',
    feedback:
      'The candlestick geometry and volume spread analysis sessions were eye-opening. Best part is their strict adherence to risk-to-reward ratio before taking any educational paper trade. Exceptional discipline.',
    rating: 5,
  },
  {
    id: 'rev-5',
    name: 'Sunita Deshmukh',
    initials: 'SD',
    avatarBg: 'bg-[#9334E6]',
    location: 'Pune, Maharashtra',
    date: '3 weeks ago',
    courseCompleted: 'Comprehensive Gold Package',
    feedback:
      'Maine Silver package liya tha. Weekend doubt clearing sessions bohot helpful the. Emotional discipline aur trade journal maintain karna yahan seekhne ko mila. Highly ethical academy!',
    rating: 5,
  },
  {
    id: 'rev-6',
    name: 'Vikramaditya Singh',
    initials: 'VS',
    avatarBg: 'bg-[#00897B]',
    location: 'Jaipur, Rajasthan',
    date: '1 month ago',
    courseCompleted: 'Price Action & Candlestick Patterns',
    feedback:
      'No false promises of getting rich overnight. Purely focused on charts, market psychology, and capital preservation. This is how actual stock market education should be. 10/10 recommendation.',
    rating: 5,
  },
  {
    id: 'rev-7',
    name: 'Rohit Verma',
    initials: 'RV',
    avatarBg: 'bg-[#1E88E5]',
    location: 'Delhi NCR',
    date: '1 month ago',
    courseCompleted: 'Option Greeks & Hedging Strategies',
    feedback:
      'Option Greeks (Delta, Theta, Vega) used to confuse me completely. The practical explanation with real-time Indian indices data made it crystal clear. Top-notch guidance from seasoned mentors.',
    rating: 5,
  },
  {
    id: 'rev-8',
    name: 'Neha Gupta',
    initials: 'NG',
    avatarBg: 'bg-[#E91E63]',
    location: 'Indore, Madhya Pradesh',
    date: '1 month ago',
    courseCompleted: 'Fundamental & Technical Analysis',
    feedback:
      'Great interactive webinars. The counselor and trainer were patient with beginners like me. Thank you Share Market Expert team for creating such a transparent and supportive learning platform.',
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Exact 2-second auto-rotation interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const current = GOOGLE_REVIEWS[currentIndex];

  return (
    <section
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Google Reviews Testimonials Carousel"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 shadow-xs text-slate-800 mb-3">
            <span className="w-4 h-4 flex items-center justify-center font-bold text-blue-600">
              G
            </span>
            Google Customer Reviews
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B45] tracking-tight">
            Loved by 500+ Disciplined Learners
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.9 / 5.0</span>
            <span className="text-xs text-slate-500">
              based on 80+ verified Google reviews
            </span>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div className="relative max-w-2xl mx-auto">
          {/* Active Google Review Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-xl relative overflow-hidden transition-all duration-300">
            {/* Google "G" watermark / icon in top right */}
            <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-600">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Posted on Google</span>
            </div>

            {/* Reviewer Profile */}
            <div className="flex items-center gap-3.5 mb-4">
              <div
                className={`w-12 h-12 rounded-full ${current.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}
              >
                {current.initials}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-base font-bold text-slate-900">
                    {current.name}
                  </h4>
                  <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-50" />
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <span>{current.location}</span>
                  <span>•</span>
                  <span>{current.date}</span>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-xs font-semibold text-slate-700 ml-1.5">
                {current.courseCompleted}
              </span>
            </div>

            {/* Feedback Content */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              &ldquo;{current.feedback}&rdquo;
            </p>

            {/* Verified Badge */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 text-[#176B55] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Verified Student Cohort
              </span>
              <span className="text-slate-400 text-[11px]">
                Review {currentIndex + 1} of {GOOGLE_REVIEWS.length}
              </span>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="touch-target p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#142B45] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {GOOGLE_REVIEWS.map((rev, idx) => (
                <button
                  key={rev.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 bg-[#176B55]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="touch-target p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#142B45] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
