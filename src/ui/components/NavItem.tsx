import clsx from 'clsx';
import React from 'react';
import { IconChevronRight } from '../icons';

export interface NavItemProps extends React.ComponentPropsWithoutRef<"button"> {
    selected?: boolean
}

export const NavItem = ({ className, children, selected = false, ...props }: NavItemProps) => {
    return (
        <button className={clsx("flex-1 flex px-[12px] py-[10px]", className)} {...props} >
            <span className="flex gap-[8px] flex-1">
                {children}
            </span>
            {selected && (
                <IconChevronRight />
            )}
        </button>
    )
}
