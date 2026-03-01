import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Consent & Opt-In Policy — Saga AI',
  description: 'Learn about Saga AI\'s SMS messaging practices, how to opt in and out, and your rights regarding text message communications.',
};

export default function SmsConsentPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-[720px] mx-auto px-10">
        <h1 className="font-display text-4xl font-bold mb-2">SMS Consent &amp; Opt-In Policy</h1>
        <p className="text-sm text-text-3 mb-10">Effective Date: March 1, 2026</p>

        <div className="space-y-8 text-text-2 leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">Overview</h2>
            <p>
              Saga Health, Inc. (&ldquo;Saga AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides AI-powered communication services on behalf of healthcare practices. This policy explains how we collect consent for, deliver, and manage SMS/text message communications sent to patients.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">What Messages You May Receive</h2>
            <p className="mb-3">When your healthcare provider uses Saga AI, you may receive text messages related to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Appointment scheduling, confirmations, and reminders</li>
              <li>Prescription refill notifications</li>
              <li>Care gap outreach (e.g., overdue screenings or follow-ups)</li>
              <li>Prior authorization updates</li>
              <li>Billing and payment reminders</li>
              <li>General practice communications</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">How You Opt In</h2>
            <p className="mb-3">You may opt in to receive SMS messages from Saga AI on behalf of your healthcare provider through any of the following methods:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li><strong className="text-text">In-person or verbal consent</strong> — When you provide your mobile number to your healthcare provider and agree to receive text messages</li>
              <li><strong className="text-text">Written consent</strong> — By signing a patient intake form, registration form, or consent form that includes SMS communication authorization</li>
              <li><strong className="text-text">Electronic consent</strong> — By entering your mobile number on a web form, patient portal, or online registration and agreeing to receive messages</li>
              <li><strong className="text-text">Text-based consent</strong> — By texting a keyword (e.g., &ldquo;START&rdquo; or &ldquo;YES&rdquo;) to a designated number</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">Message Frequency</h2>
            <p>
              Message frequency varies based on your interactions with your healthcare provider. You may receive multiple messages per week depending on your appointments, care plan, and practice communications. Message and data rates may apply depending on your carrier and plan.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">How to Opt Out</h2>
            <p className="mb-3">
              You can stop receiving SMS messages at any time by replying <strong className="text-text">STOP</strong> to any message you receive from us. You will receive a one-time confirmation message, and no further messages will be sent unless you opt in again.
            </p>
            <p>
              You may also contact your healthcare provider directly to request removal from SMS communications.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">Getting Help</h2>
            <p>
              For help or questions about our SMS messaging program, reply <strong className="text-text">HELP</strong> to any message, or contact us at{' '}
              <a href="mailto:support@usesaga.ai" className="text-accent underline">support@usesaga.ai</a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">Privacy &amp; Data Protection</h2>
            <p className="mb-3">
              Saga AI is committed to protecting your privacy. We are HIPAA-compliant and maintain a Business Associate Agreement (BAA) with all healthcare provider clients. Your phone number and message data are:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Never sold to third parties</li>
              <li>Never shared for marketing purposes</li>
              <li>Never used to train AI models</li>
              <li>Encrypted in transit and at rest</li>
              <li>Retained only as long as necessary for healthcare operations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">Supported Carriers</h2>
            <p>
              Our SMS services are compatible with all major US carriers including AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers. Carriers are not liable for delayed or undelivered messages.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-text mb-3">Contact Us</h2>
            <p>
              Saga Health, Inc.<br />
              Email: <a href="mailto:support@usesaga.ai" className="text-accent underline">support@usesaga.ai</a><br />
              Website: <a href="https://usesaga.ai" className="text-accent underline">usesaga.ai</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
