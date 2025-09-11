/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // genera /out estático
  images: { unoptimized: true },    // desactiva Image Optimizer (no hay server en Pages)
  basePath: '/Cpa-Bank-Project',    // subruta del proyecto
  assetPrefix: '/Cpa-Bank-Project/',// assets servidos bajo la misma subruta
  trailingSlash: true, 
}

module.exports = nextConfig
