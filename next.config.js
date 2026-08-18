/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Matikan dev indicator toolbar (N icon & Issues popup)
  devIndicators: false,
  // Hapus output: "export" agar Vercel bisa deploy normal
};

module.exports = nextConfig;
