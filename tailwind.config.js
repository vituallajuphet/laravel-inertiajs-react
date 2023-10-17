import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

const { colors: defaultColors } = defaultTheme;
const colors = {
    ...defaultColors,
    ...{
        "primary": {
            "default" : "#ee4d2d"
        },                
    },
}

console.log(defaultColors)

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: colors
        },
    },

    plugins: [forms],
    darkMode: 'class',
};
