import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Password — Insighto',
  description: 'Change your Insighto account password.',
};

export default function ChangePassword() {
  return (
    <main className="bg-dark text-white min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto prose-custom">
        <a href="/" className="text-primary text-sm hover:underline">
          ← Back to Home
        </a>

        <h1 className="text-4xl font-bold mt-6 mb-2">Change Password</h1>
        <p className="text-gray-400 text-sm mb-10">
          Keep your account secure by updating your password regularly.
        </p>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              How to Change Your Password
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the Insighto app</li>
              <li>
                Go to <strong className="text-white">Settings</strong> (gear
                icon in the top right)
              </li>
              <li>
                Tap on <strong className="text-white">Change Password</strong>
              </li>
              <li>Enter your current password</li>
              <li>Enter your new password</li>
              <li>Confirm your new password</li>
              <li>
                Tap <strong className="text-white">Save</strong>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Password Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Minimum 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Forgot Your Current Password?
            </h2>
            <p>
              If you don&apos;t remember your current password, you can reset it
              instead. Visit our{' '}
              <a
                href="/reset-password"
                className="text-primary hover:underline"
              >
                Reset Password
              </a>{' '}
              page for instructions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Signed In with Google or Apple?
            </h2>
            <p>
              If you use{' '}
              <strong className="text-white">Google Sign-In</strong> or{' '}
              <strong className="text-white">Sign in with Apple</strong>, your
              password is managed by Google or Apple respectively. To change it:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <strong className="text-white">Google:</strong> Go to{' '}
                myaccount.google.com → Security → Password
              </li>
              <li>
                <strong className="text-white">Apple:</strong> Go to Settings →
                Apple ID → Sign-In &amp; Security → Change Password
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Need Help?
            </h2>
            <p>
              If you&apos;re having trouble changing your password, contact us
              at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@insighto.id?subject=Change%20Password%20Help"
                className="text-primary hover:underline text-lg font-medium"
              >
                support@insighto.id
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
