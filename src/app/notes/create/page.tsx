'use client'
import { saveNote, State } from "@/app/actions";
import { Button, Separator, Text } from "@/ui/components";
import { IconArrowLeft, IconClock, IconTag } from "@/ui/icons";
import clsx from "clsx";
import Link from "next/link";
import { useActionState } from "react";


const CreateNotePage = () => {
    const initialState: State = { message: null, errors: {} };

    const [state, formAction, isPending] =
        useActionState(saveNote, initialState);


    return (
        <form action={formAction} className={clsx("flex flex-col gap-150 h-full py-250 px-200 tablet:px-400 desktop:px-300")}>
            <div className="flex items-center justify-between pb-150 border-b-1 border-neutral-200 desktop:hidden">
                <Link href="/notes" aria-disabled={isPending} className="flex gap-050 text-neutral-600"><IconArrowLeft />Go Back</Link>
                <div className="flex gap-200">
                    <Button variant="link" disabled={isPending}>Cancel</Button>
                    <Button variant="link" disabled={isPending} type="submit" className="text-blue-500">Save Note</Button>
                </div>
            </div>
            <div>
                <input defaultValue={state.formData?.get("title") as string} name="title" className={
                    clsx(
                        "text-xl font-bold text-neutral-950",
                    )
                } placeholder="Enter a title..." />
                <div>
                    {state.errors?.title && state.errors.title.map(et => (
                        <Text key={et} className="text-red-500">{et}</Text>
                    ))}
                </div>
            </div>
            <div className="grid items-center gap-200 grid-cols-[150px_1fr] [&>span]:flex [&>span]:gap-075">
                <Text><IconTag /> Tags</Text>
                <textarea defaultValue={state.formData?.get('tags') as string} name="tags" placeholder="Add tags separated by commas (e.g. Work, Planning)" />
                <Text ><IconClock /> Last edited</Text>
                <input disabled name="lastEdited" placeholder="Not yet saved" />
            </div>
            <Separator />
            <div className="flex flex-col flex-1">
                <div>
                    {state.errors?.content && state.errors.content.map(et => (
                        <Text key={et} className="text-red-500">{et}</Text>
                    ))}
                </div>
                <textarea defaultValue={state.formData?.get("content") as string} name="content" className="w-full h-full" placeholder="Start typing your note here..." />
            </div>
        </form>
    )
}

export default CreateNotePage;
