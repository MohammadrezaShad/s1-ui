import {cookies} from 'next/headers';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {CookieName} from './constants';

export async function middleware(req: NextRequest) {
  const cookie = cookies();
  const res = NextResponse.next();
  const accessToken = cookie.get(CookieName.ACCESS_TOKEN)?.value;
  const originalPath = req.headers.get('x-original-url') || new URL(req.url).pathname;
  const homePath = '/dashboard';
  const loginPath: string = '/login';
  const passwordRecoveryPath: string = '/forget-password';

  if (!accessToken && originalPath !== loginPath && originalPath !== passwordRecoveryPath) {
    return NextResponse.redirect(new URL(loginPath, req.url));
  }

  if (accessToken && originalPath === loginPath) {
    return NextResponse.redirect(new URL(homePath, req.url));
  }

  if (originalPath === '/') {
    return NextResponse.redirect(new URL(homePath, req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
