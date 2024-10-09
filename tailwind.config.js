/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleSand: '#F4EFEA',   // Background
        charcoal: '#333333',   // Primary Text
        mutedTerracotta: '#CC7A57',  // Accent
        deepBlue: '#4A6FA5',   // Button Color
        oliveGreen: '#7A8450', // Secondary Accent
      },
    },
  },
  plugins: [],
}

