
import React from 'react';
import { IconArchive, IconHome, IconTag } from './icons';
import clsx from 'clsx';
import { NavItem } from './components/NavItem';
import { Separator, Text } from './components';
import { NoteLogo } from './NoteLogo';
import { getAllTags } from '@/app/lib/data';
import { auth } from '@/auth';

export const Navigation = async ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
    const session = await auth();
    const userId = session?.user?.id

    const tags = await getAllTags(userId!);

    return (
        <div className={
            clsx(
                "flex flex-col gap-200 px-200 py-150",
                "border-r-1 border-neutral-200",
                className
            )
        } {...props}>
            <NoteLogo />
            <div className="flex flex-col">
                <NavItem selected><IconHome /> All Notes</NavItem>
                <NavItem><IconArchive /> Archived Notes</NavItem>
                <Separator className="my-[8px]" />
                <Text className="text-neutral-500 my-[8px]">Tags</Text>
                {tags.map(t => (
                    <NavItem key={t.id}><IconTag />{t.name}</NavItem>

                ))}
            </div>
        </div>
    )
}
