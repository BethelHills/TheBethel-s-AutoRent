'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import { setSession } from '@/lib/auth-client';

export default function AuthClient() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSession(email.trim() || 'user@example.com');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-md mx-auto">
          <div className="flex gap-2 p-1 bg-muted-light rounded-2xl mb-8">
            <button
              type="button"
              onClick={() => setTab('login')}
              className={`flex-1 py-3 rounded-xl font-700 text-sm transition-colors ${tab === 'login' ? 'bg-white shadow-card text-foreground' : 'text-muted hover:text-foreground'}`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setTab('signup')}
              className={`flex-1 py-3 rounded-xl font-700 text-sm transition-colors ${tab === 'signup' ? 'bg-white shadow-card text-foreground' : 'text-muted hover:text-foreground'}`}
            >
              Sign Up
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-border p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircleIcon" size={32} className="text-primary" />
                </div>
                <h2 className="font-display font-700 text-xl text-foreground mb-2">
                  {tab === 'login' ? 'Welcome back!' : 'Account created!'}
                </h2>
                <p className="text-muted text-sm mb-6">
                  {tab === 'login' ? 'You are now signed in.' : 'Your account has been created. You can now sign in.'}
                </p>
                <Link href="/car-listing" className="btn-primary justify-center w-full">
                  Browse Cars
                  <Icon name="ArrowRightIcon" size={18} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {tab === 'signup' && (
                  <div>
                    <label className="text-xs font-700 text-muted uppercase block mb-2">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
                  </div>
                )}
                <div>
                  <label className="text-xs font-700 text-muted uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-700 text-muted uppercase block mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-input"
                    required
                    minLength={6}
                  />
                </div>
                <button type="submit" className="w-full btn-primary justify-center py-3.5 rounded-xl">
                  {tab === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-muted mt-6">
            <Link href="/car-listing" className="hover:text-foreground transition-colors">
              ← Back to browse cars
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
