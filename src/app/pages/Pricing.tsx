import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
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
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1c3439] to-[#0f1d20] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
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
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#bbd7dd]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300">
              Choose the perfect plan to scale your business with data-driven marketing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                  plan.popular
                    ? 'ring-4 ring-[#1c3439] shadow-2xl md:scale-105'
                    : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1c3439] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#1c3439]">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-[#bbd7dd] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-[#1c3439]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white hover:shadow-xl hover:shadow-[#1c3439]/20'
                      : 'bg-[#bbd7dd] text-[#1c3439] hover:bg-[#a0c9d1]'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              All plans include dedicated support and monthly performance reports
            </p>
            <p className="text-sm text-gray-500">
              Need a custom solution? <button onClick={() => setIsFormOpen(true)} className="text-[#1c3439] font-semibold underline hover:no-underline">Contact us</button> for enterprise pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1c3439] mb-4">
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
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1c3439] mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free consultation to discuss which plan is right for you
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-10 py-5 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#bbd7dd]/30 transition-all duration-300 transform hover:scale-105"
            >
              Book Free Consultation
            </button>
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