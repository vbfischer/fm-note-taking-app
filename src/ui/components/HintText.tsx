import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const hintTextVariants = cva(
    "flex gap-100 text-neutral-600",
    {
        variants: {
            variant: {
                default: "dark:text-neutral-400",
                error: "text-red-500"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface HintTextProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof hintTextVariants> { }

export const HintText = ({ className, variant, ...props }: HintTextProps) => {
    return (
        <span className={clsx(hintTextVariants({ variant, className }))} {...props} />
    )
}
