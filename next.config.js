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
    basePath: "", // ⚠️ Must match your repo name
    assetPrefix: "", // Ensures assets load correctly
    images: {
      unoptimized: true, // ⚠️ Required for GitHub Pages, since no Image Optimization
    },
  };
  
  module.exports = nextConfig;
  