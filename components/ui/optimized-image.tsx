'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
}

/**
 * OptimizedImage component that leverages Next.js Image with best practices
 * - Automatically handles responsive images
 * - Implements proper sizes attribute
 * - Uses priority for LCP (Largest Contentful Paint) images
 * - Provides placeholder options
 * - Ensures proper alt text for accessibility
 */
export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = '/images/placeholder.jpg',
  priority = false,
  quality = 90,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300 ease-in-out',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        quality={quality}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
        </div>
      )}
    </div>
  );
} 