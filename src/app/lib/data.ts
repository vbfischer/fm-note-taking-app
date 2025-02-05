import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { genSaltSync, hashSync } from 'bcrypt-ts';

import * as schema from '../db/schema'
import { notes, notesToTags, tags, users } from "../db/schema";

// ╓─────────────────────────────────────────────────────────╖
// ║             Instantiate the Drizzle client              ║
// ╙─────────────────────────────────────────────────────────╜

const client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
export const db = drizzle(client, { schema, logger: false });

// ╓─────────────────────────────────────────────────────────╖
// ║                  Basic CRUD operations                  ║
// ╙─────────────────────────────────────────────────────────╜

export const getUser = async (email: string) => {
    return await db.query.users.findFirst({
        where: eq(users.email, email)
    })
}

export const getTag = async (tagName: string, userId: string) => {
    return await db.query.tags.findFirst({
        where: and(eq(tags.name, tagName), eq(tags.authorId, userId))
    })
}

export const getAllTags = async (userId: string) => {
    return await db.query.tags.findMany({
        where: eq(tags.authorId, userId),
        orderBy: tags.name
    })
}

export const getAllNotes = async (userId: string) => {
    return await db.query.notes.findMany({
        where: and(eq(notes.authorId, userId), eq(notes.archived, false)),
        with: {
            noteTags: {
                with: {
                    tag: {
                        columns: {
                            name: true
                        }
                    }
                }
            }
        }
    })
}

export const getNote = async (userId: string, noteId: string) => {
    return await db.query.notes.findFirst({
        where: and(eq(notes.authorId, userId), eq(notes.id, noteId)),
        with: {
            noteTags: {
                with: {
                    tag: {
                        columns: {
                            name: true
                        }
                    }
                }
            }
        }
    })
}

export const createUser = async (email: string, password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);

    return await db.insert(users).values({ email, password: hash });
}

export const createTag = async (tagName: string, userId: string) => {
    const tag = await getTag(tagName, userId)

    if (tag) {
        return { tagId: tag.id }
    }

    return await db.insert(tags).values({ name: tagName, authorId: userId }).returning({ tagId: tags.id });
}

export const createNote = async (title: string, noteTags: string, content: string, userId: string) => {
    const newNote = (await db.insert(notes).values({ title, content, authorId: userId }).returning({ noteId: notes.id }))[0]

    const tagEntries = noteTags.split(',').map(t => ({
        name: t.trim(),
        authorId: userId
    }))

    const newTags = (await Promise.all(tagEntries.map(t => createTag(t.name, userId)))).flat();

    await Promise.all(newTags.map(t => db.insert(notesToTags).values({ noteId: newNote.noteId, tagId: t.tagId, authorId: userId })))

    return newNote.noteId;
}

export const updateNote = async (noteId: string, title: string, tags: string, content: string, userId: string) => {
    const updatedNote = (await db.update(notes).set({
        title,
        content
    }).where(eq(notes.id, noteId)).returning({ noteId: notes.id }))[0]

    await db.delete(notesToTags).where(eq(notesToTags.noteId, noteId));

    const tagEntries = tags.split(',').map(t => ({
        name: t.trim(),
        authorId: userId
    }))

    const newTags = (await Promise.all(tagEntries.map(t => createTag(t.name, userId)))).flat();
    await Promise.all(newTags.map(t => db.insert(notesToTags).values({ noteId: updatedNote.noteId, tagId: t.tagId, authorId: userId })))

    return updatedNote.noteId
}

export const deleteNote = async (noteId: string, userId: string) => {
    const deletedNote = await db.delete(notes).where(and(eq(notes.id, noteId), eq(notes.authorId, userId))).returning({ noteId: notes.id });
    return deletedNote[0].noteId;
}

export const archiveNote = async (noteId: string, userId: string) => {
    await db.update(notes).set({
        archived: true
    }).where(and(eq(notes.id, noteId), eq(notes.authorId, userId)));
}
