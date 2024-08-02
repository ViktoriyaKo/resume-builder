import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Footer } from '@/ui/organisms';
import { ROUTERS } from '@/constants/routers';
import { ContactForm } from '@/packages/core';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <head>
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          name="viewport"
        />
      </head>
      <body className={clsx(inter.variable)}>
        <main>{children}</main>
        <Footer
          title={'Meet your new everyday basics'}
          routers={ROUTERS ?? []}
          form={
            <ContactForm
              title={'leave a message and we will contact you'}
              label={'Send'}
            />
          }
        />
      </body>
    </html>
  );
}
