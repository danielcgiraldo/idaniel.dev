/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            serif: ['"Source Serif 4"', "serif"],
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
    },
    plugins: [
        require("tailwind-scrollbar")
    ],
};
