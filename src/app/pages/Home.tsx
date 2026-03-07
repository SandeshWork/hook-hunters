import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Zap, TrendingUp, Target, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import LeadForm from '../components/LeadForm';
import heroImage from '@/assets/496af83fd146024dbb603d1a42718a6ed5a1b581.png';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const stats = [
    { value: '100+', label: 'Campaigns Managed' },
    { value: '₹5Cr+', label: 'Ad Spend Managed' },
    { value: '100K+', label: 'Leads Generated' },
  ];

  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns across Google Ads, Meta Ads, and LinkedIn Ads with proven ROI.',
      link: '/services#performance'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Creative Strategy',
      description: 'Compelling visuals and ad creatives that hook your audience and drive conversions.',
      link: '/services#creative'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Marketing',
      description: 'Complete funnel optimization from awareness to conversion with automation.',
      link: '/services#growth'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Content Marketing',
      description: 'SEO-optimized blogs and website content that ranks and converts.',
      link: '/services#content'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1c3439] via-[#1c3439] to-[#0f1d20] text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-2 bg-[#bbd7dd]/20 backdrop-blur-sm border border-[#bbd7dd]/30 rounded-full text-sm text-[#bbd7dd]">
                    Performance Marketing Agency
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  We Turn Clicks Into{' '}
                  <span className="bg-gradient-to-r from-[#bbd7dd] to-white bg-clip-text text-transparent">
                    Customers
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Performance marketing and creative growth strategies for startups, SaaS, and modern businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#bbd7dd]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Growth Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-3xl font-bold text-[#bbd7dd] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bbd7dd]/20 to-transparent z-10" />
                <ImageWithFallback
                  src={heroImage}
                  alt="Professional Business Meeting"
                  className="w-full h-[500px] object-cover relative z-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1c3439] mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data-driven marketing strategies that deliver measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link to={service.link} className="block">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-[#1c3439] font-semibold flex items-center group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1c3439] to-[#0f1d20] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#bbd7dd] rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free marketing audit and custom growth plan tailored to your business goals.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#bbd7dd]/30 transition-all duration-300 transform hover:scale-105"
            >
              Book Free Marketing Audit
            </button>
          </motion.div>
        </div>
      </section>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}