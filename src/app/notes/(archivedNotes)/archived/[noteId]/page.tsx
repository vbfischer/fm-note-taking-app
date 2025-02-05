import { getNote } from "@/app/lib/data";
import { auth } from "@/auth";
import { MenuSidebar } from "@/ui/MenuSidebar";
import { PageHeader } from "@/ui/PageHeader";
import { UpdateNoteForm, UpdateNoteFormProps } from "@/ui/UpdateNoteForm";

const NotePage = async ({ params }: { params: Promise<{ noteId: string }> }) => {
    const noteId = (await params).noteId
    const userId = (await auth())?.userId;

    const noteData = await getNote(userId!, noteId);
    if (!noteData) {
        throw new Error("No Note Data")
    }

    const noteProps: UpdateNoteFormProps = {
        noteId: noteData?.id,
        title: noteData?.title,
        content: noteData?.content,
        lastEdited: noteData?.lastUpdatedOn,
        tags: noteData?.noteTags.map(t => t.tag.name).join(', ')
    }

    return (
        <>
            <PageHeader title="Archived Notes" className="row-start-1 col-start-2 col-span-2" />

            <div className="flex">
                <UpdateNoteForm className="flex-1" {...noteProps} />
                <MenuSidebar className="hidden desktop:flex" archived={true} />
            </div>
        </>
    )
}

export default NotePage;
