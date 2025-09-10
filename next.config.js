/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true, // opcional, evita 404 al refrescar rutas
}

module.exports = nextConfig
