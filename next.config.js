/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  async redirects() {
    return [
      {
        source: "/contacts/discrod",
        destination: "https://discord.gg/GNWpnaKv",
        permanent: true,
      },
      {
        source: "/contacts/vk",
        destination: "https://vk.com/uneconcybersport",
        permanent: true,
      },
      {
        source: "/contacts/twitch",
        destination: "https://www.twitch.tv/wild_griffins",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
