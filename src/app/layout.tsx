import { Inter, Montserrat } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Footer } from '@/ui/organisms';
import { ROUTERS } from '@/constants/routers';
import { ContactForm } from '@/packages/core';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function Layout({
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
        <meta charSet="utf-8" />
      </head>
      <body className={clsx(inter.variable, montserrat.variable)}>
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
