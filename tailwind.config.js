/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  plugins: [],
};
