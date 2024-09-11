import { Locales } from '@/types';
import { signOut } from 'next-auth/react';
import Cookies from 'js-cookie';

function handleSignOut(lang: string | string[] | Locales) {
  Cookies.remove('jwt');

  signOut({ callbackUrl: `/${lang}/` });
}

export default handleSignOut;
