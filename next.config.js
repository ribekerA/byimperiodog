/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // exportação estática para GitHub Pages
  images: {
    unoptimized: true // importante para GitHub Pages (não suporta image optimization)
  }
};

module.exports = nextConfig;
