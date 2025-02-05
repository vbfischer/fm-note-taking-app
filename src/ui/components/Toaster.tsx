"use client"

import { useToast } from "@/hooks/use-toast"
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/ui/components/Toast"
import clsx from "clsx"
import { IconCheckmark } from "../icons"

export function Toaster() {
    const { toasts } = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast data-attribute-toast key={id} {...props}>
                        <IconCheckmark className="text-green-500" />
                        <div className="">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose className="text-neutral-400" />
                    </Toast>
                )
            })}
            <ToastViewport className={
                clsx(
                    "box-content fixed bottom-0 right-0 w-[390px] flex [--viewport-padding:_25px] p-800",
                )
            } />
        </ToastProvider>
    )
}

