'use server'
import { auth } from "@/auth";
import { NotesFormSchema } from "@/schemas/Notes"
import { createNote, db, deleteNote, updateNote } from "../lib/data";
import { State } from ".";
import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { notes } from "../db/schema";
import { toast } from "@/hooks/use-toast";


export const createNotesAction = async (_prevState: unknown, formData: FormData): Promise<State> => {
    const session = await auth();
    const userId = session?.userId;

    if (!userId) {
        return {
            status: "error",
            message: "Unauthorized"
        }
    }

    const validatedFields = NotesFormSchema.safeParse({
        title: formData.get('title'),
        tags: formData.get('tags'),
        content: formData.get('content')
    });


    if (!validatedFields.success || !validatedFields.data) {
        return {
            status: "error",
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
    const { title, content, tags } = validatedFields.data;

    const createdNote = await createNote(title, tags, content, userId)

    revalidatePath('/notes')

    return {
        status: "success",
        formData: {
            title: formData.get('title'),
            content: formData.get('content'),
            tags: formData.get('tags'),
            lastEdited: formData.get('lastEdited'),
            noteId: createdNote
        }
    }
}

export const updateNotesAction = async (noteId: string, _prevSate: unknown, formData: FormData): Promise<State> => {
    const session = await auth();
    const userId = session?.userId;

    if (!userId) {
        return {
            status: "error",
            message: "Unauthorized"
        }
    }

    const validatedFields = NotesFormSchema.safeParse({
        title: formData.get('title'),
        tags: formData.get('tags'),
        content: formData.get('content')
    });


    if (!validatedFields.success || !validatedFields.data) {
        return {
            status: "error",
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

    const { title, content, tags } = validatedFields.data;

    const updatedNoteId = await updateNote(noteId, title, tags, content, userId)

    revalidatePath('/notes')

    return {
        status: "success",
        formData: {
            title: formData.get('title'),
            content: formData.get('content'),
            tags: formData.get('tags'),
            lastEdited: formData.get('lastEdited'),
            noteId: updatedNoteId
        }
    }
}

export const deleteNotesAction = async (noteId: string) => {
    const session = await auth();
    const userId = session?.userId;

    if (!userId) {
        return {
            status: "error",
            message: "Unauthorized"
        }
    }

    const deletedNoteId = await deleteNote(noteId, userId)

    return deletedNoteId
}


export const archiveNoteAction = async (noteId: string) => {
    const session = await auth();

    if (!session || !session.userId) {
        throw Error("Unauthorized")
    }

    await db.update(notes).set({
        archived: true
    }).where(and(eq(notes.id, noteId), eq(notes.authorId, session.userId)));


    revalidatePath(`/notes`);
}

