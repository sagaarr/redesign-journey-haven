
import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: "The UNM Foundation's school safety program has transformed how our students think about road safety. We've seen a remarkable change in behavior.",
      name: "Nirmalkumar Rakshe",
      title: "Managing Director, UnM Group",
      image: "/lovable-uploads/kumar_rakshe.jpeg"
    },
    {
      quote: "I joined UNM Foundation as a volunteer. The work they're doing is saving lives every day.",
      name: "Nilima Puranik",
      title: "Safety Advocate & Volunteer",
      image: "/lovable-uploads/nilima_puranik.jpeg"
    },
    {
      quote: "Working with UNM Foundation to improve crosswalks in high-risk areas has been one of our most effective public safety initiatives.",
      name: "Dr. Amol Sahastrabuddhe",
      title: "Safety Advocate & Volunteer",
      image: "/lovable-uploads/amol_sahastrabudhhe.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white" id='testimonials'>
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">{t('testimonials.badge')}</span>
          <h2 className="section-headline mt-2 text-gray-900">{t('testimonials.title')}</h2>
          <p className="mt-4 text-gray-600 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative hover-card">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              <p className="text-gray-600 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
