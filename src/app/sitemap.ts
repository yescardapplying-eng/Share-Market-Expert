import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sharemarketexpert.in';
  const currentDate = new Date().toISOString().split('T')[0];

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/our-services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/our-packages`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about-us`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const educationalPages = [
    'stock-market-basics',
    'technical-analysis',
    'fundamental-analysis',
    'trading-education',
    'risk-management',
    'trading-psychology',
    'fo-basics',
    'option-chain-explained',
    'ipo-basics',
    'demat-account-basics',
    'candlestick-patterns',
    'intraday-trading-basics',
    'swing-trading-explained',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const toolsPages = [
    'tools',
    'tools/position-sizing-calculator',
    'tools/risk-reward-calculator',
    'tools/profit-loss-calculator',
    'tools/brokerage-calculator',
    'tools/sip-calculator',
    'tools/compound-interest-calculator',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const resourcePages = [
    { url: `${baseUrl}/faqs`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 0.85 },
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const legalPages = [
    'privacy-policy',
    'terms-and-conditions',
    'risk-disclosure',
    'refund-and-cancellation',
    'delivery-and-access',
    'cookie-policy',
    'grievance-redressal',
    'copyright-policy',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [
    ...mainPages,
    ...educationalPages,
    ...toolsPages,
    ...resourcePages,
    ...blogPages,
    ...legalPages,
  ];
}
