const nextConfig = {
  output: "export",
  basePath: "/React-POS", // Replace with your repo name
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
