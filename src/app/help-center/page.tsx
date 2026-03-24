import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SUPPORT_EMAIL = 'support@thebethelsautorent.com';

export const metadata: Metadata = {
  title: 'Help Center – TheBethels AutoRent',
  description:
    'Get help with booking, payments, your account, and contacting TheBethels AutoRent support.',
  openGraph: {
    title: 'Help Center – TheBethels AutoRent',
    description: 'Guides for getting started, bookings, payments, profile, and support.',
  },
};

const toc = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'booking-help', label: 'Booking Help' },
  { id: 'payments', label: 'Payments' },
  { id: 'account-profile', label: 'Account & Profile' },
  { id: 'contact-support', label: 'Contact Support' },
] as const;

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display font-800 text-xl sm:text-2xl text-foreground mb-4">
        {n}. {title}
      </h2>
      <div className="text-muted text-[15px] sm:text-base leading-relaxed space-y-5">{children}</div>
    </section>
  );
}

function Rule() {
  return <div className="my-10 sm:my-12 h-px w-full bg-border max-w-md" aria-hidden />;
}

function Item({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-700 text-foreground text-[15px] sm:text-base mb-1.5">{title}</h3>
      <div className="text-muted text-sm sm:text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

export default function HelpCenterPage() {
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
            <span className="text-foreground font-600">Help Center</span>
          </nav>

          <header className="mb-8 sm:mb-10">
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-foreground tracking-tight mb-3">
              Help Center
            </h1>
            <p className="text-muted text-[15px] sm:text-base leading-relaxed">
              Quick answers for booking, payments, and your account. Jump to a section below or scroll for
              details.
            </p>
          </header>

          <nav
            aria-label="Help topics"
            className="mb-10 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 shadow-card"
          >
            <p className="text-xs font-700 uppercase tracking-wider text-muted mb-3">On this page</p>
            <ol className="space-y-2 text-sm">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-primary font-600 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="bg-card rounded-2xl border border-border/80 shadow-card px-6 sm:px-10 py-10 sm:py-12 space-y-0">
            <Section id="getting-started" n={1} title="Getting Started">
              <Item title="How to book a car">
                <p>
                  Go to{' '}
                  <Link href="/car-listing" className="text-primary font-600 hover:underline">
                    Browse Cars
                  </Link>{' '}
                  to explore vehicles. Open a car you like, choose your rental dates and locations, then follow the
                  steps to book. You’ll complete checkout on the payment page when you’re ready.
                </p>
              </Item>
              <Item title="How to create an account">
                <p>
                  Go to{' '}
                  <Link href="/sign-up-login" className="text-primary font-600 hover:underline">
                    Sign In / Get Started
                  </Link>{' '}
                  in the header. You can sign up with your email to access your dashboard, bookings, and saved
                  favorites.
                </p>
              </Item>
              <Item title="How to choose rental dates">
                <p>
                  Use the date fields when you search or book. Pick a pickup date and return date before you
                  confirm. Your total is calculated from the number of days you select.
                </p>
              </Item>
            </Section>

            <Rule />

            <Section id="booking-help" n={2} title="Booking Help">
              <Item title="How to modify a booking">
                <p>
                  Need to change dates or vehicle? Contact us as soon as possible at{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                  . Changes depend on availability and our{' '}
                  <Link href="/terms" className="text-primary font-600 hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </Item>
              <Item title="How to cancel a booking">
                <p>
                  Cancellations before pickup may be eligible for a refund depending on timing. See our{' '}
                  <Link href="/refund-policy" className="text-primary font-600 hover:underline">
                    Refund Policy
                  </Link>{' '}
                  for full details, or email support with your booking reference.
                </p>
              </Item>
              <Item title="What happens after booking">
                <p>
                  After you pay, you should receive a confirmation with your rental details. You can review
                  bookings in your <Link href="/dashboard" className="text-primary font-600 hover:underline">Dashboard</Link>{' '}
                  or <Link href="/bookings" className="text-primary font-600 hover:underline">Bookings</Link> when
                  logged in.
                </p>
              </Item>
            </Section>

            <Rule />

            <Section id="payments" n={3} title="Payments">
              <Item title="How to pay">
                <p>
                  Complete payment on the secure checkout page after you confirm your rental. You’ll enter card
                  details on our{' '}
                  <Link href="/payment" className="text-primary font-600 hover:underline">
                    payment
                  </Link>{' '}
                  step as part of the booking flow.
                </p>
              </Item>
              <Item title="Accepted payment methods">
                <p>
                  Payments are processed by Stripe. Major credit and debit cards are typically accepted where
                  Stripe supports your region.
                </p>
              </Item>
              <Item title="Is payment secure">
                <p>
                  Yes. Payments are encrypted and handled by Stripe. We don’t store your full card number on our
                  servers. Read more in our{' '}
                  <Link href="/privacy" className="text-primary font-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </Item>
            </Section>

            <Rule />

            <Section id="account-profile" n={4} title="Account & Profile">
              <Item title="How to update profile">
                <p>
                  When signed in, open{' '}
                  <Link href="/profile" className="text-primary font-600 hover:underline">
                    Profile
                  </Link>{' '}
                  from your account area to update your name, contact details, and preferences.
                </p>
              </Item>
              <Item title="How to reset password">
                <p>
                  Use the sign-in page and follow the password recovery or reset flow if you’ve forgotten your
                  credentials. If you’re stuck, email{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                  .
                </p>
              </Item>
              <Item title="How to delete account">
                <p>
                  To request account deletion, contact{' '}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline">
                    {SUPPORT_EMAIL}
                  </a>
                  . We’ll confirm your identity and process the request according to our policies and applicable
                  law.
                </p>
              </Item>
            </Section>

            <Rule />

            <Section id="contact-support" n={5} title="Contact Support">
              <Item title="Email">
                <p>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-600 hover:underline text-base">
                    {SUPPORT_EMAIL}
                  </a>
                </p>
              </Item>
              <Item title="Response time">
                <p>
                  We aim to reply within <strong className="text-foreground font-700">1–2 business days</strong>.
                  For urgent booking changes, include your booking reference and pickup date in your message.
                </p>
              </Item>
              <p className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-700 hover:underline"
                >
                  Go to Contact form
                </Link>
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
