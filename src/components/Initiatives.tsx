
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, ShieldCheck, AlertCircle } from 'lucide-react';

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-black to-gray-900 border-y border-white/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dotted opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-1 bg-primary/20 rounded-full mb-4">
            <span className="badge badge-primary px-4 py-1.5 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Stay Safe
            </span>
          </div>
          <h2 className="section-headline mt-2 text-white">International Rule For Pedestrians</h2>
        </div>

        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,194,255,0.1)]">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-10 w-10 text-primary" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-primary italic mb-8 leading-relaxed">
                "We should walk <span className="relative inline-block">against<span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40"></span></span> the traffic, if there is no footpath or walkway, as it gives a better view of the oncoming vehicles and thus helps us to walk safely"
              </p>
              
              <div className="h-px w-24 bg-primary/30 mx-auto mb-8"></div>
              
              <h3 className="text-lg text-white/90 font-medium mb-2">For India</h3>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-lg text-white/80">
                Our initiative <span className="text-primary font-medium">Walk 'Right'</span> is aimed to make every citizen aware of this fact and make our roads a safer place
                by avoiding and reducing the pedestrian death rate.
              </p>
              
              <p className="text-lg text-white/80">
                So come and join us in the <span className="text-primary font-medium">Walk 'Right'</span> movement and be cautious and safe. Because after all...
              </p>
              
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30 animate-pulse">
                <p className="text-2xl font-bold text-gradient">
                  LIFE is important and YOU are important.
                </p>
              </div>
            </div>
            
            <div className="pt-6 flex justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/20 group transition-all duration-300 transform hover:scale-105">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
