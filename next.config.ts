import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The CSS arrives inside the HTML instead of as two render-blocking requests (PageSpeed, mobile:
    // about 530 ms on slow 4G). The HTML is larger, but the first paint no longer waits for a round trip.
    inlineCss: true,
  },
  /** The brand homepage was reviewed at /v2 before it became `/`. */
  async redirects() {
    return [{ source: "/v2", destination: "/", permanent: true }];
  },
};

export default nextConfig;
