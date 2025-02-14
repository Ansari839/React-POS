/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"; // Check if in production

const nextConfig = {
  output: "export",
  basePath: isProd ? "/React-POS" : "", // Add your repository name here
  assetPrefix: isProd ? "/React-POS/" : "",
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
