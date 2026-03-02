'use client';

import { useState, useEffect, useRef } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [practice, setPractice] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [ehr, setEhr] = useState('');
  const [providerCount, setProviderCount] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, practice, role, phone, ehr, providerCount, painPoint }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPractice('');
    setRole('');
    setPhone('');
    setEhr('');
    setProviderCount('');
    setPainPoint('');
    setStatus('idle');
    setErrorMsg('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      <div
        ref={modalRef}
        className="bg-bg-card rounded-2xl shadow-2xl border border-border w-full max-w-[460px] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-accent to-accent-dark px-8 py-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Book a Demo</h3>
              <p className="text-sm text-white/80 mt-1">See Saga in action for your practice</p>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#e6f5e8] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2d8a3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-text mb-2">We&apos;ll be in touch!</h4>
              <p className="text-sm text-text-2 mb-6">Our team will reach out within 24 hours to schedule your personalized demo.</p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-text text-white text-sm font-semibold hover:opacity-85 transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Dr. Jane Smith"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text placeholder:text-text-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Work Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="jane@yourpractice.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text placeholder:text-text-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Practice Name *</label>
                <input
                  type="text"
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                  required
                  placeholder="Town Center Pediatrics"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text placeholder:text-text-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Your Role *</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239c948b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select your role</option>
                  <option value="office-manager">Office / Practice Manager</option>
                  <option value="head-of-ops">Head of Operations / COO</option>
                  <option value="it-innovation">IT / Innovation Director</option>
                  <option value="physician">Physician / Medical Director</option>
                  <option value="c-suite">C-Suite (CEO, CFO)</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">EHR System *</label>
                <select
                  value={ehr}
                  onChange={(e) => setEhr(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239c948b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select your EHR</option>
                  <option value="athenahealth">athenaHealth</option>
                  <option value="epic">Epic</option>
                  <option value="cerner">Cerner / Oracle Health</option>
                  <option value="eclinicalworks">eClinicalWorks</option>
                  <option value="greenway">Greenway</option>
                  <option value="nextgen">NextGen</option>
                  <option value="drchrono">DrChrono</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Number of Providers *</label>
                <select
                  value={providerCount}
                  onChange={(e) => setProviderCount(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239c948b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select practice size</option>
                  <option value="1-5">1–5 providers</option>
                  <option value="6-20">6–20 providers</option>
                  <option value="21-50">21–50 providers</option>
                  <option value="50+">50+ providers</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Biggest Challenge (optional)</label>
                <select
                  value={painPoint}
                  onChange={(e) => setPainPoint(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239c948b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="">Select a challenge</option>
                  <option value="hold-times">Phone hold times / call abandonment</option>
                  <option value="staff-turnover">Staff turnover & hiring</option>
                  <option value="care-gaps">Care gap / recall outreach</option>
                  <option value="prior-auth">Prior auth follow-up</option>
                  <option value="after-hours">After-hours coverage</option>
                  <option value="intake-scheduling">Patient intake & scheduling</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-2 uppercase tracking-wide mb-1.5">Phone (optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg text-sm text-text placeholder:text-text-3 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                />
              </div>

              {errorMsg && (
                <div className="text-sm text-[#e45858] bg-[#fef2f2] px-4 py-2.5 rounded-xl">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-full bg-accent text-white text-sm font-semibold hover:opacity-85 transition-opacity disabled:opacity-60 mt-2"
              >
                {status === 'loading' ? 'Submitting...' : 'Request Demo'}
              </button>

              <p className="text-[11px] text-text-3 text-center">
                By submitting, you agree to our Privacy Policy. We&apos;ll only use your info to schedule a demo.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
