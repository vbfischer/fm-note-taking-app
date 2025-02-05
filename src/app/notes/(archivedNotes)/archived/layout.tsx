import React from 'react';

const AllNotesLayout = ({
    children,
    archivedNoteList
}: {
    children: React.ReactNode,
    archivedNoteList: React.ReactNode
}) => {
    return (
        <>
            {archivedNoteList}
            {children}
        </>
    )
}

export default AllNotesLayout

