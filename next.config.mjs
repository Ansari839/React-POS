/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./", // Ensure assets are loaded from the correct relative path
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
