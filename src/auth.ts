import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Spotify],
  // callbacks: {
  //   async jwt({ token, account }) {
  //     if (account) {
  //       token.accessToken = account.access_token;
  //       token.refreshToken = account.refresh_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
  // session: {
  //   strategy: "jwt",
  // },
  // cookies: {
  //   pkceCodeVerifier: {
  //     name: "next-auth.pkce.code_verifier",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: false, // Set to false for localhost
  //     },
  //   },
  // },
  // debug: process.env.NODE_ENV === "development",
});
