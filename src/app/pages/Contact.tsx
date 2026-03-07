import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    services: [] as string[],
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      setError('Please select at least one service.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/a/macros/hookhunters.com/s/AKfycby6oiTpuGWhTxdmjLJQg3m84vLfLJL8CHve3l2e4GCKBZ-8IfGDXEAvWv4NV449I5jl/exec';
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
          services: formData.services.join(', '),
          description: formData.description || 'N/A',
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          website: '',
          budget: '',
          services: [],
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service: string) => {
    setFormData({
      ...formData,
      services: formData.services.includes(service)
        ? formData.services.filter((s) => s !== service)
        : [...formData.services, service],
    });
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
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services Needed *
                  </label>
                  <div className="space-y-2">
                    {[
                      "Performance Marketing",
                      "Website Design",
                      "Creative Design",
                      "Video Editing",
                      "Blogs",
                      "Full Growth Plan",
                    ].map((service) => (
                      <div key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`service-${service}`}
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="h-4 w-4 rounded border-gray-300 text-[#1c3439] focus:ring-[#1c3439]"
                        />
                        <label
                          htmlFor={`service-${service}`}
                          className="ml-3 text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formData.services.length === 0 && (
                    <p className="text-xs text-red-500 mt-2">
                      Please select at least one service
                    </p>
                  )}
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