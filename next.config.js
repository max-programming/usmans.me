/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://youtube.com/MaxProgramming',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
