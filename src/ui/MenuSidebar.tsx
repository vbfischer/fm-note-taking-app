'use client'

import React, { startTransition } from 'react'
import { Button } from './components'
import { IconArchive, IconDelete, IconRestore } from './icons'
import clsx from 'clsx'
import { archiveNote } from '@/app/actions'
import { useParams } from 'next/navigation'

export interface MenuSidebarProps extends React.ComponentPropsWithoutRef<"div"> {
    archived?: boolean
}

export const MenuSidebar = ({ className, archived = false, ...props }: MenuSidebarProps) => {
    const params = useParams();
    const noteId = params.noteId;

    const handleArchiveClick = async () => {
        startTransition(async () => {
            await archiveNote(noteId as string)
        })
    }
    return (
        <div className={clsx("h-full pl-200 py-250 mr-400 w-[258px]", className)} {...props}>
            <div className="flex flex-col gap-200 flex-1">
                {archived ? (
                    <Button variant="border">
                        <IconRestore /> Restore Note
                    </Button>
                ) : (
                    <Button variant="border" onClick={handleArchiveClick}>
                        <IconArchive /> Archive Note
                    </Button>
                )}
                <Button variant="border">
                    <IconDelete /> Delete Note
                </Button>
            </div>
        </div>
    )
}
