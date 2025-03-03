import { Api } from "@/lib/api";
import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: "username",
          type: "string",
          placeholder: "username",
        },
        password: {
          label: "Senha",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        try {
          const user = await Api.post("/auth/login", credentials);
          if (user) {
            const userAccount = user.data;
            return userAccount;
          } else {
            throw new Error("Invalid credentials.");
          }
        } catch (error) {
          if (error instanceof AuthError) {
            // Return `null` to indicate that the credentials are invalid
            // return null;
            switch (error.type) {
              case "CredentialsSignin":
                return { msg: "Invalid credentials", status: "error" };
              case "CredentialsSignin":
                throw error;
              default:
                return { msg: "Something went wrong", status: "error" };
            }
          }
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    // session: ({ session, token }) => {
    //   if (token) {
    //     session.id = token.id;
    //   }
    //   return session;
    // },
  },
  secret: "jwttoken",
  pages: {
    signIn: "/login",
    error: "/login",
  },
  // jwt: {
  //   secret: "jwttoken",
  // },
});
