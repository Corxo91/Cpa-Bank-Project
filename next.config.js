/** @type {import('next').NextConfig} */
const nextConfig = {
 output: 'export',
  images: { unoptimized: true }, // Usa el subpath REAL que muestra Pages (minúsculas):
  basePath: '/cpa-bank-project',
  assetPrefix: '/cpa-bank-project/',
  trailingSlash: true,          // /ruta/ -> /ruta/index.html (evita 404)
}

module.exports = nextConfig
