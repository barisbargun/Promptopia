import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"; 
import User from "@models/user";
import { NextAuthOptions } from 'next-auth'
import authOptions from "./options";

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};