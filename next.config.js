/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'outdir',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

