import imageHostsConfig from './image-hosts.config.js';
const { imageHosts } = imageHostsConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: imageHosts,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/car-listing',
        permanent: false,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });
    return config;
  },
};
export default nextConfig;
