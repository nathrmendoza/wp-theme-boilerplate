module.exports = {
    plugins: {
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'prod' && {cssnano: {}})
    }
}