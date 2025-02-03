import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

export const CreateLink = ({ className, href = "/", ...props }: React.ComponentPropsWithoutRef<"a">) => {
    return (
        <Link
            href={href}
            className={
                clsx(
                    "absolute rounded-full w-[48px] h-[48px] py-0 px-0 right-[35px] bottom-[80px]",
                    "flex bg-blue-500 text-neutral-0 items-center justify-center",
                    "desktop:static desktop:flex desktop:w-auto desktop:py-150 desktop:px-200 desktop:rounded-8",
                    className
                )
            } {...props} />
    )
}
