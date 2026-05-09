/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/scholers" : "",
  assetPrefix: isProd ? "/scholers/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/scholers" : ""
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
