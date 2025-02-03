import React from 'react';

import { Logo } from "./icons"
import clsx from 'clsx';

export const MobilePageHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={clsx("px-200 py-150", className)} {...props}>
            <Logo />
        </div>
    )
}
