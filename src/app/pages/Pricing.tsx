import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function Pricing() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Starter',
      price: '₹15,000',
      period: '/month',
      description: 'Perfect for small startups starting their marketing journey.',
      features: [
        'Audit of 2 Social Media Accounts',
        '2 PPC Campaigns Setup',
        '3 Creatives',
        'Campaign Optimization',
      ],
      cta: 'Start Growth',
      popular: false,
    },
    {
      name: 'Ready-to-Go',
      price: '₹30,000',
      period: '/month',
      description: 'Best for growing businesses scaling their marketing.',
      features: [
        'Everything in Starter',
        'Audit of All Social Media Accounts',
        '6 PPC Campaigns Setup',
        '10 Creatives + 1 Video and Postings',
        'Campaign Optimization + Reports',
      ],
      cta: 'Scale My Business',
      popular: true,
    },
    {
      name: "Let's Rock",
      price: '₹50,000',
      period: '/month',
      description: 'Complete marketing growth system.',
      features: [
        'Everything in Ready-to-Go',
        'Website Design (5 Pages)',
        '5 SEO Blog Articles',
        'Advanced Campaign Optimization',
        'Full Creative Strategy',
        'Marketing Automation Setup',
      ],
      cta: "Let's Rock 🚀",
      popular: false,
    },
  ];

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsFormOpen(true);
  };

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
              x: [0, 70, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-64 -left-64 w-[700px] h-[700px] bg-gradient-to-br from-[#bbd7dd]/30 via-[#bbd7dd]/20 to-transparent rounded-full blur-3xl md:block hidden"
          />
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 60, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/3 -right-64 w-[650px] h-[650px] bg-gradient-to-bl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl md:block hidden"
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
              Transparent Pricing
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1c3439] mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the perfect plan to scale your business with data-driven marketing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards - White with blobs */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
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
            className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-[#bbd7dd]/15 via-[#bbd7dd]/8 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -12, scale: plan.popular ? 1 : 1.02 }}
                className="relative"
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#bbd7dd]/20 transition-all duration-500 h-full ${ 
                  plan.popular
                    ? 'ring-2 ring-[#bbd7dd] md:scale-105'
                    : ''
                }`}>
                  {/* Gradient overlay on popular */}
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-[#bbd7dd]/5 to-transparent pointer-events-none"
                    />
                  )}

                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div className="bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl shadow-[#1c3439]/40">
                        <Sparkles className="h-4 w-4" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  <div className="relative mb-8 pt-4">
                    <h3 className="text-3xl font-bold text-[#1c3439] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-bold text-[#1c3439]">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-lg">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="relative space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.15) + (featureIndex * 0.05) }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                          className="w-6 h-6 bg-gradient-to-br from-[#bbd7dd] to-[#a0c9d1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                        >
                          <Check className="h-4 w-4 text-[#1c3439]" />
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => handlePlanSelect(plan.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white shadow-lg shadow-[#1c3439]/20 hover:shadow-2xl hover:shadow-[#1c3439]/30'
                        : 'bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] shadow-lg shadow-[#bbd7dd]/20 hover:shadow-xl hover:shadow-[#bbd7dd]/30'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-600 mb-4 text-lg">
              All plans include dedicated support and monthly performance reports
            </p>
            <p className="text-gray-500">
              Need a custom solution?{' '}
              <button
                onClick={() => setIsFormOpen(true)}
                className="text-[#1c3439] font-semibold underline hover:no-underline hover:text-[#2a4a52] transition-colors"
              >
                Contact us
              </button>{' '}
              for enterprise pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - White with blob */}
      <section className="relative py-32 bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            className="absolute bottom-0 -right-48 w-[700px] h-[700px] bg-gradient-to-tl from-[#bbd7dd]/20 via-[#bbd7dd]/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              FAQ
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                q: 'What if I need more than what is included?',
                a: 'We offer add-ons and custom packages tailored to your specific needs. Contact us to discuss your requirements.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a satisfaction guarantee. If you are not happy with our service in the first 30 days, we will work to make it right.'
              },
              {
                q: 'How quickly can we get started?',
                a: 'Once you sign up, we can start working on your campaigns within 2-3 business days after the initial consultation.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#bbd7dd]/20 transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
            <h2 className="text-5xl md:text-6xl font-bold text-[#1c3439] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Book a free consultation to discuss which plan is right for you
            </p>
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-xl font-semibold text-lg shadow-2xl shadow-[#1c3439]/30 hover:shadow-[#1c3439]/50 transition-all duration-300 inline-flex items-center justify-center group"
            >
              Book Free Consultation
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

      <LeadForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedPlan('');
        }}
        planName={selectedPlan}
      />
    </div>
  );
}