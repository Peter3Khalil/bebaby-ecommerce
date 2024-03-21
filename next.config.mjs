/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themes.muffingroup.com'
      },
    ],
  },
}

export default nextConfig
