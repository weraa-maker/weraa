'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * OptimizedImage component that leverages Next.js Image with best practices
 * - Automatically handles responsive images
 * - Implements proper sizes attribute
 * - Uses priority for LCP (Largest Contentful Paint) images
 * - Provides placeholder options
 * - Ensures proper alt text for accessibility
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(min-width: 1024px) 1024px, 100vw',
  fill = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  loading,
}: OptimizedImageProps) {
  // Generate local blur placeholder if fill mode is used but no blurDataURL provided
  const placeholderProps = placeholder === 'blur' && !blurDataURL && !fill
    ? { placeholder: 'empty' as const }
    : placeholder === 'blur'
    ? { placeholder: 'blur' as const, blurDataURL }
    : { placeholder: 'empty' as const };

  return (
    <div className={cn('relative', fill ? 'w-full h-full' : '', className)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn('object-cover', className)}
        priority={priority}
        sizes={sizes}
        fill={fill}
        quality={quality}
        loading={loading || (priority ? 'eager' : 'lazy')}
        {...placeholderProps}
      />
    </div>
  );
} 