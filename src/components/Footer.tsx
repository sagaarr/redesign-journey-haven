
import React from 'react';
import { Mail, MapPin, Twitter, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4">
                UNM<span className="text-primary">Foundation</span>
              </h3>
              <p className="text-gray-600 max-w-sm">
                Supporting excellence in education, healthcare, and research at the University of New Mexico.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Twitter size={22} />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Facebook size={22} />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">UNM Foundation</p>
                  <p className="text-gray-600">Registration No.: E-8729/Pune</p>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-primary" />
                  <a href="mailto:contact@unmfoundation.in" className="text-gray-600 hover:text-primary transition-colors">
                    contact@unmfoundation.in
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                  <span className="text-gray-600">1/300, Sector 27 A, Pradhikaran Nigdi, Pune 44</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" type="text" placeholder="Subject" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto flex items-center gap-2">
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} UNM Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
