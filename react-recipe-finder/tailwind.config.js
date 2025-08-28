/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        secondary: "#F97316",
        background: "#F9FAFB",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.1)",
        cardHover: "0 8px 24px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
      },
    },
  },
  plugins: [],
}
