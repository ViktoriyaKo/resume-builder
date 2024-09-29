'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export interface SessionProviderProps {
  children: ReactNode;
}

export default function MainProviders({ children }: SessionProviderProps) {
  return (
    <ErrorBoundary>
      <SessionProvider>{children}</SessionProvider>
    </ErrorBoundary>
  );
}
