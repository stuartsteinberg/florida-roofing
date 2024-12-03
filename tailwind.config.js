/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#9e0505',
        'primary-foreground':'#00000',
        'secondary':'#242424'
      },
    },
  },
  plugins: [],
};


// 'primary':'#01d1f7',
//         'primary-foreground':'#00000',
//         'secondary':'#242424'