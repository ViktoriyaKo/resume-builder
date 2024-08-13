import CredentialsProvider from 'next-auth/providers/credentials';

// todo сделать!
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = { id: '1', name: 'test', email: 'test@example.com' };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
