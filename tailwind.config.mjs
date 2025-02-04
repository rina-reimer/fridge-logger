/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const {nextui} = require('@nextui-org/react');

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Fraunces', "serif"],
        text: ['Geologica', "sans-serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#4a3b84",
        lilac: "#808bd0",
        orange: "#f0532b",
        yellow: "#f5a166",
        beige: "#f3e7e6",
        pink: "#eaced3"
      },
    },
  },
  plugins: [nextui()],
};
