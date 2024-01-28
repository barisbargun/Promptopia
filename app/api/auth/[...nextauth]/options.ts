import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@/utils/database";


const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session?.user?.email });
        // @ts-ignore
        session.user.id = sessionUser._id.toString();
      } catch (error) {
        console.log(error);
      }
      return session;

    },
    async signIn({ profile }) {
      try {
        connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.image,
          });
        }

        return true;
      } catch (error) {
        console.log(error)
        return false;
      }
    },
    async jwt({ token }) {
      token.role = "admin";
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default authOptions;