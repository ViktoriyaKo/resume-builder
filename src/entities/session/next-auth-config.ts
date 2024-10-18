import { getRequestOptions } from '@/utils';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GooggleProvider from 'next-auth/providers/google';
import { cookies } from 'next/headers';
import LinkedInProvider, {
  LinkedInProfile,
} from 'next-auth/providers/linkedin';

export const nextAuthConfig: AuthOptions = {
  providers: [
    GooggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
      authorization: { params: { scope: 'profile email openid' } },
      issuer: 'https://www.linkedin.com/oauth',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
        };
      },
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
          const userName = userInfo.user?.username;
          const user = {
            id: userInfo.user.id,
            name: userName,
            email: userName,
            jwt: userInfo.jwt,
          };
          return user as User;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const jwt = token.jwt;
      session.jwt = jwt;
      session.access_token = token.access_token;
      session.role = token.role;
      if (typeof jwt === 'string') {
        cookies().set('jwt', jwt);
      }
      return session;
    },
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        if (user && user.email === process.env.ADMIN_EMAIL) {
          token.role = 'admin';
        } else {
          token.role = 'user';
        }
        if (account && account.provider === 'google') {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
          );
          const data = await response.json();

          token.jwt = data.jwt;
          token.id = data.user.id;
        } else if (account && account.provider === 'linkedin') {
          token.access_token = account.access_token;
        } else {
          token.jwt = user.jwt;
          token.id = user.id;
        }
      }
      return token;
    },
  },
  pages: {
    signIn: '/en/sign-in',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
