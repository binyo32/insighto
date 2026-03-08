'use client';

import {
  Search,
  Brain,
  Shield,
  Zap,
  Star,
  Globe,
  Newspaper,
  Users,
  ChevronRight,
  Check,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

/* ─────────────── Hero ─────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8">
          <Sparkles size={16} />
          <span>AI-Powered People Search</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Discover Anyone&apos;s
          <br />
          <span className="gradient-text">Public Profile</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Search any name and let AI aggregate results from multiple engines
          into one comprehensive, easy-to-read profile — in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            Download Free
            <ArrowRight size={20} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-white/25 text-white font-semibold text-lg transition-all"
          >
            See Features
            <ChevronRight size={20} />
          </a>
        </div>

        {/* Floating mockup placeholder */}
        <div className="mt-16 relative">
          <div className="glass-card max-w-md mx-auto p-6 animate-float">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Search size={20} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Your Crush</div>
                <div className="text-gray-400 text-sm">
                  AI-generated profile
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                'Background & Education',
                'Career & Professional',
                'Social Presence',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <Check size={14} className="text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Features ─────────────── */

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    desc: 'Advanced AI reads, understands and summarizes data from dozens of sources into one clean profile.',
  },
  {
    icon: Globe,
    title: 'Multi-Engine Search',
    desc: 'Simultaneously queries Google, Bing, DuckDuckGo and more for the most comprehensive results.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'Get a full profile in seconds — no manual browsing or cross-referencing needed.',
  },
  {
    icon: Shield,
    title: 'Privacy-Focused',
    desc: 'Only aggregates publicly available information. Your searches stay private.',
  },
  {
    icon: Newspaper,
    title: 'Hot News Feed',
    desc: 'Stay up-to-date with a trending news section about people in the spotlight.',
  },
  {
    icon: Users,
    title: 'Profile Sections',
    desc: 'Background, education, career, social media, fun facts, personality insights and more.',
  },
];

function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-dark-surface/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to find and understand public information about
            anyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="feature-card glass-card p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── How It Works ─────────────── */

const steps = [
  {
    num: '01',
    title: 'Search a Name',
    desc: 'Type any person\'s name. Add optional details like location or job for even better results.',
    icon: Search,
  },
  {
    num: '02',
    title: 'AI Analyzes',
    desc: 'Our AI searches multiple engines, reads hundreds of results and compiles the data.',
    icon: Brain,
  },
  {
    num: '03',
    title: 'Get the Profile',
    desc: 'Receive a clean, organized profile with background, career, social links and more.',
    icon: Star,
  },
];

function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps to a complete people profile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-all">
                <s.icon size={32} className="text-primary" />
              </div>
              <span className="text-5xl font-bold text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 select-none">
                {s.num}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Pricing ─────────────── */

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    desc: 'Get started and explore basic profiles.',
    features: [
      'Basic people search',
      'Limited searches per day',
      'Summary profile sections',
      'Hot News feed',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$5.99',
    period: '/month',
    desc: 'More searches a day, with 3 profiles per search.',
    features: [
      'More searches a day',
      '3 profiles per search',
      'Background & Education',
      'Career & Professional',
      'Social Media Links',
      'Priority support',
    ],
    cta: 'Upgrade to Premium',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$12.99',
    period: '/month',
    desc: '5× more searches a day with full profile access.',
    features: [
      '5× more searches a day',
      'Full profile access',
      'Fun Facts & Personality',
      'Controversies & Analysis',
      'All Premium features',
      'Priority search queue',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
  },
  {
    name: 'Ultra',
    price: '$19.99',
    period: '/month',
    desc: '25× more searches a day with full access to everything.',
    features: [
      '25× more searches a day',
      'Everything in Pro',
      'Maximum daily quota',
      'Fastest AI processing',
      'Early access to new features',
      'VIP support',
    ],
    cta: 'Go Ultra',
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-dark-surface/50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Start free, upgrade when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`glass-card p-6 flex flex-col ${
                t.popular ? 'pricing-popular' : ''
              }`}
            >
              {t.popular && (
                <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{t.name}</h3>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-bold text-white">
                  {t.price}
                </span>
                {t.period && (
                  <span className="text-gray-400 text-sm">{t.period}</span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-6">{t.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <Check
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`w-full py-3 rounded-xl font-semibold text-center transition-all ${
                  t.popular
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25'
                    : 'border border-white/10 hover:border-white/25 text-white'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Download CTA ─────────────── */

function Download() {
  return (
    <section id="download" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card p-12 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/15 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to <span className="gradient-text">Discover?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Download Insighto now and start exploring public profiles with the
              power of AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* App Store */}
              <a
                href="https://apps.apple.com/app/insighto/id6760248540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-white font-semibold text-lg -mt-0.5">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.Insighto.Anything"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33c.576.334.576 1.17 0 1.504L17.7 13.67 15.2 11.17l2.498-1.662zM5.864 2.658L16.8 9.49l-2.498 2.498-8.438-8.33z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-white font-semibold text-lg -mt-0.5">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row — branding + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Search size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl">Insighto</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI-powered people search. Discover public profiles in seconds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">Download</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/delete-account" className="hover:text-white transition-colors">Delete Account</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/support" className="hover:text-white transition-colors">Help &amp; FAQ</a>
              </li>
              <li>
                <a href="mailto:support@insighto.app" className="hover:text-white transition-colors">support@insighto.app</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row — copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Insighto. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="/support" className="hover:text-gray-300 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── Page ─────────────── */

export default function Home() {
  return (
    <main className="bg-dark text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Search size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-xl">Insighto</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a
              href="#features"
              className="hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#download"
              className="px-5 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
}
