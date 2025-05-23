/** @type {import('tailwindcss').Config} */

const { default: colors } = require("./configuration/colors");

module.exports = {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                ...colors,
            },
            fontFamily: {
                inter: ["Inter"],
            },
        },
    },
    plugins: [],
};
