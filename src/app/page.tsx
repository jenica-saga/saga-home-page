'use client';

import HeroDemoAnimation from '@/components/HeroDemoAnimation';

export default function HomePage() {
  return (
    <>
      <HeroDemoAnimation />

      {/* ═══ Hero ═══ */}
      <section className="hero">
        <div className="w">
          <div className="hero-text">
            <h1>Turn every conversation into <em>growth.</em></h1>
            <p>AI voice agents that handle scheduling, outreach, and follow-ups — with full EHR context on every call.</p>
            <a href="#" className="cta-btn">Book a demo</a>
            <div className="trust-inline">
              <span className="trust-tag">
                <svg fill="none" viewBox="0 0 24 24" stroke="#2b7a78" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg> HIPAA Compliant
              </span>
              <span className="trust-tag">
                <svg fill="none" viewBox="0 0 24 24" stroke="#2b7a78" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg> BAA Included
              </span>
              <span className="trust-tag">
                <svg fill="none" viewBox="0 0 24 24" stroke="#2b7a78" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg> 24/7 Coverage
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-demo" id="heroCycler">
              <div className="demo-scenes-wrap">
                {/* Scene 0: Scheduling (inbound) */}
                <div className="demo-scene active" data-scene="0">
                  <div className="demo-label"><span className="dot"></span> Scheduling</div>
                  <div className="demo-chat-head">
                    <div className="demo-avatar">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="demo-name">Saga Agent</div>
                      <div className="demo-status">Inbound call · Maria Rodriguez</div>
                    </div>
                  </div>
                  <div className="demo-context">
                    <div className="context-header">
                      <svg className="ctx-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                      Patient context
                      <span className="ctx-spinner visible"></span>
                      <span className="ctx-check">✓ Ready</span>
                    </div>
                    <div className="context-items">
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">🏥</span> Blue Cross PPO</span>
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">📋</span> Last visit Nov 12</span>
                      <span className="ctx-tag" data-phase="1"><span className="tag-icon">✅</span> MRI auth approved</span>
                      <span className="ctx-tag" data-phase="2"><span className="tag-icon">📅</span> Tue 3pm booked</span>
                    </div>
                  </div>
                  <div className="demo-messages">
                    <div className="dm dm-patient">Hi, I need to schedule my knee MRI?</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking prior auth status...</div>
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Finding available slots...</div>
                    </div>
                    <div className="dm dm-saga" data-ctx-phase="1">Hi Maria! Great news — your MRI auth was approved. I have Tuesday at 3pm at MetroWest Imaging. Want me to book it?</div>
                    <div className="dm dm-patient">Yes please!</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Booking appointment...</div>
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Syncing to EHR...</div>
                    </div>
                    <div className="dm dm-saga" data-ctx-phase="2">Done — confirmation sent to your phone.</div>
                    <div className="dm-action">✓ Appointment booked · EHR updated · SMS sent</div>
                  </div>
                </div>

                {/* Scene 1: Care Gaps */}
                <div className="demo-scene" data-scene="1">
                  <div className="demo-label"><span className="dot"></span> Care Gaps</div>
                  <div className="demo-chat-head">
                    <div className="demo-avatar">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="demo-name">Saga Agent</div>
                      <div className="demo-status">Outbound SMS · Jessica Nguyen</div>
                    </div>
                  </div>
                  <div className="demo-context">
                    <div className="context-header">
                      <svg className="ctx-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                      Patient context
                      <span className="ctx-spinner visible"></span>
                      <span className="ctx-check">✓ Ready</span>
                    </div>
                    <div className="context-items">
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">⚠️</span> Screening overdue</span>
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">📅</span> Last contact 60d ago</span>
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">💬</span> Prefers SMS</span>
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">👤</span> Dr. Park's patient</span>
                      <span className="ctx-tag" data-phase="1"><span className="tag-icon">🗓️</span> Thu 2pm scheduled</span>
                    </div>
                  </div>
                  <div className="demo-messages">
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Identifying care gap...</div>
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Composing outreach message...</div>
                    </div>
                    <div className="dm dm-saga">Hi Jessica, this is Dr. Park's office. You're due for a routine screening — can we find you a time?</div>
                    <div className="dm dm-patient">Oh I keep forgetting. Do you have anything next week?</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking schedule...</div>
                    </div>
                    <div className="dm dm-saga">I have Wednesday at 10am or Thursday at 2pm. Which works?</div>
                    <div className="dm dm-patient" data-ctx-phase="1">Thursday works!</div>
                    <div className="dm-action">✓ Care gap closed · Appointment set · Chart updated</div>
                  </div>
                </div>

                {/* Scene 2: Prior Auth */}
                <div className="demo-scene" data-scene="2">
                  <div className="demo-label"><span className="dot"></span> Prior Auth</div>
                  <div className="demo-chat-head">
                    <div className="demo-avatar">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="demo-name">Saga Agent</div>
                      <div className="demo-status">Inbound call · Robert Kim</div>
                    </div>
                  </div>
                  <div className="demo-context">
                    <div className="context-header">
                      <svg className="ctx-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                      Patient context
                      <span className="ctx-spinner visible"></span>
                      <span className="ctx-check">✓ Ready</span>
                    </div>
                    <div className="context-items">
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">🏥</span> Aetna HMO</span>
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">👨‍⚕️</span> Referred by Dr. Chen</span>
                      <span className="ctx-tag" data-phase="1"><span className="tag-icon">⏳</span> MRI auth pending</span>
                      <span className="ctx-tag" data-phase="2"><span className="tag-icon">🔔</span> Auto-notify enabled</span>
                    </div>
                  </div>
                  <div className="demo-messages">
                    <div className="dm dm-patient">Hi, I'm calling to check on my MRI authorization?</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Looking up auth status...</div>
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Checking with insurer...</div>
                    </div>
                    <div className="dm dm-saga" data-ctx-phase="1">Hi Robert, I found your authorization. It's still in review with Aetna. Should clear in 2-3 days. Want me to notify you?</div>
                    <div className="dm dm-patient">Yes, please!</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Setting up auto-notification...</div>
                    </div>
                    <div className="dm dm-saga" data-ctx-phase="2">Done. I'll text you as soon as it's approved.</div>
                    <div className="dm-action">✓ Status checked · Auto-notify set · EHR logged</div>
                  </div>
                </div>

                {/* Scene 3: New Patient */}
                <div className="demo-scene" data-scene="3">
                  <div className="demo-label"><span className="dot"></span> New Patient Intake</div>
                  <div className="demo-chat-head">
                    <div className="demo-avatar">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="demo-name">Saga Agent</div>
                      <div className="demo-status">Inbound call · Sarah Chen (New)</div>
                    </div>
                  </div>
                  <div className="demo-context">
                    <div className="context-header">
                      <svg className="ctx-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                      Intake data
                      <span className="ctx-spinner visible"></span>
                      <span className="ctx-check">✓ Ready</span>
                    </div>
                    <div className="context-items">
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">🔗</span> Referred from clinic</span>
                      <span className="ctx-tag" data-phase="0"><span className="tag-icon">📝</span> Form started</span>
                      <span className="ctx-tag" data-phase="1"><span className="tag-icon">💳</span> Insurance verified</span>
                      <span className="ctx-tag" data-phase="2"><span className="tag-icon">✅</span> First visit scheduled</span>
                    </div>
                  </div>
                  <div className="demo-messages">
                    <div className="dm dm-saga">Welcome Sarah! Dr. Lopez is looking forward to meeting you. Let's get you set up quickly.</div>
                    <div className="dm dm-patient">Great! What do I need to do?</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Pulling referral details...</div>
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Verifying insurance...</div>
                    </div>
                    <div className="dm dm-saga" data-ctx-phase="1">I've verified your insurance. Can I confirm your current medications quickly?</div>
                    <div className="dm dm-patient">Sure, I'm on metformin and lisinopril.</div>
                    <div className="think-block">
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Recording medications...</div>
                      <div className="think-step"><span className="step-icon"><span className="think-spinner"></span><span className="think-check">✓</span></span> Booking appointment...</div>
                    </div>
                    <div className="dm dm-saga" data-ctx-phase="2">Perfect. Your first visit is Thursday at 2pm. See you then!</div>
                    <div className="dm-action">✓ Intake complete · Chart created · Confirmation sent</div>
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="demo-progress">
                <div className="demo-dot active"></div>
                <div className="demo-dot"></div>
                <div className="demo-dot"></div>
                <div className="demo-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Logos ═══ */}
      <section className="logos">
        <div className="w">
          <div className="logos-label">Powering</div>
          <div className="logo-row">
            <div className="logo-placeholder">Town Center Pediatrics</div>
            <div className="logo-placeholder">MetroWest Imaging</div>
            <div className="logo-placeholder">Kaaya Health</div>
            <div className="logo-placeholder">Boroughs Midwifery</div>
          </div>
        </div>
      </section>

      {/* ═══ Value Section 1: Full Context ═══ */}
      <section className="value-section">
        <div className="w">
          <div className="value-text">
            <div className="value-num">1</div>
            <h2>Full context, before <span>hello.</span></h2>
            <p className="desc">Every agent interaction starts with a complete view: past medical history, active meds, insurance, prior authorizations, and care gaps pulled from your EHR in real-time. No guessing, no repeating information.</p>
          </div>
          <div className="value-visual">
            <img src="/images/mockup-context.png" alt="Context retrieval system" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* ═══ Value Section 2: Act on It ═══ */}
      <section className="value-section reverse">
        <div className="w">
          <div className="value-visual">
            <img src="/images/mockup-workflow.png" alt="Workflow and EHR sync" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="value-text">
            <div className="value-num">2</div>
            <h2><span>Act on it.</span> Sync to the EHR.</h2>
            <p className="desc">Saga doesn't just talk — it acts. Every appointment booked, form filled, authorization checked, or gap closed is <strong>immediately written back to your chart</strong>, with a human review option for sensitive actions. Your workflow stays in sync, always.</p>
          </div>
        </div>
      </section>

      {/* ═══ Value Section 3: Channels ═══ */}
      <section className="value-section">
        <div className="w">
          <div className="value-text">
            <div className="value-num">3</div>
            <h2>Every channel. <span>All at once.</span></h2>
            <p className="desc">One Saga instance, unlimited channels: phone, SMS, email, WhatsApp, web chat. Same agent, same context, seamless handoff between modalities. Meet patients where they are.</p>
          </div>
          <div className="value-visual">
            <img src="/images/mockup-channels.png" alt="Multi-channel communication" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* ═══ Compare: Human vs Agent ═══ */}
      <section className="compare-section">
        <div className="w">
          <h2>Humans + Agents. The better way to staff.</h2>
          <div className="compare-grid">
            <div className="compare-card old">
              <div className="compare-label">Without Saga</div>
              <ul>
                <li>5-10 minute wait times for patients</li>
                <li>Staff repeating patient info multiple times per call</li>
                <li>Scheduling errors, no-shows, double books</li>
                <li>Manual care gap outreach (weeks delayed)</li>
                <li>Administrative burnout — "I got into healthcare to help people, not answer phones"</li>
                <li>Missed prior auth follow-ups</li>
              </ul>
            </div>
            <div className="compare-card new">
              <div className="compare-label">With Saga</div>
              <ul>
                <li>Instant answer — average response &lt; 2 seconds</li>
                <li>Full context loaded before the call starts</li>
                <li>Perfect scheduling, instant EHR sync, smart reminders</li>
                <li>Proactive outreach at scale, on cadence</li>
                <li>Staff focus on care, not triage — 30% more capacity</li>
                <li>Automated tracking, real-time alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Numbers ═══ */}
      <section className="numbers">
        <div className="w">
          <div className="numbers-row">
            <div>
              <div className="num-val">90%</div>
              <div className="num-label">Reduction in patient hold times</div>
            </div>
            <div>
              <div className="num-val">3x</div>
              <div className="num-label">Increase in screening completion</div>
            </div>
            <div>
              <div className="num-val">$50k+</div>
              <div className="num-label">Net revenue per deployment</div>
            </div>
            <div>
              <div className="num-val">48%</div>
              <div className="num-label">Increase in staff capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Testimonial ═══ */}
      <section className="testimonial">
        <div className="w">
          <div className="label">Customer Story</div>
          <blockquote>"We deployed Saga in two weeks. Within a month, we closed 240 quality measure gaps without hiring a single person. Our staff is happier, patients are happier, and we're actually making money on it."</blockquote>
          <cite>— Dr. Lisa Chen, Director of Operations, Town Center Pediatrics</cite>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="final-cta">
        <div className="w">
          <h2>Turn every patient conversation into a <em>lasting relationship.</em></h2>
          <p>Let Saga handle the routing and follow-ups. Your staff does what they do best — care.</p>
          <a href="#" className="cta-btn">Book a demo</a>
        </div>
      </section>
    </>
  );
}
