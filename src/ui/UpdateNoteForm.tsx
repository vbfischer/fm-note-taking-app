'use client'

import React from 'react'
import clsx from "clsx";
import Link from "next/link";

import { Button, Separator, Text } from "./components";
import { IconArrowLeft, IconTag, IconClock } from "./icons";
import { State } from "@/app/actions";
import { useActionState } from "react";
import { updateNotesAction } from "@/app/actions/notes-action";
import { format } from "date-fns";
import { useToast } from '@/hooks/use-toast';

export interface UpdateNoteFormProps extends React.ComponentPropsWithoutRef<"form"> {
    noteId: string;
    title: string;
    tags?: string;
    content: string;
    lastEdited: Date
}

export const UpdateNoteForm = ({ className, noteId, title, tags, content, lastEdited, ...props }: UpdateNoteFormProps) => {
    const { toast } = useToast()
    const initialState: State = {
        status: 'pending',
        errors: {},
        formData: {
            title,
            tags,
            content
        }
    };

    const updateNotesActionWithId = updateNotesAction.bind(null, noteId);

    const [state, formAction, isPending] =
        useActionState(updateNotesActionWithId, initialState);

    React.useEffect(() => {
        if (state.status === "success" && !isPending) {
            toast({
                title: "Success",
                description: "Very much a success"
            })
        }
    }, [state.status, isPending, toast])


    return (
        <form action={formAction} className={clsx("flex flex-col gap-150 h-full py-250 px-200 tablet:px-400 desktop:px-300", className)} {...props}>
            <div className="flex items-center justify-between pb-150 border-b-1 border-neutral-200 desktop:hidden">
                <Link href="/notes" aria-disabled={isPending} className="flex gap-050 text-neutral-600"><IconArrowLeft />Go Back</Link>
                <div className="flex gap-200">
                    <Button variant="link" disabled={isPending}>Cancel</Button>
                    <Button variant="link" disabled={isPending} type="submit" className="text-blue-500">Save Note</Button>
                </div>
            </div>
            <div>
                <input defaultValue={state.formData?.title as string} name="title" className={
                    clsx(
                        "text-xl font-bold text-neutral-950",
                    )
                } placeholder="Enter a title..." />
            </div>
            <div className="grid items-center gap-200 grid-cols-[150px_1fr] [&>span]:flex [&>span]:gap-075">
                <Text><IconTag /> Tags</Text>
                <textarea className="resize-none" defaultValue={state.formData?.tags as string} name="tags" placeholder="Add tags separated by commas (e.g. Work, Planning)" />
                <Text ><IconClock /> Last edited</Text>
                <input defaultValue={format(lastEdited, "dd MMM yyyy")} disabled name="lastEdited" placeholder="Not yet saved" />
            </div>
            <Separator />
            <div className="flex flex-col flex-1">
                <div>
                    {state.errors?.content && state.errors.content.map(et => (
                        <Text key={et} className="text-red-500">{et}</Text>
                    ))}
                </div>
                <textarea rows={1} defaultValue={state.formData?.content as string} name="content" className="w-full h-full resize-none" placeholder="Start typing your note here..." />
            </div>
            <div className="hidden desktop:flex gap-200">
                <Button variant="primary" type="submit" disabled={isPending}>Save Note</Button>
                <Button variant="border" disabled={isPending}>Cancel</Button>
            </div>
        </form>
    )

}


