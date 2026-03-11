import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock, Send, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    services: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/a/macros/hookhunters.com/s/AKfycby6oiTpuGWhTxdmjLJQg3m84vLfLJL8CHve3l2e4GCKBZ-8IfGDXEAvWv4NV449I5jl/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          website: formData.website || 'N/A',
          budget: formData.budget,
          services: formData.services,
          description: formData.description || 'N/A',
          timestamp: new Date().toISOString(),
        }),
      });

      // With mode: 'no-cors', we can't read the response, so assume success
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          website: '',
          budget: '',
          services: '',
          description: '',
        });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to submit form. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            className="absolute top-1/3 -right-64 w-[650px] h-[650px] bg-gradient-to-bl from-[#bbd7dd]/25 via-[#bbd7dd]/15 to-transparent rounded-full blur-3xl"
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
              Contact Us
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1c3439] mb-6">
              Let's Start Your{' '}
              <span className="relative inline-block">
                Growth Journey
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
              Get in touch to discuss your marketing goals and how we can help you achieve them
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - White with blobs */}
      <section className="relative py-32 bg-white overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl font-bold text-[#1c3439] mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
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
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#bbd7dd]/20 transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#1c3439]/20"
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-[#1c3439] mb-1 text-lg">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-[#1c3439] transition-colors text-lg"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-lg">{info.content}</p>
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
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-[#1c3439] to-[#2a4a52] rounded-3xl p-8 text-white shadow-2xl shadow-[#1c3439]/30 overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 right-0 w-64 h-64 bg-[#bbd7dd] rounded-full blur-3xl"
                />
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">
                    Book a Free Marketing Audit
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    Get a comprehensive analysis of your current marketing efforts and actionable recommendations for growth.
                  </p>
                  <a 
                    href="https://calendly.com/work-sandeshy/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#bbd7dd] to-[#a0c9d1] text-[#1c3439] rounded-xl font-semibold shadow-lg shadow-[#bbd7dd]/30 hover:shadow-xl hover:shadow-[#bbd7dd]/50 transition-all duration-300 group"
                    >
                      Schedule Free Audit
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-4xl font-bold text-[#1c3439] mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Marketing Budget *
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all"
                    placeholder="₹XX,XXX"
                  />
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                    Services Needed *
                  </label>
                  <select
                    id="services"
                    name="services"
                    required
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Performance Marketing">
                      Performance Marketing
                    </option>
                    <option value="Website Design">
                      Website Design
                    </option>
                    <option value="Creative Design">
                      Creative Design
                    </option>
                    <option value="Video Editing">
                      Video Editing
                    </option>
                    <option value="Blogs">Blogs</option>
                    <option value="Full Growth Plan">
                      Full Growth Plan
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c3439] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your marketing goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-4 bg-gradient-to-r from-[#1c3439] to-[#2a4a52] text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-[#1c3439]/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSubmitted
                      ? "✓ Message Sent!"
                      : "Send Message"}
                </button>

                {error && (
                  <p className="text-xs text-red-500 text-center mt-2">
                    {error}
                  </p>
                )}

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive marketing communications from HookHunters.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
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