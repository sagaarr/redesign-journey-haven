
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Send } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Mission for Safer Streets</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether through donations, volunteering, or spreading awareness, your support helps us save pedestrian lives across India.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="group">
              <HeartHandshake className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Send className="mr-2 h-5 w-5" />
              Get Involved
            </Button>
          </div>
          
          <div className="mt-10 pt-10 border-t border-white/20 text-sm text-primary-foreground/80">
            <p>100% of your donation goes directly to pedestrian safety programs. UNM Foundation is a registered non-profit organization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
