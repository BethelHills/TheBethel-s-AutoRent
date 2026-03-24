import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Apple touch icon — same mark + accent as `icon.svg` / navbar */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1A1A2E',
        }}
      >
        <svg width="168" height="78" viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="a" x1="0" y1="0" x2="120" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7A3D" />
              <stop offset="1" stopColor="#E8590C" />
            </linearGradient>
          </defs>
          <path
            d="M4 46h112v3H4v-3zm8-4c28-2 72-2 96 0v2H12v-2z"
            fill="rgba(255,255,255,0.12)"
          />
          <path
            d="M18 38h84c2 0 4-1 5-3l8-14c1-2 0-4-2-5l-6-3c-4-2-9-3-14-3H29c-5 0-10 1-14 3l-6 3c-2 1-3 3-2 5l8 14c1 2 3 3 5 3z"
            fill="#ffffff"
            opacity={0.98}
          />
          <path
            d="M26 32h68c1.5 0 2.5-.5 3-2l4-8H19l4 8c.5 1.5 1.5 2 3 2z"
            fill="url(#a)"
            opacity={0.95}
          />
          <path
            d="M38 22h44c2 0 3.5 1 4 2.5l2 4H32l2-4c.5-1.5 2-2.5 4-2.5z"
            fill="#2D2D4E"
          />
          <circle cx="34" cy="40" r="5" fill="#1A1A2E" />
          <circle cx="34" cy="40" r="2.2" fill="#E5E5E0" />
          <circle cx="86" cy="40" r="5" fill="#1A1A2E" />
          <circle cx="86" cy="40" r="2.2" fill="#E5E5E0" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
