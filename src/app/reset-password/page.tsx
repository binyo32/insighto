'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Eye, EyeOff, Check, X, Loader2 } from 'lucide-react';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'submitting' | 'success' | 'error' | 'invalid'>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === 'PASSWORD_RECOVERY') {
          setStatus('ready');
        }
      }
    );

    // Check if already in a recovery session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setStatus('ready');
      } else {
        // Give time for the auth state change event
        setTimeout(() => {
          setStatus((prev) => (prev === 'loading' ? 'invalid' : prev));
        }, 3000);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const isValidPassword = password.length >= 8;
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;
  const canSubmit = isValidPassword && passwordsMatch;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus('ready');
      setErrorMsg(error.message);
    } else {
      setStatus('success');
    }
  }

  return (
    <main className="bg-dark text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-white">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Insighto</h1>
        </div>

        {/* Loading */}
        {status === 'loading' && (
          <div className="glass-card p-8 text-center">
            <Loader2 size={32} className="animate-spin text-primary mx-auto mb-4" />
            <p className="text-gray-400">Verifying reset link...</p>
          </div>
        )}

        {/* Invalid / expired link */}
        {status === 'invalid' && (
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/15 flex items-center justify-center">
              <X size={32} className="text-red-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Invalid or Expired Link</h2>
            <p className="text-gray-400 mb-6">
              This password reset link is invalid or has expired. Please request a new one from the app.
            </p>
            <a
              href="mailto:support@insighto.id?subject=Password%20Reset%20Help"
              className="text-primary hover:underline text-sm"
            >
              Need help? Contact support@insighto.id
            </a>
          </div>
        )}

        {/* Reset form */}
        {(status === 'ready' || status === 'submitting') && (
          <div className="glass-card p-8">
            <h2 className="text-xl font-semibold text-center mb-2">Reset Your Password</h2>
            <p className="text-gray-400 text-sm text-center mb-6">
              Enter your new password below.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors pr-12"
                    disabled={status === 'submitting'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className={`flex items-center gap-1.5 mt-1.5 text-xs ${isValidPassword ? 'text-green-400' : 'text-gray-500'}`}>
                    {isValidPassword ? <Check size={12} /> : <X size={12} />}
                    Minimum 8 characters
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors pr-12"
                    disabled={status === 'submitting'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {confirmPassword.length > 0 && (
                  <div className={`flex items-center gap-1.5 mt-1.5 text-xs ${passwordsMatch ? 'text-green-400' : 'text-red-400'}`}>
                    {passwordsMatch ? <Check size={12} /> : <X size={12} />}
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit || status === 'submitting'}
                className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Updating...
                  </>
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>
          </div>
        )}

        {/* Success */}
        {status === 'success' && (
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/15 flex items-center justify-center">
              <Check size={32} className="text-green-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Password Updated!</h2>
            <p className="text-gray-400 mb-6">
              Your password has been successfully reset. You can now log in to the Insighto app with your new password.
            </p>
            <p className="text-gray-500 text-sm">
              You can close this page.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
