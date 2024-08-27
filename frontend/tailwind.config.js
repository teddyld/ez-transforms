const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        content: "rgba(var(--content))",
        secondary: "rgba(var(--secondary))",
        primary: "rgba(var(--primary))",
        "primary-dark": "rgba(var(--primary-dark))",
        line: "rgba(var(--line))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fafafa",
          },
        },
      },
    }),
  ],
};
