import { NotesList } from "@/ui/NotesList"

export type PageType = "notes-list" | "contents"

const NotesPage = async () => {
    return (
        <>
            <NotesList className="flex desktop:hidden" />
        </>
    )
}

export default NotesPage
