/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core configuration
  reactStrictMode: true,
  swcMinify: true, // Use SWC for minification (faster than Terser)
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Routing configuration
  skipTrailingSlashRedirect: true,
  
  experimental: {
    // Disable typed routes to fix compilation errors with route typing
    typedRoutes: false,
    // Enable modern optimizations
    serverComponentsExternalPackages: [],
    optimizeCss: true, // Enable CSS optimization
  },
};

module.exports = nextConfig; 