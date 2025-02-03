import React from 'react';
import { Logo } from './icons';
import clsx from 'clsx';

export const NoteLogo = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={clsx("py-[12px]", className)} {...props}>
            <Logo />
        </div>
    )

}
