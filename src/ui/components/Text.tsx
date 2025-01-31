import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const textVariants = cva(
    "text-base",
    {
        variants: {
            variant: {
                primary: "text-neutral-800 dark:text-neutral-0",
                secondary: "text-neutral-600 dark:text-neutral-300"
            },
            centered: {
                false: null,
                true: "flex justify-center gap-[16px]"
            },
            size: {
                "xs": "text-xs",
                "sm": "text-sm",
                "base": "text-base",
                "lg": "text-lg",
                "xl": "text-xl"
            },
            family: {
                sans: "font-sans",
                serif: "font-serif",
                mono: "font-mono"
            },
            weight: {
                regular: "font-regular",
                medium: "font-medium",
                semiBold: "font-semiBold",
                bold: "font-bold"
            }
        },
        defaultVariants: {
            variant: "primary",
            centered: false,
            size: "base",
            family: "sans",
            weight: "regular"
        }
    }
)

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof textVariants> { }

export const Text = ({ className, weight, family, variant, size, centered, ...props }: TextProps) => {
    return <span className={clsx(textVariants({ variant, weight, family, size, centered, className }))} {...props} />
}

