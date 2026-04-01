// next.config.js (if you migrate to Next.js)
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://your-main-domain.com',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: 'https://your-main-domain.com/:path*',
        permanent: true,
      },
    ]
  },
}
