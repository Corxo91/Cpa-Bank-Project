/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                  // genera /out
  images: { unoptimized: true },     // sin image optimizer (no hay server)
  basePath: '/cpa-bank-project',     // subruta del project site
  assetPrefix: '/cpa-bank-project/', // prefijo para estáticos (_next y public)
  trailingSlash: true,               // /ruta/ -> /ruta/index.html (evita 404)
}

module.exports = nextConfig
