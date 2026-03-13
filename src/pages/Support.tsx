export default function Support() {
  return (
    <main className="bg-dark text-white min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto prose-custom">
        <a href="/" className="text-primary text-sm hover:underline">
          &larr; Back to Home
        </a>

        <h1 className="text-4xl font-bold mt-6 mb-2">Support</h1>
        <p className="text-gray-400 text-sm mb-10">
          We&apos;re here to help you get the most out of Insighto.
        </p>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              For any questions, issues, or feedback, reach out to us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@insighto.id"
                className="text-primary hover:underline text-lg font-medium"
              >
                support@insighto.id
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-400">
              We aim to respond within 24-48 hours.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-medium text-white">
                  What is Insighto?
                </h3>
                <p className="mt-1">
                  Insighto is an AI-powered people search app. Enter any
                  person&apos;s name and our AI aggregates publicly available
                  information from multiple search engines into one organized
                  profile, including background, education, career, social
                  media, and more.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  Is Insighto free?
                </h3>
                <p className="mt-1">
                  Yes! Insighto offers a free tier with basic searches. For
                  more searches per day and access to all profile sections, you
                  can upgrade to Premium, Pro, or Ultra.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  Where does Insighto get its information?
                </h3>
                <p className="mt-1">
                  Insighto only uses publicly available information from the
                  internet. Our AI searches multiple search engines and
                  aggregates the results. We do not access any private or
                  restricted databases.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  Is the information accurate?
                </h3>
                <p className="mt-1">
                  Insighto uses AI to aggregate publicly available data. While
                  we strive for accuracy, AI-generated profiles may contain
                  errors or outdated information. Always verify important
                  information independently.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  How do I cancel my subscription?
                </h3>
                <p className="mt-1">
                  Subscriptions are managed through your device&apos;s app
                  store:
                </p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>
                    <strong className="text-white">iOS:</strong> Settings &rarr;
                    Apple ID &rarr; Subscriptions &rarr; Insighto &rarr; Cancel
                  </li>
                  <li>
                    <strong className="text-white">Android:</strong> Google
                    Play &rarr; Payments &amp; subscriptions &rarr; Subscriptions &rarr;
                    Insighto &rarr; Cancel
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  How do I delete my account?
                </h3>
                <p className="mt-1">
                  You can delete your account from the app (Settings &rarr; Account
                  &rarr; Delete Account) or by emailing us. See our{' '}
                  <a
                    href="/delete-account"
                    className="text-primary hover:underline"
                  >
                    Account Deletion page
                  </a>{' '}
                  for full instructions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  Can I request a refund?
                </h3>
                <p className="mt-1">
                  Refunds are handled by Apple App Store or Google Play Store
                  according to their respective policies. Please contact Apple
                  or Google support for refund requests.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white">
                  Is my data safe?
                </h3>
                <p className="mt-1">
                  Yes. We use encryption in transit and at rest to protect your
                  data. We do not sell your personal information. See our{' '}
                  <a
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </a>{' '}
                  for details.
                </p>
              </div>
            </div>
          </div>

          {/* Bug Report */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Report a Bug
            </h2>
            <p>
              Found a bug or something not working? Please email us at{' '}
              <a
                href="mailto:support@insighto.id?subject=Bug%20Report"
                className="text-primary hover:underline"
              >
                support@insighto.id
              </a>{' '}
              with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your device model and OS version</li>
              <li>App version (found in Settings &rarr; About)</li>
              <li>Steps to reproduce the issue</li>
              <li>Screenshots if possible</li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
