/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primery: {
          marinblue: "#02295a",
          purplishblue: "#473dff",
          pastelblue: "#adbeff",
          lightblue: "#bfe2fd",
          strawberryRed: "#ed3548",
        },
        secondary: {
          coolgray: "#9699ab",
          lightgray: "#d6d9e6",
          magnolia: "#f0f6ff",
          alabaster: "#fafbff",
        },
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
