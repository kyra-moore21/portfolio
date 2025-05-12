// tailwind.config.mjs
export default {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Satoshi', 'sans-serif'],
        },
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        },
      },
    },
    plugins: [],
  };
  