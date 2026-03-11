import { motion } from 'motion/react';
import { Award, Target, TrendingUp, Users, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Data-Driven',
      description: 'Every decision backed by analytics and real performance metrics'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growth Focused',
      description: 'Obsessed with delivering measurable ROI and scaling results'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Creative Excellence',
      description: 'Compelling storytelling that captures attention and converts'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client Success',
      description: 'Your growth is our success. We are invested in your wins'
    },
  ];

  const achievements = [
    { number: '3.5+', label: 'Years Experience' },
    { number: '₹5 Cr+', label: 'Ad Spend Managed' },
    { number: '100K+', label: 'Leads Generated' },
    { number: '100+', label: 'Campaigns Managed' },
  ];

  const expertise = [
    {
      title: 'Performance Marketing',
      description: 'Expertise in Google Ads, Meta Ads, LinkedIn Ads with proven track record of generating high-quality leads and revenue.'
    },
    {
      title: 'Creative Strategy',
      description: 'In-house creative team producing high-converting ad creatives, videos, and marketing assets that capture attention.'
    },
    {
      title: 'Marketing Automation',
      description: 'Implementation of automation systems and tools to scale campaigns efficiently and optimize performance.'
    },
    {
      title: 'Conversion Optimization',
      description: 'Full-funnel optimization from ad creative to landing page, ensuring maximum ROI from every marketing dollar.'
    },
    {
      title: 'Data & Analytics',
      description: 'Deep dive into campaign data with actionable insights and regular reporting to track and improve performance.'
    },
    {
      title: 'Content Marketing',
      description: 'SEO-optimized content strategy that ranks on Google and converts readers into customers.'
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
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-64 -left-64 w-[650px] h-[650px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -right-64 w-[700px] h-[700px] bg-gradient-to-bl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl"
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
              About Us
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1c3439] mb-6">
              Built By Marketers Who{' '}
              <span className="relative inline-block">
                Understand Growth
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#bbd7dd]/40 to-[#bbd7dd]/20 rounded-full"
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine performance marketing, creative strategy, and automation to drive measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - White with blobs */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/3 -left-48 w-[550px] h-[550px] bg-gradient-to-br from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-[#1c3439] mb-4"
              >
                Meet Sandesh Yewale
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl text-[#bbd7dd] font-medium"
              >
                Founder & Digital Marketing Specialist
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto"
            >
              <p className="text-center">
                HookHunters is founded by <strong className="text-[#1c3439]">Sandesh Yewale</strong>, a performance marketing specialist with <strong className="text-[#1c3439]">3.5+ years of experience</strong> scaling campaigns for major EdTech and SaaS brands using data-driven growth strategies.
              </p>
              <p className="text-center">
                Sandesh has managed campaigns across <strong className="text-[#1c3439]">Google Ads, Meta Ads, and LinkedIn Ads</strong>, generating thousands of leads and driving significant revenue growth for companies. His expertise spans managing large advertising budgets, building full marketing funnels, and directing creative teams.
              </p>
              <p className="text-center">
                The agency focuses on combining <strong className="text-[#1c3439]">analytics, automation, and creative storytelling</strong> to drive measurable growth for startups, SaaS companies, and education businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#bbd7dd]/10 to-transparent rounded-2xl p-8 text-center border border-[#bbd7dd]/20 shadow-lg shadow-gray-200/50"
                >
                  <div className="text-4xl font-bold text-[#1c3439] mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values - White with blobs */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 24,
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
              Our Values
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#bbd7dd]/20 transition-all duration-500 h-full border border-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#bbd7dd]/5 to-transparent pointer-events-none"
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#1c3439]/20"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise - White with blobs */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 -left-48 w-[650px] h-[650px] bg-gradient-to-br from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
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
              Expertise
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              What We Bring to the Table
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#bbd7dd]/20 transition-all duration-500 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#1c3439] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - White with large blob */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              Let's Grow Together
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Partner with a team that's committed to your success and growth
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-xl font-semibold text-lg shadow-2xl shadow-[#1c3439]/30 hover:shadow-[#1c3439]/50 transition-all duration-300"
              >
                Get in Touch
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}