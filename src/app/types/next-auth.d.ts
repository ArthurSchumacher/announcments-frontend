import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    access_token: string;
  }
}
