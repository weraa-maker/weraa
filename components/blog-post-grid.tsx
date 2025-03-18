"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorTitle: string;
  category: string;
  image: string;
  readTime: string;
};

interface BlogPostGridProps {
  posts: BlogPost[];
}

export default function BlogPostGrid({ posts }: BlogPostGridProps) {
  const [visiblePosts, setVisiblePosts] = useState(2); // Initially show 2 posts
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, posts.length)); // Load 3 more posts at a time
  };
  
  const allPostsDisplayed = visiblePosts >= posts.length;
  
  return (
    <>
      {/* Blog post grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, visiblePosts).map((post) => (
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
      {!allPostsDisplayed && (
        <div className="text-center mt-12">
          <button 
            onClick={handleLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Load More Articles
          </button>
        </div>
      )}
    </>
  );
} 