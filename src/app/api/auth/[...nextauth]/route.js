import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";
import googleAuth from "next-auth/providers/google";

export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    googleAuth({
      clientId: "",
      clientSecret: "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
