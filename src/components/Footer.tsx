
import React from 'react';
import { Mail, MapPin, Twitter, Instagram, Facebook, Linkedin, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Social Media & Media Showcase Section */}
        <div className="mb-16">
          <h3 className="font-display font-bold text-2xl mb-8 text-center">Connect With Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Widget */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center">
                  <Instagram className="text-white mr-2" />
                  <h4 className="font-bold text-white">Instagram</h4>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <img 
                      src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Road safety campaign" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Road safety awareness" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Community outreach" 
                      className="w-full h-32 object-cover rounded"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Traffic safety" 
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                      Follow us on Instagram
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Twitter Widget */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-500 p-4 flex items-center">
                  <Twitter className="text-white mr-2" />
                  <h4 className="font-bold text-white">Twitter</h4>
                </div>
                <div className="p-4">
                  <div className="border rounded p-3 mb-3">
                    <div className="flex items-start mb-2">
                      <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                        <span className="font-bold text-gray-500">UF</span>
                      </div>
                      <div>
                        <p className="font-bold">UNM Foundation <span className="text-gray-500 font-normal">@unmfoundation</span></p>
                        <p className="text-sm text-gray-700">Our latest road safety campaign reached over 1000 students this month! Thanks to all volunteers and partners for making this possible. #RoadSafety #Community</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  
                  <div className="border rounded p-3">
                    <div className="flex items-start mb-2">
                      <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                        <span className="font-bold text-gray-500">UF</span>
                      </div>
                      <div>
                        <p className="font-bold">UNM Foundation <span className="text-gray-500 font-normal">@unmfoundation</span></p>
                        <p className="text-sm text-gray-700">Join us next weekend for the road safety awareness workshop at Nigdi Community Center. Free admission for all! #StaySafe</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                  
                  <div className="mt-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Follow us on Twitter
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Video Section */}
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="bg-red-500 p-4 flex items-center">
                  <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                  <h4 className="font-bold text-white">Latest Videos</h4>
                </div>
                <div className="relative pt-[56.25%] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center p-6">
                      <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-500">Road Safety Awareness Campaign</p>
                      <p className="text-sm text-gray-400 mt-1">Click to play video</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="font-bold mb-2">Road Safety - Know the Rules</h5>
                  <p className="text-sm text-gray-600 mb-4">Learn about essential road safety practices that can save lives. Our latest educational video covers traffic signals, pedestrian safety, and more.</p>
                  <div className="mt-4">
                    <a href="#" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                      Watch more videos
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
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
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Phone size={22} />
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
