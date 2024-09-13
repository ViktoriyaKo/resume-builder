import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { nextAuthConfig } from '@/entities';

const handleProtectedRoutes = withAuth(nextAuthConfig);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return handleProtectedRoutes(request);
}

export const config = {
  matcher: ['/', '/:lang/account', '/:lang/edit'],
};
