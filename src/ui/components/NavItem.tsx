import clsx from 'clsx';
import React from 'react';
import { IconChevronRight } from '../icons';
import Link from 'next/link';

export interface NavItemProps extends Omit<React.ComponentPropsWithoutRef<"a">, "href"> {
    selected?: boolean
    href: string;
}

export const NavItem = ({ className, children, href, selected = false, ...props }: NavItemProps) => {
    return (
        <Link href={href} className={clsx("flex-1 flex px-[12px] py-[10px]", className)} {...props} >
            <span className="flex gap-[8px] flex-1">
                {children}
            </span>
            {selected && (
                <IconChevronRight />
            )}
        </Link>
    )
}
