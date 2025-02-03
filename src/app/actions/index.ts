'use server'

import { auth, signIn, signOut } from "@/auth"
import { AuthError } from "next-auth";
import { createNote, createUser, db, getUser, updateNote } from "../lib/data";
import { redirect } from "next/navigation";
import { z } from 'zod'
import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { notes } from "../db/schema";


export type CreateNoteActionType = {
    title?: string;
    tags?: string;
    content?: string
}

export type SignupActionType = {
    email?: string;
    password?: string;
}

export type State = {
    errors?: Record<string, string[]>;
    message?: string | null;
    formData?: Record<string, unknown>
};

//export type State<T extends Record<string, string>> = {
//    errors?: T;
//    message?: string | null;
//    formData?: FormData
//};


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
            return { message: "User already exists" }
        } else {
            await createUser(email, password)
            redirect('/signin')
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { message: 'Invalid credentials.' };
                default:
                    return { message: 'Something went wrong.' };
            }
        }
        throw error;
    }
}

const NoteSchema = z.object({
    title: z.string().min(1, {
        message: "Please specify a title!"
    }),
    content: z.string().min(1, {
        message: "Please write something!"
    }),
    tags: z.string().optional().default(""),
    userId: z.string()
})


export const saveNote = async (_prevState: State, formData: FormData): Promise<State> => {
    const session = await auth();
    const user = session?.user;

    const noteId = formData.get('noteId') as string;

    const isEditing = !!noteId;

    const validatedFields = NoteSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
        tags: formData.get('tags'),
        userId: user?.id
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. ',
            formData: {
                title: formData.get('title'),
                content: formData.get('content'),
                tags: formData.get('tags'),
                lastEdited: formData.get('lastEdited')

            }
        };
    }

    const { title, content, tags, userId } = validatedFields.data;

    try {
        if (isEditing) {
            await updateNote(noteId, title, tags, content, userId)
            redirect(`/notes/${noteId}`);
        } else {
            await createNote(title, tags, content, userId ?? "")
            revalidatePath('/notes');
            redirect('/notes');
        }

    } catch (error) {
        throw error
    }
}

export const archiveNote = async (noteId: string) => {
    const session = await auth();

    if (!session || !session.userId) {
        throw Error("Unauthorized")
    }

    await db.update(notes).set({
        archived: true
    }).where(and(eq(notes.id, noteId), eq(notes.authorId, session.userId)));

    revalidatePath(`/notes`);
    redirect(`/notes`)
}
