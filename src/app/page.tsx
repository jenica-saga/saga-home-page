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
                  <div className="demo-messages flex flex-col gap-2">
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Hi, I need to schedule my knee MRI?</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking prior auth status...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Finding available slots...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="1">Hi Maria! Great news — your MRI auth was approved. I have Tuesday at 3pm at MetroWest Imaging. Want me to book it?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Yes please!</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
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
                  <div className="demo-messages flex flex-col gap-2">
                    <div className="think-block self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Identifying care gap...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Composing outreach message...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start">Hi Jessica, this is Dr. Park&apos;s office. You&apos;re due for a routine screening — can we find you a time?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Oh I keep forgetting. Do you have anything next week?</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
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
                  <div className="demo-messages flex flex-col gap-2">
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Hi, I&apos;m calling to check on my MRI authorization?</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Looking up auth status...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking with insurer...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="1">Hi Robert, I found your authorization. It&apos;s still in review with Aetna. Should clear in 2-3 days. Want me to notify you?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Yes, please!</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
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
                  <div className="demo-messages flex flex-col gap-2">
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start">Welcome Sarah! Dr. Lopez is looking forward to meeting you. Let&apos;s get you set up quickly.</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Great! What do I need to do?</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Pulling referral details...</div>
                      <div className="think-step flex items-center gap-2 text-xs text-text-3 py-0.5"><span className="w-3.5 h-3.5 shrink-0 flex items-center justify-center"><span className="think-spinner"></span><span className="think-check">✓</span></span> Verifying insurance...</div>
                    </div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-accent text-white rounded-bl-[4px] self-start" data-ctx-phase="1">I&apos;ve verified your insurance. Can I confirm your current medications quickly?</div>
                    <div className="dm px-3.5 py-2.5 rounded-[14px] text-[13px] leading-normal max-w-[88%] bg-bg border border-border rounded-br-[4px] self-end ml-auto">Sure, I&apos;m on metformin and lisinopril.</div>
                    <div className="think-block self-start max-w-[88%] mb-0.5">
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
          <div className="bg-bg rounded-2xl min-h-[360px] flex items-center justify-center">
            {/* Integrations Diagram */}
            <div className="w-full max-w-[520px] px-10 max-md:px-4 py-10 relative">
              <div className="text-[9px] font-bold text-text-3 uppercase tracking-[1.2px] text-center mb-3">Pulls context from</div>
              <div className="grid grid-cols-3 gap-4 max-md:gap-2.5 relative z-[2]">
                <div className="bg-bg-card border border-border rounded-[14px] p-4 max-md:p-2.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-[10px] bg-accent-light text-accent flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  </div>
                  <div className="text-xs max-md:text-[10px] font-bold text-text">EHR Systems</div>
                  <div className="text-[10px] max-md:text-[9px] text-text-2 leading-tight max-md:hidden">athenaHealth, Epic, Cerner, eCW</div>
                </div>
                <div className="bg-bg-card border border-border rounded-[14px] p-4 max-md:p-2.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-[10px] bg-[#ede9fe] text-[#6366f1] flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div className="text-xs max-md:text-[10px] font-bold text-text">Insurance</div>
                  <div className="text-[10px] max-md:text-[9px] text-text-2 leading-tight max-md:hidden">Eligibility, prior auth, benefits</div>
                </div>
                <div className="bg-bg-card border border-border rounded-[14px] p-4 max-md:p-2.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-[10px] bg-[#fef3e2] text-gold flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="text-xs max-md:text-[10px] font-bold text-text">Scheduling</div>
                  <div className="text-[10px] max-md:text-[9px] text-text-2 leading-tight max-md:hidden">Calendar, availability, waitlists</div>
                </div>
              </div>

              {/* Arrow: Real-time sync */}
              <div className="flex items-center justify-center gap-2 my-5 relative z-[2]">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <div className="bg-accent-light border border-accent/20 rounded-full px-3.5 py-1.5 text-[9px] font-bold text-accent-dark uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
                  Real-time sync
                </div>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>

              {/* Center node */}
              <div className="w-[120px] h-[120px] max-md:w-[90px] max-md:h-[90px] bg-gradient-to-br from-accent to-accent-dark rounded-full flex flex-col items-center justify-center mx-auto relative z-[2] shadow-[0_8px_32px_rgba(43,122,120,0.35),0_0_0_6px_rgba(43,122,120,0.1)]">
                <div className="font-display text-[22px] max-md:text-[18px] font-bold text-white italic tracking-tight">saga</div>
                <div className="text-[8px] max-md:text-[7px] text-white/80 uppercase tracking-[1.5px] mt-0.5">AI Agent</div>
              </div>

              {/* Arrow: Communicates via */}
              <div className="flex items-center justify-center gap-2 my-5 relative z-[2]">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <div className="bg-accent-light border border-accent/20 rounded-full px-3.5 py-1.5 text-[9px] font-bold text-accent-dark uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
                  Communicates via
                </div>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </div>

              <div className="text-[9px] font-bold text-text-3 uppercase tracking-[1.2px] text-center mb-3">Reaches patients on</div>
              <div className="grid grid-cols-3 gap-4 max-md:gap-2.5 relative z-[2]">
                <div className="bg-bg-card border border-border rounded-[14px] p-4 max-md:p-2.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-[10px] bg-accent-light text-accent flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div className="text-xs max-md:text-[10px] font-bold text-text">Voice</div>
                  <div className="text-[10px] max-md:text-[9px] text-text-2 leading-tight max-md:hidden">Inbound &amp; outbound calls</div>
                </div>
                <div className="bg-bg-card border border-border rounded-[14px] p-4 max-md:p-2.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-[10px] bg-[#ede9fe] text-[#6366f1] flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                  </div>
                  <div className="text-xs max-md:text-[10px] font-bold text-text">SMS</div>
                  <div className="text-[10px] max-md:text-[9px] text-text-2 leading-tight max-md:hidden">Two-way text messaging</div>
                </div>
                <div className="bg-bg-card border border-border rounded-[14px] p-4 max-md:p-2.5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 max-md:w-8 max-md:h-8 rounded-[10px] bg-[#fef3e2] text-gold flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 max-md:w-4 max-md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="text-xs max-md:text-[10px] font-bold text-text">Email</div>
                  <div className="text-[10px] max-md:text-[9px] text-text-2 leading-tight max-md:hidden">Outreach &amp; follow-ups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Value Section 2: Act on It ═══ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
          <div className="bg-bg rounded-2xl min-h-[360px] flex items-center justify-center">
            {/* Workflow Card */}
            <div className="w-full max-w-[440px] bg-bg-card rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-accent to-accent-dark px-6 py-5 text-white">
                <h3 className="text-sm font-bold mb-1">Live Workflow — Maria Rodriguez</h3>
                <p className="text-[11px] opacity-80">Inbound call • Knee MRI Reschedule</p>
              </div>

              {/* Steps */}
              <div className="px-6 py-5">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent shadow-[0_3px_10px_rgba(43,122,120,0.35)] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div className="w-0.5 h-7 bg-[#c2e8c6] my-1"></div>
                  </div>
                  <div className="pt-1 pb-5">
                    <div className="text-[13px] font-semibold text-text">Patient calls in</div>
                    <div className="text-[11px] text-text-2">&quot;I need to reschedule my knee MRI&quot;</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#eaf7ec] border-2 border-[#2d8a3e] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2d8a3e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div className="w-0.5 h-7 bg-[#c2e8c6] my-1"></div>
                  </div>
                  <div className="pt-1 pb-5">
                    <div className="text-[13px] font-semibold text-text">Prior auth verified</div>
                    <div className="text-[11px] text-text-2">Approved • Expires March 15</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#eaf7ec] border-2 border-[#2d8a3e] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2d8a3e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div className="w-0.5 h-7 bg-[#c2e8c6] my-1"></div>
                  </div>
                  <div className="pt-1 pb-5">
                    <div className="text-[13px] font-semibold text-text">Appointment rescheduled</div>
                    <div className="text-[11px] text-text-2">Tuesday 3pm • MetroWest Imaging</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#eaf7ec] border-2 border-[#2d8a3e] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2d8a3e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div className="w-0.5 h-7 bg-[#c2e8c6] my-1"></div>
                  </div>
                  <div className="pt-1 pb-5">
                    <div className="text-[13px] font-semibold text-text">Confirmation sent</div>
                    <div className="text-[11px] text-text-2">SMS with date, time &amp; prep instructions</div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#eaf7ec] border-2 border-[#2d8a3e] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#2d8a3e" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="text-[13px] font-semibold text-accent">Chart updated automatically</div>
                    <div className="text-[11px] text-text-2">All actions synced to EHR in real time</div>
                  </div>
                </div>
              </div>

              {/* EHR Sync Bar */}
              <div className="bg-[#f0fafa] border-t border-accent-light px-6 py-3.5 flex items-center gap-2.5">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-accent-dark">Synced to EHR</div>
                  <div className="text-[10px] text-text-2">athenaHealth • Updated 2s ago</div>
                </div>
                <div className="ml-auto bg-[#eaf7ec] text-[#2d8a3e] text-[10px] font-bold px-2.5 py-1 rounded-xl border border-[#c2e8c6]">✓ Live</div>
              </div>
            </div>
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
          <div className="bg-bg rounded-2xl min-h-[360px] flex items-center justify-center">
            {/* Review Inbox Mockup */}
            <div className="w-full max-w-[520px] bg-bg-card rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-accent to-accent-dark px-6 py-4 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold">Review Inbox</h3>
                  <p className="text-[11px] opacity-80 mt-px">Suggested responses awaiting approval</p>
                </div>
                <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">3 pending</div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-border bg-white">
                <div className="flex-1 text-center py-2.5 text-[11px] font-semibold text-accent border-b-2 border-accent">Needs Review <span className="bg-accent text-white text-[10px] px-1.5 py-px rounded-lg ml-1">3</span></div>
                <div className="flex-1 text-center py-2.5 text-[11px] font-semibold text-text-3 border-b-2 border-transparent">Approved Today <span className="bg-accent-light text-accent text-[10px] px-1.5 py-px rounded-lg ml-1">24</span></div>
                <div className="flex-1 text-center py-2.5 text-[11px] font-semibold text-text-3 border-b-2 border-transparent">Edited <span className="bg-accent-light text-accent text-[10px] px-1.5 py-px rounded-lg ml-1">2</span></div>
              </div>

              {/* Inbox Items */}
              <div className="py-2">
                {/* Item 1 - Expanded */}
                <div className="px-6 py-3.5 bg-bg-card border-b border-[#f0ece6]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#e45858] shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-text">Maria Rodriguez — Prior Auth Denial</div>
                      <div className="text-[10px] text-text-2 mt-px">Flagged: insurance appeal, high balance</div>
                    </div>
                    <span className="text-[9px] font-semibold px-[7px] py-[2px] rounded-md uppercase tracking-wide bg-[#ede9fe] text-[#6366f1]">SMS</span>
                    <span className="text-[10px] text-text-3 shrink-0">2m ago</span>
                  </div>
                  <div className="mt-3 bg-white border border-border rounded-xl overflow-hidden">
                    <div className="text-[9px] font-bold text-text-3 uppercase tracking-wider px-3.5 py-2 bg-[#f9f7f4] border-b border-border flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      Saga&apos;s suggested response
                    </div>
                    <div className="px-3.5 py-3 text-xs text-text leading-relaxed">
                      Hi Maria, this is MetroWest Primary Care. We received an update on your knee MRI authorization — unfortunately the initial request was <span className="bg-accent-light px-1 py-px rounded font-semibold text-accent-dark">denied by Blue Cross</span>. Our team is already filing an appeal and we expect a decision within <span className="bg-accent-light px-1 py-px rounded font-semibold text-accent-dark">5-7 business days</span>. We&apos;ll text you as soon as we hear back. Reply STOP to opt out.
                    </div>
                    <div className="flex gap-2 px-3.5 py-2.5 border-t border-[#f0ece6]">
                      <button className="px-4 py-1.5 rounded-lg text-[11px] font-semibold bg-accent text-white">Approve &amp; Send</button>
                      <button className="px-4 py-1.5 rounded-lg text-[11px] font-semibold bg-[#f0ece6] text-text">Edit</button>
                      <button className="px-4 py-1.5 rounded-lg text-[11px] font-semibold text-text-3 ml-auto">Dismiss</button>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="px-6 py-3.5 border-b border-[#f0ece6]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#e45858] shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-text">James Lee — Specialist Referral</div>
                      <div className="text-[10px] text-text-2 mt-px">Flagged: out-of-network provider selected</div>
                    </div>
                    <span className="text-[9px] font-semibold px-[7px] py-[2px] rounded-md uppercase tracking-wide bg-accent-light text-accent">CALL</span>
                    <span className="text-[10px] text-text-3 shrink-0">8m ago</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="px-6 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-[13px] font-semibold text-text">Sarah Park — Billing Dispute</div>
                      <div className="text-[10px] text-text-2 mt-px">Flagged: balance exceeds $500</div>
                    </div>
                    <span className="text-[9px] font-semibold px-[7px] py-[2px] rounded-md uppercase tracking-wide bg-[#fef3e2] text-gold">EMAIL</span>
                    <span className="text-[10px] text-text-3 shrink-0">12m ago</span>
                  </div>
                </div>
              </div>

              {/* Data Footer */}
              <div className="bg-bg-dark px-6 py-2.5 flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.6)" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <span className="text-[10px] text-white/60"><strong className="text-white/90">Your data stays yours.</strong> We never train models on your patient data.</span>
              </div>
            </div>
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
