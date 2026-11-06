import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadEnquiryModal from '@/components/popups/LeadEnquiryModal';
import EducationalChatbot from '@/components/chat/EducationalChatbot';
import MouseCursorEffect from '@/components/ui/MouseCursorEffect';
import ScrollAnimationObserver from '@/components/ui/ScrollAnimationObserver';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://sharemarketexpert.in'),
  title: {
    default: 'Share Market Expert — Stock Market Education & Financial Learning | Navi Mumbai',
    template: '%s | Share Market Expert',
  },
  description:
    'Share Market Expert delivers structured, compliance-focused stock market education in Vashi, Navi Mumbai. Learn technical analysis, price action, option chain analysis, and prudent risk management. Pure education, no trading tips.',
  keywords: [
    'Share market classes in Navi Mumbai',
    'Stock market course Vashi',
    'Technical analysis course',
    'Option trading basics',
    'Stock market education India',
    'Candlestick patterns training',
    'Trading risk management',
  ],
  authors: [{ name: 'Share Market Expert Academic Team' }],
  creator: 'Share Market Expert',
  publisher: 'Share Market Expert',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicons/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Share Market Expert — Stock Market Education & Financial Learning',
    description:
      'Structured stock market education covering technical analysis, option chains, and risk management in Vashi, Navi Mumbai. Pure education, zero speculative tips.',
    url: 'https://sharemarketexpert.in',
    siteName: 'Share Market Expert',
    images: [
      {
        url: '/images/brand/share-market-expert-logo.png',
        width: 1024,
        height: 341,
        alt: 'Share Market Expert — Stock Market Education',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Share Market Expert',
    url: 'https://sharemarketexpert.in',
    logo: 'https://sharemarketexpert.in/images/brand/share-market-expert-logo.png',
    description:
      'Educational platform providing structured stock market and financial learning in Vashi, Navi Mumbai, India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vashi',
      addressRegion: 'Navi Mumbai, Maharashtra',
      addressCountry: 'IN',
    },
    telephone: '+917039654680',
    email: 'info@sharemarketexpert.in',
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head />
      <body
        className="antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#176B55] selection:text-white"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LanguageProvider>
          <MouseCursorEffect />
          <ScrollAnimationObserver />
          <Header />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
          <LeadEnquiryModal />
          <EducationalChatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
