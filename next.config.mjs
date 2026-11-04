
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "m.media-amazon.com",
      pathname: "/images/**",
    },
    {
      protocol: "https",
      hostname: "cdn01.pharmeasy.in",
      pathname: "/dam/**",
    },
    {
      protocol: "https",
      hostname: "images.pexels.com",
      pathname: "/photos/**",
    },
  ],
},

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
