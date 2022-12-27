/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],

    plugins: [
        require('flowbite/plugin')
    ],

    theme: {
        extend: {
            screens:{
                '800' : '800px',
                '600' : '600px',
            },
            maxWidth: {
                "screen-xl": "84rem",
            },
            maxHeight: {
                128: "34rem",
            },
            translate: {
                5: "5rem",
            },
            gridTemplateColumns: {
                input: "auto 1fr auto",
            },
            height: {
                hero: "calc(100vh - 8rem)",
                "hero-mobile": "calc(100vh - 10rem)",
                divider: "1px",
            },
            width: {
                "auth-banner": "40rem",
                "auth-form": "calc(100% - 40rem)",
                "job-card": "calc(100vh - 53.5rem)",
                divider: "1px",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                green: {
                    100: "var(--green-100)",
                    200: "var(--green-200)",
                },
                orange: {
                    100: "var(--orange-100)",
                    200: "var(--orange-200)",
                },
                lightblue: {
                    100: "var(--lightblue-100)",
                    200: "var(--lightblue-200)",
                },
                blue: {
                    100: "var(--blue-100)",
                    200: "var(--blue-200)",
                },
                light: {
                    100: "var(--light-100)",
                    200: "var(--light-200)",
                    300: "var(--light-300)",
                    400: "var(--light-400)",
                    navbar: "var(--light-navbar)",
                },
                dark: {
                    100: "var(--dark-100)",
                    200: "var(--dark-200)",
                    300: "var(--dark-300)",
                    navbar: "var(--dark-navbar)",
                },
                white: "var(--white)",
                black: "var(--black)",
                transparent: "var(--transparent)",
            },
        },
    },
    important: true,
};
