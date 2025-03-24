
import React from 'react';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#00A8E8]/80">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8]/80 to-[#0088CC]/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZtNiAwdjZtLTYtNnY2Ii8+PHBhdGggZD0iTTMwIDMwaC02bTYgMHY2bS02LTZ2NiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#00A8E8]">
              <Send className="mr-2 h-5 w-5" />
              {t('cta.button')}
            </Button>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/20 text-sm text-white/80 flex flex-col sm:flex-row justify-center items-center gap-4">
            <p>{t('cta.support')}</p>
            <div className="h-4 border-l border-white/30 hidden sm:block"></div>
            <p>{t('cta.nonprofit')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
