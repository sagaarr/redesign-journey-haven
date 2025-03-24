
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle grain texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white subtle-grain opacity-90"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-blue-500/5 animate-pulse" style={{ animationDuration: '7s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-primary/5 animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute top-[40%] right-[25%] w-40 h-40 rounded-full bg-pink-500/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="badge badge-primary animate-fade-in" style={{ animationDelay: '0.3s' }}>Walk Right, Stay Safe</span>
          
          <h1 className="headline mt-4 text-balance animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Protecting <span className="text-gradient">Pedestrian Lives</span> Across India
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.7s' }}>
            The UNM Foundation is dedicated to reducing pedestrian accidents through education, awareness, and advocacy for safer streets.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button size="lg" className="group">
              Support Our Cause
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn About Road Safety
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-10 relative overflow-hidden">
          <span className="absolute w-full h-full bg-gradient-to-b from-primary/50 to-primary rounded-full animate-slide-in"></span>
        </div>
        <span className="text-sm mt-2 text-gray-500">Scroll to Learn More</span>
      </div>
    </section>
  );
};

export default Hero;
