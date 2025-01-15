/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "client": ["var(--client-font)"],
        "admin": ["var(--admin-font)"],
      },
    },
  },
  plugins: [],
}

