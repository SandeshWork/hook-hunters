import { Megaphone, Palette, Video, PenTool, Share2, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'PPC Campaigns',
    description: 'Strategic paid advertising on Google Ads, Meta platforms, and other channels to maximize your ROI.',
    features: ['Google Ads', 'Meta Ads', 'Multi-Platform']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visuals that communicate your brand story and captivate your audience.',
    features: ['Brand Identity', 'Marketing Materials', 'Digital Assets']
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video production and editing that brings your content to life.',
    features: ['Social Videos', 'Commercials', 'Motion Graphics']
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    description: 'Compelling copy that converts visitors into customers and tells your brand story.',
    features: ['SEO Content', 'Ad Copy', 'Brand Messaging']
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Complete social media management to build and engage your online community.',
    features: ['Content Strategy', 'Community Management', 'Analytics']
  },
  {
    icon: Briefcase,
    title: 'Personal Branding',
    description: 'Professional resume building and portfolio website development to showcase your expertise.',
    features: ['Resume Design', 'Portfolio Sites', 'LinkedIn Optimization']
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 grain-bg" style={{ backgroundColor: 'var(--primary-lightest)' }}>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full grain-bg text-sm mb-4" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--primary-darkest)' }}>
            Comprehensive Solutions for Your Growth
          </h2>
          <p className="text-lg text-gray-600">
            From strategy to execution, we offer everything you need to succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl grain-bg flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110" 
                style={{ backgroundColor: 'var(--primary-lightest)' }}
              >
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: 'var(--primary)' }} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl mb-3" style={{ color: 'var(--primary-darkest)' }}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: 'var(--primary)' }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
