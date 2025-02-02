import React from 'react';
import { Text } from '@/ui/components'
import clsx from 'clsx';
import { format } from 'date-fns';

export interface NoteListItemProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
    tags: string[];
    lastUpdatedOn: Date
}

export const NoteListItem = ({ className, title, tags, lastUpdatedOn }: NoteListItemProps) => {
    return (
        <div className={clsx("flex flex-col gap-150 cursor-pointer", className)}>
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
