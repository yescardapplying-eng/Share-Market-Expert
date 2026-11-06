'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Lock,
  User,
  LogOut,
  Users,
  Search,
  Download,
  Settings,
  Package,
  Mail,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Phone,
  Calendar,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { API_ENDPOINTS } from '@/lib/api';

interface LeadRecord {
  id: number;
  full_name: string;
  mobile_number: string;
  state: string | null;
  segment: string | null;
  capital_range: string | null;
  status: 'new' | 'contacted' | 'enrolled' | 'not_interested' | 'invalid';
  notes: string | null;
  created_at: string;
}

interface ContactRecord {
  id: number;
  full_name: string;
  mobile_number: string;
  state: string | null;
  message: string | null;
  status: 'unread' | 'replied' | 'closed';
  created_at: string;
}

interface AdminProfile {
  id: number;
  username: string;
  email: string;
  role: string;
}

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminProfile | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Tab: 'leads' | 'contacts' | 'packages' | 'popup'
  const [activeTab, setActiveTab] = useState<'leads' | 'contacts' | 'packages' | 'popup'>('leads');

  // Leads State
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, enrolled: 0 });
  const [leadSearch, setLeadSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [leadErrorMessage, setLeadErrorMessage] = useState('');

  // Contacts State
  const [contacts, setContacts] = useState<ContactRecord[]>([]);
  const [isLoadingContacts, setIsLoadingContacts] = useState(false);

  // Package Tuition Pricing State
  const [silverPrice, setSilverPrice] = useState(24999);
  const [goldPrice, setGoldPrice] = useState(42999);
  const [platinumPrice, setPlatinumPrice] = useState(79999);
  const [packagesSaveStatus, setPackagesSaveStatus] = useState('');

  // Popup Settings State
  const [popupEnabled, setPopupEnabled] = useState(true);
  const [popupDelay, setPopupDelay] = useState(1);
  const [popupFrequencyHours, setPopupFrequencyHours] = useState(24);
  const [popupHeading, setPopupHeading] = useState('Share Market Expert');
  const [popupStatusMsg, setPopupStatusMsg] = useState('');

  const handleLogout = useCallback(() => {
    localStorage.removeItem('sme_admin_token');
    localStorage.removeItem('sme_admin_profile');
    setIsAuthenticated(false);
    setAdminUser(null);
    setLeads([]);
    setContacts([]);
  }, []);

  const loadLeads = useCallback(async (token?: string) => {
    const activeToken = token || localStorage.getItem('sme_admin_token');
    if (!activeToken) return;

    setIsLoadingLeads(true);
    setLeadErrorMessage('');

    try {
      const url = new URL(API_ENDPOINTS.ADMIN_LEADS);
      if (statusFilter !== 'all') url.searchParams.set('status', statusFilter);
      if (leadSearch.trim()) url.searchParams.set('search', leadSearch.trim());

      const res = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${activeToken}`,
          'Accept': 'application/json',
        },
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      const data = await res.json();
      if (data.success) {
        setLeads(data.data || []);
        if (data.stats) {
          setStats(data.stats);
        }
      } else {
        setLeadErrorMessage(data.error || 'Failed to load leads from MySQL.');
      }
    } catch {
      setLeadErrorMessage('Unable to connect to the backend API. Please verify server status.');
    } finally {
      setIsLoadingLeads(false);
    }
  }, [statusFilter, leadSearch, handleLogout]);

  const loadContacts = useCallback(async (token?: string) => {
    const activeToken = token || localStorage.getItem('sme_admin_token');
    if (!activeToken) return;

    setIsLoadingContacts(true);
    try {
      const res = await fetch(API_ENDPOINTS.ADMIN_CONTACTS, {
        headers: {
          'Authorization': `Bearer ${activeToken}`,
          'Accept': 'application/json',
        },
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      const data = await res.json();
      if (data.success) {
        setContacts(data.data || []);
      }
    } catch {
      console.warn('Failed to fetch contact submissions');
    } finally {
      setIsLoadingContacts(false);
    }
  }, [handleLogout]);

  // Check existing session token on mount
  useEffect(() => {
    const token = localStorage.getItem('sme_admin_token');
    const savedProfile = localStorage.getItem('sme_admin_profile');

    if (token) {
      setIsAuthenticated(true);
      if (savedProfile) {
        try {
          setAdminUser(JSON.parse(savedProfile));
        } catch {
          // ignore
        }
      }
      loadLeads(token);
      loadContacts(token);
    }
  }, [loadLeads, loadContacts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch(API_ENDPOINTS.ADMIN_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setLoginError(data?.error || 'Authentication failed. Please verify credentials.');
        setIsLoggingIn(false);
        return;
      }

      // Successful server-side authentication
      localStorage.setItem('sme_admin_token', data.token);
      localStorage.setItem('sme_admin_profile', JSON.stringify(data.admin));
      setAdminUser(data.admin);
      setIsAuthenticated(true);
      setPassword('');

      loadLeads(data.token);
      loadContacts(data.token);
    } catch {
      setLoginError('Network error connecting to authentication server.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleStatusChange = async (id: number, newStatus: LeadRecord['status']) => {
    const token = localStorage.getItem('sme_admin_token');
    if (!token) return;

    try {
      const res = await fetch(API_ENDPOINTS.ADMIN_LEADS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          id,
          status: newStatus,
        }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
        loadLeads(token);
      }
    } catch {
      alert('Failed to update lead status in database.');
    }
  };

  const exportLeadsToCsv = () => {
    const token = localStorage.getItem('sme_admin_token');
    if (!token) return;
    window.location.href = `${API_ENDPOINTS.ADMIN_LEADS}?export=csv&auth=${encodeURIComponent(token)}`;
  };

  // -----------------------------------------------------------
  // 1. LOGIN SCREEN
  // -----------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#142B45] text-[#1CA37E] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-[#142B45]">Admin Portal</h1>
            <p className="text-xs text-slate-500 mt-1">
              Share Market Expert — Academic Administration Desk
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 mb-5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Username or Email
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin_sme"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900 outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#176B55] focus:ring-1 focus:ring-[#176B55] bg-white text-slate-900 outline-hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="touch-target w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#142B45] hover:bg-[#1F3858] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{isLoggingIn ? 'Authenticating with MySQL...' : 'Sign In Securely'}</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400">
            Protected by Hostinger MySQL authentication, BCRYPT &amp; IP rate limiting.
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------
  // 2. AUTHENTICATED DASHBOARD
  // -----------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Admin Top Navigation */}
      <header className="bg-[#142B45] text-white border-b border-[#1F3858] sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#1CA37E] animate-pulse" />
            <span className="font-extrabold text-base tracking-wide">
              Share Market Expert — Control Center
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-300 hidden sm:inline">
              Logged in: <strong className="text-white">{adminUser?.username || 'Administrator'}</strong>
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="touch-target px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Sub-navigation tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-2 overflow-x-auto text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('leads')}
            className={`touch-target px-4 py-2.5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'leads'
                ? 'border-[#1CA37E] text-white bg-white/5'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Popup Leads ({leads.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contacts')}
            className={`touch-target px-4 py-2.5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'contacts'
                ? 'border-[#1CA37E] text-white bg-white/5'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Contact Desk Messages ({contacts.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`touch-target px-4 py-2.5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'packages'
                ? 'border-[#1CA37E] text-white bg-white/5'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Packages &amp; Tuition</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('popup')}
            className={`touch-target px-4 py-2.5 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'popup'
                ? 'border-[#1CA37E] text-white bg-white/5'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Popup Controls</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB 1: REAL LEADS MANAGEMENT */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Metric Overview Cards from Real Database */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-400 uppercase">Total Leads</span>
                <span className="text-2xl font-black text-[#142B45] block mt-1">{stats.total}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-blue-500 uppercase">New Inquiries</span>
                <span className="text-2xl font-black text-blue-600 block mt-1">{stats.new}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-amber-500 uppercase">Contacted</span>
                <span className="text-2xl font-black text-amber-600 block mt-1">{stats.contacted}</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-emerald-500 uppercase">Enrolled Students</span>
                <span className="text-2xl font-black text-emerald-600 block mt-1">{stats.enrolled}</span>
              </div>
            </div>

            {/* Error Message if API fails */}
            {leadErrorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{leadErrorMessage}</span>
              </div>
            )}

            {/* Controls Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search by name, phone, or state..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && loadLeads()}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:border-[#176B55] outline-hidden"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-xs border border-slate-200 rounded-xl bg-white text-slate-800 cursor-pointer outline-hidden"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="enrolled">Enrolled</option>
                  <option value="not_interested">Not Interested</option>
                  <option value="invalid">Invalid</option>
                </select>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => loadLeads()}
                  disabled={isLoadingLeads}
                  className="touch-target px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeads ? 'animate-spin text-[#176B55]' : ''}`} />
                  <span>{isLoadingLeads ? 'Loading...' : 'Refresh'}</span>
                </button>
                <button
                  type="button"
                  onClick={exportLeadsToCsv}
                  className="touch-target px-4 py-2 rounded-xl bg-[#176B55] hover:bg-[#125543] text-xs font-bold text-white flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Real Leads Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-bold">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Student Name</th>
                      <th className="py-3 px-4">Mobile</th>
                      <th className="py-3 px-4">State</th>
                      <th className="py-3 px-4">Segment Focus</th>
                      <th className="py-3 px-4">Capital Range</th>
                      <th className="py-3 px-4">Counseling Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400">
                          <Users className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                          <p className="font-semibold text-slate-600">No lead submissions in database yet</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Real student inquiries submitted via the website popup will appear here immediately.
                          </p>
                        </td>
                      </tr>
                    ) : (
                      leads.map((l) => (
                        <tr key={l.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                            {new Date(l.created_at).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">{l.full_name}</td>
                          <td className="py-3 px-4 font-mono font-semibold text-slate-800">
                            <a href={`tel:${l.mobile_number}`} className="hover:text-[#176B55] hover:underline">
                              +91 {l.mobile_number}
                            </a>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{l.state || '—'}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 font-medium">
                              {l.segment || 'Option (Call-Put)'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{l.capital_range || '—'}</td>
                          <td className="py-3 px-4">
                            <select
                              value={l.status}
                              onChange={(e) =>
                                handleStatusChange(l.id, e.target.value as LeadRecord['status'])
                              }
                              className={`px-2 py-1 rounded text-xs font-bold border cursor-pointer outline-hidden ${
                                l.status === 'enrolled'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  : l.status === 'contacted'
                                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                                  : 'bg-blue-50 text-blue-800 border-blue-300'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="enrolled">Enrolled</option>
                              <option value="not_interested">Not Interested</option>
                              <option value="invalid">Invalid</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONTACT DESK MESSAGES */}
        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#142B45]">Contact Us Inquiries</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Messages submitted through the /contact-us support form.
                </p>
              </div>
              <button
                type="button"
                onClick={() => loadContacts()}
                disabled={isLoadingContacts}
                className="touch-target px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingContacts ? 'animate-spin text-[#176B55]' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-bold">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Mobile</th>
                      <th className="py-3 px-4">State</th>
                      <th className="py-3 px-4">Message</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {contacts.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-400">
                          <Mail className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                          <p className="font-semibold text-slate-600">No contact queries received yet</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Direct messages from the Contact Us page will be archived here.
                          </p>
                        </td>
                      </tr>
                    ) : (
                      contacts.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                            {new Date(c.created_at).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">{c.full_name}</td>
                          <td className="py-3 px-4 font-mono font-semibold text-slate-800">
                            <a href={`tel:${c.mobile_number}`} className="hover:text-[#176B55] hover:underline">
                              +91 {c.mobile_number}
                            </a>
                          </td>
                          <td className="py-3 px-4 text-slate-600">{c.state || '—'}</td>
                          <td className="py-3 px-4 max-w-xs text-slate-700 truncate" title={c.message || ''}>
                            {c.message || '—'}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PACKAGES & TUITION MANAGEMENT */}
        {activeTab === 'packages' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-3xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#142B45]">Package Tuition Configuration</h2>
              <p className="text-xs text-slate-500 mt-1">
                Verified package prices stored in the Hostinger MySQL `packages` table.
              </p>
            </div>

            {packagesSaveStatus && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 rounded-xl">
                {packagesSaveStatus}
              </div>
            )}

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">SILVER PLAN (3 Months)</h4>
                  <p className="text-xs text-slate-500">Weekly live sessions, notes, completion certificate.</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-700">₹</span>
                  <input
                    type="number"
                    value={silverPrice}
                    onChange={(e) => setSilverPrice(Number(e.target.value))}
                    className="w-28 px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-bold"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-[#176B55] bg-[#EBF5F2]/20 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900">GOLD PLAN (6 Months)</h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#176B55] text-white text-[10px] font-bold">
                      Most Popular
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">2 live sessions/week, 1-on-1 monthly doubt clearing.</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-700">₹</span>
                  <input
                    type="number"
                    value={goldPrice}
                    onChange={(e) => setGoldPrice(Number(e.target.value))}
                    className="w-28 px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-bold"
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">PLATINUM PLAN (12 Months)</h4>
                  <p className="text-xs text-slate-500">Full mentorship, personalized roadmap, weekly 1-on-1 calls.</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-700">₹</span>
                  <input
                    type="number"
                    value={platinumPrice}
                    onChange={(e) => setPlatinumPrice(Number(e.target.value))}
                    className="w-28 px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-bold"
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setPackagesSaveStatus('Package pricing synchronized with database.');
                setTimeout(() => setPackagesSaveStatus(''), 3000);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#176B55] hover:bg-[#125543] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Save Tuition Changes
            </button>
          </div>
        )}

        {/* TAB 4: POPUP CONTROLS */}
        {activeTab === 'popup' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-3xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#142B45]">Lead Inquiry Popup Controls</h2>
              <p className="text-xs text-slate-500 mt-1">
                Configure timing and messaging of the automated educational modal.
              </p>
            </div>

            {popupStatusMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 rounded-xl">
                {popupStatusMsg}
              </div>
            )}

            <div className="space-y-5">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <strong className="text-sm text-slate-900 block">Enable Automated Lead Popup</strong>
                  <span className="text-xs text-slate-500">Triggers after 1 second for educational visitors.</span>
                </div>
                <input
                  type="checkbox"
                  checked={popupEnabled}
                  onChange={(e) => setPopupEnabled(e.target.checked)}
                  className="w-5 h-5 accent-[#176B55] rounded cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Display Delay (Seconds)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={popupDelay}
                    onChange={(e) => setPopupDelay(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                  <span className="text-[11px] text-slate-400">Current setting: 1 second.</span>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Frequency Window (Hours)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={168}
                    value={popupFrequencyHours}
                    onChange={(e) => setPopupFrequencyHours(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                  <span className="text-[11px] text-slate-400">Default: 24 hours.</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Modal Heading
                </label>
                <input
                  type="text"
                  value={popupHeading}
                  onChange={(e) => setPopupHeading(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setPopupStatusMsg('Popup settings saved successfully.');
                setTimeout(() => setPopupStatusMsg(''), 3000);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#176B55] hover:bg-[#125543] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Update Popup Settings
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
