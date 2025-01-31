import clsx from 'clsx';
import React from 'react';
import { IconInfo } from '@/ui/icons'
import { HintText } from './HintText';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    hintText?: string;
    errorText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, labelText, hintText, contentLeft, errorText, contentRight, ...props }, ref) => {

    return (
        <div className={clsx("flex flex-col gap-075 text-neutral-600")}>
            {labelText && (
                <label>{labelText}</label>
            )}
            <div className={
                clsx(
                    "group",
                    "inline-flex gap-100 px-200  py-150 border-1 border-neutral-300 rounded-8",
                    "justify-between",
                    "hover:bg-neutral-50 hover:shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] dark:hover:bg-neutral-950",
                    "focus:shadow-[0px_0px_0px_2px_#FFF,_0px_0px_0px_4px] focus:border-neutral-500",
                    "disabled:bg-neutral-50 disabled:text-neutral-400",
                    "has-[:disabled]:bg-neutral-50 has-[:disabled]:border-neutral-300",
                    {
                        ["border-red-500"]: !!errorText
                    },
                    className
                )
            }>
                {contentLeft && (<div>{contentLeft}</div>)}
                <input ref={ref} className={clsx("dark:bg-neutral-950 focus-visible:outline-none group-hover:bg-neutral-50 dark:group-hover:bg-neutral-950 dark:text-neutral-0 disabled:bg-neutral-50")} {...props} />
                {contentRight && (<div>{contentRight}</div>)}

            </div>
            {
                hintText && (
                    <HintText><IconInfo />{hintText}</HintText>
                )
            }
            {
                errorText && (
                    <HintText variant="error"><IconInfo />{errorText}</HintText>
                )
            }
        </div >
    )
})

Input.displayName = "Input"
