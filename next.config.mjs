/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'api.create-resume.online',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '77.37.49.167',
        port: '1338',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/**`,
      },
    ],
  },
  env: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:1337',
  },
};

export default nextConfig;
