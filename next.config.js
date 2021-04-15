module.exports = {
    serverRuntimeConfig: {
        WEB: process.env.WEB_FRONT
    },
    publicRuntimeConfig: {
        WEB: process.env.WEB_FRONT
    },
    async rewrites() {
        const {API} = process.env;
        return [
            {
                source: '/api/:path*',
                destination: `${API}/:path*`,
            },
        ]
    },
}
