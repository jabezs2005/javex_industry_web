import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/Javex Logo Final.jpg" 
              alt="Javex Industry" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading web development and graphic design company delivering innovative digital solutions 
              that drive business growth and enhance user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Graphic Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Brand Identity</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">E-commerce Solutions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">123 Business Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">info@javex.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Javex Industry. All rights reserved. Designed with ❤️ by Javex Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;