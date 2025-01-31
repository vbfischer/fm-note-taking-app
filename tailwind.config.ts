import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],


    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-noto-sans)'],
                mono: ['var(--font-source-code-pro)'],
            },
            screens: {
                mobile: "375px",
                tablet: "768px",
                desktop: "1440px"
            }
        },

        colors: {
            neutral: {
                "0": "#FFFFFF",
                "50": "#F5F7FA",
                "100": "#F3F5F8",
                "200": "#E0E4EA",
                "300": "#CACFD8",
                "400": "#99A0AE",
                "500": "#717784",
                "600": "#525866",
                "700": "#2B303B",
                "800": "#232530",
                "900": "#191B25",
                "950": "#0E121B"
            },
            blue: {
                "50": "#EBF1FF",
                "500": "#335CFF",
                "700": "#2547D0"
            },
            green: {
                "100": "#D1FBE9",
                "500": "#21C16B"
            },
            red: {
                "100": "#FFD5D8",
                "500": "#FB3748"
            }
        },
        borderRadius: {
            "0": "0px",
            "6": "6px",
            "8": "8px",
            "10": "10px",
            "12": "12px",
            "16": "16px",
            "20": "20px",
            "24": "24px",
            "full": "999px"
        },
        borderWidth: {
            DEFAULT: '1px',
            1: "1px",
            0: '0px',
            2: '2px',
            4: '4px',
            8: '8px',
        },

        boxShadow: {
            "small": "0px 4px 6px 0px rgba(240, 240, 240, 0.60)",
            "large": "0px 8px 12px 0px rgba(240, 240, 240, 0.60)",
            "button-focus": "0px 0px 0px 2px var(--colors-base-white, #FFF), 0px 0px 0px 4px var(--colors-neutral-400, #99A0AE)"
        },

        fontWeight: {
            regular: "400",
            medium: "500",
            semiBold: "600",
            bold: "700"
        },

        fontSize: {
            xs: ['12px', { lineHeight: '120%', letterSpacing: "-0.2" }],
            sm: ['14px', { lineHeight: '120%', letterSpacing: "-0.2" }],
            base: ['16px', { lineHeight: '120%', letterSpacing: "-0.3" }],
            lg: ['20px', { lineHeight: '120%', letterSpacing: "-0.5" }],
            xl: ['24px', { lineHeight: '120%', letterSpacing: "-0.5" }],

        },
        spacing: {
            "0": "0px",
            "025": "2px",
            "050": "4px",
            "075": "6px",
            "100": "8px",
            "150": "12px",
            "200": "16px",
            "250": "20px",
            "300": "24px",
            "400": "32px",
            "500": "40px",
            "600": "48px",
            "800": "64px",
            "1000": "80px"
        }
    },
    plugins: [],
} satisfies Config;
