import { getArchivedNotes } from "@/app/lib/data";
import { getRequiredUserId } from "@/auth";
import { NotesList } from "@/ui/NotesList";
import { Text } from "@/ui/components";
import clsx from "clsx";
import Link from "next/link";

const ArchivedNoteList = async () => {
    const userId = await getRequiredUserId();
    const notes = await getArchivedNotes(userId)

    return (
        <NotesList baseUrl="/notes/archived" notes={notes} emptyState={
            <div className="p-100 rounded-8 border-1 border-neutral-200 bg-neutral-100">
                <Text>No notes have been archived yet. Move notes here for safekeeping, or <Link href="/notes/create">create a new note</Link></Text>.
            </div>
        } className={clsx("row-start-2 border-r-1 border-neutral-200 desktop:flex")} />
    )
}

export default ArchivedNoteList
