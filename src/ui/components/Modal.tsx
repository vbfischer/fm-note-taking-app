import { clsx } from 'clsx';
import React from 'react';

export const Modal = ({ children, className, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
    return <div
        className={clsx(
            "flex flex-col justify-center items-center",
            "rounded-12 border-2 border-neutral-200 ",
            "m-2 bg-neutral-0",
            "dark:bg-neutral-950 dark:text-neutral-0 dark:border-neutral-800",
            className)}
        {...rest}>
        {children}
    </div>;
}

export default Modal;
