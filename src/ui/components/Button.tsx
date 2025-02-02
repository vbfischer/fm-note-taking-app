import React from 'react'
import { cva, VariantProps } from "class-variance-authority";
import { clsx } from 'clsx';

const buttonVariants = cva(
    [
        "px-200 py-150 rounded-8 focus:shadow-button-focus disabled:bg-neutral-100 disabled:text-neutral-300 font-semibold",
        "flex justify-center items-center gap-[16px]"
    ],
    {
        variants: {
            variant: {
                default: "",
                primary: "bg-blue-500 text-neutral-0 hover:bg-blue-700 ",
                secondary: "bg-neutral-100 color-neutral-600 hover:bg-neutral-0 border-1 border-neutral-0 hover:shadow-[0_1px_2px_0_rgba(10,13,20,0.003)] hover:border-1 hover:border-neutral-300 focus:border-1 focus:border-neutral-950 focus:bg-neutral-0",
                border: "bg-neutral-0 border-1 border-neutral-300 text-neutral-950 hover:bg-neutral-100 hover:border-neutral-0 focus:border-neutral-950 focus:bg-neutral-0 disabled:border-neutral-0",
                link: "px-0 py-0"
            }
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <button
                className={clsx(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
