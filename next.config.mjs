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
};
export default nextConfig;
