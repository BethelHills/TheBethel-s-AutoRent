import type { Metadata } from 'next';
import AuthClient from './components/AuthClient';

export const metadata: Metadata = {
  title: 'Sign In – TheBethel\'s AutoRent',
  description: 'Sign in or create an account',
};

export default function SignUpLoginPage() {
  return <AuthClient />;
}
