/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // genera /out estático (reemplaza "next export")
  images: { unoptimized: true }, // desactiva optimizador de imágenes (no hay servidor)
}

module.exports = nextConfig
