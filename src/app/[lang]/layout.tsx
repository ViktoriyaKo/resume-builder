import { Inter, Montserrat } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Footer, Header } from '@/ui/organisms';
import { ROUTERS } from '@/constants/routers';
import { ContactForm } from '@/packages/core';
import { Locales } from '@/types';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

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
      </head>
      <body className={clsx(inter.variable, montserrat.variable)}>   
          <Header routers={ROUTERS ?? []} />
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
