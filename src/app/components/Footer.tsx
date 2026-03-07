import image_f39f7a7cb46f5a4ca2c861ad7ac9d496cfd6be1b from '@/assets/f39f7a7cb46f5a4ca2c861ad7ac9d496cfd6be1b.png'
import image_996c804a9c933ece4d76a0049f31ba416cab95ab from '@/assets/996c804a9c933ece4d76a0049f31ba416cab95ab.png'
import { Link } from 'react-router';
import { motion } from 'motion/react';
import logo3 from '../../imports/3.svg';

export default function Footer() {
  return (
    <footer className="bg-[#1c3439] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              src={image_f39f7a7cb46f5a4ca2c861ad7ac9d496cfd6be1b}
              alt="HookHunters"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 mb-4">
              Growth Powered by Performance Marketing
            </p>
            <p className="text-sm text-gray-400">
              Founded by Sandesh Yewale
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {['Performance Marketing', 'Website Design', 'Creative Designing', 'Video Editing', 'Content & Blogs'].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-[#bbd7dd] transition-colors inline-block"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#bbd7dd] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href="mailto:quote@hookhunters.com"
                  className="hover:text-[#bbd7dd] transition-colors inline-block"
                >
                  quote@hookhunters.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-[#bbd7dd] text-[#1c3439] rounded-lg hover:bg-white transition-colors mt-2"
                >
                  Book Free Marketing Audit
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm"
        >
          <p>© 2026 HookHunters — Growth Powered by Performance Marketing</p>
        </motion.div>
      </div>
    </footer>
  );
}
