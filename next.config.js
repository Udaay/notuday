/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
