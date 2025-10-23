/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploads-ssl.webflow.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;