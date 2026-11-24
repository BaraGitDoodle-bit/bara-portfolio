import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages. The site is deployed from the project
 * repository BaraGitDoodle-bit/bara-portfolio
 * (https://BaraGitDoodle-bit.github.io/bara-portfolio/), so the basePath is
 * hardcoded to the repository name. No repository variable is needed.
 */
const basePath = "/bara-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
