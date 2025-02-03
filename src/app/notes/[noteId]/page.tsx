import { getNote } from "@/app/lib/data";
import { auth } from "@/auth";
import { MenuSidebar } from "@/ui/MenuSidebar";
import { NoteForm, NoteFormProps } from "@/ui/NoteForm";

const NotePage = async ({ params }: { params: Promise<{ noteId: string }> }) => {
    const noteId = (await params).noteId
    const userId = (await auth())?.userId;

    const noteData = await getNote(userId!, noteId);

    const noteProps: NoteFormProps = {
        noteId: noteData?.id,
        title: noteData?.title,
        content: noteData?.content,
        lastEdited: noteData?.lastUpdatedOn,
        tags: noteData?.noteTags.map(t => t.tag.name).join(', ')
    }

    return (
        <div className="flex">
            <NoteForm className="flex-1" {...noteProps} />
            <MenuSidebar className="hidden desktop:flex" archived={false} />
        </div>
    )
}

export default NotePage;
