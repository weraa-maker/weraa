import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://weraa.vercel.app';
  const currentDate = new Date();
  
  // Blog posts - in a real application, you would fetch these from your CMS or database
  const blogPosts = [
    {
      slug: 'data-annotation-best-practices',
      lastModified: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
    {
      slug: 'machine-learning-data-preparation',
      lastModified: new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    },
    {
      slug: 'ai-training-data-quality',
      lastModified: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    },
  ];
  
  // Main routes
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];
  
  // Generate blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...routes, ...blogUrls];
} 