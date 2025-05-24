/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
];
export const theme = {
  extend: {
    // You can extend your theme here, like custom colors, fonts, etc.
    colors: {
      brand: "#1DA1F2",
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      poppins:['Poppins', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
    },
  },
};
export const plugins = [
  // Add plugins here if needed, like forms or typography
  // require('@tailwindcss/forms'),
  // require('@tailwindcss/typography'),
];
