import { getAllNotes } from "@/app/lib/data";
import { getRequiredUserId } from "@/auth";
import { NotesList } from "@/ui/NotesList";
import { Text } from "@/ui/components";
import clsx from "clsx";

const NoteList = async () => {
    const userId = await getRequiredUserId();
    const notes = await getAllNotes(userId)

    return (
        <NotesList notes={notes} emptyState={
            <div className="p-100 rounded-8 border-1 border-neutral-200 bg-neutral-100">
                <Text>You don&apos;t haVve any notes yet. Start a new note to capture your thoughts and ideas.</Text>
            </div>
        } className={clsx("row-start-2 border-r-1 border-neutral-200 desktop:flex")} />

    )
}

export default NoteList;
