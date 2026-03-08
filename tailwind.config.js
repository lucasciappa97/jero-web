/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#df801bff',
        'secondary': '#9A01F1',
        'terciary': '#FB00C2',
        'fourth': '#FF86B3',

        // Light colors
        'primary-light': '#ff9337',
        'primary-white': '#F7F8FC',
        'secondary-light': '#89379e',
        'ternary-light': '#f6f7f8',
        'gray-light': '#F8FAFC',

        // Dark colors
        'primary-dark': '#101A3C',
        'secondary-dark': '#37DBFF87',
        'ternary-dark': '#1E3851',
        'background-dark': "#111827",
        'gray-dark': '#0F172A',
        'gray-primary': '#484040'
        // primary: "#FB8B11",
        // secondary: "#4b2c76",
        // 'primary-light': "#ff9337",
        // 'primary-dark': "#9b4b00",
        // 'secondary-light': "#89379e",
        // 'secondary-dark': "#3e1a47",
      },

      // 2b. Tipografía
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"], // Fuente por defecto
      // },

      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },

  // 3. Plugins: Se utiliza para añadir funcionalidades de terceros (ej: formularios)
  plugins: [],
};
