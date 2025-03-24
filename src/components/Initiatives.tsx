
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, ShieldCheck, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Initiatives = () => {
  const { t } = useLanguage();
  
  return (
    <section id="initiatives" className="py-20 bg-gradient-to-b from-black to-gray-900 border-y border-white/10 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dotted opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1EAEDB]/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ea384c]/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-1 bg-white/10 rounded-full mb-4 animate-pulse">
            <span className="badge badge-primary px-4 py-1.5 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#1EAEDB]" />
              <span className="text-white">Stay</span> <span className="text-[#ea384c] font-bold">Safe</span>
            </span>
          </div>
          <h2 className="section-headline mt-2 text-white">
            <span className="text-[#1EAEDB]">{t('initiatives.heading1')}</span> <span className="text-white">{t('initiatives.heading2')}</span> <span className="text-[#ea384c]">{t('initiatives.heading3')}</span>
          </h2>
        </div>

        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto transform hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(234,56,76,0.15)]">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#1EAEDB]/20 to-[#ea384c]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-10 w-10 text-white" />
              </div>
              <p className="text-xl md:text-2xl font-medium italic mb-8 leading-relaxed">
                "{t('initiatives.rule')}"
              </p>
              
              <div className="h-px w-24 bg-gradient-to-r from-[#ea384c]/30 via-white/30 to-[#1EAEDB]/30 mx-auto mb-8"></div>
              
              <h3 className="text-lg text-white/90 font-medium mb-2">For India</h3>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-lg text-white/80">
                {t('initiatives.description1')} <span className="text-[#1EAEDB] font-medium">{t('walkRight')}</span> {t('initiatives.description2')} <span className="text-white">safer place</span>
                {t('initiatives.description3')} <span className="text-[#ea384c]">pedestrian death rate</span>.
              </p>
              
              <p className="text-lg text-white/80">
                So come and join us in the <span className="text-[#1EAEDB] font-medium">{t('walkRight')}</span> movement and be cautious and safe. Because after all...
              </p>
              
              <div className="p-6 bg-gradient-to-r from-[#ea384c]/10 via-white/5 to-[#1EAEDB]/10 rounded-lg border border-white/30 animate-pulse">
                <p className="text-2xl font-bold">
                  {t('initiatives.safeLife')}
                </p>
              </div>
            </div>
            
            <div className="pt-6 flex justify-center">
              <Button variant="outline" className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/20 group transition-all duration-300 transform hover:scale-105">
                {t('initiatives.learnMore')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
