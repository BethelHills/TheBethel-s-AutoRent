/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pixabay.com', pathname: '/**' },
      { protocol: 'https', hostname: 'img.rocket.new', pathname: '/**' },
    ],
  },
};
export default nextConfig;
