import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

//const cognitoClient = new CognitoIdentityProviderClient({
//    region: "us-east-1",
//})

export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {
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
            authorize: async (credentials) => {
                if (credentials.password !== "password") {
                    return null
                }

                return {
                    id: "Test",
                    name: "Test User",
                    email: credentials.email?.toString()
                }
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
