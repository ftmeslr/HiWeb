/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taskapi.hiweb.ir",
        port: "",
        pathname: "/Images/**",
      },
    ],
  },
};

export default nextConfig;
