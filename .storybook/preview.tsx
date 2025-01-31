import React from 'react'
import type { Preview } from "@storybook/react";
import "../src/app/globals.css"
import { inter } from '../src/app/fonts'; // Adjust the path if needed

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [withThemeByDataAttribute({
        themes: {
            // nameOfTheme: 'classNameForTheme',
            light: '',
            dark: 'dark',
        },
        defaultTheme: 'light',
    }),
    (Story) => (
        <div className={`${inter.variable} antialiased font-sans`}><Story /></div>
    )
    ]
};

export default preview;
