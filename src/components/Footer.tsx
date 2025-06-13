import React from 'react';
import { Mail, MapPin, Twitter, Instagram, Facebook, Linkedin, Send, Phone, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                UNM<span className="text-primary">Foundation</span>
              </h3>
              {/* <p className="text-muted-foreground max-w-sm">
                Supporting excellence in education, healthcare, and research at the University of New Mexico.
              </p> */}
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-foreground">Stay Updated</h4>
              <div className="flex space-x-4">
              
              <Link 
              to={"https://www.instagram.com/unmfoundationindia/#"} 
              className="text-muted-foreground hover:text-primary transition-colors">
               <Instagram size={22} />
              </Link>

              <Link 
              to={"https://whatsapp.com/channel/0029VawuE4NFy72H25gnzO1v"} 
              className="text-muted-foreground hover:text-primary transition-colors">
               <FaWhatsapp size={22} />
              </Link>

              <Link 
              to={"https://www.facebook.com/people/UnM-Foundation-India/61565708144198/?_rdr"} 
              className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={22} />
              </Link>

              <Link 
              to={"https://youtube.com/@unmfoundationindia?si=e4tCwDuKF5kB2vjo"} 
              className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={22} />
              </Link>

              <Link 
              to={"https://x.com/UnMIndia"} 
              className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={22} />
               </Link>

              <Link 
              to={"https://in.linkedin.com/company/unm-foundation-india?trk=public_post_follow-view-profile"} 
              className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={22} />
              </Link>              
              
               {/* <a href="https://x.com/UnMIndia" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={22} />
                </a>
                <a href="https://www.instagram.com/unmfoundationindia/#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="https://www.facebook.com/people/UnM-Foundation-India/61565708144198/?_rdr" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={22} />
                </a>
                <a href="https://in.linkedin.com/company/unm-foundation-india?trk=public_post_follow-view-profile" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={22} />
                </a> */}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-foreground">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium text-foreground">UNM Foundation</p>
                  <p className="text-muted-foreground">Registration No.: E-8729/Pune</p>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-primary" />
                  <a href="mailto:contact@unmfoundation.in" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@unmfoundation.in
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                  <span className="text-muted-foreground">1/300, Sector 27 A, Pradhikaran Nigdi, Pune 44</span>
                </li>
              </ul>
            </div>
          </div>

           <div className="hidden md:flex md:justify-center md:items-center">
          <img
          src="/lovable-uploads/e9fe6340-0e37-4775-b4fe-0eaa7eaaa9b1.png"
          alt="Mascot"
          className="h-[400px] w-auto object-contain"
        />
            </div>
        

          {/* Right Column - Contact Form */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact Us</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <Input id="name" type="text" placeholder="Your name" className="bg-white text-black placeholder:text-gray-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-white text-black placeholder:text-gray-500" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                <Input id="subject" type="text" placeholder="Subject" className="bg-white text-black placeholder:text-gray-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[120px] bg-white text-black placeholder:text-gray-500"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} UNM Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
