import { MenuSidebar } from "@/ui/MenuSidebar"
import { NotesList } from "@/ui/NotesList"
export type PageType = "notes-list" | "contents"

const NotesPage = async () => {
    return (
        <>
            <NotesList />
            <MenuSidebar className="hidden desktop:flex" />
        </>
    )
}

export default NotesPage
