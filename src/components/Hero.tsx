
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Darker overlay for better text visibility */}
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-people-walking-on-a-city-street-crossing-4028-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container px-4 sm:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#00A8E8]/20 text-[#00A8E8] text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {t('walkRight')}, Walk Right, Stay Safe
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
