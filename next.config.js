/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/cpa-bank-project" : "",
  assetPrefix: isProd ? "/cpa-bank-project/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
