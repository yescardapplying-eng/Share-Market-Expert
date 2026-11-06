'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, ShieldAlert, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  link?: { label: string; href: string };
}

const FAQ_KNOWLEDGE_BASE = [
  {
    triggers: ['tip', 'buy', 'sell', 'call', 'recommendation', 'target', 'stock to buy'],
    reply: 'Share Market Expert strictly DOES NOT provide stock tips, buy/sell recommendations, or price targets. We are a 100% educational platform focused on teaching market concepts, price action, and risk management so learners can analyze markets independently.',
    link: { label: 'Explore Our Learning Syllabus', href: '/our-services' },
  },
  {
    triggers: ['package', 'price', 'fee', 'silver', 'gold', 'platinum', 'cost'],
    reply: 'We offer three structured educational packages: Silver Plan (₹24,999 / 3 Months), Gold Plan (₹42,999 / 6 Months - Most Popular), and Platinum Plan (₹79,999 / 12 Months). Each plan includes structured modules, doubt sessions, and educational certificates.',
    link: { label: 'Compare All Packages', href: '/our-packages' },
  },
  {
    triggers: ['beginner', 'start', 'new', 'scratch', 'basics'],
    reply: 'Our curriculum is designed to welcome absolute beginners. We start with stock market fundamentals, demat accounts, candlestick charts, and market mechanics before touching any complex derivatives.',
    link: { label: 'Read Stock Market Basics', href: '/stock-market-basics' },
  },
  {
    triggers: ['f&o', 'future', 'option', 'derivatives', 'option chain'],
    reply: 'Options and futures are high-risk financial instruments requiring deep theoretical knowledge. We teach option Greeks, call-put mechanics, open interest interpretation, and defensive hedging concepts purely for educational awareness.',
    link: { label: 'Study F&O Basics', href: '/fo-basics' },
  },
  {
    triggers: ['calculator', 'sip', 'brokerage', 'p&l', 'profit loss', 'tools'],
    reply: 'We provide six free interactive financial learning calculators: P&L Calculator, Brokerage Calculator, SIP Calculator, Compound Interest, Risk-Reward Calculator, and Position Sizing Calculator.',
    link: { label: 'Open Financial Calculators', href: '/tools' },
  },
  {
    triggers: ['contact', 'location', 'phone', 'email', 'vashi', 'mumbai'],
    reply: 'Our academic office is located in Vashi, Navi Mumbai, Maharashtra. You can reach our educational counselors at +91 12345 67890 or via email at info@sharemarketexpert.in.',
    link: { label: 'Go to Contact Page', href: '/contact-us' },
  },
];

export default function EducationalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am your Educational Learning Navigator. Ask me about our courses, syllabus, stock market concepts, or financial calculators. (Please note: I do not provide stock tips or trading calls).',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Process reply based on educational knowledge base
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = FAQ_KNOWLEDGE_BASE.find((k) =>
        k.triggers.some((trig) => lower.includes(trig))
      );

      let botResponse: ChatMessage;
      if (matched) {
        botResponse = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: matched.reply,
          link: matched.link,
        };
      } else {
        botResponse = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'Thank you for your question. As an educational guide, I can help you explore our learning syllabus, basic market concepts, or package comparisons. For customized questions, please reach our Navi Mumbai education desk.',
          link: { label: 'Speak with an Educator', href: '/contact-us' },
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="touch-target flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#142B45] hover:bg-[#176B55] text-white shadow-xl hover:shadow-2xl transition-all duration-200 border-2 border-white/20 group"
          aria-label="Open Educational Learning Navigator"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-[#1CA37E] group-hover:text-white transition-colors" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1CA37E] rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1CA37E] rounded-full" />
          </div>
          <span className="text-sm font-bold tracking-wide pr-1">Learning Assistant</span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#142B45] text-white p-4 flex items-center justify-between border-b border-[#1F3858]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#176B55] flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Educational Navigator</h3>
                <span className="text-[11px] text-[#1CA37E] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1CA37E]" />
                  Non-Advisory Knowledge Guide
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="touch-target p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close Learning Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Compliance Notice */}
          <div className="bg-amber-50 px-3 py-1.5 border-b border-amber-100 flex items-center gap-1.5 text-[11px] text-amber-800">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Strictly educational. No buy/sell tips or calls are provided.</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                    m.sender === 'user'
                      ? 'bg-[#142B45] text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-xs'
                  }`}
                >
                  <p>{m.text}</p>
                  {m.link && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      <Link
                        href={m.link.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#176B55] hover:underline"
                      >
                        <span>{m.link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-slate-100 bg-white flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <button
              type="button"
              onClick={() => handleSend('Tell me about your course packages')}
              className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#EBF5F2] hover:text-[#176B55] text-slate-700 transition-colors text-[11px]"
            >
              Course Packages
            </button>
            <button
              type="button"
              onClick={() => handleSend('Do you give stock tips?')}
              className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#EBF5F2] hover:text-[#176B55] text-slate-700 transition-colors text-[11px]"
            >
              Do you give tips?
            </button>
            <button
              type="button"
              onClick={() => handleSend('Show me financial calculators')}
              className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#EBF5F2] hover:text-[#176B55] text-slate-700 transition-colors text-[11px]"
            >
              Calculators
            </button>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-slate-200 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask an educational question..."
              className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#176B55] bg-white text-slate-800"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="touch-target p-2.5 rounded-lg bg-[#176B55] hover:bg-[#125543] disabled:opacity-40 text-white transition-colors"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
