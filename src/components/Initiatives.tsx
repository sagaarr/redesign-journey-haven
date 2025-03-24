
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Initiatives = () => {
  return (
    <section id="initiatives" className="py-20 bg-black border-y border-white/10">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">Stay Safe</span>
          <h2 className="section-headline mt-2 text-white">International Rule For Pedestrians</h2>
        </div>

        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium text-primary italic mb-8">
                "We should walk against the traffic, if there is no footpath or walkway, as it gives a better view of the oncoming vehicles and thus helps us to walk safely"
              </p>
              
              <div className="h-px w-24 bg-primary/30 mx-auto mb-8"></div>
              
              <h3 className="text-lg text-white/90 font-medium mb-2">For India</h3>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-lg text-white/80">
                Our initiative Walk 'Right' is aimed to make every citizen aware of this fact and make our roads a safer place
                by avoiding and reducing the pedestrian death rate.
              </p>
              
              <p className="text-lg text-white/80">
                So come and join us in the Walk 'Right' movement and be cautious and safe. Because after all...
              </p>
              
              <p className="text-2xl font-bold text-primary">
                LIFE is important and YOU are important.
              </p>
            </div>
            
            <div className="pt-6 flex justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/20">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
