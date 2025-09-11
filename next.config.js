/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // genera /out
  images: { unoptimized: true },     // sin image optimizer (no hay server)
  basePath: '/Cpa-Bank-Project',     // subruta del project site
  assetPrefix: '/Cpa-Bank-Project/', // prefijo para estáticos (_next y public)
  trailingSlash: true,               // /ruta/ -> /ruta/index.html (evita 404)
}

module.exports = nextConfig
