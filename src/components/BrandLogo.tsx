import Link from 'next/link';

export type BrandLogoProps = {
  /** Light text for dark headers/footers */
  variant?: 'onDark' | 'onLight';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Pass a path to wrap the logo in a link. Default: not clickable. */
  href?: string | null;
};

/**
 * Production-ready vector wordmark + mark (no raster).
 * Scales cleanly at any resolution.
 */
export default function BrandLogo({
  variant = 'onDark',
  size = 'md',
  className = '',
  href = null,
}: BrandLogoProps) {
  const isDark = variant === 'onDark';
  const isLink = href != null && href !== '';
  const textMain = isDark ? 'text-white' : 'text-accent';
  const textMuted = isDark ? 'text-white/90' : 'text-foreground/90';
  const iconClass =
    size === 'sm'
      ? 'h-7 w-12 sm:h-8 sm:w-14'
      : size === 'lg'
        ? 'h-12 w-20 sm:h-14 sm:w-24'
        : 'h-9 w-16 sm:h-11 sm:w-20';

  const line1 =
    size === 'sm'
      ? 'text-base sm:text-lg'
      : size === 'lg'
        ? 'text-2xl sm:text-3xl'
        : 'text-lg sm:text-xl';
  const line2 =
    size === 'sm'
      ? 'text-xs sm:text-sm'
      : size === 'lg'
        ? 'text-lg sm:text-xl'
        : 'text-sm sm:text-base';

  const inner = (
    <>
      <svg
        className={`shrink-0 ${iconClass}`}
        viewBox="0 0 120 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="brandLogoAccent" x1="0" y1="0" x2="120" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7A3D" />
            <stop offset="1" stopColor="#E8590C" />
          </linearGradient>
        </defs>
        {/* Road / motion */}
        <path
          d="M4 46h112v3H4v-3zm8-4c28-2 72-2 96 0v2H12v-2z"
          fill={isDark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.15)'}
        />
        {/* Car body — luxury silhouette */}
        <path
          d="M18 38h84c2 0 4-1 5-3l8-14c1-2 0-4-2-5l-6-3c-4-2-9-3-14-3H29c-5 0-10 1-14 3l-6 3c-2 1-3 3-2 5l8 14c1 2 3 3 5 3z"
          fill={isDark ? '#ffffff' : '#1A1A2E'}
          opacity={isDark ? 0.98 : 1}
        />
        <path
          d="M26 32h68c1.5 0 2.5-.5 3-2l4-8H19l4 8c.5 1.5 1.5 2 3 2z"
          fill="url(#brandLogoAccent)"
          opacity={0.95}
        />
        {/* Cabin / glass */}
        <path
          d="M38 22h44c2 0 3.5 1 4 2.5l2 4H32l2-4c.5-1.5 2-2.5 4-2.5z"
          fill={isDark ? '#2D2D4E' : '#3d3d5c'}
        />
        {/* Wheels */}
        <circle cx="34" cy="40" r="5" fill={isDark ? '#1A1A2E' : '#0D0D0D'} />
        <circle cx="34" cy="40" r="2.2" fill="#E5E5E0" />
        <circle cx="86" cy="40" r="5" fill={isDark ? '#1A1A2E' : '#0D0D0D'} />
        <circle cx="86" cy="40" r="2.2" fill="#E5E5E0" />
      </svg>
      <div className={`flex flex-col justify-center leading-[1.05] ${textMain}`}>
        <span className={`font-display font-800 tracking-tight ${line1}`}>TheBethels</span>
        <span className={`font-display font-800 tracking-tight ${line2}`}>
          <span className={textMuted}>Auto</span>
          <span className="text-primary">Rent</span>
        </span>
      </div>
    </>
  );

  const wrapClass = `flex items-center gap-2.5 sm:gap-3 min-w-0 ${className}`;

  if (isLink) {
    return (
      <Link href={href!} className={wrapClass} aria-label="TheBethels AutoRent - Home">
        {inner}
      </Link>
    );
  }

  return (
    <div className={wrapClass} role="img" aria-label="TheBethels AutoRent">
      {inner}
    </div>
  );
}
