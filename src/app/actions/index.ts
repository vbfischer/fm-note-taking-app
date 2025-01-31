'use server'

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth";

export const logInAction = async (_prevSate: string | undefined, formData: FormData) => {
    const action = formData.get("action") as string;

    try {
        if (action === "google") {
            await doSocialLoginAction(action)
        } else {
            await doCredentialLoginAction(formData)
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export const doCredentialLoginAction = async (formData: FormData) => {
    await signIn('credentials', formData);
}

export const doSocialLoginAction = async (action: string) => {
    await signIn(action, { redirectTo: "/notes" })
}

export const doLogout = async () => {
    await signOut({ redirectTo: "/signin" })
}

export const signupAction = async (_prevSate: string | undefined, formData: FormData) => {

    try {
        console.log('formData', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}
