
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
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Lighter overlay for better visibility */}
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
                  
                  {/* New text content design with no overlay */}
                  <div className="absolute inset-0 flex items-center z-20">
                    <div className="container mx-auto px-6">
                      <div className="max-w-3xl backdrop-blur-sm p-8 border-l-4 border-[#00A8E8]">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-2">
                              {slide.title}
                            </h2>
                            <div className="h-1 w-24 bg-[#00A8E8] rounded mb-4"></div>
                            <h3 className="text-xl md:text-3xl font-semibold text-[#00A8E8] drop-shadow-md">
                              {slide.subtitle}
                            </h3>
                          </div>
                          
                          <p className="text-lg md:text-xl text-white drop-shadow-md leading-relaxed">
                            {slide.description}
                          </p>
                          
                          <div className="space-y-2 pt-2">
                            <p className="text-green-400 text-lg md:text-xl font-medium drop-shadow-sm bg-black/20 backdrop-blur-sm inline-block px-3 py-1 rounded">
                              {slide.rule}
                            </p>
                            <p className="text-yellow-300 text-lg md:text-xl font-medium drop-shadow-sm bg-black/20 backdrop-blur-sm inline-block px-3 py-1 rounded">
                              {slide.law}
                            </p>
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
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center animate-bounce z-20">
        <div className="flex flex-col items-center">
          <div className="w-1 h-10 relative overflow-hidden">
            <span className="absolute w-full h-full bg-gradient-to-b from-white/50 to-white rounded-full animate-slide-in"></span>
          </div>
          <span className="text-sm mt-2 text-white text-center">Scroll to Learn More</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
