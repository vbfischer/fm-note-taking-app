import React from 'react';

const AllNotesLayout = ({
    children,
    noteList
}: {
    children: React.ReactNode,
    noteList: React.ReactNode
}) => {
    return (
        <>
            {noteList}
            {children}
        </>
    )
}

export default AllNotesLayout
