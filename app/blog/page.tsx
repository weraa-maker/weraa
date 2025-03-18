import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Blog & Resources - Data Annotation Insights | Weraa',
  description: 'Explore the latest insights, trends, and best practices in data annotation, AI, and machine learning from Weraa\'s team of experts.',
  keywords: ['data annotation blog', 'AI insights', 'machine learning resources', 'data labeling trends'],
  openGraph: {
    title: 'Blog & Resources - Data Annotation Insights | Weraa',
    description: 'Expert insights and resources on data annotation and AI',
    images: [{ url: '/images/blog-cover.jpg', width: 1200, height: 630, alt: 'Weraa Blog' }],
  },
};

// Sample blog post data
const blogPosts = [
  {
    id: 'data-annotation-best-practices',
    slug: 'data-annotation-best-practices',
    title: 'Best Practices for Efficient Data Annotation in AI Projects',
    excerpt: 'Learn the most effective strategies to streamline your data annotation process and improve model performance with these expert-recommended best practices.',
    date: '2023-10-15',
    author: 'Sarah Johnson',
    authorTitle: 'Lead Data Scientist',
    category: 'Best Practices',
    image: '/images/tab-1.webp',
    readTime: '7 min read',
  },
  {
    id: 'ai-medical-imaging',
    slug: 'ai-medical-imaging',
    title: 'The Role of Quality Data Annotation in Medical Imaging AI',
    excerpt: 'Discover how precise data annotation is transforming medical imaging analysis and enabling groundbreaking advancements in healthcare diagnostics.',
    date: '2023-09-22',
    author: 'Dr. Michael Chen',
    authorTitle: 'Healthcare AI Specialist',
    category: 'Healthcare',
    image: '/images/tab-2.webp',
    readTime: '9 min read',
  },
  {
    id: 'autonomous-vehicles',
    slug: 'autonomous-vehicles',
    title: 'Data Annotation Challenges in Autonomous Vehicle Development',
    excerpt: 'Explore the complex challenges and innovative solutions in data annotation for self-driving cars and how they impact the future of transportation.',
    date: '2023-08-30',
    author: 'Robert Garcia',
    authorTitle: 'ADAS Technical Lead',
    category: 'Automotive',
    image: '/images/tab-3.webp',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4 dark:text-white">
            Blog & Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, trends, and best practices in data annotation and AI from our team of experts
          </p>
        </div>
        
        {/* Featured article */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:w-1/2 md:p-8 flex flex-col justify-center">
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                {blogPosts[0].category} • {blogPosts[0].date}
              </span>
              <h2 className="text-2xl font-bold mb-3 dark:text-white">
                <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{blogPosts[0].author.charAt(0)}</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium dark:text-white">{blogPosts[0].author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{blogPosts[0].readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog post grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                  {post.category} • {post.date}
                </span>
                <h2 className="text-xl font-bold mb-3 dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{post.author.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium dark:text-white">{post.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
} 