/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/React-POS", // Your repo name
  assetPrefix: "/React-POS/", // Your repo name
  images: {
    unoptimized: true, // For static export
  },
};

export default nextConfig;
