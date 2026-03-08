import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Insighto',
  description: 'Privacy Policy for the Insighto app.',
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-dark text-white min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto prose-custom">
        <a href="/" className="text-primary text-sm hover:underline">
          ← Back to Home
        </a>

        <h1 className="text-4xl font-bold mt-6 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">
          Last updated: March 8, 2026
        </p>

        <section className="space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Insighto (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              operates the Insighto mobile application (the
              &quot;Service&quot;). This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-white/90 mb-2">
              2.1 Account Information
            </h3>
            <p>
              When you sign in using Google Sign-In or Sign in with Apple, we
              receive your name, email address, and profile picture from the
              identity provider. We store this information to manage your
              account and provide the Service.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              2.2 Search Queries
            </h3>
            <p>
              When you perform a people search, your search query (the name you
              entered) is sent to our servers to process the request. We may
              store anonymized search data to improve our AI models and service
              quality. We do not associate search queries with your personal
              identity for advertising purposes.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              2.3 Device Information
            </h3>
            <p>
              We collect device identifiers, operating system version, app
              version, and language preferences to provide technical support,
              enforce subscription limits, and improve the Service.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              2.4 Purchase Information
            </h3>
            <p>
              When you make an in-app purchase, the transaction is processed by
              Apple App Store or Google Play Store. We receive a purchase
              receipt/token to verify your subscription status. We do not
              collect or store your payment card details.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              2.5 Usage Data
            </h3>
            <p>
              We collect aggregated usage statistics such as daily search
              counts, feature usage, and app session data to improve the
              Service. This data is not used to personally identify you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide, maintain, and improve the Service</li>
              <li>To manage your account and subscription</li>
              <li>To process and verify in-app purchases</li>
              <li>
                To enforce usage limits based on your subscription tier
              </li>
              <li>To send important service-related notices</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Sharing
            </h2>
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <strong className="text-white">Supabase</strong> — our backend
                infrastructure provider for authentication and data storage
              </li>
              <li>
                <strong className="text-white">AI Service Providers</strong> —
                to process search queries (queries are sent without your
                personal identity)
              </li>
              <li>
                <strong className="text-white">
                  Apple / Google
                </strong>{' '}
                — for purchase verification
              </li>
              <li>
                <strong className="text-white">Firebase</strong> — for
                analytics and crash reporting
              </li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your account information for as long as your account is
              active. Search history is retained for up to 30 days for caching
              purposes, then automatically deleted. If you delete your account,
              all associated data will be removed within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your information, including encryption in
              transit (TLS/SSL) and at rest. However, no method of electronic
              storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{' '}
              <a
                href="mailto:support@insighto.app"
                className="text-primary hover:underline"
              >
                support@insighto.app
              </a>{' '}
              or use the account deletion feature within the app (Settings →
              Account → Delete Account).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              The Service is not intended for children under 13. We do not
              knowingly collect personal information from children under 13. If
              we discover that a child under 13 has provided us with personal
              information, we will delete it immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Third-Party Links
            </h2>
            <p>
              The Service may contain links to third-party websites or
              services. We are not responsible for the privacy practices of
              these third parties. We encourage you to review their privacy
              policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new policy
              in the app or via email. Your continued use of the Service after
              changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:support@insighto.app"
                className="text-primary hover:underline"
              >
                support@insighto.app
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
