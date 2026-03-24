import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EFFECTIVE_DATE = 'March 24, 2026';
const SUPPORT_EMAIL = 'support@thebethelsautorent.com';

export const metadata: Metadata = {
  title: 'Refund Policy – TheBethels AutoRent',
  description:
    'Refund and cancellation policy for TheBethels AutoRent: eligibility, timing, fees, and how to contact us.',
  openGraph: {
    title: 'Refund Policy – TheBethels AutoRent',
    description:
      'Fair and transparent refunds — cancellations, eligibility, processing time, and support.',
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

export default function RefundPolicyPage() {
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
            <span className="text-foreground font-600">Refund Policy</span>
          </nav>

          <header className="mb-10 sm:mb-12">
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-3">
              Refund Policy
            </h1>
            <p className="text-muted text-sm sm:text-base">
              Effective Date: <time dateTime="2026-03-24">{EFFECTIVE_DATE}</time>
            </p>
          </header>

          <div className="bg-card rounded-2xl border border-border/80 shadow-card px-6 sm:px-10 py-10 sm:py-12 space-y-0">
            <p className="text-muted text-[15px] sm:text-base leading-relaxed mb-0">
              At TheBethels AutoRent, we aim to provide a fair and transparent refund process.
            </p>

            <Rule />

            <Section n={1} title="Cancellation">
              <p>
                Bookings can be canceled before the scheduled pickup time. Refund eligibility depends on when the
                cancellation is made.
              </p>
            </Section>

            <Rule />

            <Section n={2} title="Refund Eligibility">
              <ul className="list-disc pl-5 space-y-1">
                <li>Full refund if canceled 24 hours before pickup</li>
                <li>Partial refund for late cancellations</li>
                <li>No refund after rental start time</li>
              </ul>
            </Section>

            <Rule />

            <Section n={3} title="Processing Time">
              <p>Refunds are processed within 5–10 business days via the original payment method.</p>
            </Section>

            <Rule />

            <Section n={4} title="Non-Refundable Fees">
              <p>Service fees and transaction charges may not be refundable.</p>
            </Section>

            <Rule />

            <Section n={5} title="Contact">
              <p>
                For refund requests, contact:{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </p>
            </Section>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Related:{' '}
            <Link href="/terms" className="text-primary font-600 hover:underline">
              Terms of Service
            </Link>
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
