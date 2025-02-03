import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { getUser } from "./app/lib/data";
import { compare } from "bcrypt-ts";

//const cognitoClient = new CognitoIdentityProviderClient({
//    region: "us-east-1",
//})

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
    callbacks: {
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub
            },
            userId: token.sub
        }),

        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnHomePage = nextUrl.pathname === "/notes"

            if (isOnHomePage) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/notes', nextUrl));
            }

            return true;
        }
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async ({ email, password }: Partial<Record<"email" | "password", unknown>>) => {
                const user = await getUser(email as string);
                if (!user) return null;

                const passwordsMatch = await compare(password as string, user.password!);
                if (!passwordsMatch) return null

                return {
                    id: user.id.toString(),
                    email: user.email,
                } as User;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),

    ],
    pages: {
        signIn: "/signin",
    },
});
