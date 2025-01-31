import { Inter, Noto_Sans, Source_Code_Pro } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const noto = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-noto-sans',
    display: 'swap'
})

export const sourceCode = Source_Code_Pro({
    subsets: ['latin'],
    variable: '--font-source-code-pro',
    display: 'swap'

})
