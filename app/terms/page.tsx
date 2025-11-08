
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Autopilot',
  description: 'Terms and conditions for using Autopilot',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last updated: November 8, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using Autopilot, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                We grant you a personal, non-exclusive, non-transferable, limited license to use Autopilot for your business operations, subject to these Terms.
              </p>
              <p className="text-gray-700 mb-4">You may not:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Modify or copy our materials</li>
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to reverse engineer any aspect of Autopilot</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the service to another person or entity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                Autopilot provides AI-powered brand operation services, including but not limited to brand creation, ecommerce infrastructure, marketing automation, and conversion optimization. The service operates with human-in-loop oversight for major decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                Subscription fees are billed in advance on a monthly or annual basis. Revenue-share components, where applicable, are calculated and billed based on incremental revenue generated through the platform.
              </p>
              <p className="text-gray-700 mb-4">
                All fees are non-refundable except as required by law or explicitly stated in our refund policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Responsibilities</h2>
              <p className="text-gray-700 mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your use complies with applicable laws</li>
                <li>The accuracy of information you provide</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The service and its original content, features, and functionality are owned by Autopilot and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                Brand assets created for you through the platform are licensed to you for your use. You retain ownership of your business data and customer information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Autopilot shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. While we optimize for revenue growth, we make no guarantees of specific results.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms, contact us at:
              </p>
              <p className="text-gray-700">
                Email: legal@autopilot.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
