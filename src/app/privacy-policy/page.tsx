import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Saga AI",
  description: "Privacy Policy for Saga Health, Inc.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
      <p className="text-saga-gray mb-12">Last updated: February 27, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-saga-gray">
            Saga Health, Inc. (&quot;Saga,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
            usesaga.ai and provides AI-powered patient communication services for healthcare organizations. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or
            use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="text-saga-gray mb-3">We may collect the following types of information:</p>
          <p className="text-saga-gray">
            <strong>Information you provide directly:</strong> When you request a demo, contact us, or sign up for our
            services, we may collect your name, email address, phone number, organization name, and job title.
          </p>
          <p className="text-saga-gray mt-3">
            <strong>Usage data:</strong> We automatically collect certain information when you visit our website,
            including your IP address, browser type, operating system, referring URLs, pages visited, and timestamps.
          </p>
          <p className="text-saga-gray mt-3">
            <strong>Protected Health Information (PHI):</strong> In the course of providing our services to healthcare
            organizations, we may process PHI on behalf of our clients as a Business Associate under HIPAA. This PHI is
            governed by our Business Associate Agreements and is never used for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="text-saga-gray">
            We use the information we collect to operate and improve our website and services, respond to your inquiries
            and demo requests, communicate with you about our services, comply with legal obligations, and protect
            against fraud and unauthorized access. We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. HIPAA Compliance</h2>
          <p className="text-saga-gray">
            Saga is committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA). When
            we process PHI on behalf of healthcare organizations, we do so under a signed Business Associate Agreement
            (BAA). We implement administrative, physical, and technical safeguards to protect the confidentiality,
            integrity, and availability of PHI in accordance with HIPAA requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Data Sharing and Disclosure</h2>
          <p className="text-saga-gray">
            We may share your information with service providers who assist in operating our website and services (such
            as hosting and analytics providers), as required by law or in response to valid legal process, and in
            connection with a merger, acquisition, or sale of assets. All service providers that handle PHI are required
            to enter into Business Associate Agreements with us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Data Security</h2>
          <p className="text-saga-gray">
            We use industry-standard security measures to protect your information, including encryption in transit and
            at rest, access controls, and regular security assessments. However, no method of transmission or storage is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
          <p className="text-saga-gray">
            We retain personal information for as long as necessary to provide our services and fulfill the purposes
            described in this policy, unless a longer retention period is required by law. PHI is retained in accordance
            with HIPAA requirements and our Business Associate Agreements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Your Rights</h2>
          <p className="text-saga-gray">
            Depending on your jurisdiction, you may have the right to access, correct, or delete your personal
            information, opt out of marketing communications, and request information about our data practices. To
            exercise these rights, please contact us at the information below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. SMS and Text Messaging</h2>
          <p className="text-saga-gray">
            Our services include AI-powered SMS communication with patients on behalf of healthcare organizations.
            Patients may opt out of text messages at any time by replying STOP. Message frequency varies. Message and
            data rates may apply. We do not send marketing text messages — all SMS communications are related to patient
            care coordination.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
          <p className="text-saga-gray">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
            the new policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="text-saga-gray">
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-saga-gray mt-2">
            Saga Health, Inc.
            <br />
            Email: privacy@usesaga.ai
          </p>
        </section>
      </div>
    </div>
  );
}
