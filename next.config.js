// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/loading',
        permanent: true,
      },
    ];
  },
};
