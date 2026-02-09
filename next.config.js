const repoName='peachlab.inf.ethz.ch'
// Use basePath only for GitHub Pages, not for GitLab Pages (which uses custom domain)
const useBasePath = process.env.GITHUB_PAGES === "true" && process.env.NODE_ENV === "production";

const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    output: "export", // Required for `next export`
    trailingSlash: true,    
    images: {
      unoptimized: true, // Required for GitHub Pages, since no Image Optimization
    },
    basePath: useBasePath ? `/${repoName}` : "",
    assetPrefix: useBasePath ? `/${repoName}/` : "",
    env: {
      NEXT_PUBLIC_BASE_PATH: useBasePath ? `/${repoName}` : "",
    },
  };
  
  module.exports = nextConfig;
  