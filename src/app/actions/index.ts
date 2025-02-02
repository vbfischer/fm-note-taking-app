'use server'

import { auth, signIn, signOut } from "@/auth"
import { AuthError } from "next-auth";
import { createNote, createUser, getUser } from "../lib/data";
import { redirect } from "next/navigation";

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
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const user = await getUser(email)
        if (user.length > 0) {
            return "User already exists"
        } else {
            await createUser(email, password)
            redirect('/signin')
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

export const saveNote = async (formData: FormData) => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    const response = await createNote(title, tags, content, userId ?? "")
    console.log('response', response)
}
