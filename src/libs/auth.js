import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { dummyUsers } from "@/app/data/dummyUser";
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
       authorize: async (credentials) => {       
        try {
          // Validate credentials exist
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required');
          }

          // Find user
          const user = dummyUsers.find(user => 
            user.email === credentials.email
          );
          
          if (!user) {
            throw new Error('Invalid email or password');
          }

          // Compare passwords (use async version)
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) {
            throw new Error('Invalid email or password');
          }

          // Return user object if everything checks out
          return user;
          
        } catch (error) {
          console.error('Authentication error:', error.message);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt", // Add this line
  },
  secret: process.env.AUTH_SECRET, // Make sure you have this
  trustHost: true, // Add this for development
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: process.env.NODE_ENV === "development",
});