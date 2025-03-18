import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/breadcrumb';
import { ChevronLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { sanitizeHtml } from '@/lib/utils';

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
    authorBio: 'Sarah is a data scientist with over 10 years of experience in AI and machine learning projects. She specializes in developing efficient data annotation strategies for enterprise-scale AI implementations.',
    category: 'Best Practices',
    image: '/images/tab-1.webp',
    readTime: '7 min read',
    content: `
      <p>In the rapidly evolving world of artificial intelligence and machine learning, the quality of training data directly impacts model performance. Data annotation, the process of labeling data to make it recognizable for machine learning algorithms, is a critical step that can make or break your AI project.</p>
      
      <h2>The Importance of High-Quality Data Annotation</h2>
      
      <p>Machine learning models learn from the data they're trained on. If this data is poorly annotated, the model will learn incorrect patterns and produce suboptimal results. High-quality data annotation ensures that your models receive accurate information to learn from, leading to better performance in real-world scenarios.</p>
      
      <p>Studies have shown that improving annotation quality can increase model accuracy by up to 25%, which can be the difference between a failed project and a successful one.</p>
      
      <h2>Key Strategies for Efficient Data Annotation</h2>
      
      <h3>1. Define Clear Annotation Guidelines</h3>
      
      <p>Before beginning the annotation process, establish comprehensive guidelines that specify exactly how different elements should be labeled. These guidelines should include:</p>
      
      <ul>
        <li>Detailed definitions of each category or object to be annotated</li>
        <li>Examples of correctly annotated data</li>
        <li>Common edge cases and how to handle them</li>
        <li>Quality standards and verification processes</li>
      </ul>
      
      <p>Clear guidelines ensure consistency across different annotators and reduce ambiguity in the annotation process.</p>
      
      <h3>2. Implement a Multi-Stage Annotation Process</h3>
      
      <p>A robust annotation workflow typically includes multiple stages:</p>
      
      <ol>
        <li><strong>Initial annotation</strong>: Data is labeled by primary annotators</li>
        <li><strong>Quality review</strong>: Annotations are checked by experienced reviewers</li>
        <li><strong>Consensus resolution</strong>: Disagreements are addressed through team discussion</li>
        <li><strong>Final validation</strong>: A final check ensures all data meets quality standards</li>
      </ol>
      
      <p>This multi-stage approach significantly reduces annotation errors and improves overall quality.</p>
      
      <h3>3. Utilize Pre-annotation Tools</h3>
      
      <p>Modern annotation platforms offer pre-annotation capabilities that can automatically generate initial labels using existing models. These tools can:</p>
      
      <ul>
        <li>Reduce annotation time by up to 80%</li>
        <li>Allow human annotators to focus on verification and edge cases</li>
        <li>Improve consistency across the dataset</li>
      </ul>
      
      <p>Pre-annotation is particularly effective for repetitive labeling tasks and can dramatically increase efficiency.</p>
      
      <h2>Measuring and Improving Annotation Quality</h2>
      
      <p>Implementing robust quality metrics is essential for maintaining high standards in your annotation process:</p>
      
      <ul>
        <li><strong>Inter-annotator agreement</strong>: Measure consistency between different annotators</li>
        <li><strong>Gold standard comparison</strong>: Compare annotations against expert-validated examples</li>
        <li><strong>Regular quality audits</strong>: Periodically review random samples to identify systematic issues</li>
      </ul>
      
      <p>By continuously monitoring these metrics, you can identify areas for improvement and refine your annotation process over time.</p>
      
      <h2>Conclusion</h2>
      
      <p>Efficient data annotation is not just about speed—it's about creating high-quality training data that enables your AI models to perform at their best. By implementing clear guidelines, multi-stage processes, and leveraging the right tools, you can significantly improve both the efficiency and quality of your data annotation efforts.</p>
      
      <p>Remember, the time invested in optimizing your annotation process will pay dividends in model performance, making it a crucial aspect of any successful AI project.</p>
    `,
    tags: ['data annotation', 'machine learning', 'best practices', 'AI development', 'training data'],
    relatedPosts: ['ai-medical-imaging', 'autonomous-vehicles']
  },
  {
    id: 'ai-medical-imaging',
    slug: 'ai-medical-imaging',
    title: 'The Role of Quality Data Annotation in Medical Imaging AI',
    excerpt: 'Discover how precise data annotation is transforming medical imaging analysis and enabling groundbreaking advancements in healthcare diagnostics.',
    date: '2023-09-22',
    author: 'Dr. Michael Chen',
    authorTitle: 'Healthcare AI Specialist',
    authorBio: 'Dr. Chen specializes in the application of AI in medical imaging. With a background in both medicine and computer science, he works at the intersection of healthcare and artificial intelligence.',
    category: 'Healthcare',
    image: '/images/tab-2.webp',
    readTime: '9 min read',
    content: `
      <p>Medical imaging AI is revolutionizing healthcare, but requires extremely precise annotations to be effective. The quality and accuracy of these annotations directly impact patient outcomes, making this one of the most critical applications of data annotation technology.</p>
      
      <h2>The Unique Challenges of Medical Image Annotation</h2>
      
      <p>Annotating medical images presents unique challenges compared to general image annotation tasks:</p>
      
      <ul>
        <li><strong>Clinical expertise requirement</strong>: Accurate annotation often requires specialized medical knowledge</li>
        <li><strong>Subtle anomalies</strong>: Many pathologies present as subtle variations that are difficult to identify</li>
        <li><strong>Varying imaging protocols</strong>: Different machines and protocols produce images with varying characteristics</li>
        <li><strong>3D complexity</strong>: Many medical imaging modalities like CT and MRI produce 3D volumes requiring specialized annotation approaches</li>
      </ul>
      
      <p>These challenges make medical image annotation particularly demanding and highlight the need for specialized tools and workflows.</p>
      
      <h2>Current Applications of AI in Medical Imaging</h2>
      
      <p>AI applications in medical imaging span various specialties and continue to expand:</p>
      
      <h3>1. Radiology</h3>
      
      <p>In radiology, AI algorithms assist with:</p>
      
      <ul>
        <li>Detecting lung nodules in chest X-rays</li>
        <li>Identifying early signs of breast cancer in mammograms</li>
        <li>Quantifying brain volume changes in neurodegenerative diseases</li>
        <li>Prioritizing critical findings in radiologist workflows</li>
      </ul>
      
      <h3>2. Pathology</h3>
      
      <p>Digital pathology benefits from AI through:</p>
      
      <ul>
        <li>Automated cell counting and classification</li>
        <li>Cancer grading and staging assistance</li>
        <li>Detection of rare cellular events</li>
      </ul>
      
      <h3>3. Ophthalmology</h3>
      
      <p>In eye care, AI supports:</p>
      
      <ul>
        <li>Diabetic retinopathy screening</li>
        <li>Glaucoma detection through optical coherence tomography analysis</li>
        <li>Age-related macular degeneration monitoring</li>
      </ul>
      
      <h2>Annotation Quality Standards for Medical AI</h2>
      
      <p>The critical nature of medical AI applications necessitates stringent quality standards:</p>
      
      <h3>Expert Consensus Annotations</h3>
      
      <p>The gold standard for medical image annotation typically involves multiple experts creating consensus annotations. This approach helps mitigate individual biases and errors, providing more reliable ground truth data for AI training.</p>
      
      <h3>Specialized Annotation Tools</h3>
      
      <p>Medical image annotation requires specialized tools that can handle:</p>
      
      <ul>
        <li>DICOM format processing</li>
        <li>3D volume annotation</li>
        <li>Multi-sequence alignment</li>
        <li>Anatomical landmark placement</li>
      </ul>
      
      <h2>Future Directions</h2>
      
      <p>The field of medical imaging AI continues to evolve rapidly. Several emerging trends will shape its future:</p>
      
      <ul>
        <li><strong>Federated learning</strong>: Enabling AI model training across institutions without sharing sensitive patient data</li>
        <li><strong>Active learning</strong>: Intelligent selection of the most informative cases for annotation to reduce required annotation volumes</li>
        <li><strong>Multimodal integration</strong>: Combining imaging data with clinical, genomic, and other patient data for more comprehensive analysis</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The quality of data annotation in medical imaging AI directly impacts clinical outcomes and patient care. By addressing the unique challenges of medical image annotation and adhering to rigorous quality standards, we can develop AI systems that serve as valuable tools in the healthcare ecosystem, augmenting clinical expertise and improving patient care.</p>
    `,
    tags: ['healthcare', 'medical imaging', 'AI diagnostics', 'radiology', 'data annotation'],
    relatedPosts: ['data-annotation-best-practices', 'autonomous-vehicles']
  },
  {
    id: 'autonomous-vehicles',
    slug: 'autonomous-vehicles',
    title: 'Data Annotation Challenges in Autonomous Vehicle Development',
    excerpt: 'Explore the complex challenges and innovative solutions in data annotation for self-driving cars and how they impact the future of transportation.',
    date: '2023-08-30',
    author: 'Robert Garcia',
    authorTitle: 'ADAS Technical Lead',
    authorBio: 'Robert leads technical teams working on advanced driver assistance systems and autonomous driving technology. He has over 15 years of experience in the automotive industry.',
    category: 'Automotive',
    image: '/images/tab-3.webp',
    readTime: '8 min read',
    content: `
      <p>Autonomous vehicles represent one of the most complex applications of AI and data annotation, requiring unprecedented precision, scale, and diversity of labeled data to ensure safe operation in unpredictable real-world environments.</p>
      
      <h2>The Data Challenge in Autonomous Driving</h2>
      
      <p>The development of self-driving cars faces unique data challenges:</p>
      
      <h3>Scale Requirements</h3>
      
      <p>A single autonomous vehicle can generate terabytes of data per day. Industry leaders report collecting millions of miles of driving data, requiring annotation of:</p>
      
      <ul>
        <li>Billions of video frames</li>
        <li>Trillions of LiDAR points</li>
        <li>Countless radar returns</li>
        <li>Numerous edge cases and rare events</li>
      </ul>
      
      <h3>Multi-Sensor Annotation</h3>
      
      <p>Autonomous vehicles rely on sensor fusion from multiple sources:</p>
      
      <ul>
        <li><strong>Cameras</strong>: Requiring 2D bounding boxes, semantic segmentation, and instance segmentation</li>
        <li><strong>LiDAR</strong>: Needing 3D cuboid annotation and point cloud segmentation</li>
        <li><strong>Radar</strong>: Demanding specialized signal processing and annotation</li>
      </ul>
      
      <p>These different sensor modalities must be annotated in a coordinated fashion to enable effective sensor fusion algorithms.</p>
      
      <h2>Critical Annotation Requirements</h2>
      
      <h3>Temporal Consistency</h3>
      
      <p>Unlike static image annotation, autonomous driving data must maintain consistency across video frames. This requires:</p>
      
      <ul>
        <li>Object tracking across frames</li>
        <li>Consistent instance IDs</li>
        <li>Handling of occlusions and reappearances</li>
      </ul>
      
      <h3>Edge Case Coverage</h3>
      
      <p>Safe autonomous systems must handle rare but critical scenarios:</p>
      
      <ul>
        <li>Unusual road participants (e.g., construction equipment)</li>
        <li>Unexpected pedestrian behaviors</li>
        <li>Unusual traffic patterns and road conditions</li>
        <li>Adverse weather and lighting conditions</li>
      </ul>
      
      <p>These edge cases often require special annotation protocols and quality assurance processes.</p>
      
      <h2>Innovative Annotation Approaches</h2>
      
      <h3>Semi-Automated Pipelines</h3>
      
      <p>To handle the massive scale requirements, companies are developing sophisticated annotation pipelines:</p>
      
      <ul>
        <li>AI-assisted pre-annotation</li>
        <li>Active learning for efficient data selection</li>
        <li>Auto-propagation of annotations across video frames</li>
        <li>Quality verification through multiple redundant annotations</li>
      </ul>
      
      <h3>Simulation and Synthetic Data</h3>
      
      <p>Many companies augment real-world data with simulated scenarios:</p>
      
      <ul>
        <li>Generating synthetic data with perfect annotations</li>
        <li>Creating rare edge cases that are difficult to capture in reality</li>
        <li>Testing "what if" scenarios systematically</li>
      </ul>
      
      <h2>Safety and Regulatory Considerations</h2>
      
      <p>Annotation quality in autonomous vehicles has direct safety implications:</p>
      
      <ul>
        <li>Annotation errors can propagate to model errors and potentially unsafe driving behaviors</li>
        <li>Regulatory frameworks increasingly require documentation of data quality measures</li>
        <li>Safety standards demand traceable annotation processes with quality assurance</li>
      </ul>
      
      <h2>Future Trends</h2>
      
      <p>The field continues to evolve rapidly with several emerging approaches:</p>
      
      <ul>
        <li><strong>Unsupervised learning</strong>: Reducing dependence on human annotations</li>
        <li><strong>Reinforcement learning</strong>: Learning from interactions rather than labeled data</li>
        <li><strong>Continuous learning</strong>: Updating models based on real-world experiences</li>
        <li><strong>Federated annotation</strong>: Distributing annotation tasks across multiple teams while maintaining consistency</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Data annotation for autonomous vehicles represents one of the most demanding challenges in AI today. The scale, complexity, and safety requirements push the boundaries of what's possible in annotation technology. As the industry matures, we can expect continued innovation in how we create, manage, and utilize the massive datasets required to make self-driving cars a safe and reliable reality.</p>
    `,
    tags: ['autonomous vehicles', 'self-driving cars', 'ADAS', 'automotive', 'sensor fusion'],
    relatedPosts: ['data-annotation-best-practices', 'ai-medical-imaging']
  }
];

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Find related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id))
    : [];
    
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />
        
        <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to all articles
        </Link>
        
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Featured image */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Article content */}
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">{post.author.charAt(0)}</span>
              </div>
              <div className="ml-3">
                <p className="font-medium dark:text-white">{post.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.authorTitle}</p>
              </div>
              <div className="ml-auto flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                </span>
                <button className="flex items-center text-blue-600 dark:text-blue-400">
                  <Share2 className="h-4 w-4 mr-1" /> Share
                </button>
              </div>
            </div>
            
            {/* Article body */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
            />
            
            {/* Author bio */}
            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-lg font-bold mb-2 dark:text-white">About the Author</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.authorBio}</p>
            </div>
            
            {/* Tags */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Related Articles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {relatedPosts.map((post) => (
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
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 