'use client';

import Image, { ImageProps } from 'next/image';

interface AppImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  fill?: boolean;
}

export default function AppImage({ src, alt, fill = false, className, ...props }: AppImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={props.sizes ?? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        {...props}
      />
    );
  }
  return <Image src={src} alt={alt} className={className} {...props} />;
}
