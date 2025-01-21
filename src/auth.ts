import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const cognitoClient = new CognitoIdentityProviderClient({
    region: "us-east-1",
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {},
            password: {}
        },

        authorize: async (credentials) => {
            const params: InitiateAuthCommandInput = {
                AuthFlow: "USER_PASSWORD_AUTH",
                ClientId: process.env.AUTH_COGNITO_ID,
                AuthParameters: {
                    USERNAME: credentials.email?.toString() ?? "",
                    PASSWORD: credentials.password?.toString() ?? "",
                }
            }

            const command = new InitiateAuthCommand(params);

            const { AuthenticationResult } = await cognitoClient.send(command);

            console.log('AuthResult', AuthenticationResult)

            return {};
        }
    })],
    pages: {
        signIn: "/signin",
    },
});
