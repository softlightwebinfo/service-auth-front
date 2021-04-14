module.exports = {
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
