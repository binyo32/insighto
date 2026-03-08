import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Insighto',
  description: 'Terms of Service for the Insighto app.',
};

export default function TermsOfService() {
  return (
    <main className="bg-dark text-white min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto prose-custom">
        <a href="/" className="text-primary text-sm hover:underline">
          ← Back to Home
        </a>

        <h1 className="text-4xl font-bold mt-6 mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">
          Last updated: March 8, 2026
        </p>

        <section className="space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the Insighto application
              (&quot;Service&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to these Terms,
              do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              Insighto is an AI-powered people search application that
              aggregates publicly available information from the internet to
              create organized profiles. The Service uses artificial
              intelligence to search, analyze, and summarize publicly available
              data about individuals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. User Accounts
            </h2>
            <p>
              To use the Service, you must create an account using Google
              Sign-In or Sign in with Apple. You are responsible for
              maintaining the security of your account. You must be at least 13
              years old to use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Acceptable Use
            </h2>
            <p>You agree NOT to use the Service to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Stalk, harass, or threaten any individual</li>
              <li>Engage in any form of discrimination or hate speech</li>
              <li>
                Conduct background checks for employment, housing, or credit
                decisions (the Service is NOT a consumer reporting agency under
                the FCRA)
              </li>
              <li>Violate any applicable laws or regulations</li>
              <li>
                Collect or scrape data from the Service for commercial purposes
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or hack the Service
              </li>
              <li>Impersonate any person or entity</li>
              <li>
                Use automated tools, bots, or scripts to access the Service
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Subscriptions & In-App Purchases
            </h2>
            <h3 className="text-lg font-medium text-white/90 mb-2">
              5.1 Free Tier
            </h3>
            <p>
              The Service offers a free tier with limited daily searches and
              basic profile sections.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              5.2 Paid Subscriptions
            </h3>
            <p>
              Premium, Pro, and Ultra subscription tiers are available as
              monthly or yearly auto-renewing subscriptions. Subscriptions are
              processed through the Apple App Store or Google Play Store.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              5.3 Auto-Renewal
            </h3>
            <p>
              Subscriptions automatically renew unless cancelled at least 24
              hours before the end of the current period. You can manage and
              cancel your subscription in your device&apos;s App Store or
              Google Play settings.
            </p>

            <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">
              5.4 Refunds
            </h3>
            <p>
              Refunds are handled by Apple or Google according to their
              respective refund policies. We do not process refunds directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Accuracy of Information
            </h2>
            <p>
              The Service aggregates publicly available information using AI.
              We do NOT guarantee the accuracy, completeness, or timeliness of
              any information provided. Profiles generated by the Service are
              for informational purposes only and should not be used as the
              sole basis for any decision.
            </p>
            <p className="mt-2">
              AI-generated content may contain errors, inaccuracies, or
              outdated information. Users should independently verify any
              information obtained through the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Intellectual Property
            </h2>
            <p>
              The Service, including its design, features, code, and AI models,
              is owned by Insighto and is protected by intellectual property
              laws. You may not copy, modify, distribute, or create derivative
              works based on the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, INSIGHTO SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
              DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE
              OF THE SERVICE.
            </p>
            <p className="mt-2">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID
              FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Disclaimer of Warranties
            </h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account at any
              time if you violate these Terms. Upon termination, your right to
              use the Service will immediately cease. You may also delete your
              account at any time through the app settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of Indonesia, without regard to conflict
              of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Service after changes constitutes acceptance of the updated
              Terms. We will provide notice of significant changes via the app
              or email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us
              at:
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
