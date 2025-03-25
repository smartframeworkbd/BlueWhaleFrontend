/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "4000",
            pathname: "/uploads/**",
          },
          {
            protocol: "https",
            hostname: "api.blue-whale.hostdivine.com",
            pathname: "/uploads/**",
        },
        ],
      },
}

module.exports = nextConfig
