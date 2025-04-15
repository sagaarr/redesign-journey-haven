
import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: "The UNM Foundation's school safety program has transformed how our students think about road safety. We've seen a remarkable change in behavior.",
      name: "Deepak Patel",
      title: "Principal, Delhi Public School",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "After losing my son in a pedestrian accident, I joined UNM Foundation as a volunteer. The work they're doing is saving lives every day.",
      name: "Meera Krishnan",
      title: "Safety Advocate & Volunteer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "Working with UNM Foundation to improve crosswalks in high-risk areas has been one of our most effective public safety initiatives.",
      name: "Rajiv Mehta",
      title: "Urban Planning Officer, Mumbai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
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
