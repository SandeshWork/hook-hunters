import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Palette, Video, FileText, Globe, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import LeadForm from '../components/LeadForm';
import creativeDesignImage from 'figma:asset/9d2722fed49d9e485ed188cb3da6d741f589a22a.png';

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const services = [
    {
      id: 'performance',
      icon: <Target className="h-12 w-12" />,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that deliver measurable ROI across all major advertising platforms.',
      features: [
        'Google Ads Management',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Ads Campaigns',
        'Conversion Tracking & Analytics',
        'Campaign Optimization & A/B Testing',
        'Remarketing Strategies'
      ],
      image: 'https://images.unsplash.com/photo-1770876577940-297a5b6f31b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzI4MjM3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'website',
      icon: <Globe className="h-12 w-12" />,
      title: 'Website Design',
      description: 'High-converting marketing websites that look stunning and drive results.',
      features: [
        'Custom Website Design',
        'Landing Page Optimization',
        'SEO-Optimized Development',
        'Mobile-Responsive Design',
        'Fast Loading Performance',
        'Up to 5 Pages Included'
      ],
      image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI4MjcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'creative',
      icon: <Palette className="h-12 w-12" />,
      title: 'Creative Designing',
      description: 'Eye-catching designs that capture attention and communicate your brand story.',
      features: [
        'Social Media Creatives',
        'Ad Banners & Graphics',
        'Marketing Promotional Materials',
        'Brand Design Assets',
        'Brochures & Presentations',
        'Infographics & Visual Content'
      ],
      image: creativeDesignImage
    },
    {
      id: 'video',
      icon: <Video className="h-12 w-12" />,
      title: 'Video Editing',
      description: 'Professional video content that engages and converts your audience.',
      features: [
        'Instagram Reels & TikTok Videos',
        'Ad Creative Videos',
        'Explainer Videos',
        'YouTube Video Editing',
        'Short-Form Marketing Videos',
        'Motion Graphics'
      ],
      image: 'https://images.unsplash.com/photo-1598981095190-331171b91de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc3Mjg2NjIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'content',
      icon: <FileText className="h-12 w-12" />,
      title: 'Content & Blogs',
      description: 'SEO-optimized content that ranks on Google and converts readers into customers.',
      features: [
        'SEO Blog Writing',
        'Website Content Creation',
        'Landing Page Copywriting',
        'Marketing Storytelling',
        'Email Marketing Content',
        'Social Media Copy'
      ],
      image: 'https://images.unsplash.com/photo-1745151485547-8d428247c1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwd3JpdGluZyUyMGJsb2d8ZW58MXx8fHwxNzcyODk4MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  return (
    <div className="pt-20 bg-[#fafbfc]">
      {/* Hero - White with blobs */}
      <section className="relative overflow-hidden bg-[#fafbfc] py-24">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #bbd7dd 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-64 -left-64 w-[700px] h-[700px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 60, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/3 -right-64 w-[600px] h-[600px] bg-gradient-to-bl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#bbd7dd]/20 to-[#bbd7dd]/10 backdrop-blur-sm border border-[#bbd7dd]/40 rounded-full text-sm font-medium text-[#1c3439] mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Our Services
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1c3439] mb-6">
              Comprehensive Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Designed to hook your audience and drive measurable growth for your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-[#bbd7dd]/15 via-[#bbd7dd]/8 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 -right-48 w-[700px] h-[700px] bg-gradient-to-tl from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1c3439]/10 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#bbd7dd]/20 via-transparent to-[#1c3439]/20 z-10 group-hover:opacity-70 transition-opacity duration-500" />
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[450px] object-cover"
                    />
                    
                    {/* Floating icon card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="absolute bottom-8 left-8 z-20"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 bg-gradient-to-br from-[#bbd7dd] to-[#a0c9d1] rounded-2xl flex items-center justify-center text-[#1c3439] shadow-2xl shadow-[#bbd7dd]/40"
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Decorative blur elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute ${index % 2 === 0 ? '-top-6 -right-6' : '-top-6 -left-6'} w-24 h-24 bg-gradient-to-br from-[#bbd7dd]/40 to-[#a0c9d1]/30 rounded-3xl blur-2xl pointer-events-none`}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-8`}
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1c3439] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + featureIndex * 0.08 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <CheckCircle className="h-6 w-6 text-[#bbd7dd] flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setIsFormOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-xl font-semibold text-lg shadow-lg shadow-[#1c3439]/20 hover:shadow-2xl hover:shadow-[#1c3439]/30 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA - White with large blob */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#bbd7dd]/30 to-[#bbd7dd]/20 backdrop-blur-sm border border-[#bbd7dd]/50 rounded-full text-sm font-medium text-[#1c3439]">
                <Sparkles className="h-4 w-4" />
                Let's Work Together
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              Let's Build Your Growth Strategy
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Schedule a free consultation to discuss your marketing goals and how we can help you achieve them
            </p>
            
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-xl font-semibold text-lg shadow-2xl shadow-[#1c3439]/30 hover:shadow-[#1c3439]/50 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-sm text-gray-500"
            >
              No commitment required • 30-minute strategy session • Tailored action plan
            </motion.p>
          </motion.div>
        </div>
      </section>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}