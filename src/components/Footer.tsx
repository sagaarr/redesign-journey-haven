
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl">
              UNM<span className="text-primary">Foundation</span>
            </h3>
            <p className="text-gray-600 max-w-xs">
              Supporting excellence in education, healthcare, and research at the University of New Mexico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'News & Events', 'Careers', 'FAQs', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center group">
                    <span>{item}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                <span className="text-gray-600">700 Lomas Blvd NE, Albuquerque, NM 87102</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+15052777114" className="text-gray-600 hover:text-primary transition-colors">
                  (505) 277-7114
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:contact@unmfoundation.org" className="text-gray-600 hover:text-primary transition-colors">
                  contact@unmfoundation.org
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates and news.</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email address" className="w-full" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UNM Foundation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
