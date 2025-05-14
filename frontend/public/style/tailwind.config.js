// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], // ajuste se necessário
  theme: {
    extend: {
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '10%': { opacity: '1', transform: 'translateY(0)' },
          '90%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
