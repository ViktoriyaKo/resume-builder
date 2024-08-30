'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export interface SessionProviderProps {
  children: ReactNode;
}

export default function MainProviders({
  children,
}: SessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
