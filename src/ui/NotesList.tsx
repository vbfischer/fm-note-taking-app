import React from 'react';
import { NoteResults } from '@/app/lib/data';
import clsx from 'clsx';
import { Separator, Text } from '@/ui/components';
import { CreateLink } from './components/CreateLink';
import { NoteListItem } from './components/NoteListItem';
import { IconPlus } from './icons';
import Link from 'next/link';

export interface NotesListProps extends React.ComponentPropsWithoutRef<"div"> {
    notes: NoteResults;
    instructions?: React.ReactNode;
    emptyState?: React.ReactNode;
    baseUrl?: string;
}

export const NotesList = ({ className, baseUrl = "/notes", notes, instructions, emptyState, ...props }: NotesListProps) => {

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
                {instructions && (<>{instructions}</>)}
                {notes.length === 0 && (
                    <>{emptyState}</>
                )}
                <div>
                    {notes.length !== 0 && (
                        notes.map(n => (
                            <React.Fragment key={n.id}>
                                <Link href={`${baseUrl}/${n.id}`}>
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
