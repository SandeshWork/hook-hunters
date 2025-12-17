import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 grain-bg" style={{ backgroundColor: 'var(--primary-darkest)' }}>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg grain-bg" style={{ backgroundColor: 'var(--primary)' }}>
                <span className="flex items-center justify-center h-full text-white">A</span>
              </div>
              <span className="ml-3 text-xl text-white">Agency</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Transforming businesses through strategic marketing and creative excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">PPC Campaigns</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Video Editing</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Copywriting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-lg grain-bg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg grain-bg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg grain-bg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg grain-bg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg grain-bg flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--primary)' }}>
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Follow us for marketing tips and insights.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {currentYear} Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
