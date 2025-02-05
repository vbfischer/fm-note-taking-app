'use client'

import React from 'react';
import { Text } from '@/ui/components'
import clsx from 'clsx';
import { format } from 'date-fns';
import { useParams } from 'next/navigation';

export interface NoteListItemProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
    tags: string[];
    lastUpdatedOn: Date;
    noteId: string
}

export const NoteListItem = ({ noteId: noteIdProp, className, title, tags, lastUpdatedOn }: NoteListItemProps) => {
    // Get the current selected noteId
    const { noteId } = useParams();

    return (
        <div className={clsx(
            "flex flex-col gap-150 cursor-pointer p-100",
            {
                'bg-neutral-100': noteId === noteIdProp
            },
            className
        )}>
            <Text size="xl" weight="bold">{title}</Text>
            <div className="flex gap-100">
                {tags.map(t => (
                    <span className={clsx("px-[6px] py-[2px] bg-neutral-200 rounded-[4px]")} key={t}>{t}</span>
                ))}
            </div>
            <Text>{format(lastUpdatedOn, 'dd MMM yyyy')}</Text>
        </div>
    )
}
