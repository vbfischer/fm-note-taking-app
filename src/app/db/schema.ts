import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable, primaryKey, text, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("User", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    email: varchar('email', { length: 64 }).notNull(),
    password: varchar('password', { length: 64 }).notNull(),
});

export const tags = pgTable("Tag", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: varchar('name', { length: 64 }).notNull(),
    authorId: text('author_id').notNull().references(() => users.id)
})

export const notes = pgTable("Note", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: varchar('title', { length: 64 }).notNull(),
    content: text("content").notNull(),
    authorId: text('author_id').notNull(),
    archived: boolean('archived').notNull().default(false),
    lastUpdatedOn: timestamp('last_updated_on').notNull().defaultNow()
})

export const notesToTags = pgTable('notes_to_tags', {
    noteId: text('note_id').notNull().references(() => notes.id),
    tagId: text("tag_id").notNull().references(() => tags.id),
    authorId: text("author_id").notNull().references(() => users.id)
}, (t) => [{
    pk: primaryKey({ columns: [t.noteId, t.tagId, t.authorId] })
}])


// ╓─────────────────────────────────────────────────────────╖
// ║                      RELATIONSHIPS                      ║
// ╙─────────────────────────────────────────────────────────╜

export const userRelations = relations(users, ({ many }) => ({
    tags: many(tags),
    notes: many(notes)
}))

export const tagRelations = relations(tags, ({ one, many }) => ({
    author: one(users, {
        fields: [tags.authorId],
        references: [users.id]
    }),
    tagNotes: many(notesToTags)
}))

export const notesRelations = relations(notes, ({ one, many }) => ({
    noteTags: many(notesToTags),
    author: one(users, {
        fields: [notes.authorId],
        references: [users.id]
    })
}))

export const notesToTagsRelations = relations(notesToTags, ({ one }) => ({
    note: one(notes, {
        fields: [notesToTags.noteId],
        references: [notes.id]
    }),
    tag: one(tags, {
        fields: [notesToTags.tagId],
        references: [tags.id]
    })
}))

// ╓─────────────────────────────────────────────────────────╖
// ║                    TYPESCRIPT TYPES                     ║
// ╙─────────────────────────────────────────────────────────╜
export type UserType = InferSelectModel<typeof users>
export type TagType = InferSelectModel<typeof tags>
export type NoteType = InferSelectModel<typeof notes>
