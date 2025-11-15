// tailwind.config.js (Place this in the root of your project)
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B', // Amber yellow for honey
        secondary: '#713F12', // Dark brown for hives
        accent: '#16A34A', // Green for nature
        'neutral-dark': '#1F2937', // Dark gray text
        'neutral-light': '#F3F4F6', // Light gray backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};