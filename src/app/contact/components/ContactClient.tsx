'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const TOPICS = [
  { value: 'booking', label: 'Booking & reservations' },
  { value: 'billing', label: 'Billing & payments' },
  { value: 'vehicle', label: 'Vehicle condition or pickup' },
  { value: 'account', label: 'Account & profile' },
  { value: 'partnership', label: 'Business / partnership' },
  { value: 'other', label: 'Something else' },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    bookingRef: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#F7F6F3_0%,#FAFAF8_45%,#F3F2EE_100%)]">
      <Header variant="solid" />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Icon name="ChevronRightIcon" size={12} className="text-muted shrink-0" />
            <span className="text-foreground font-600">Contact</span>
          </nav>

          {/* Intro */}
          <div className="mb-12 lg:mb-14">
            <p className="text-primary font-700 text-sm uppercase tracking-[0.2em] mb-3">We&apos;re here to help</p>
            <h1 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              Questions about a booking, pickup, or your account? Our team typically replies within{' '}
              <span className="text-foreground font-600">one business day</span>. For urgent roadside issues during an
              active rental, call the number on your rental agreement.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Sidebar — channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-accent text-white shadow-premium">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(232,89,12,0.35),transparent_55%)]" />
                <div className="relative p-6 sm:p-8">
                  <h2 className="font-display font-800 text-xl mb-6">Direct lines</h2>
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                        <Icon name="PaperAirplaneIcon" size={20} className="text-primary" />
                      </span>
                      <div>
                        <p className="text-white/60 text-xs font-700 uppercase tracking-wider mb-0.5">Email</p>
                        <a
                          href="mailto:support@thebethelsautorent.com"
                          className="text-white font-600 hover:text-primary transition-colors break-all"
                        >
                          support@thebethelsautorent.com
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                        <Icon name="BoltIcon" size={20} className="text-primary" />
                      </span>
                      <div>
                        <p className="text-white/60 text-xs font-700 uppercase tracking-wider mb-0.5">Phone</p>
                        <a href="tel:+18005551234" className="text-white font-600 hover:text-primary transition-colors">
                          +1 (800) 555-1234
                        </a>
                        <p className="text-white/50 text-xs mt-1">Mon–Fri 7am–9pm PT · Sat–Sun 8am–6pm PT</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                        <Icon name="MapPinIcon" size={20} className="text-primary" />
                      </span>
                      <div>
                        <p className="text-white/60 text-xs font-700 uppercase tracking-wider mb-0.5">Head office</p>
                        <p className="text-white/90 text-sm leading-snug">
                          1200 Sunset Boulevard, Suite 400
                          <br />
                          Los Angeles, CA 90028
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-border/80 bg-white p-6 shadow-sm">
                <h3 className="font-display font-800 text-sm text-foreground mb-4 uppercase tracking-wider">
                  Response times
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <span>General inquiries</span>
                    <span className="text-foreground font-600 shrink-0">Within 24 hours</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <span>Billing disputes</span>
                    <span className="text-foreground font-600 shrink-0">1–2 business days</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Emergency (active rental)</span>
                    <span className="text-foreground font-600 shrink-0">24/7 hotline*</span>
                  </li>
                </ul>
                <p className="text-xs text-muted mt-4 leading-relaxed">
                  *Number provided in your confirmation and rental contract.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Licensed & insured fleet', 'Secure payments', 'No hidden fees'].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-600 text-foreground shadow-sm"
                  >
                    <Icon name="ShieldCheckIcon" size={14} className="text-emerald-600" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border/80 bg-white shadow-premium overflow-hidden">
                <div className="border-b border-border/80 bg-[#FAFAF8] px-6 py-5 sm:px-8">
                  <h2 className="font-display font-800 text-lg text-foreground">Send a message</h2>
                  <p className="text-sm text-muted mt-1">
                    All fields marked with <span className="text-primary">*</span> are required.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 sm:p-10 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon name="CheckCircleIcon" size={36} className="text-primary" />
                    </div>
                    <h3 className="font-display font-800 text-xl text-foreground mb-2">Message received</h3>
                    <p className="text-muted text-sm max-w-md mx-auto leading-relaxed mb-8">
                      Thanks for reaching out. We&apos;ve logged your request and will email you at{' '}
                      <span className="text-foreground font-600">{form.email || 'your address'}</span> with a reply as soon
                      as possible.
                    </p>
                    <Link href="/car-listing" className="btn-primary inline-flex justify-center">
                      Browse cars
                      <Icon name="ArrowRightIcon" size={18} />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-first" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                          First name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="contact-first"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                          className="form-input"
                          autoComplete="given-name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-last" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                          Last name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="contact-last"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                          className="form-input"
                          autoComplete="family-name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="form-input"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                        Phone <span className="text-muted font-500 normal-case">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="form-input"
                        autoComplete="tel"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-topic" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                        Topic <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="contact-topic"
                          required
                          value={form.topic}
                          onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                          className="form-input appearance-none cursor-pointer pr-10"
                        >
                          <option value="" disabled>
                            Select a topic
                          </option>
                          {TOPICS.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="ChevronDownIcon"
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-ref" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                        Booking reference <span className="text-muted font-500 normal-case">(optional)</span>
                      </label>
                      <input
                        id="contact-ref"
                        type="text"
                        value={form.bookingRef}
                        onChange={(e) => setForm((f) => ({ ...f, bookingRef: e.target.value }))}
                        className="form-input font-mono text-sm"
                        placeholder="e.g. AR-X7K2M"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="text-xs font-700 text-muted uppercase tracking-wide block mb-2">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="form-input min-h-[120px] resize-y"
                        placeholder="Tell us how we can help…"
                      />
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      By submitting this form, you agree to our{' '}
                      <Link href="/terms" className="text-primary font-600 hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and acknowledge our{' '}
                      <Link href="/privacy" className="text-primary font-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <button type="submit" className="w-full sm:w-auto btn-primary justify-center py-3.5 px-8 rounded-2xl">
                      Send message
                      <Icon name="PaperAirplaneIcon" size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
