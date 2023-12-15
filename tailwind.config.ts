/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            serif: ['"Merriweather"', "serif"],
            sans: ['"Inter"', "sans-serif"],
            body: ['"Inter"', "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#FFFCF9",
            black: "#071013",
            red: "#C20114",
            highlight: "#208AAE"
        },
        lineHeight: {
            '6.5': '1.625rem',
        }
    },
    plugins: [
        require("tailwind-scrollbar")
    ],
};
