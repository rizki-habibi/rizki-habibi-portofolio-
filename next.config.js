/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Optimasi Gambar ─────────────────────────────────────────
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ── Kompresi gzip/brotli ─────────────────────────────────────
  compress: true,

  // ── Hapus dev indicator di production ────────────────────────
  devIndicators: false,

  // ── Turbopack config (Next.js 16 default) ────────────────────
  // Turbopack sudah handle bundle splitting otomatis
  turbopack: {},

  // ── Hapus console.log di production ──────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // ── Headers cache untuk aset statis ──────────────────────────
  async headers() {
    return [
      {
        source: '/foto/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/project/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/sertifikat/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*.svg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

module.exports = nextConfig
