import { saveNote } from "@/app/actions";
import { Button, Separator, Text } from "@/ui/components";
import { IconArrowLeft, IconClock, IconTag } from "@/ui/icons";
import clsx from "clsx";
import Link from "next/link";

const CreateNotePage = async () => {
    return (
        <form action={saveNote} className="flex flex-col gap-150 h-full">
            <div className="flex items-center justify-between pb-150 border-b-1 border-neutral-200">
                <Link href="/notes" className="flex gap-050 text-neutral-600"><IconArrowLeft />Go Back</Link>
                <div className="flex gap-200">
                    <Button variant="link">Cancel</Button>
                    <Button variant="link" type="submit" className="text-blue-500">Save Note</Button>
                </div>
            </div>
            <div>
                <input name="title" className={
                    clsx(
                        "text-xl font-bold text-neutral-950",
                    )
                } placeholder="Enter a title..." />
            </div>
            <div className="grid items-center gap-200 grid-cols-[150px_1fr] [&>span]:flex [&>span]:gap-075">
                <Text><IconTag /> Tags</Text>
                <textarea name="tags" placeholder="Add tags separated by commas (e.g. Work, Planning)" />
                <Text ><IconClock /> Last edited</Text>
                <input disabled name="lastEdited" placeholder="Not yet saved" />
            </div>
            <Separator />
            <div className="flex flex-1">
                <textarea name="content" className="w-full h-full" placeholder="Start typing your note here..." />
            </div>
        </form>
    )
}

export default CreateNotePage;
