import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top Interior Design Trends for 2025',
    excerpt: 'Discover the latest trends that are shaping modern homes and living spaces.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Trends'
  },
  {
    id: 2,
    title: 'How AI is Revolutionizing Interior Design',
    excerpt: 'Explore how artificial intelligence is transforming the way we design and visualize spaces.',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    date: '2024-03-12',
    readTime: '7 min read',
    category: 'Technology'
  },
  {
    id: 3,
    title: 'Small Space Design Tips',
    excerpt: 'Make the most of your compact living space with these clever design solutions.',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Tips & Tricks'
  }
];

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Blog</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Stay updated with the latest interior design trends, tips, and inspiration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mb-3">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {post.excerpt}
              </p>
              <button className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors">
                Read More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;