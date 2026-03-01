import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Saga AI",
  description: "Terms of Service for Saga Health, Inc.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-display font-bold mb-2">Terms of Service</h1>
      <p className="text-text-2 mb-12">Last updated: February 27, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-text-2">
            By accessing or using the website usesaga.ai and the services provided by Saga Health, Inc.
            (&quot;Saga,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Description of Services</h2>
          <p className="text-text-2">
            Saga provides AI-powered patient communication agents for healthcare organizations. Our services include
            automated patient intake via phone, proactive patient outreach via SMS for care gap closure and appointment
            coordination, a dashboard for managing patient conversations and reviewing agent-drafted messages, and
            integration with healthcare systems and communication platforms. Our services are designed for use by
            healthcare organizations and their authorized personnel. Saga is not a healthcare provider and does not
            provide medical advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Eligibility</h2>
          <p className="text-text-2">
            Our services are intended for use by healthcare organizations, including but not limited to physician
            practices, accountable care organizations (ACOs), health systems, and their authorized representatives. By
            using our services, you represent that you have the authority to bind the organization you represent to these
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Account Responsibilities</h2>
          <p className="text-text-2">
            You are responsible for maintaining the confidentiality of your account credentials, all activities that
            occur under your account, ensuring that your use of our services complies with all applicable laws and
            regulations including HIPAA, and providing accurate and complete information when setting up and configuring
            our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. HIPAA and Compliance</h2>
          <p className="text-text-2">
            Saga will enter into a Business Associate Agreement (BAA) with each healthcare organization that uses our
            services to process Protected Health Information (PHI). We maintain administrative, physical, and technical
            safeguards as required by HIPAA. You acknowledge that you are responsible for ensuring that your use of our
            services complies with your organization&apos;s HIPAA policies and applicable state and federal regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. SMS Communications</h2>
          <p className="text-text-2">
            Our services involve sending SMS messages to patients on your behalf. You represent that you have obtained
            appropriate consent from patients to receive text messages, that all SMS communications comply with
            applicable laws including the Telephone Consumer Protection Act (TCPA), and that you will honor patient
            opt-out requests promptly. Saga implements automatic opt-out processing when a patient replies STOP. Message
            and data rates may apply to message recipients.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
          <p className="text-text-2">
            All content, features, and functionality of our website and services — including but not limited to text,
            graphics, logos, software, and AI models — are owned by Saga Health, Inc. and are protected by copyright,
            trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative
            works from our content without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Data Ownership</h2>
          <p className="text-text-2">
            You retain ownership of all patient data and PHI that you provide to us or that is generated through your
            use of our services. Saga does not claim ownership of your data. We process your data solely to provide and
            improve our services, as described in our Privacy Policy and any applicable BAA.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Limitation of Liability</h2>
          <p className="text-text-2">
            To the maximum extent permitted by law, Saga shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your use of our services. Our total
            liability shall not exceed the amount you paid us in the twelve months preceding the claim. Saga is not
            responsible for clinical decisions made based on information provided by our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">10. Disclaimer of Warranties</h2>
          <p className="text-text-2">
            Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            either express or implied. We do not warrant that our services will be uninterrupted, error-free, or
            completely secure. Saga does not provide medical advice, and our AI agents are not a substitute for
            professional medical judgment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">11. Termination</h2>
          <p className="text-text-2">
            Either party may terminate these terms upon thirty (30) days written notice. We may suspend or terminate
            your access to our services immediately if you breach these terms or if required by law. Upon termination,
            we will provide you with access to your data for a reasonable period and will delete or return PHI in
            accordance with our BAA.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
          <p className="text-text-2">
            These terms shall be governed by and construed in accordance with the laws of the State of California,
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">13. Changes to These Terms</h2>
          <p className="text-text-2">
            We may update these Terms of Service from time to time. We will notify you of material changes by posting
            the updated terms on our website and updating the &quot;Last updated&quot; date. Your continued use of our
            services after changes are posted constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">14. Contact Us</h2>
          <p className="text-text-2">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-text-2 mt-2">
            Saga Health, Inc.
            <br />
            Email: legal@usesaga.ai
          </p>
        </section>
      </div>
    </div>
  );
}
