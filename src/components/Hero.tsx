
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
    <section id="hero" className="relative h-[120vh] sm:h-[100vh] min-h-[600px] w-full flex flex-col justify-center overflow-hidden">
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
                  {/* Darker overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black/90 z-10"></div>
                  
                  {/* Background image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={`Road safety image ${index + 1}`} 
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: isMobile ? "center 35%" : "center center",
                        transform: isMobile ? "scale(1.5)" : "scale(1)"
                      }}
                    />
                  </div>
                  
                  {/* Content layout */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="container mx-auto px-4 py-8 md:py-20">
                      {/* Mobile optimized layout */}
                      <div className="flex flex-col gap-6 lg:gap-8 lg:grid lg:grid-cols-12 max-w-7xl mx-auto">
                        {/* Title section */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                          <div className="bg-black/70 backdrop-blur-md p-4 md:p-8 rounded-xl border-l-4 border-[#00A8E8] shadow-xl">
                            <div className="bg-gradient-to-r from-[#00A8E8] to-blue-700 h-2 w-16 md:w-24 mb-3 rounded"></div>
                            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
                              {slide.title}
                            </h2>
                            <div className="h-1 w-12 md:w-16 lg:w-32 bg-white/80 my-2 md:my-3 rounded"></div>
                            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#00A8E8] drop-shadow-xl">
                              {slide.subtitle}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Content section */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                          <div className="bg-black/70 backdrop-blur-md p-4 md:p-8 rounded-xl border-t-2 border-white/20 shadow-2xl">
                            <p className="text-base sm:text-xl lg:text-xl text-white leading-snug mb-4 md:mb-5 drop-shadow-md font-medium">
                              {slide.description}
                            </p>
                            
                            {/* Rules and laws */}
                            <div className="space-y-2 md:space-y-3">
                              <div className="bg-gradient-to-r from-green-600/90 to-green-800/90 backdrop-blur-md p-3 md:p-4 rounded-lg shadow-lg">
                                <p className="text-xs sm:text-base lg:text-lg font-medium text-white drop-shadow-sm">
                                  {slide.rule}
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-red-600/90 to-red-800/90 backdrop-blur-md p-3 md:p-4 rounded-lg shadow-lg">
                                <p className="text-xs sm:text-base lg:text-lg font-medium text-white drop-shadow-sm">
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 mx-auto w-full flex justify-center items-center animate-bounce z-30">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 md:h-12 relative overflow-hidden rounded-full bg-white/90">
            <span className="absolute w-full h-full bg-gradient-to-b from-[#00A8E8] to-blue-700 rounded-full animate-slide-in"></span>
          </div>
          <span className="text-xs md:text-sm mt-2 text-white font-semibold px-2 py-1 md:px-4 md:py-2 rounded-full bg-black/80 backdrop-blur-sm shadow-lg">
            Scroll to Learn More
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
