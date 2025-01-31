import clsx from 'clsx';
import React from 'react';
import { IconArchive, IconHome, IconSearch, IconSettings, IconTag } from './icons';

export const MenuBar = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={
            clsx(
                "shadow-[0px_-4px_6px_0px_rgba(240,240,240,0.60)]",
                "px-200 py-150 flex justify-between",
                "[&>button]:flex-1 [&>button]:flex [&>button]:justify-center",
                "[&_span]:hidden tablet:[&_span]:flex",
                className
            )} {...props}>
            <button><IconHome /><span>Home</span></button>
            <button><IconSearch /><span>Search</span></button>
            <button><IconArchive /><span>Archived</span></button>
            <button><IconTag /><span>Tags</span></button>
            <button><IconSettings /><span>Settings</span></button>
        </div>
    )
}
