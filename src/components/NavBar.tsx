
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Blog', href: '#blog' },
    { name: 'Get Involved', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="w-1/3 md:w-1/4 flex justify-start">
            {/* Empty div for layout spacing */}
          </div>
          
          <div className="flex-1 flex justify-center">
            <a href="#" className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/d02c0ac4-0007-4c02-a70e-3db61b7dd182.png" 
                alt="Walk Right India Logo" 
                className="h-12 md:h-16"
              />
            </a>
          </div>
          
          <div className="w-1/3 md:w-1/4 flex justify-end">
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-[#00A8E8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        'md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col h-full pt-20 px-4">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/d02c0ac4-0007-4c02-a70e-3db61b7dd182.png" 
              alt="Walk Right India Logo" 
              className="h-12"
            />
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-gray-800 hover:text-[#00A8E8]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <Button className="w-full bg-[#00A8E8] hover:bg-[#0088CC]">Walk Right</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
