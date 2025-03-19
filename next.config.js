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
  
  // Fix for ENOENT errors during Vercel deployments
  output: 'standalone',
  
  // Properly configure App Directory
  experimental: {
    // Disable optimizations that may cause deployment issues
    optimizeCss: false,
    // Disable typed routes to fix compilation errors
    typedRoutes: false,
    // Enable modern optimizations
    serverComponentsExternalPackages: [],
    // Ensure app directory is properly used
    appDir: true,
  },
};

module.exports = nextConfig; 