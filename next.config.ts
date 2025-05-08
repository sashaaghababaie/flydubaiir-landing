import type { NextConfig } from "next";

import * as config from "@/site.config";

const nextConfig: NextConfig = {
  output: "export",
  basePath: config.basePath,
  assetPrefix: config.assetPrefix,
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
