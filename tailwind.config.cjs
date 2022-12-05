/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            keyframes: {
                scale: {
                    '0%, 100%': { transform: 'scale(1.05)' },
                    '50%': { transform: 'scale(1)' }
                }
            },
            animation: {
                scale: 'scale 1s ease-in-out infinite'
            }
        }
    },
    plugins: []
}
