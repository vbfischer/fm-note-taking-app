'use server'

import { signIn, signOut } from "@/auth"
import { AuthError } from "next-auth";
import { createUser, getUser } from "../lib/data";
import { redirect } from "next/navigation";

export type State = {
    errors?: Record<string, string[]>;
    status: 'pending' | 'error' | 'success'
    formData?: Record<string, unknown>
    message?: string
}

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

export const signupAction = async (_prevSate: State, formData: FormData): Promise<State> => {
    try {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const user = await getUser(email)
        if (user) {
            return { status: "error", message: "User already exists" }
        } else {
            await createUser(email, password)
            redirect('/signin')
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { status: "error", message: 'Invalid credentials.' };
                default:
                    return { status: "error", message: 'Something went wrong.' };
            }
        }
        throw error;
    }
}
