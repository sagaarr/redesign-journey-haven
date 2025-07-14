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
      image: "/lovable-uploads/childrenwalk.jpeg",
      description: "While walking on the road or footpath, ensure that children walk on the inner side.",
    },
    {
      image: "/lovable-uploads/chain_snatching.png",
      description: "Women walking on the right side should stay alert and keep an eye on oncoming vehicles to prevent incidents like chain snatching.",
    },
    {
      image: "/lovable-uploads/mobilewalkboy.jpeg",
      description: "While crossing the road, stay focused on the traffic—avoid using mobile phones.",
    },
    {
      image: "/lovable-uploads/groupwalk.jpeg",
      description: "Do not walk in groups or engage in conversations while walking on the road or footpath.",
    },
    {
      image: "/lovable-uploads/jogging1.png",
      description: "While walking or jogging, stay on the right side of the road.",
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">

      {isMobile ? (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-[90vw] max-w-sm px-4">
          {/* Bigger Mascot */}
          <img
            src="/lovable-uploads/mobile-mascote.png"
            alt="Mascot"
            className="h-48 w-auto object-contain"
          />

          {/* Logos */}
          <div className="bg-black/40 px-4 py-3 pb-4 rounded-md backdrop-blur-sm w-full">
            <p className="text-white text-sm font-semibold text-center mb-3">
              In Association With
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/IDTRS.png" alt="IDTR Logo" className="h-10 w-auto" />
              </div>
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/nhai.png" alt="NHAI Logo" className="h-10 w-auto" />
              </div>
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/nhitc.png" alt="NHITC Logo" className="h-10 w-auto" />
              </div>
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/Road_Safety_Logo.jpg" alt="Road Safety Logo" className="h-10 w-auto" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2 flex flex-col items-center ml-4">
          {/* Desktop Mascot */}
          <img
            src="/lovable-uploads/e9fe6340-0e37-4775-b4fe-0eaa7eaaa9b1.png"
            alt="Mascot"
            className="h-[450px] w-auto object-contain"
          />

          {/* Logos */}
          <div className="mt-4 bg-black/40 px-4 py-3 pb-4 rounded-md backdrop-blur-sm flex flex-col items-center w-full max-w-[360px]">
            <p className="text-white text-base font-semibold text-center mb-4">
              In Association With
            </p>
            <div className="flex flex-row justify-evenly items-center gap-4 flex-wrap">
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/IDTRS.png" alt="IDTR Logo" className="h-12 w-auto" />
              </div>
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/nhai.png" alt="NHAI Logo" className="h-12 w-auto" />
              </div>
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/nhitc.png" alt="NHITC Logo" className="h-12 w-auto" />
              </div>
              <div className="bg-white/80 p-1.5 rounded shadow-md">
                <img src="/lovable-uploads/Road_Safety_Logo.jpg" alt="Road Safety Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </div>
      )}

      <Carousel
        className="w-full min-h-screen"
        opts={{ loop: true, duration: 10000000 }}
        autoPlay={true}
        autoPlayInterval={100000}
      >
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-screen">
                {/* Background gradient */}
                <div className="absolute inset-0 z-10 flex items-center justify-start bg-gradient-to-br from-[#0B0F1C] via-[#1C1F2A] to-[#2C3E50] text-white">
                  <div className={`w-full  ${isMobile ? 'mt-4 mb-64 px-3' : 'pr-6 ml-[40%]'}`}>
                    <div className="relative max-w-5xl w-full mx-auto">
                      <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-90 md:h-[36rem] object-center rounded-xl"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 rounded-xl">
                        <div className="rounded-md backdrop-blur-sm p-2 w-fit">
                          <h2 className="section-headline text-white text-base md:text-lg lg:text-xl mb-4 font-semibold">
                            {slide.description}
                          </h2>
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
