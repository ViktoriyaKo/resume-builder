'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ModalProvider from '@/context/ModalContext';

export interface SessionProviderProps {
  children: ReactNode;
}

export default function MainProviders({ children }: SessionProviderProps) {
  return (
    <ErrorBoundary>
      <ModalProvider>
        <SessionProvider>{children}</SessionProvider>
      </ModalProvider>
    </ErrorBoundary>
  );
}
