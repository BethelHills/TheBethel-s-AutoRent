import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TheBethel's AutoRent",
    short_name: 'TB AutoRent',
    description: 'A modern car rental web application',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F6F3',
    theme_color: '#1A1A2E',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
