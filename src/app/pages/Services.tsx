import { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Palette, Video, FileText, Globe, ArrowRight } from 'lucide-react';
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive marketing solutions designed to hook your audience and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1c3439]/60 to-transparent z-10 group-hover:opacity-80 transition-opacity" />
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#bbd7dd] to-[#a0c9d1] rounded-2xl flex items-center justify-center text-[#1c3439] shadow-xl">
                      {service.icon}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                <div>
                  <h2 className="text-4xl font-bold text-[#1c3439] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#1c3439] rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1c3439] to-[#0f1d20] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Growth Strategy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a free consultation to discuss your marketing goals
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#bbd7dd]/30 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}