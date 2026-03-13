import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Account — Insighto',
  description:
    'Instructions for deleting your Insighto account and all associated data.',
};

export default function DeleteAccount() {
  return (
    <main className="bg-dark text-white min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto prose-custom">
        <a href="/" className="text-primary text-sm hover:underline">
          ← Back to Home
        </a>

        <h1 className="text-4xl font-bold mt-6 mb-2">
          Account &amp; Data Deletion
        </h1>
        <p className="text-gray-400 text-sm mb-10">
          Last updated: March 8, 2026
        </p>

        <section className="space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              How to Delete Your Account
            </h2>
            <p>
              You can delete your Insighto account and all associated data at
              any time. There are two ways to do this:
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Option 1: Delete from the App
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the Insighto app</li>
              <li>
                Go to <strong className="text-white">Settings</strong> (gear
                icon in the top right)
              </li>
              <li>
                Tap on <strong className="text-white">Account</strong>
              </li>
              <li>
                Tap{' '}
                <strong className="text-red-400">Delete Account</strong>
              </li>
              <li>Confirm the deletion when prompted</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Option 2: Request via Email
            </h2>
            <p>
              If you are unable to access the app, you can request account
              deletion by sending an email to:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@insighto.id?subject=Account%20Deletion%20Request"
                className="text-primary hover:underline text-lg font-medium"
              >
                support@insighto.id
              </a>
            </p>
            <p className="mt-2">
              Please include the email address associated with your account in
              your request. We will process your request within 7 business
              days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              What Data Is Deleted
            </h2>
            <p>When you delete your account, the following data is removed:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Your profile information (name, email, profile picture)</li>
              <li>Search history and cached results</li>
              <li>Subscription and purchase records</li>
              <li>Device registration data</li>
              <li>Usage statistics tied to your account</li>
              <li>All preferences and settings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Retention After Deletion
            </h2>
            <p>
              After account deletion, all your personal data will be
              permanently removed from our servers within{' '}
              <strong className="text-white">30 days</strong>. Some anonymized,
              aggregated data (e.g., total usage statistics that cannot be
              linked back to you) may be retained for service improvement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Cancel Your Subscription First
            </h2>
            <p>
              Deleting your account does{' '}
              <strong className="text-white">not</strong> automatically cancel
              your subscription. To avoid being charged, please cancel your
              subscription before deleting your account:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <strong className="text-white">iOS:</strong> Settings → Apple
                ID → Subscriptions → Insighto → Cancel
              </li>
              <li>
                <strong className="text-white">Android:</strong> Google Play →
                Payments &amp; subscriptions → Subscriptions → Insighto →
                Cancel
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Questions?
            </h2>
            <p>
              If you have any questions about the deletion process, please
              contact us at{' '}
              <a
                href="mailto:support@insighto.id"
                className="text-primary hover:underline"
              >
                support@insighto.id
              </a>
              .
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
