export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-saga-gray mb-4">
              AI Agents for Healthcare
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-6">
              Your practice,
              <br />
              fully staffed
              <br />
              <span className="text-saga-lavender-dark">around the clock.</span>
            </h1>
            <p className="text-lg text-saga-gray max-w-md mb-8 leading-relaxed">
              Saga deploys AI-powered intake and outreach agents that handle patient communication — so your staff can
              focus on what matters most.
            </p>
            <div className="flex gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-saga-lavender text-saga-black font-medium hover:bg-saga-lavender-dark transition-colors"
              >
                Get a demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-gray-200 text-saga-black font-medium hover:border-gray-400 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-saga-gray-light rounded-2xl p-8 space-y-4">
              {/* SMS conversation mock */}
              <div className="flex justify-end">
                <div className="bg-saga-lavender rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]">
                  <p className="text-sm">
                    Hi Maria, this is a message from Dr. Chen&apos;s office. We noticed you&apos;re due for a routine
                    screening. Would you like help scheduling it? 📋
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 max-w-[80%]">
                  <p className="text-sm">Oh yes! I keep forgetting. Can you help me find somewhere close to me?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-saga-lavender rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]">
                  <p className="text-sm">
                    Absolutely! There&apos;s a center on Main St that has openings next week. Want me to send you the
                    details?
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 max-w-[80%]">
                  <p className="text-sm">Yes please! That would be great 🙏</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-xs text-saga-gray">Gap closed — screening scheduled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Agents ─── */}
      <section id="agents" className="py-24 bg-saga-gray-light">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium tracking-widest uppercase text-saga-gray mb-4 text-center">
            Two Agents, One Platform
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Meet your AI workforce
          </h2>
          <p className="text-saga-gray text-center max-w-2xl mx-auto mb-16">
            Deploy intake and outreach agents tailored to your practice. Each agent handles patient communication
            end-to-end, with staff stepping in only when it matters.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Intake Agent */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-saga-lavender-light flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-saga-lavender-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Intake Agent</h3>
              <p className="text-saga-gray mb-6 leading-relaxed">
                Answers calls 24/7, schedules appointments, handles insurance verification, and routes complex cases to
                your team — no hold times, no missed calls.
              </p>
              <ul className="space-y-3">
                {[
                  "Answer patient calls in seconds, not minutes",
                  "Schedule and reschedule appointments",
                  "Collect intake forms and insurance info",
                  "Triage urgent vs. routine requests",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-saga-lavender-dark mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-saga-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outreach Agent */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-saga-lavender-light flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-saga-lavender-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3">Outreach Agent</h3>
              <p className="text-saga-gray mb-6 leading-relaxed">
                Proactively reaches out to patients via text to close care gaps, coordinate screenings, and ensure
                follow-through — all HIPAA-compliant, all automated.
              </p>
              <ul className="space-y-3">
                {[
                  "Close quality measure gaps automatically",
                  "Coordinate screenings and referrals",
                  "Smart follow-up cadence (no spam)",
                  "Human review before every message sends",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-saga-lavender-dark mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-saga-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium tracking-widest uppercase text-saga-gray mb-4 text-center">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Live in days, not months
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Connect your systems",
                description:
                  "Link your EHR, phone lines, and text channels. Saga ingests your patient data and care gap lists securely.",
              },
              {
                step: "02",
                title: "Configure your agents",
                description:
                  "Set your practice's tone, protocols, and escalation rules. Every response is grounded in your guidelines and HIPAA-compliant by default.",
              },
              {
                step: "03",
                title: "Go live and optimize",
                description:
                  "Your agents start handling calls and texts immediately. Track performance in a real-time dashboard and fine-tune as you go.",
              },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-5xl font-serif font-bold text-saga-lavender-light mb-4">{item.step}</p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-saga-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Saga ─── */}
      <section id="why-saga" className="py-24 bg-saga-gray-light">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium tracking-widest uppercase text-saga-gray mb-4 text-center">
            Why Saga
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Built for healthcare, from day one
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "HIPAA compliant",
                description: "Every message is checked for compliance before it sends. BAA included.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
              {
                title: "Human in the loop",
                description: "AI drafts, your staff approves. Full control over every patient interaction.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
              },
              {
                title: "24/7 coverage",
                description: "Patients get answers evenings, weekends, and holidays. No overtime, no burnout.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: "Measurable ROI",
                description: "Track gap closure rates, response times, and staff hours saved in real time.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-saga-lavender-light flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-saga-lavender-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-saga-gray leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to staff up with AI?
          </h2>
          <p className="text-lg text-saga-gray mb-8 max-w-xl mx-auto">
            See how Saga&apos;s agents can handle patient intake and outreach for your practice. Book a 15-minute demo.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-saga-black text-white font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            Get a demo →
          </a>
        </div>
      </section>
    </>
  );
}
