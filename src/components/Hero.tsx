
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
  
  const heroImages = [
    "/lovable-uploads/36472fbd-e07b-49d3-b095-355a160b6036.png",
    "/lovable-uploads/c0bd6173-b74b-4b5a-8a00-bda5e94da974.png",
    "/lovable-uploads/4f563850-d96b-4829-87a9-1c7ebc6c94f8.png",
    "/lovable-uploads/d0aab6de-6147-46a0-9cba-deba28803897.png"
  ];
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Darker overlay for better text visibility */}
        <Carousel 
          className="w-full h-full" 
          opts={{ loop: true, duration: 30 }} 
          autoPlay={true}
          autoPlayInterval={5000}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full w-full">
                  <img 
                    src={image} 
                    alt={`Road safety image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Content */}
      <div className="container px-4 sm:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#00A8E8]/20 text-[#00A8E8] text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Walk Right, Stay Safe
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Take the <span className="text-[#00A8E8]">right</span> step.
            <span className="block text-red-500">Today.</span>
          </h1>
          
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.7s' }}>
            INDIA NEEDS TO <span className="text-[#00A8E8] font-bold">{t('walkRight')}.</span> Walk Right, Stay Safe
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button size="lg" className="group bg-[#00A8E8] hover:bg-[#0088CC]">
              {t('hero.button')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#00A8E8]">
              <Play className="mr-2 h-4 w-4" />
              Watch Safety Video
            </Button>
          </div>
          
          <div className="mt-16 text-white/80 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <p className="font-medium">
              {t('stats.worldwideReport')} <span className="text-red-500 font-bold">270,000</span> {t('stats.pedestrians')},
              {t('stats.roadFatalities')} <span className="text-red-500 font-bold">22%</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Improved centering */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center animate-bounce">
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
