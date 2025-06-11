import React from 'react';
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
      description: "Use footpaths where available. If none, walk on the right side of the road facing traffic.",
      rule: "📘 Rule: Rules of the Road Regulations, 1989 – Rule 8",
      law: "⚖️ Law Reference: IPC Section 283 – Obstruction in public way"
    },
    {
      image: "/lovable-uploads/c0bd6173-b74b-4b5a-8a00-bda5e94da974.png",
      description: "Always cross at zebra crossings, signals, or subways. Look left–right–left before crossing.",
      rule: "📘 Rule: Rules of the Road Regulations, 1989 – Rule 11",
      law: "⚖️ Law Reference: IPC Section 336 – Act endangering life or personal safety of others"
    },
    {
      image: "/lovable-uploads/4f563850-d96b-4829-87a9-1c7ebc6c94f8.png",
      description: "Do not use mobile phones or wear headphones while crossing. Stay focused on surroundings.",
      rule: "📘 Guideline: Indian Roads Congress (IRC:103-2012) – Pedestrian Facilities",
      law: "⚖️ Law Reference: IPC Section 336 – Careless behavior leading to danger"
    },
    {
      image: "/lovable-uploads/d0aab6de-6147-46a0-9cba-deba28803897.png",
      description: "Careless walking or creating a traffic hazard can be penalized. Walk responsibly and lawfully.",
      rule: "📘 Rule: Rules of the Road Regulations, 1989 – General conduct",
      law: "⚖️ Law References:\n– IPC Section 283 – Public obstruction\n– IPC Section 336 – Risk to life/safety"
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Fixed Mascot on Left */}
      <div className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 hidden md:block">
        <img
          src="/lovable-uploads/e9fe6340-0e37-4775-b4fe-0eaa7eaaa9b1.png"
          alt="Mascot"
          className="h-[500px] w-auto object-contain ml-4"
        />
      </div>

      {/* Carousel with min-h-screen */}
      <Carousel
        className="w-full min-h-screen"
        opts={{ loop: true, duration: 100 }}
        autoPlay={true}
        autoPlayInterval={10000}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-screen"> {/* Use h-screen here to force fullscreen */}
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full object-cover ${isMobile ? 'h-screen' : 'h-full'}`}
                />

                {/* Message Section */}
                <div className="absolute inset-0 z-20 flex items-center justify-start">
                  <div className="ml-[40%] w-full pr-6"> {/* Adjust to match mascot width */}
                    <div className="bg-black/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl max-w-3xl w-full">
                      <p className="text-white text-base md:text-lg lg:text-xl mb-4">
                        {slide.description}
                      </p>
                      <div className="space-y-3">
                        <div className="bg-green-800/90 px-4 py-3 rounded-lg text-white text-sm md:text-base">
                          {slide.rule}
                        </div>
                        <div className="bg-red-800/90 px-4 py-3 rounded-lg text-white text-sm md:text-base whitespace-pre-line">
                          {slide.law}
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
    </section>



  );
};

export default Hero;
