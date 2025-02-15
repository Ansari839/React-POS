// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/React-POS", // Your repo name
//   assetPrefix: "/React-POS/", // Your repo name
//   images: {
//     unoptimized: true, // For static export
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/React-POS", // GitHub Pages repo name
//   assetPrefix: "/React-POS/", // GitHub Pages ke liye required
//   images: {
//     unoptimized: true, // GitHub Pages ke liye
//   },
//   trailingSlash: true, // GitHub Pages ke liye necessary
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Vercel ke liye best option
  images: {
    domains: ["https://react-pos-three.vercel.app/"], // Agar external images use kar rahe ho
  },
};

export default nextConfig;
