import { Inter, Montserrat } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import clsx from 'clsx';
import { CookieModal, Footer, Header } from '@/ui/organisms';
import { ROUTERS } from '@/constants/routers';
import { ContactForm, GoogleAnalytics } from '@/packages/core';
import { Locales } from '@/types';
import MainProviders from '@/providers/MainProviders';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Resume-builder',
  description:
    'Create stunning resumes with our free, user-friendly resume builder. Choose from a variety of customizable templates and craft a professional resume that stands out. Perfect for job seekers looking to make a strong impression.',
};

export default function Layout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locales };
}>) {
  return (
    <html lang={lang}>
      <head>
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          name="viewport"
        />
        <meta charSet="utf-8" />
        <GoogleAnalytics />
      </head>
      <body className={clsx(inter.variable, montserrat.variable)}>
        <MainProviders>
          <Header routers={ROUTERS ?? []} />
          <main>{children}</main>
          <Footer
            title={'Meet your new everyday basics'}
            routers={ROUTERS ?? []}
            form={<ContactForm title={'leave your feedback'} label={'Send'} />}
          />
        </MainProviders>
        <CookieModal
          title={'We use cookies'}
          description={'Usage Agreement'}
          label={'Accept'}
        />
      </body>
    </html>
  );
}
