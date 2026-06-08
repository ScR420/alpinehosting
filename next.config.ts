import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,
  async redirects() {
    return [
      { source: "/leistungen", destination: "/preise", permanent: true },
      { source: "/team", destination: "/ueber-uns#team", permanent: true },
    ];
  },
};

export default nextConfig;
