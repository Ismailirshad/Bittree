/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'example.com', 
      'another-site.com', 
      'myfreewilljourney.files.wordpress.com'
    ],
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

module.exports = nextConfig;
