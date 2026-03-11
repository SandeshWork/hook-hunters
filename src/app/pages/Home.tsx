import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Zap, TrendingUp, Target, Award, Sparkles, CheckCircle, Rocket, BarChart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import LeadForm from '../components/LeadForm';
import heroImage from 'figma:asset/496af83fd146024dbb603d1a42718a6ed5a1b581.png';

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

  const benefits = [
    'Dedicated marketing specialist',
    'Custom growth strategies',
    'Advanced analytics & reporting',
    'Creative team on demand'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current marketing, competitors, and identify growth opportunities.',
      icon: <Target className="h-8 w-8" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom marketing plan tailored to your business goals and target audience.',
      icon: <Rocket className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Campaign Execution',
      description: 'Launch optimized campaigns across multiple channels with compelling creatives.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Continuous testing, optimization, and scaling based on performance data.',
      icon: <BarChart className="h-8 w-8" />
    },
  ];

  const caseStudies = [
    {
      client: 'EdTech Startup',
      metric: '₹50L+',
      label: 'Revenue Generated',
      description: 'in 6 months',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      client: 'SaaS Company',
      metric: '5X',
      label: 'ROAS Achieved',
      description: 'on ad campaigns',
      color: 'from-purple-500 to-pink-500'
    },
    {
      client: 'B2B Services',
      metric: '10K+',
      label: 'Quality Leads',
      description: 'generated monthly',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="pt-20 bg-[#fafbfc]">
      {/* Hero Section with Dot Pattern */}
      <section className="relative overflow-hidden bg-[#fafbfc]">
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

        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -right-64 w-[700px] h-[700px] bg-gradient-to-bl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <motion.span
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(187, 215, 221, 0.3)',
                        '0 0 30px rgba(187, 215, 221, 0.5)',
                        '0 0 20px rgba(187, 215, 221, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#bbd7dd]/20 to-[#bbd7dd]/10 backdrop-blur-sm border border-[#bbd7dd]/40 rounded-full text-sm font-medium text-[#1c3439]"
                  >
                    <Sparkles className="h-4 w-4" />
                    Performance Marketing Agency
                  </motion.span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1c3439]">
                  We Turn Clicks Into{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#1c3439] via-[#2a4a52] to-[#1c3439] bg-clip-text text-transparent">
                      Customers
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#bbd7dd]/40 to-[#bbd7dd]/20 rounded-full"
                      style={{ transformOrigin: 'left' }}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Performance marketing and creative growth strategies for startups, SaaS, and modern businesses.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 gap-3"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-[#bbd7dd] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  onClick={() => setIsFormOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-xl font-semibold shadow-lg shadow-[#1c3439]/20 hover:shadow-2xl hover:shadow-[#1c3439]/30 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Growth Plan
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#2a4a52] to-[#1c3439]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white border-2 border-[#bbd7dd] text-[#1c3439] rounded-xl font-semibold hover:bg-[#bbd7dd]/10 transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#bbd7dd]/20 shadow-lg shadow-gray-200/50"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, delay: 1.5 + index * 0.2, repeat: Infinity, repeatDelay: 3 }}
                      className="text-3xl font-bold text-[#1c3439] mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
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
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1c3439]/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bbd7dd]/10 to-transparent z-10" />
                  <ImageWithFallback
                    src={heroImage}
                    alt="Professional Business Meeting"
                    className="w-full h-[550px] object-cover relative z-0"
                  />
                </div>
                {/* Floating decorative elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#bbd7dd] to-[#a0c9d1] rounded-3xl opacity-80 blur-xl"
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#bbd7dd] to-[#a0c9d1] rounded-3xl opacity-60 blur-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section with Grid Pattern */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#bbd7dd 1px, transparent 1px), linear-gradient(90deg, #bbd7dd 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-semibold text-[#bbd7dd] tracking-wide uppercase mb-4"
            >
              Proven Results
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              Real Growth, Real Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve extraordinary results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#bbd7dd]/20 transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <p className="text-sm text-gray-500 mb-4">{study.client}</p>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="text-5xl font-bold text-[#1c3439] mb-2"
                    >
                      {study.metric}
                    </motion.div>
                    <p className="text-lg font-semibold text-gray-700 mb-1">{study.label}</p>
                    <p className="text-sm text-gray-500">{study.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview with Dot Pattern */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #bbd7dd 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 -right-48 w-[700px] h-[700px] bg-gradient-to-tl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-semibold text-[#bbd7dd] tracking-wide uppercase mb-4"
            >
              Our Services
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link} className="block h-full">
                  <motion.div
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#bbd7dd]/20 transition-all duration-500 h-full border border-gray-100 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#bbd7dd]/5 to-transparent pointer-events-none"
                    />

                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-16 h-16 bg-gradient-to-br from-[#1c3439] via-[#2a4a52] to-[#1c3439] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#1c3439]/20"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <motion.span
                      className="text-[#1c3439] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-xl font-semibold text-lg shadow-lg shadow-[#1c3439]/20 hover:shadow-2xl hover:shadow-[#1c3439]/30 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-semibold text-[#bbd7dd] tracking-wide uppercase mb-4"
            >
              Our Process
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process to transform your marketing and drive growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#bbd7dd]/20 transition-all duration-500 border border-gray-100 h-full">
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#bbd7dd] to-[#a0c9d1] rounded-2xl flex items-center justify-center text-[#1c3439] font-bold shadow-lg"
                  >
                    {item.step}
                  </motion.div>

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-2xl flex items-center justify-center text-white mb-6 mt-4 shadow-lg shadow-[#1c3439]/20"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connecting Line (except last item) */}
                {index < process.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#bbd7dd] to-transparent"
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White with large blobs */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-64 -right-64 w-[700px] h-[700px] bg-gradient-to-bl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#bbd7dd]/30 to-[#bbd7dd]/20 backdrop-blur-sm border border-[#bbd7dd]/50 rounded-full text-sm font-medium text-[#1c3439]">
                <Sparkles className="h-4 w-4" />
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6"
            >
              Ready to Scale Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Get a free marketing audit and custom growth plan tailored to your business goals. Limited slots available this month.
            </motion.p>

            <motion.button
              onClick={() => setIsFormOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 bg-gradient-to-r from-[#1c3439] via-[#2a4a52] to-[#1c3439] text-white rounded-xl font-semibold text-lg shadow-2xl shadow-[#1c3439]/30 hover:shadow-[#1c3439]/50 transition-all duration-500 inline-flex items-center justify-center relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Book Free Marketing Audit
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2a4a52] via-[#1c3439] to-[#2a4a52]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-sm text-gray-500"
            >
              No credit card required • 30-minute consultation • Custom strategy
            </motion.p>
          </motion.div>
        </div>
      </section>

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}