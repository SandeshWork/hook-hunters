import { motion } from 'motion/react';
import { Award, Target, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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
              Built By Marketers Who Understand Growth
            </h1>
            <p className="text-xl text-gray-300">
              We combine performance marketing, creative strategy, and automation to drive measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-[#1c3439] mb-4">
                  Meet Sandesh Yewale
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Founder & Digital Marketing Specialist
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  HookHunters is founded by <strong>Sandesh Yewale</strong>, a performance marketing specialist with <strong>3.5+ years of experience</strong> scaling campaigns for major EdTech and SaaS brands using data-driven growth strategies.
                </p>
                <p>
                  Sandesh has managed campaigns across <strong>Google Ads, Meta Ads, and LinkedIn Ads</strong>, generating thousands of leads and driving significant revenue growth for companies. His expertise spans managing large advertising budgets, building full marketing funnels, and directing creative teams.
                </p>
                <p>
                  The agency focuses on combining <strong>analytics, automation, and creative storytelling</strong> to drive measurable growth for startups, SaaS companies, and education businesses.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#bbd7dd]/20 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-[#1c3439] mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1c3439] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that drive everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1c3439] mb-4">
              What We Bring to the Table
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Let's Grow Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with a team that's committed to your success
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#bbd7dd]/30 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}