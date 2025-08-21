const repoName='peachlab.inf.ethz.ch'
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    output: "export", // Required for `next export`
    trailingSlash: true,    // so /team becomes /team/index.html
    images: {
      unoptimized: true, // ⚠️ Required for GitHub Pages, since no Image Optimization
    },
    basePath: process.env.GITHUB_PAGES ? `/${repoName}` : "",
    assetPrefix: process.env.GITHUB_PAGES ? `/${repoName}/` : "",
    env: {
      NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_PAGES ? `/${repoName}` : "",
    },
  };
  
  module.exports = nextConfig;
  