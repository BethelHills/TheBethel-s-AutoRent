import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EFFECTIVE_DATE = 'March 24, 2026';
const SUPPORT_EMAIL = 'support@thebethelsautorent.com';

export const metadata: Metadata = {
  title: 'Privacy Policy – TheBethels AutoRent',
  description:
    'Privacy Policy (GDPR & Stripe): how TheBethels AutoRent collects, uses, and protects your data.',
  openGraph: {
    title: 'Privacy Policy – TheBethels AutoRent',
    description:
      'How we collect, use, and protect your personal data — GDPR, Stripe payments, cookies, and your rights.',
  },
};

function Section({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="scroll-mt-28">
      <h2 className="font-display font-800 text-xl sm:text-2xl text-foreground mb-4">
        {n}. {title}
      </h2>
      <div className="text-muted text-[15px] sm:text-base leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

function Rule() {
  return <div className="my-10 sm:my-12 h-px w-full bg-border max-w-md" aria-hidden />;
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F7F6F3_0%,#FAFAF8_45%,#F3F2EE_100%)]">
      <Header variant="solid" />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span aria-hidden className="text-muted/60">
              /
            </span>
            <span className="text-foreground font-600">Privacy Policy</span>
          </nav>

          <header className="mb-10 sm:mb-12">
            <p className="text-sm font-700 text-primary uppercase tracking-wide mb-2">
              Privacy Policy (Upgraded – GDPR + Stripe)
            </p>
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-3">
              TheBethels AutoRent – Privacy Policy
            </h1>
            <p className="text-muted text-sm sm:text-base">
              Effective Date: <time dateTime="2026-03-24">{EFFECTIVE_DATE}</time>
            </p>
          </header>

          <div className="bg-card rounded-2xl border border-border/80 shadow-card px-6 sm:px-10 py-10 sm:py-12 space-y-0">
            <Section n={1} title="Who We Are">
              <p>
                TheBethels AutoRent provides an online platform for car rental bookings and payments.
              </p>
              <p>
                Contact:{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </Section>

            <Rule />

            <Section n={2} title="Information We Collect">
              <p className="font-600 text-foreground">We collect:</p>
              <div>
                <p className="font-600 text-foreground mb-2">Personal Data</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                </ul>
              </div>
              <div>
                <p className="font-600 text-foreground mb-2">Booking Data</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pickup and return dates</li>
                  <li>Location</li>
                  <li>Selected vehicle</li>
                </ul>
              </div>
              <div>
                <p className="font-600 text-foreground mb-2">Payment Data</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Payments are processed by third-party providers (e.g. Stripe)</li>
                  <li>We do not store full card details</li>
                </ul>
              </div>
              <div>
                <p className="font-600 text-foreground mb-2">Technical Data</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device info</li>
                  <li>Usage activity</li>
                </ul>
              </div>
            </Section>

            <Rule />

            <Section n={3} title="How We Use Your Data">
              <p className="font-600 text-foreground">We use your data to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Process bookings and payments</li>
                <li>Send booking confirmations</li>
                <li>Provide customer support</li>
                <li>Improve our platform</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </Section>

            <Rule />

            <Section n={4} title="Legal Basis (GDPR)">
              <p className="font-600 text-foreground">We process your data under:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contract (to complete your booking)</li>
                <li>Legitimate interest (improving service)</li>
                <li>Legal obligation (compliance)</li>
                <li>Consent (marketing emails, if applicable)</li>
              </ul>
            </Section>

            <Rule />

            <Section n={5} title="Payments (Stripe)">
              <p>Payments are securely handled by Stripe.</p>
              <p>
                Stripe may collect and process your payment data according to their privacy policy:{' '}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-600 hover:underline"
                >
                  stripe.com/privacy
                </a>
                .
              </p>
              <p>We do not store sensitive payment information.</p>
            </Section>

            <Rule />

            <Section n={6} title="Data Sharing">
              <p className="font-600 text-foreground">We may share data with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment processors (Stripe)</li>
                <li>Hosting providers</li>
                <li>Analytics tools</li>
                <li>Legal authorities (if required)</li>
              </ul>
              <p className="font-600 text-foreground pt-2">We do not sell your data.</p>
            </Section>

            <Rule />

            <Section n={7} title="International Data Transfers">
              <p>
                Your data may be processed outside your country. We ensure appropriate safeguards are in place.
              </p>
            </Section>

            <Rule />

            <Section n={8} title="Data Retention">
              <p className="font-600 text-foreground">We keep your data only as long as necessary for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bookings</li>
                <li>Legal requirements</li>
                <li>Business operations</li>
              </ul>
            </Section>

            <Rule />

            <Section n={9} title="Your Rights (GDPR)">
              <p className="font-600 text-foreground">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access your data</li>
                <li>Correct your data</li>
                <li>Delete your data</li>
                <li>Restrict processing</li>
                <li>Withdraw consent</li>
              </ul>
              <p>
                To request this, contact:{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </Section>

            <Rule />

            <Section n={10} title="Cookies">
              <p className="font-600 text-foreground">We use cookies to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Improve user experience</li>
                <li>Track usage</li>
                <li>Enable core functionality</li>
              </ul>
            </Section>

            <Rule />

            <Section n={11} title="Security">
              <p>We apply industry-standard security measures, but no system is fully secure.</p>
            </Section>

            <Rule />

            <Section n={12} title="Updates">
              <p>We may update this policy. Changes will be posted here.</p>
            </Section>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Questions?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
              {SUPPORT_EMAIL}
            </a>
            {' · '}
            <Link href="/terms" className="text-primary font-600 hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
