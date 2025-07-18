import NextAuth from "next-auth";
import Credentials from "@auth/core/providers/credentials";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        first_name: {},
        last_name: {},
        password: {}
      },

      authorize: async (credentials) => {
        const user = users.find( user => {
          user.email === credentials.email &&
          user.password === credentials.password
        });
        if (!user) throw new Error('Invalid credentials.');
        return user
      }
    })
  ],
  callbacks: {
    jwt({token, user}) {
      return token;
    }
  },
  session({ session, token }) {
    session.user.role = token.role;
    return session;
  },
  pages: {
    signIn: "/login",
  }
})