/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  // Matikan dev indicator/toolbar (N icon & Issues popup)
  devIndicators: false,
};

module.exports = nextConfig;
