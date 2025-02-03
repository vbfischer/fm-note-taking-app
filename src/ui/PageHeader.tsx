import React from 'react';
import clsx from 'clsx';

import { Input, Text } from './components';
import { IconSearch, IconSettings } from './icons';

export interface PageHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
    title: string;
}

export const PageHeader = ({ title, className, ...props }: PageHeaderProps) => {
    return (
        <div data-attribute-notepage className={
            clsx(
                "hidden desktop:px-400",
                "desktop:flex desktop:col-start-full desktop:row-start-1 h-[81px] items-center",
                "justify-between",
                "border-b-1 border-neutral-200",
                className
            )
        } {...props}>
            <Text size="xl" weight="bold">{title}</Text>
            <div className="flex gap-200">
                <Input className="w-[300px]" contentLeft={<IconSearch />} placeholder="Search by title, content or tags..." />
                <button><IconSettings /></button>
            </div>
        </div>

    )
}
