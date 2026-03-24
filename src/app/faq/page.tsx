import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SUPPORT_EMAIL = 'support@thebethelsautorent.com';

export const metadata: Metadata = {
  title: 'FAQ – TheBethels AutoRent',
  description:
    'Frequently asked questions about TheBethels AutoRent: booking, payments, refunds, accounts, and support.',
  openGraph: {
    title: 'FAQ – TheBethels AutoRent',
    description: 'Answers about our car rental platform, bookings, Stripe payments, and refunds.',
  },
};

function Rule() {
  return <div className="my-8 sm:my-10 h-px w-full bg-border max-w-md" aria-hidden />;
}

function FaqBlock({ q, a }: { q: string; a: ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-700 text-foreground text-[15px] sm:text-base">
        <span className="text-primary font-800">Q:</span> {q}
      </h3>
      <p className="text-muted text-sm sm:text-[15px] leading-relaxed pl-0 sm:pl-1">
        <span className="text-foreground/80 font-600">A:</span> {a}
      </p>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display font-800 text-xl sm:text-2xl text-foreground mb-5">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

const toc = [
  { id: 'general', label: 'General' },
  { id: 'booking', label: 'Booking' },
  { id: 'payments', label: 'Payments' },
  { id: 'refunds', label: 'Refunds' },
  { id: 'account', label: 'Account' },
  { id: 'technical', label: 'Technical' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function FaqPage() {
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
            <span className="text-foreground font-600">FAQ</span>
          </nav>

          <header className="mb-8 sm:mb-10">
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-3">
              Frequently asked questions
            </h1>
            <p className="text-muted text-[15px] sm:text-base leading-relaxed">
              Quick answers about TheBethels AutoRent. For step-by-step guides, visit the{' '}
              <Link href="/help-center" className="text-primary font-600 hover:underline">
                Help Center
              </Link>
              .
            </p>
          </header>

          <nav
            aria-label="FAQ topics"
            className="mb-10 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-card"
          >
            <p className="text-xs font-700 uppercase tracking-wider text-muted mb-3">Jump to</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-primary font-600 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-card rounded-2xl border border-border/80 shadow-card px-6 sm:px-10 py-10 sm:py-12 space-y-0">
            <Section id="general" title="General">
              <FaqBlock
                q="What is TheBethels AutoRent?"
                a={
                  <>
                    It is an online platform where you can browse, book, and pay for rental cars easily and
                    securely.
                  </>
                }
              />
            </Section>

            <Rule />

            <Section id="booking" title="Booking">
              <FaqBlock
                q="How do I book a car?"
                a="Choose a car, select your dates, enter your details, and complete payment."
              />
              <FaqBlock
                q="Can I change my booking?"
                a={
                  <>
                    Yes, depending on availability.{' '}
                    <Link href="/contact" className="text-primary font-600 hover:underline">
                      Contact support
                    </Link>{' '}
                    for changes.
                  </>
                }
              />
              <FaqBlock
                q="Can I cancel my booking?"
                a={
                  <>
                    Yes. Refund depends on how early you cancel. See our{' '}
                    <Link href="/refund-policy" className="text-primary font-600 hover:underline">
                      Refund Policy
                    </Link>
                    .
                  </>
                }
              />
            </Section>

            <Rule />

            <Section id="payments" title="Payments">
              <FaqBlock
                q="Is payment secure?"
                a="Yes. Payments are processed through Stripe with full encryption."
              />
              <FaqBlock
                q="What payment methods are accepted?"
                a="Debit cards, credit cards, and other supported Stripe methods."
              />
              <FaqBlock
                q="When is my booking confirmed?"
                a="Only after successful payment."
              />
            </Section>

            <Rule />

            <Section id="refunds" title="Refunds">
              <FaqBlock
                q="Will I get a refund?"
                a={
                  <>
                    Yes, based on our{' '}
                    <Link href="/refund-policy" className="text-primary font-600 hover:underline">
                      refund policy
                    </Link>
                    .
                  </>
                }
              />
              <FaqBlock q="How long does refund take?" a="Usually 5 to 10 business days." />
            </Section>

            <Rule />

            <Section id="account" title="Account">
              <FaqBlock
                q="Do I need an account?"
                a="Yes, to manage bookings and history."
              />
              <FaqBlock
                q="Can I delete my account?"
                a={
                  <>
                    Yes. You can request account deletion from your{' '}
                    <Link href="/profile" className="text-primary font-600 hover:underline">
                      profile
                    </Link>{' '}
                    or by contacting support.
                  </>
                }
              />
            </Section>

            <Rule />

            <Section id="technical" title="Technical">
              <FaqBlock
                q="The website is not working properly"
                a={
                  <>
                    Try refreshing or using another browser. If it continues,{' '}
                    <Link href="/contact" className="text-primary font-600 hover:underline">
                      contact support
                    </Link>
                    .
                  </>
                }
              />
            </Section>

            <Rule />

            <Section id="contact" title="Contact">
              <FaqBlock
                q="How can I contact support?"
                a={
                  <>
                    Email us at{' '}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                      {SUPPORT_EMAIL}
                    </a>
                    .
                  </>
                }
              />
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
