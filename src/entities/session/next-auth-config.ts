import { getRequestOptions } from '@/utils';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GooggleProvider from 'next-auth/providers/google';

export const nextAuthConfig: AuthOptions = {
  providers: [
    GooggleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_ID_SECRET ?? '',
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const body = {
          identifier: credentials?.email,
          password: credentials?.password,
          provider: 'local',
        };
        const options: RequestInit = getRequestOptions({
          method: 'POST',
          data: body,
        });
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/sign-in`,
          options
        );

        const data = await res.json();
        const userInfo = data?.message?.login;
        if (userInfo?.user) {
          const user = { name: userInfo.user?.username, jwt: userInfo.jwt };
          return user as User;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
      }
      return token;
    },
    async session({ session, token }) {
      session.jwt = token.jwt;
      return session;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
