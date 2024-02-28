/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow:{
        '3xl':"4px 4px 10px black",
      }
    }
  },
  plugins: []
};