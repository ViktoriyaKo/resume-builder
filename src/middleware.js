import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
export { default } from 'next-auth/middleware';

// export async function middleware(request) {
//   return i18nRouter(request, i18nConfig);
// }

export const config = { matcher: ['/:lang/account', '/:lang/edit'] };
