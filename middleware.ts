import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { withAuth } from "next-auth/middleware"
import { getToken } from 'next-auth/jwt';

const matcher = ["/create-prompt"]

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if(!isAuthenticated) return NextResponse.redirect(new URL('/', req.url))
}



 export const config = { matcher: ['/create-prompt'] }