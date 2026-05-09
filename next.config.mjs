/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/scholars" : "",
  assetPrefix: isProd ? "/scholars/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/scholars" : ""
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
