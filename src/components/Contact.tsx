import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 grain-bg" style={{ backgroundColor: 'var(--primary-lightest)' }}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full grain-bg text-sm mb-4" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--primary-darkest)' }}>
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-gray-600">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: 'var(--primary-darkest)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: 'var(--primary-darkest)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2" style={{ color: 'var(--primary-darkest)' }}>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="ppc">PPC Campaigns</option>
                  <option value="design">Graphic Design</option>
                  <option value="video">Video Editing</option>
                  <option value="copy">Copywriting</option>
                  <option value="social">Social Media</option>
                  <option value="branding">Personal Branding</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: 'var(--primary-darkest)' }}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-lg grain-bg text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center group"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Send Message
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl mb-6" style={{ color: 'var(--primary-darkest)' }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-lg grain-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--primary-lightest)' }}>
                    <Mail className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <div className="text-lg">hello@agency.com</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-lg grain-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--primary-lightest)' }}>
                    <Phone className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <div className="text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-lg grain-bg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'var(--primary-lightest)' }}>
                    <MapPin className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-600 mb-1">Office</div>
                    <div className="text-lg">123 Marketing Street<br />New York, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjU5NDkzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social media marketing"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
