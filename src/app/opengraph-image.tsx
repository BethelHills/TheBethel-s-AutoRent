import { ImageResponse } from 'next/og';

export const alt = "TheBethel's AutoRent – Car Rental";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Social / chat link preview (WhatsApp, iMessage, Slack, LinkedIn, etc.) */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #141428 0%, #1A1A2E 40%, #252542 100%)',
          padding: '64px 72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 28,
            flex: 1,
            minWidth: 0,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              TheBethels
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.92)' }}>Auto</span>
              <span style={{ color: '#E8590C' }}>Rent</span>
            </span>
          </div>
          <p
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.72)',
              margin: 0,
              maxWidth: 560,
              lineHeight: 1.35,
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Modern car rental — browse, book, and drive with confidence.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="380" height="178" viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ogG" x1="0" y1="0" x2="120" y2="56" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7A3D" />
                <stop offset="1" stopColor="#E8590C" />
              </linearGradient>
            </defs>
            <path d="M4 46h112v3H4v-3zm8-4c28-2 72-2 96 0v2H12v-2z" fill="rgba(255,255,255,0.12)" />
            <path
              d="M18 38h84c2 0 4-1 5-3l8-14c1-2 0-4-2-5l-6-3c-4-2-9-3-14-3H29c-5 0-10 1-14 3l-6 3c-2 1-3 3-2 5l8 14c1 2 3 3 5 3z"
              fill="#ffffff"
              opacity={0.98}
            />
            <path
              d="M26 32h68c1.5 0 2.5-.5 3-2l4-8H19l4 8c.5 1.5 1.5 2 3 2z"
              fill="url(#ogG)"
              opacity={0.95}
            />
            <path d="M38 22h44c2 0 3.5 1 4 2.5l2 4H32l2-4c.5-1.5 2-2.5 4-2.5z" fill="#2D2D4E" />
            <circle cx="34" cy="40" r="5" fill="#1A1A2E" />
            <circle cx="34" cy="40" r="2.2" fill="#E5E5E0" />
            <circle cx="86" cy="40" r="5" fill="#1A1A2E" />
            <circle cx="86" cy="40" r="2.2" fill="#E5E5E0" />
          </svg>
        </div>
      </div>
    ),
    { ...size },
  );
}
