import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password — Insighto',
  description: 'Reset your Insighto account password.',
};

export default function ResetPassword() {
  return (
    <main className="bg-dark text-white min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto prose-custom">
        <a href="/" className="text-primary text-sm hover:underline">
          ← Back to Home
        </a>

        <h1 className="text-4xl font-bold mt-6 mb-2">Reset Password</h1>
        <p className="text-gray-400 text-sm mb-10">
          Forgot your password? Here&apos;s how to get back into your account.
        </p>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              How to Reset Your Password
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the Insighto app</li>
              <li>
                On the login screen, tap{' '}
                <strong className="text-white">Forgot Password?</strong>
              </li>
              <li>Enter the email address associated with your account</li>
              <li>
                Check your email for a password reset link from Insighto
              </li>
              <li>Tap the link and create a new password</li>
              <li>Log in with your new password</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Didn&apos;t Receive the Email?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Check your spam or junk folder</li>
              <li>
                Make sure you entered the correct email address associated with
                your account
              </li>
              <li>Wait a few minutes — it can take up to 5 minutes to arrive</li>
              <li>Try requesting a new reset link</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Signed In with Google or Apple?
            </h2>
            <p>
              If you signed up using{' '}
              <strong className="text-white">Google Sign-In</strong> or{' '}
              <strong className="text-white">Sign in with Apple</strong>, you
              don&apos;t have an Insighto password. Simply tap the same sign-in
              option on the login screen to access your account. To change your
              Google or Apple password, visit your respective account settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Still Having Trouble?
            </h2>
            <p>
              If you&apos;re unable to reset your password, contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@insighto.id?subject=Password%20Reset%20Help"
                className="text-primary hover:underline text-lg font-medium"
              >
                support@insighto.id
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Please include the email address associated with your account so
              we can help you faster.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
