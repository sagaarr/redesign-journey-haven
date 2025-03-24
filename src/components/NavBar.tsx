
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Globe, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navLinks.home'), href: '#' },
    { name: t('navLinks.about'), href: '#about' },
    { name: t('navLinks.initiatives'), href: '#initiatives' },
    { name: t('navLinks.blog'), href: '#blog' },
    { name: t('navLinks.getInvolved'), href: '#contact' },
  ];

  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-black/40 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="w-1/3 md:w-1/4 flex justify-start items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-36">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setLanguage(lang.code as Language)}
                    className={cn(
                      "cursor-pointer",
                      language === lang.code && "bg-accent text-accent-foreground"
                    )}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex-1 flex justify-center">
            <a href="#" className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/d02c0ac4-0007-4c02-a70e-3db61b7dd182.png" 
                alt="Walk Right India Logo" 
                className="h-10 md:h-16" 
              />
            </a>
          </div>
          
          <div className="w-1/3 md:w-1/4 flex justify-end">
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="font-medium text-white hover:text-[#00A8E8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-2 rounded-md focus:outline-none text-white bg-white/10 hover:bg-white/20">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-0 w-full sm:max-w-md bg-black">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                      <SheetClose asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="mr-2 text-white"
                        >
                          <ArrowLeft className="h-8 w-8" />
                        </Button>
                      </SheetClose>
                      <div className="flex justify-center flex-1">
                        <img 
                          src="/lovable-uploads/d02c0ac4-0007-4c02-a70e-3db61b7dd182.png" 
                          alt="Walk Right India Logo" 
                          className="h-10"
                        />
                      </div>
                      <div className="w-10"></div> {/* Spacer for alignment */}
                    </div>
                    <nav className="flex flex-col p-4 space-y-6">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.name}>
                          <a 
                            href={link.href}
                            className="text-xl font-medium text-white hover:text-[#00A8E8]"
                          >
                            {link.name}
                          </a>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="mt-auto p-4 space-y-3">
                      <div className="flex justify-center space-x-4 mt-6">
                        {languageOptions.map((lang) => (
                          <Button 
                            key={lang.code} 
                            variant={language === lang.code ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setLanguage(lang.code as Language)}
                            className={cn(
                              "min-w-16",
                              language === lang.code ? "" : "text-white border-white/30 hover:text-white hover:bg-white/10"
                            )}
                          >
                            {lang.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
