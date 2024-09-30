import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  console.log('Middleware running for path:', request.nextUrl.pathname);
  const token = await getToken({ req: request })
  console.log('Token:', token);

  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                     request.nextUrl.pathname.startsWith('/register')

  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL('/main-menu', request.url))
    }
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/main-menu', '/game', '/profile', '/login', '/register', '/api/auth/update']
}