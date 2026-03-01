'use client';

import { useState, useEffect } from 'react';
import HeroDemoAnimation from '@/components/HeroDemoAnimation';
import DemoModal from '@/components/DemoModal';

function TrustTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-[13px] text-text-2">
      {children}
    </span>
  );
}

function TrustIcon({ d }: { d: string }) {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#2b7a78" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export default function HomePage() {
  const [demoOpen, setDemoOpen] = useState(false);

  // Listen for nav button clicks
  useEffect(() => {
    const handler = () => setDemoOpen(true);
    window.addEventListener('open-demo-modal', handler);
    return () => window.removeEventListener('open-demo-modal', handler);
  }, []);

  return (
    <>
      <HeroDemoAnimation />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* ═══ Hero ═══ */}
      <section className="py-[120px] pb-20">
        <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-15 items-center">
          <div>
            <h1 className="font-display text-[56px] max-md:text-[38px] font-bold leading-[1.08] mb-6">
              Turn every conversation into <em className="italic text-accent">growth.</em>
            </h1>
            <p className="text-lg text-text-2 leading-relaxed mb-8 max-w-[440px]">
              AI voice agents that handle scheduling, outreach, and follow-ups — with full EHR context on every call.
            </p>
            <button onClick={() => setDemoOpen(true)} className="inline-flex items-center px-6 py-2.5 rounded-full bg-text text-white text-sm font-semibold cursor-pointer hover:opacity-85 transition-opacity">
              Book a demo
            </button>
            <div className="flex gap-6 mt-8 flex-wrap">
              <TrustTag>
                <TrustIcon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                HIPAA Compliant
              </TrustTag>
              <TrustTag>
                <TrustIcon d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                BAA Included
              </TrustTag>
              <TrustTag>
                <TrustIcon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                24/7 Coverage
              </TrustTag>
            </div>
          </div>

          {/* Hero Demo Card */}
          <div className="relative min-h-[460px]">
            <div className="bg-bg-card rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-border overflow-hidden">
              <div className="relative h-[560px] max-md:h-[420px]">
                {/* Scene 0: Scheduling */}
                <div className="demo-scene active" data-scene="0">
                  <div className="demo-label inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-text-3 bg-bg border border-border mb-4 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Scheduling
                  </div>
                  <div className="demo-chat-head flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Saga Agent</div>
                      <div className="text-xs text-text-3">Inbound call · Maria Rodriguez</div>
                    </div>
                  </div>
                  <div className="demo-context bg-accent-light rounded-[10px] px-3.5 py-2.5 mb-3 sticky top-0 z-5 shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase text-accent-dark mb-2">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      Patient context
                      <span className="ctx-spinner visible w-3 h-3 border-2 border-accent/20 border-t-accent rounded-full ml-auto"></span>
                      <span className="ctx-check ml-auto text-accent text-xs font-semibold">✓ Ready</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">🏥</span> Blue Cross PPO</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">📋</span> Last visit Nov 12</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="1"><span className="text-[10px] opacity-60">✅</span> MRI auth approved</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="2"><span className="text-[10px] opacity-60">📅</span> Tue 3pm booked</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Hi, I need to schedule my knee MRI?</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking prior auth status...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Finding available slots...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="1">Hi Maria! Great news — your MRI auth was approved. I have Tuesday at 3pm at MetroWest Imaging. Want me to book it?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Yes please!</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Booking appointment...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Syncing to EHR...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="2">Done — confirmation sent to your phone.</div>
                    <div className="dm-action inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#e6f5e8] text-xs font-semibold text-[#2d8a3e] mt-1">✓ Appointment booked · EHR updated · SMS sent</div>
                  </div>
                </div>

                {/* Scene 1: Care Gaps */}
                <div className="demo-scene" data-scene="1">
                  <div className="demo-label inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-text-3 bg-bg border border-border mb-4 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Care Gaps
                  </div>
                  <div className="demo-chat-head flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Saga Agent</div>
                      <div className="text-xs text-text-3">Outbound SMS · Jessica Nguyen</div>
                    </div>
                  </div>
                  <div className="demo-context bg-accent-light rounded-[10px] px-3.5 py-2.5 mb-3 sticky top-0 z-5 shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase text-accent-dark mb-2">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      Patient context
                      <span className="ctx-spinner visible w-3 h-3 border-2 border-accent/20 border-t-accent rounded-full ml-auto"></span>
                      <span className="ctx-check ml-auto text-accent text-xs font-semibold">✓ Ready</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">⚠️</span> Screening overdue</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">📅</span> Last contact 60d ago</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">💬</span> Prefers SMS</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">👤</span> Dr. Park&apos;s patient</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="1"><span className="text-[10px] opacity-60">🗓️</span> Thu 2pm scheduled</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Identifying care gap...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Composing outreach message...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start">Hi Jessica, this is Dr. Park&apos;s office. You&apos;re due for a routine screening — can we find you a time?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Oh I keep forgetting. Do you have anything next week?</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking schedule...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start">I have Wednesday at 10am or Thursday at 2pm. Which works?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto" data-ctx-phase="1">Thursday works!</div>
                    <div className="dm-action inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#e6f5e8] text-xs font-semibold text-[#2d8a3e] mt-1">✓ Care gap closed · Appointment set · Chart updated</div>
                  </div>
                </div>

                {/* Scene 2: Prior Auth */}
                <div className="demo-scene" data-scene="2">
                  <div className="demo-label inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-text-3 bg-bg border border-border mb-4 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Prior Auth
                  </div>
                  <div className="demo-chat-head flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Saga Agent</div>
                      <div className="text-xs text-text-3">Inbound call · Robert Kim</div>
                    </div>
                  </div>
                  <div className="demo-context bg-accent-light rounded-[10px] px-3.5 py-2.5 mb-3 sticky top-0 z-5 shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase text-accent-dark mb-2">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      Patient context
                      <span className="ctx-spinner visible w-3 h-3 border-2 border-accent/20 border-t-accent rounded-full ml-auto"></span>
                      <span className="ctx-check ml-auto text-accent text-xs font-semibold">✓ Ready</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">🏥</span> Aetna HMO</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">👨‍⚕️</span> Referred by Dr. Chen</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="1"><span className="text-[10px] opacity-60">⏳</span> MRI auth pending</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="2"><span className="text-[10px] opacity-60">🔔</span> Auto-notify enabled</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Hi, I&apos;m calling to check on my MRI authorization?</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Looking up auth status...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking with insurer...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="1">Hi Robert, I found your authorization. It&apos;s still in review with Aetna. Should clear in 2-3 days. Want me to notify you?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Yes, please!</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Setting up auto-notification...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="2">Done. I&apos;ll text you as soon as it&apos;s approved.</div>
                    <div className="dm-action inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#e6f5e8] text-xs font-semibold text-[#2d8a3e] mt-1">✓ Status checked · Auto-notify set · EHR logged</div>
                  </div>
                </div>

                {/* Scene 3: New Patient */}
                <div className="demo-scene" data-scene="3">
                  <div className="demo-label inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-text-3 bg-bg border border-border mb-4 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> New Patient Intake
                  </div>
                  <div className="demo-chat-head flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Saga Agent</div>
                      <div className="text-xs text-text-3">Inbound call · Sarah Chen (New)</div>
                    </div>
                  </div>
                  <div className="demo-context bg-accent-light rounded-[10px] px-3.5 py-2.5 mb-3 sticky top-0 z-5 shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase text-accent-dark mb-2">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                      Intake data
                      <span className="ctx-spinner visible w-3 h-3 border-2 border-accent/20 border-t-accent rounded-full ml-auto"></span>
                      <span className="ctx-check ml-auto text-accent text-xs font-semibold">✓ Ready</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">🔗</span> Referred from clinic</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="0"><span className="text-[10px] opacity-60">📝</span> Form started</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="1"><span className="text-[10px] opacity-60">💳</span> Insurance verified</span>
                      <span className="ctx-tag inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent/8 text-accent" data-phase="2"><span className="text-[10px] opacity-60">✅</span> First visit scheduled</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start">Welcome Sarah! Dr. Lopez is looking forward to meeting you. Let&apos;s get you set up quickly.</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Great! What do I need to do?</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Pulling referral details...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Verifying insurance...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="1">I&apos;ve verified your insurance. Can I confirm your current medications quickly?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Sure, I&apos;m on metformin and lisinopril.</div>
                    <div className="self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Recording medications...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Booking appointment...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="2">Perfect. Your first visit is Thursday at 2pm. See you then!</div>
                    <div className="dm-action inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[#e6f5e8] text-xs font-semibold text-[#2d8a3e] mt-1">✓ Intake complete · Chart created · Confirmation sent</div>
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 py-4 border-t border-border">
                <div className="demo-dot active w-2 h-2 rounded-full bg-accent cursor-pointer transition-all duration-300"></div>
                <div className="demo-dot w-2 h-2 rounded-full bg-border cursor-pointer transition-all duration-300"></div>
                <div className="demo-dot w-2 h-2 rounded-full bg-border cursor-pointer transition-all duration-300"></div>
                <div className="demo-dot w-2 h-2 rounded-full bg-border cursor-pointer transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Logos ═══ */}
      <section className="py-12 border-t border-b border-border bg-bg-card">
        <div className="max-w-[1200px] mx-auto px-10 flex items-center gap-12 max-md:flex-col max-md:gap-5">
          <div className="text-[13px] text-text-3 whitespace-nowrap min-w-[140px]">Trusted by</div>
          <div className="flex items-center gap-10 flex-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/boroughsmwc-clean.png" alt="Boroughs MWC" className="h-8 w-auto object-contain opacity-70" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fouadaoude-clean.png" alt="Fouad Aoude" className="h-8 w-auto object-contain opacity-70" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/kaayahealth-clean.png" alt="Kaaya Health" className="h-12 w-auto object-contain opacity-70" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/metrowest-clean.png" alt="MetroWest" className="h-16 w-auto object-contain opacity-70" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/nully-clean.png" alt="Nully Medical" className="h-8 w-auto object-contain opacity-70" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/towncenter-clean.png" alt="Town Center Pediatrics" className="h-12 w-auto object-contain opacity-70" />
          </div>
        </div>
      </section>

      {/* ═══ Testimonial (Loved by Operators) ═══ */}
      <section className="py-24 bg-bg-dark text-white">
        <div className="max-w-[800px] mx-auto px-10 text-center">
          <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-6 opacity-80">Loved by Operators</div>
          <blockquote className="font-display italic text-[26px] leading-[1.45] mb-6 text-white/90">
            &ldquo;It&apos;s not just faster — it&apos;s qualitatively different. Saga is like having your billing, scheduling, and care coordinators on every call. That&apos;s given us the bandwidth to proactively focus on what actually moves the practice forward.&rdquo;
          </blockquote>
          <cite className="not-italic text-sm text-white/50">— Operations Director, Multi-specialty Practice</cite>
        </div>
      </section>

      {/* ═══ Value Section 1: Full Context ═══ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          <div>
            <div className="font-display text-[56px] font-normal text-accent opacity-50 mb-4">1</div>
            <h2 className="font-display text-4xl max-md:text-[28px] font-bold leading-tight mb-2">
              Full context, before <span className="font-normal text-text-2">hello.</span>
            </h2>
            <p className="text-base text-text-2 leading-relaxed mt-5 max-w-[440px]">
              Every agent interaction starts with a complete view: past medical history, active meds, insurance, prior authorizations, and care gaps pulled from your EHR in real-time. No guessing, no repeating information.
            </p>
          </div>
          <div className="bg-bg rounded-2xl p-8 min-h-[360px] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mockup-integrations.png" alt="Integrations diagram" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ═══ Value Section 2: Act on It ═══ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
          <div className="bg-bg rounded-2xl p-8 min-h-[360px] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mockup-workflow.png" alt="Workflow and EHR sync" className="max-w-full h-auto" />
          </div>
          <div>
            <div className="font-display text-[56px] font-normal text-accent opacity-50 mb-4">2</div>
            <h2 className="font-display text-4xl max-md:text-[28px] font-bold leading-tight mb-2">
              <span className="font-normal text-text-2">Act on it.</span> Sync to the EHR.
            </h2>
            <p className="text-base text-text-2 leading-relaxed mt-5 max-w-[440px]">
              Saga doesn&apos;t just talk — it acts. Every appointment booked, form filled, authorization checked, or gap closed is <strong className="text-text font-semibold">immediately written back to your chart</strong>, with a human review option for sensitive actions. Your workflow stays in sync, always.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Value Section 3: Quality & Consistency ═══ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          <div>
            <div className="font-display text-[56px] font-normal text-accent opacity-50 mb-4">3</div>
            <h2 className="font-display text-4xl max-md:text-[28px] font-bold leading-tight mb-2">
              Secure quality.<br /><span className="font-normal text-text-2">Always improving.</span>
            </h2>
            <p className="text-base text-text-2 leading-relaxed mt-5 max-w-[440px]">
              Human review on high-priority and sensitive tasks before they go out. Every resolved interaction feeds back into your protocols — so the agent learns as your processes evolve. Your data stays yours. We never train models on it.
            </p>
          </div>
          <div className="bg-bg rounded-2xl p-8 min-h-[360px] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mockup-channels.png" alt="Quality review inbox" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ═══ Compare: Human vs Agent ═══ */}
      <section className="py-24 bg-bg">
        <div className="max-w-[900px] mx-auto px-10">
          <h2 className="font-display text-4xl font-bold text-center mb-12 leading-tight">Humans + Agents. The better way to staff.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="compare-old rounded-[14px] p-8 bg-bg-card border border-border">
              <div className="text-xs font-bold tracking-widest uppercase text-text-3 mb-5">Human Limitations</div>
              <ul className="list-none">
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-text-2">One call at a time</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-text-2">2-5 minutes gathering information before and during calls</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-text-2">Forgets details between calls</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-text-2">Months of training, plus retraining as processes change</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-text-2">Gets tired, makes mistakes</li>
              </ul>
            </div>
            <div className="compare-new rounded-[14px] p-8 bg-accent text-white">
              <div className="text-xs font-bold tracking-widest uppercase text-white/70 mb-5">Saga AI Agent</div>
              <ul className="list-none">
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-white/95">Hundreds simultaneously</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-white/95">Instantly has all necessary information</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-white/95">Perfect recall of every conversation and patient detail</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-white/95">Write SOPs in plain English and Saga learns instantly</li>
                <li className="text-[15px] mb-3 pl-6 relative leading-[1.45] text-white/95">Ready 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Numbers ═══ */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex justify-center gap-20 flex-wrap max-md:gap-10">
            <div>
              <div className="font-display text-[52px] font-bold text-accent leading-none mb-2">94%</div>
              <div className="text-sm text-text-2">Reduction in hold times</div>
            </div>
            <div>
              <div className="font-display text-[52px] font-bold text-accent leading-none mb-2">12%</div>
              <div className="text-sm text-text-2">Increase in MoM appointments booked</div>
            </div>
            <div>
              <div className="font-display text-[52px] font-bold text-accent leading-none mb-2">48%</div>
              <div className="text-sm text-text-2">Increase in labor capacity</div>
            </div>
            <div>
              <div className="font-display text-[52px] font-bold text-accent leading-none mb-2">5x</div>
              <div className="text-sm text-text-2">Care gaps closed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-[120px] text-center">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="font-display text-[44px] max-md:text-[32px] font-bold mb-4 leading-tight">
            Turn every patient conversation<br />into a lasting relationship. <em className="italic text-accent">Know their saga.</em>
          </h2>
          <button onClick={() => setDemoOpen(true)} className="inline-flex items-center px-9 py-3.5 rounded-full bg-accent text-white text-base font-semibold cursor-pointer hover:opacity-85 transition-opacity mt-4">
            Book a demo →
          </button>
          <div className="flex gap-6 justify-center mt-8 flex-wrap">
            <TrustTag>
              <TrustIcon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              Outcome-based pricing
            </TrustTag>
            <TrustTag>
              <TrustIcon d="M13 10V3L4 14h7v7l9-11h-7z" />
              Live in under a month
            </TrustTag>
          </div>
        </div>
      </section>
    </>
  );
}
