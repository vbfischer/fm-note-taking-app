import { PageHeader } from "@/ui/PageHeader"

export type PageType = "notes-list" | "contents"

const NotesPage = async () => {
    return (
        <>
            <PageHeader title="All Notes" className="row-start-1 col-start-2 col-span-2" />
        </>
    )
}

export default NotesPage
