
import React, { useState, useEffect } from 'react';

interface MascotHeroProps {
  mascotImage: string;
  messages: string[];
  backgroundImages?: string[];
  backgroundColors?: string[];
  className?: string;
}

const MascotHero = ({ 
  mascotImage, 
  messages, 
  backgroundImages = [], 
  backgroundColors = [],
  className = '' 
}: MascotHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out completes, change message and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsVisible(true);
      }, 500); // 500ms for fade out
    }, 4000); // 4 seconds total display time

    return () => clearInterval(interval);
  }, [messages.length]);

  if (messages.length === 0) return null;

  const currentBackground = backgroundImages[currentIndex] || backgroundColors[currentIndex];
  const isImageBackground = backgroundImages[currentIndex];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: !isImageBackground ? currentBackground : undefined,
          backgroundImage: isImageBackground ? `url(${currentBackground})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Image Scroller */}
      <div className="absolute inset-0 opacity-20">
        <div className="flex animate-scroll-x">
          <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" className="h-full w-auto object-cover" />
          {/* Duplicate for seamless loop */}
          <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff" alt="" className="h-full w-auto object-cover" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" className="h-full w-auto object-cover" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          
          {/* Messages Section - Left Side */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="bg-black/70 backdrop-blur-md p-8 rounded-xl border-l-4 border-primary shadow-xl">
              <div 
                className={`transition-all duration-500 ease-in-out transform ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ minHeight: '6rem' }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {messages[currentIndex]}
                </h2>
              </div>
              
              {/* Message Indicators */}
              <div className="flex space-x-2 mt-6">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-white/30 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mascot Image - Right Side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img
                src={mascotImage}
                alt="Road Safety Mascot"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Glow effect around mascot */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotHero;
