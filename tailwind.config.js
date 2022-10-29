/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',"./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        appear:{
          '0%': { opacity: 0 },
          '100%': {  opacity: 1}
        },
        slideDown:{
          '0%': { transform: 'translateY(-50%)' },
          '100%': {  transform: 'translateY(0%)'}
        }
        },
        animation: {
          appear: 'appear 0.15s ease-in 1',
          slideDown:'slideDown 0.3s ease-in 1'
        }
      },
    },
  }
