"use client";
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth';

type props = {
  children:React.ReactNode;
  session?:Session
}

const Provider = ({children, session}:props) => {
  return (
    // If you pass the session page prop to the <SessionProvider> – as in the example above – you can avoid checking the session twice on pages that support both server and client side rendering.
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
    
  )
}

export default Provider