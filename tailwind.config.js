/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['*'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'serif'],

            },
            colors: {
                'black': '#000',
                'purple': '#F44335',
                'salat': '#FAFAFA',
                'green': '#00FF84',

            },

            fontSize: {
                'herotext': '64px'
            }


        },
    },
    plugins: [],
}