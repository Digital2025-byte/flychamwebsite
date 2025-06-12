/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 60, // increases timeout to 5 minutes (default is 60)
};

export default nextConfig;
