/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                brand: {
                    secondary: "#b9e4c9",
                    medium: "#6db388",
                    detail: "#7c4f20",
                    neutral: "#f3f3ed",
                    dark: "#1e1e1e",
                    alert: "#e97700",
                    "menu-secondary": "#d9cba3",
                },
                outros: {
                    branco: "#ffffff",
                    hover: "#e9e9e9",
                    borda: "#cccccc",
                    preto: "#000000",
                },
                estados: {
                    normal: {
                        primary: "#0d6efd",
                        secondary: "#6c757d",
                        success: "#198754",
                        danger: "#dc3545",
                        warning: "#ffc107",
                        info: "#0dcaf0",
                        light: "#eeeeee",
                        dark: "#212529",
                    },
                    hover: {
                        primary: "#0b5ed7",
                        secondary: "#5c636a",
                        success: "#157347",
                        danger: "#bb2d3b",
                        warning: "#ffca2c",
                        info: "#31d2f2",
                        light: "#f8f8f8",
                        dark: "#1c1f23",
                    },
                    outline: {
                        primary: "#98c1fe",
                        secondary: "#c0c4c8",
                        success: "#9dccb6",
                        danger: "#f0a9b0",
                        warning: "#ecd182",
                        info: "#85d5e5",
                        light: "#e9e9ea",
                        dark: "#a0a2a4",
                    },
                },
            },
        },
    },
    plugins: [],
};
