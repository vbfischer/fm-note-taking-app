'use client'

import React, { startTransition } from 'react'
import { Button } from './components'
import { IconArchive, IconDelete, IconRestore } from './icons'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { archiveNoteAction } from '@/app/actions/notes-action'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from './components/Toast'
import Link from 'next/link'

export interface MenuSidebarProps extends React.ComponentPropsWithoutRef<"div"> {
    archived?: boolean
}

export const MenuSidebar = ({ className, archived = false, ...props }: MenuSidebarProps) => {
    const { toast } = useToast();
    const params = useParams();
    const noteId = params.noteId;

    const handleArchiveClick = async () => {
        startTransition(async () => {
            await archiveNoteAction(noteId as string)

            toast({
                title: "Archived Note",
                action: (
                    <ToastAction altText="all notes" asChild>
                        <Link href="/notes/archived">Archived Notes</Link>
                    </ToastAction>
                )
            })
        })
    }

    return (
        <div className={clsx("h-full pl-200 py-250 mr-400 w-[258px] text-neutral-200 border-l-1", className)} {...props}>
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
