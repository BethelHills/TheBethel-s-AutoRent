import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EFFECTIVE_DATE = 'March 24, 2026';
const SUPPORT_EMAIL = 'support@thebethelsautorent.com';

export const metadata: Metadata = {
  title: 'Terms of Service – TheBethels AutoRent',
  description:
    'Terms of Service for TheBethels AutoRent: bookings, Stripe payments, cancellations, liability, and governing law.',
  openGraph: {
    title: 'Terms of Service – TheBethels AutoRent',
    description:
      'Rules for using our car rental platform — bookings, payments, cancellations, and your responsibilities.',
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

export default function TermsPage() {
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
            <span className="text-foreground font-600">Terms of Service</span>
          </nav>

          <header className="mb-10 sm:mb-12">
            <p className="text-sm font-700 text-primary uppercase tracking-wide mb-2">
              Terms of Service (Upgraded)
            </p>
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-3">
              TheBethels AutoRent – Terms of Service
            </h1>
            <p className="text-muted text-sm sm:text-base">
              Effective Date: <time dateTime="2026-03-24">{EFFECTIVE_DATE}</time>
            </p>
          </header>

          <div className="bg-card rounded-2xl border border-border/80 shadow-card px-6 sm:px-10 py-10 sm:py-12 space-y-0">
            <Section n={1} title="Agreement">
              <p>By using this platform, you agree to these terms.</p>
            </Section>

            <Rule />

            <Section n={2} title="Service Description">
              <p className="font-600 text-foreground">We provide a platform to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Browse available cars</li>
                <li>Make bookings</li>
                <li>Process payments</li>
              </ul>
            </Section>

            <Rule />

            <Section n={3} title="User Responsibilities">
              <p className="font-600 text-foreground">You agree to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate information</li>
                <li>Use the service legally</li>
                <li>Not misuse the platform</li>
              </ul>
            </Section>

            <Rule />

            <Section n={4} title="Bookings">
              <ul className="list-disc pl-5 space-y-1">
                <li>All bookings depend on availability</li>
                <li>Prices may change before confirmation</li>
                <li>Booking is confirmed only after payment</li>
              </ul>
            </Section>

            <Rule />

            <Section n={5} title="Payments">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Payments are processed via{' '}
                  <a
                    href="https://stripe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-600 hover:underline"
                  >
                    Stripe
                  </a>
                </li>
                <li>You must complete payment to confirm booking</li>
                <li>Failed payments will cancel the booking</li>
              </ul>
            </Section>

            <Rule />

            <Section n={6} title="Cancellations & Refunds">
              <ul className="list-disc pl-5 space-y-1">
                <li>Refund policies may vary</li>
                <li>You must review terms before booking</li>
                <li>Processing fees may apply</li>
              </ul>
            </Section>

            <Rule />

            <Section n={7} title="Third-Party Services">
              <p className="font-600 text-foreground">We are not responsible for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment provider issues</li>
                <li>External service failures</li>
              </ul>
            </Section>

            <Rule />

            <Section n={8} title="Limitation of Liability">
              <p className="font-600 text-foreground">We are not liable for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Loss of data</li>
                <li>Delays or disruptions</li>
                <li>Indirect damages</li>
              </ul>
            </Section>

            <Rule />

            <Section n={9} title="Intellectual Property">
              <p>All content, design, and branding belong to TheBethels AutoRent.</p>
            </Section>

            <Rule />

            <Section n={10} title="Account Security">
              <p className="font-600 text-foreground">You are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Keeping your login details safe</li>
                <li>Activities under your account</li>
              </ul>
            </Section>

            <Rule />

            <Section n={11} title="Termination">
              <p>We may suspend access if terms are violated.</p>
            </Section>

            <Rule />

            <Section n={12} title="Governing Law">
              <p>These terms are governed by the laws of The United States Of America.</p>
            </Section>

            <Rule />

            <Section n={13} title="Updates">
              <p>We may update these terms at any time.</p>
            </Section>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Questions?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
              {SUPPORT_EMAIL}
            </a>
            {' · '}
            <Link href="/privacy" className="text-primary font-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
