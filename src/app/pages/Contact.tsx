import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'quote@hookhunters.com',
      link: 'mailto:quote@hookhunters.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Mumbai, India',
      link: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      content: 'Mon-Fri: 10AM - 7PM IST',
      link: null
    },
  ];

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
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#bbd7dd]/10 rounded-full blur-3xl"
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
              Let's Start Your Growth Journey
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch to discuss your marketing goals and how we can help you achieve them
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-[#1c3439] mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to transform your marketing? Let's talk about your goals and create a custom growth plan.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1c3439] mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-[#1c3439] transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Book a Free Marketing Audit
                </h3>
                <p className="text-gray-300 mb-6">
                  Get a comprehensive analysis of your current marketing efforts and actionable recommendations for growth.
                </p>
                <a 
                  href="https://calendly.com/work-sandeshy/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-lg font-semibold hover:shadow-xl hover:shadow-[#bbd7dd]/20 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Audit
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-[#1c3439] mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-6">
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you shortly with a personalized growth plan.
                </p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="w-full py-4 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105"
                >
                  Open Contact Form
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive marketing communications from HookHunters.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </section>

      {/* Map/Additional CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#1c3439] mb-6">
              Prefer to Chat Directly?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a quick 30-minute call to discuss your marketing challenges and goals
            </p>
            <a
              href="https://calendly.com/work-sandeshy/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Call
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}