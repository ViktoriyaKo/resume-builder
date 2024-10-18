import NextAuth, { DefaultSession, DefaultUser, DefaultToken } from 'next-auth';

declare module 'next-auth' {
  interface User {
    jwt?: string;
  }

  interface JWT {
    id: string;
    role: number;
  }

  interface Session extends DefaultSession {
    jwt?: unknown;
    data?: { [key: string]: string };
    access_token?: unknown;
    role?: unknown;
  }

  interface Token extends DefaultToken {
    jwt?: string;
  }
}
