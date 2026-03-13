import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Insighto — AI-Powered People Search',
  description:
    'Discover anyone\'s public profile in seconds. AI-powered search across multiple engines delivers comprehensive people insights.',
  keywords: ['people search', 'AI search', 'person finder', 'public profile', 'Insighto'],
  openGraph: {
    title: 'Insighto — AI-Powered People Search',
    description: 'Discover anyone\'s public profile in seconds.',
    type: 'website',
    url: 'https://insighto.id',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insighto — AI-Powered People Search',
    description: 'Discover anyone\'s public profile in seconds.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var hash = window.location.hash;
                if (hash && hash.indexOf('type=recovery') !== -1 && window.location.pathname === '/') {
                  window.location.replace('/reset-password' + hash);
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
