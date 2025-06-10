
import React, { useState, useEffect } from 'react';

interface LEDBannerProps {
  messages: string[];
  className?: string;
}

const LEDBanner = ({ messages, className = '' }: LEDBannerProps) => {
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
      }, 300); // 300ms for fade out
    }, 5000); // 5 seconds total display time

    return () => clearInterval(interval);
  }, [messages.length]);

  if (messages.length === 0) return null;

  return (
    <div className={`bg-black border-2 border-primary rounded-lg p-4 ${className}`}>
      <div 
        className={`text-center text-primary font-mono text-lg font-bold transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ minHeight: '1.5rem' }}
      >
        {messages[currentIndex]}
      </div>
    </div>
  );
};

export default LEDBanner;
