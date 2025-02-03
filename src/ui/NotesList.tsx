'use server'

import React from 'react';
import { Separator, Text } from "./components"
import clsx from 'clsx';
import { getAllNotes } from '@/app/lib/data';
import { auth } from '@/auth';
import { IconPlus } from './icons';
import { CreateLink } from './components/CreateLink';
import { NoteListItem } from './components/NoteListItem';
import Link from 'next/link';

export interface NotesListProps extends React.ComponentPropsWithoutRef<"div"> {
    searchTerm?: string;
    activeNote?: string;
}

export const NotesList = async ({ className, ...props }: NotesListProps) => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id ?? "";

    const notes = await getAllNotes(userId)

    return (
        <>
            <div className={
                clsx(
                    "flex flex-col gap-200 relative",
                    "desktop:pl-400 desktop:pr-200 desktop:py-250",
                    className
                )} {...props}>
                <Text className="flex desktop:hidden items-start" size="xl" weight="bold">All Notes</Text>
                <div>
                    <CreateLink href="/notes/create" className="hidden desktop:flex ">
                        <IconPlus className="fill-neutral-0" />Create New Note</CreateLink>
                </div>
                {notes.length === 0 && (
                    <div className="p-100 rounded-8 border-1 border-neutral-200 bg-neutral-100">
                        <Text>You don&apos;t have any notes yet. Start a new note to capture your thoughts and ideas.</Text>
                    </div>
                )}
                <div>
                    {notes.length !== 0 && (
                        notes.map(n => (
                            <React.Fragment key={n.id}>
                                <Link href={`/notes/${n.id}`}>
                                    <NoteListItem noteId={n.id} title={n.title} lastUpdatedOn={n.lastUpdatedOn} tags={n.noteTags.map(nt => nt.tag.name)} />
                                </Link>
                                <Separator />
                            </React.Fragment>
                        ))
                    )}
                </div>
            </div>
            <CreateLink href="/notes/create" className="absolute right-[35px] bottom-[80px] desktop:hidden">
                <IconPlus className="fill-neutral-0" />
            </CreateLink>
        </>
    )
}
