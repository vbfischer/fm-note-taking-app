
import React from 'react';
import { IconArchive, IconHome, IconTag } from './icons';
import clsx from 'clsx';
import { PageHeader } from './PageHeader';
import { NavItem } from './components/NavItem';
import { Separator, Text } from './components';

export const Navigation = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={
            clsx(
                "flex flex-col gap-200 px-200 py-150",
                "border-r-1 border-neutral-200",
                className
            )
        } {...props}>
            <PageHeader />
            <div className="flex flex-col">
                <NavItem selected><IconHome /> All Notes</NavItem>
                <NavItem><IconArchive /> Archived Notes</NavItem>
                <Separator className="my-[8px]" />
                <Text className="text-neutral-500 my-[8px]">Tags</Text>
                <NavItem><IconTag />Cooking</NavItem>
            </div>
        </div>
    )
}
