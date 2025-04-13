import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [showUpArrow, setShowUpArrow] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const bottomThreshold = document.documentElement.scrollHeight - window.innerHeight - 200;
      setShowUpArrow(window.scrollY > bottomThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToNextSection = () => {
    if (showUpArrow) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const galleryContent = document.getElementById('gallery-content');
      if (galleryContent) {
        const offset = galleryContent.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      } else {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  
  const heroSlides = [
    {
      image: "/lovable-uploads/36472fbd-e07b-49d3-b095-355a160b6036.png",
      title: "Walk Safely",
      subtitle: "Always Use Sidewalks",
      description: "Use footpaths where available. If none, walk on the right side of the road facing traffic.",
      rule: "📘 Rule: Rules of the Road Regulations, 1989 – Rule 8",
      law: "⚖️ Law Reference: IPC Section 283 – Obstruction in public way"
    },
    {
      image: "/lovable-uploads/c0bd6173-b74b-4b5a-8a00-bda5e94da974.png",
      title: "Cross Responsibly",
      subtitle: "Use Crosswalks & Signals",
      description: "Always cross at zebra crossings, signals, or subways. Look left–right–left before crossing.",
      rule: "📘 Rule: Rules of the Road Regulations, 1989 – Rule 11",
      law: "⚖️ Law Reference: IPC Section 336 – Act endangering life or personal safety of others"
    },
    {
      image: "/lovable-uploads/4f563850-d96b-4829-87a9-1c7ebc6c94f8.png",
      title: "Stay Alert",
      subtitle: "Avoid Distractions",
      description: "Do not use mobile phones or wear headphones while crossing. Stay focused on surroundings.",
      rule: "📘 Guideline: Indian Roads Congress (IRC:103-2012) – Pedestrian Facilities",
      law: "⚖️ Law Reference: IPC Section 336 – Careless behavior leading to danger"
    },
    {
      image: "/lovable-uploads/d0aab6de-6147-46a0-9cba-deba28803897.png",
      title: "Know the Law",
      subtitle: "Follow Indian Road Laws",
      description: "Careless walking or creating a traffic hazard can be penalized. Walk responsibly and lawfully.",
      rule: "📘 Rule: Rules of the Road Regulations, 1989 – General conduct",
      law: "⚖️ Law References:\n– IPC Section 283 – Public obstruction\n– IPC Section 336 – Risk to life/safety"
    }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 w-full h-full z-0">
        <Carousel 
          className="w-full h-full" 
          opts={{ loop: true, duration: 30 }} 
          autoPlay={true}
          autoPlayInterval={5000}
        >
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full w-full relative">
                  <img 
                    src={slide.image} 
                    alt={`Road safety image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="container mx-auto px-4 py-4 md:px-8 md:py-6">
                      <div className="flex flex-col gap-4 md:gap-8 lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-5 flex flex-col justify-center">
                          <div className="bg-black/70 backdrop-blur-md p-4 md:p-8 rounded-xl border-l-4 border-[#00A8E8] shadow-xl max-w-full">
                            <div className="bg-gradient-to-r from-[#00A8E8] to-blue-700 h-2 w-16 md:w-24 mb-3 md:mb-4 rounded"></div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg animate-fade-in break-words hyphens-auto">
                              {slide.title}
                            </h2>
                            <div className="h-1 w-12 md:w-16 lg:w-32 bg-white/70 my-2 md:my-4 rounded"></div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00A8E8] drop-shadow-xl break-words hyphens-auto">
                              {slide.subtitle}
                            </h3>
                          </div>
                        </div>
                        <div className="lg:col-span-7 flex flex-col justify-center">
                          <div className="bg-black/70 backdrop-blur-md p-4 md:p-8 rounded-xl border-t-2 border-white/20 shadow-2xl max-w-full">
                            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-3 md:mb-6 drop-shadow-md">
                              {slide.description}
                            </p>
                            <div className="space-y-3 md:space-y-4 mt-2">
                              <div className="bg-gradient-to-r from-green-600/90 to-green-800/90 backdrop-blur-md px-3 py-3 md:px-5 md:py-4 rounded-lg shadow-lg">
                                <p className="text-sm md:text-base lg:text-lg font-medium text-white drop-shadow-sm break-words">
                                  {slide.rule}
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-red-700/90 to-red-900/90 backdrop-blur-md px-3 py-3 md:px-5 md:py-4 rounded-lg shadow-lg">
                                <p className="text-sm md:text-base lg:text-lg font-medium text-white drop-shadow-sm break-words">
                                  {slide.law}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="fixed right-6 bottom-10 z-50">
        <button
          onClick={scrollToNextSection}
          className="flex items-center justify-center p-3 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-300 text-white"
          aria-label={showUpArrow ? "Scroll to top" : "Scroll down"}
        >
          {showUpArrow ? (
            <ArrowUp className="h-6 w-6" />
          ) : (
            <ArrowDown className="h-6 w-6" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Hero;
