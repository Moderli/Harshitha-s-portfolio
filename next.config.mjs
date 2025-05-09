/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      'raw.githubusercontent.com',
      'github.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
