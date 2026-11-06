import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhatYouWillLearn from '@/components/home/WhatYouWillLearn';
import WhyLearnWithUs from '@/components/home/WhyLearnWithUs';
import FeaturedServices from '@/components/home/FeaturedServices';
import LearningJourney from '@/components/home/LearningJourney';
import EducationalProgressVisual from '@/components/home/EducationalProgressVisual';
import FeaturedPackagesTeaser from '@/components/home/FeaturedPackagesTeaser';
import BlogArticlesSection from '@/components/home/BlogArticlesSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import RiskAwarenessBanner from '@/components/home/RiskAwarenessBanner';
import HomepageFaqs from '@/components/home/HomepageFaqs';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: What You Will Learn (6 Educational Cards) */}
      <WhatYouWillLearn />

      {/* Section 3: Why Learn With Us? (Honest Educational Benefits) */}
      <WhyLearnWithUs />

      {/* Section 4: Featured Educational Services */}
      <FeaturedServices />

      {/* Section 5: Learning Journey (Beginner to Advanced) */}
      <LearningJourney />

      {/* Section 6: Educational Progress Visual (Course completion / learning modules tracker) */}
      <EducationalProgressVisual />

      {/* Section 7: Featured Packages CTA (Teaser only, no pricing cards on home) */}
      <FeaturedPackagesTeaser />

      {/* Section 8: Learning Resources / Blog (4 Research-based Articles) */}
      <BlogArticlesSection />

      {/* Section 9: Testimonials / Reviews (Compliant component, hidden until genuine verified reviews provided) */}
      <TestimonialSection />

      {/* Section 10: Risk Awareness Block */}
      <RiskAwarenessBanner />

      {/* Section 11: Homepage FAQs (Exactly 6 FAQs in accessible accordion) */}
      <HomepageFaqs />

      {/* Section 12: Final CTA */}
      <FinalCTA />
    </>
  );
}
