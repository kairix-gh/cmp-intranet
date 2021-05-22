module.exports = {
    mode: "jit",
    purge: ["./public/index.html", "./src/**/*.{vue, js, tx, jsx, tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'print': { 'raw': 'print' },
                'screen': { 'raw': 'screen' }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
