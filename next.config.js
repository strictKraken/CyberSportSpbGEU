/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    domains: [
      "localhost",
      "http://localhost:1337",
      "cybersportspbgeu.ru",
      "https://cybersportspbgeu.ru",
    ],
  },
  async redirects() {
    return [
      {
        source: "/contacts/discrod",
        destination: "https://discord.gg/5dMU9mJQxR",
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
