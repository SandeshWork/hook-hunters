import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const blogPosts = [
    {
      title: '10 Performance Marketing Tips to Boost Your ROI in 2026',
      excerpt: 'Discover proven strategies to maximize your ad spend and drive better results from your marketing campaigns.',
      category: 'Performance Marketing',
      author: 'Sandesh Yewale',
      date: 'March 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzI4MjM3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Google Ads Strategy: How to Scale from ₹10K to ₹1L Per Day',
      excerpt: 'Learn the exact framework we use to scale Google Ads campaigns for SaaS and EdTech companies.',
      category: 'Google Ads',
      author: 'Sandesh Yewale',
      date: 'March 3, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3Mjg3NTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Creative Ad Ideas That Convert: A Designer Perspective',
      excerpt: 'Stop scroll, capture attention, and drive conversions with these creative ad design principles.',
      category: 'Creative Design',
      author: 'Sandesh Yewale',
      date: 'February 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI4MjcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Landing Page Optimization: 7 Elements That Triple Conversions',
      excerpt: 'Transform your landing pages into conversion machines with these proven optimization techniques.',
      category: 'Conversion Optimization',
      author: 'Sandesh Yewale',
      date: 'February 25, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI4MjcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Growth Marketing Playbook for SaaS Startups',
      excerpt: 'A comprehensive guide to building a scalable growth engine for your SaaS business.',
      category: 'Growth Marketing',
      author: 'Sandesh Yewale',
      date: 'February 20, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzI4MjM3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Meta Ads in 2026: What\'s Working Now',
      excerpt: 'Stay ahead of the curve with the latest Meta Ads strategies and best practices.',
      category: 'Meta Ads',
      author: 'Sandesh Yewale',
      date: 'February 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3Mjg3NTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  const categories = ['All', 'Performance Marketing', 'Google Ads', 'Creative Design', 'Growth Marketing', 'Meta Ads'];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1c3439] to-[#0f1d20] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Marketing Insights & Strategies
            </h1>
            <p className="text-xl text-gray-300">
              Learn from real campaigns, proven strategies, and industry best practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  index === 0
                    ? 'bg-[#1c3439] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1c3439] text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#1c3439] group-hover:text-[#2a4a52] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>

                    <button className="flex items-center gap-2 text-[#1c3439] font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-white border-2 border-[#1c3439] text-[#1c3439] rounded-lg font-semibold hover:bg-[#1c3439] hover:text-white transition-all duration-300">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1c3439] to-[#0f1d20] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Marketing Insights Weekly
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for tips, strategies, and case studies
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bbd7dd]"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#bbd7dd]/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}