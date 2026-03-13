import { Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="bg-dark text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8">
          <Search size={28} className="text-white" />
        </div>

        <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
