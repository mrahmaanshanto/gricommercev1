import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** The brand homepage was reviewed at /v2 before it became `/`. */
  async redirects() {
    return [{ source: "/v2", destination: "/", permanent: true }];
  },
};

export default nextConfig;
