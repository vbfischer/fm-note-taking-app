import { flatten } from 'lodash'
import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { genSaltSync, hashSync } from 'bcrypt-ts';

import { notes, notesToTags, tags, users, UserType } from "../db/schema";

// ╓─────────────────────────────────────────────────────────╖
// ║             Instantiate the Drizzle client              ║
// ╙─────────────────────────────────────────────────────────╜

const client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
export const db = drizzle(client);

// ╓─────────────────────────────────────────────────────────╖
// ║                  Basic CRUD operations                  ║
// ╙─────────────────────────────────────────────────────────╜

export const getUser = async (email: string): Promise<UserType[]> => {
    return await db.select().from(users).where(eq(users.email, email)) as UserType[];
}

export const getTag = async (tagName: string, userId: string) => {
    return await db.select().from(tags).where(and(eq(tags.name, tagName), eq(tags.authorId, userId)));
}

export const getAllTags = async (userId: string) => {
    return await db.select().from(tags).where(eq(tags.authorId, userId));
}

export const getAllNotes = async (userId: string) => {
    return await db.select().from(notes).where(eq(notes.authorId, userId))
}

export const createUser = async (email: string, password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);

    return await db.insert(users).values({ email, password: hash });
}

export const createTag = async (tagName: string, userId: string) => {
    const tag = await getTag(tagName, userId)

    if (tag.length !== 0) {
        return { tagId: tag[0].id }
    }

    return await db.insert(tags).values({ name: tagName, authorId: userId }).returning({ tagId: tags.id });
}

export const createNote = async (title: string, noteTags: string, content: string, userId: string) => {
    const newNote = (await db.insert(notes).values({ title, content, authorId: userId }).returning({ noteId: notes.id }))[0]

    const tagEntries = noteTags.split(',').map(t => ({
        name: t.trim(),
        authorId: userId
    }))

    const newTags = flatten(await Promise.all(tagEntries.map(t => createTag(t.name, userId))));

    await Promise.all(newTags.map(t => db.insert(notesToTags).values({ noteId: newNote.noteId, tagId: t.tagId })))
}
