module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites() {
    return [
      {
        source: '/pt',
        destination: `https://joseli.to/pt`,
      },
    ]
  },
};
