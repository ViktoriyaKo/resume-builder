import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt'; // Используется для проверки авторизации

const protectedRoutes = ['account', 'edit'];

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });
  console.log('token', token);
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/en/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/:lang/account', '/:lang/edit'],
};
