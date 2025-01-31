import clsx from "clsx"

export const Label = ({ className, ...props }: React.ComponentPropsWithoutRef<"label">) => {
    return <label className={clsx("flex flex-col gap-075", className)} {...props} />
}
