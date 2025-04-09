
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
                  <img 
                    src={slide.image} 
                    alt={`Road safety image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Improved text layout to ensure visibility */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="container mx-auto px-4 md:px-8 py-6">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left side - Title section with improved visibility */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                          {/* Title container with fully visible text */}
                          <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-xl border-l-4 border-[#00A8E8] shadow-xl max-w-full">
                            <div className="bg-gradient-to-r from-[#00A8E8] to-blue-700 h-2 w-24 mb-4 rounded"></div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg animate-fade-in break-words hyphens-auto">
                              {slide.title}
                            </h2>
                            <div className="h-1 w-16 lg:w-32 bg-white/70 my-4 rounded"></div>
                            {/* Ensured subtitle doesn't overflow by controlling text size and adding line breaks if needed */}
                            <h3 className="text-xl md:text-3xl font-bold text-[#00A8E8] drop-shadow-xl break-words hyphens-auto">
                              {slide.subtitle}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Right side - Content with improved layout */}
                        <div className="lg:col-span-7 flex flex-col justify-center">
                          {/* Added more spacing and controlled content width */}
                          <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 rounded-xl border-t-2 border-white/20 shadow-2xl max-w-full overflow-hidden">
                            <p className="text-xl text-white leading-relaxed mb-6 drop-shadow-md max-w-3xl">
                              {slide.description}
                            </p>
                            
                            {/* Rules and laws with better text wrapping */}
                            <div className="space-y-4 mt-2">
                              <div className="bg-gradient-to-r from-green-600/90 to-green-800/90 backdrop-blur-md px-5 py-4 rounded-lg shadow-lg">
                                <p className="text-base md:text-lg font-medium text-white drop-shadow-sm break-words">
                                  {slide.rule}
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-yellow-600/90 to-amber-700/90 backdrop-blur-md px-5 py-4 rounded-lg shadow-lg">
                                <p className="text-base md:text-lg font-medium text-white drop-shadow-sm break-words">
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
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center animate-bounce z-20">
        <div className="flex flex-col items-center">
          <div className="w-1 h-16 relative overflow-hidden rounded-full bg-white/40">
            <span className="absolute w-full h-full bg-gradient-to-b from-[#00A8E8] to-blue-700 rounded-full animate-slide-in"></span>
          </div>
          <span className="text-sm mt-2 text-white font-medium px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm shadow-lg">
            Scroll to Learn More
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
