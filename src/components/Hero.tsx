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
      image:"/lovable-uploads/chain_snatching.png",
      description: "Women walking on the right side should stay alert and keep an eye on oncoming vehicles to prevent incidents like chain snatching.",
    },
    {
      image:"/lovable-uploads/mobilewalkboy.jpeg",
      description: "While crossing the road, stay focused on the traffic- avoid using mobile phones.",
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
    <section id="hero" className="relative overflow-hidden">
      {/* Fixed Mascot on Left */}
      {/* <div className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2 hidden md:block">
        <img
          src="/lovable-uploads/e9fe6340-0e37-4775-b4fe-0eaa7eaaa9b1.png"
          alt="Mascot"
          className="h-[450px] w-auto object-contain ml-4"
        />
      </div> */}

      {isMobile ? (
        <div className="absolute bottom-4 left-4 z-50 transform -translate-y-1/2">
        <img
          src="/lovable-uploads/mobile-mascote.png" // 👈 replace with your mobile mascot image
          alt="Mobile Mascot"
          className="h-40 w-auto object-contain ml-4"
        />
       </div>
       ) : (
        <div className="absolute top-1/2 left-0 z-50 transform -translate-y-1/2">
        <img
          src="/lovable-uploads/e9fe6340-0e37-4775-b4fe-0eaa7eaaa9b1.png" // 👈 desktop mascot
          alt="Desktop Mascot"
          className="h-[450px] w-auto object-contain ml-4"
        />
       </div>
      )}

      {/* Carousel with min-h-screen */}
      <Carousel
        className="w-full min-h-screen"
        opts={{ loop: true, duration: 100000 }}
        autoPlay={true}
        autoPlayInterval={10000000}
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
                <div className="absolute inset-0 z-20 flex items-center justify-start bg-white">
                  <div className="ml-[40%] w-full pr-6"> {/* Adjust to match mascot width */}
                      <div className="relative max-w-5xl w-full">
                      <img
                      src={slide.image}
                      alt="Context Visual"
                      className="w-full h-90 md:h-96 object-center rounded-xl"
                      />                
                     
                      <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 rounded-xl">           
                      <p className="text-white text-base md:text-lg lg:text-xl mb-4">
                        {slide.description}
                      </p>
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
