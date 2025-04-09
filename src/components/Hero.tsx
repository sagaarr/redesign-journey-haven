
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
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
                  {/* Dark overlay for better text visibility on mobile */}
                  <div className="absolute inset-0 bg-black/60 z-10"></div>
                  
                  <img 
                    src={slide.image} 
                    alt={`Road safety image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Enhanced mobile-optimized content layout */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="container mx-auto px-3 py-3 md:px-8 md:py-6">
                      {/* Mobile-first layout structure */}
                      <div className="flex flex-col gap-3 md:gap-8 lg:grid lg:grid-cols-12">
                        {/* Title section with greatly improved mobile visibility */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                          {/* Enhanced title container for better mobile visibility */}
                          <div className="bg-black/80 backdrop-blur-md p-3 md:p-8 rounded-xl border-l-4 border-[#00A8E8] shadow-xl">
                            <div className="bg-gradient-to-r from-[#00A8E8] to-blue-700 h-2 w-16 md:w-24 mb-2 md:mb-4 rounded"></div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg hyphens-auto" style={{wordBreak: 'break-word'}}>
                              {slide.title}
                            </h2>
                            <div className="h-1 w-12 md:w-16 lg:w-32 bg-white/80 my-2 rounded"></div>
                            {/* Optimized subtitle with better visibility */}
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00A8E8] drop-shadow-xl hyphens-auto" style={{wordBreak: 'break-word'}}>
                              {slide.subtitle}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Content section with significantly improved mobile readability */}
                        <div className="lg:col-span-7 flex flex-col justify-center mt-3 md:mt-0">
                          {/* Enhanced content container for better mobile contrast */}
                          <div className="bg-black/80 backdrop-blur-md p-3 md:p-8 rounded-xl border-t-2 border-white/20 shadow-2xl">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-3 drop-shadow-md font-medium">
                              {slide.description}
                            </p>
                            
                            {/* Rules and laws with increased contrast and spacing for mobile */}
                            <div className="space-y-2 md:space-y-4">
                              <div className="bg-gradient-to-r from-green-600/90 to-green-800/90 backdrop-blur-md p-2 md:px-5 md:py-4 rounded-lg shadow-lg">
                                <p className="text-xs md:text-base lg:text-lg font-medium text-white drop-shadow-sm break-words">
                                  {slide.rule}
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-red-600/90 to-red-800/90 backdrop-blur-md p-2 md:px-5 md:py-4 rounded-lg shadow-lg">
                                <p className="text-xs md:text-base lg:text-lg font-medium text-white drop-shadow-sm break-words">
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
      
      {/* Improved mobile visibility for scroll indicator */}
      <div className="absolute bottom-2 md:bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center animate-bounce z-30">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 md:h-16 relative overflow-hidden rounded-full bg-white/60">
            <span className="absolute w-full h-full bg-gradient-to-b from-[#00A8E8] to-blue-700 rounded-full animate-slide-in"></span>
          </div>
          <span className="text-xs md:text-sm mt-1 text-white font-semibold px-3 py-1 md:px-4 md:py-2 rounded-full bg-black/80 backdrop-blur-sm shadow-lg">
            Scroll to Learn More
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
