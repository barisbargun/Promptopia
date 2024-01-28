import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if(!isAuthenticated) return NextResponse.redirect(new URL('/', req.url))
}

export const config = { matcher: ['/create-prompt'] }