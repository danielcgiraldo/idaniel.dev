/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ['"Inter"', "sans-serif"],
            body: ['"Inter"', "sans-serif"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            midnight: "#000814",
            "golden-poppy": "#FFC300",
            red: "#D0021B",
            blue: "#003566"
        },
    },
    plugins: [
        require("tailwind-scrollbar")
    ],
};
