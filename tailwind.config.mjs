/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Ensure --background is defined in CSS
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mona: ["Mona Sans", "sans-serif"], // ✅ Now correctly placed
      },
    },
  },
  plugins: [],
};
