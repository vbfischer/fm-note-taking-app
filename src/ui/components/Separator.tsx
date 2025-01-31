import clsx from 'clsx';
import React from 'react';

export const Separator = ({ className, ...props }: React.ComponentPropsWithoutRef<"hr">) => {
    return <hr className={clsx("border-neutral-200", className)} {...props} />
}
