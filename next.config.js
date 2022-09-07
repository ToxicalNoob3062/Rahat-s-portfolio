/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  use: [
    {
      loader: "url-loader",
    },
  ],
};

module.exports = nextConfig;
