
import React from 'react';
import { ArrowRight, Award, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { value: '$250M+', label: 'Total Donations' },
    { value: '25,000+', label: 'Student Beneficiaries' },
    { value: '150+', label: 'Scholarship Programs' },
    { value: '45+', label: 'Years of Impact' },
  ];

  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Excellence in Education',
      description: 'Supporting academic programs and providing resources for educational innovation and advancement.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Community Impact',
      description: 'Creating positive change in our communities through support for outreach and service initiatives.'
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Research & Innovation',
      description: 'Advancing knowledge and discovery through funding for groundbreaking research across disciplines.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge badge-primary">About Us</span>
            <h2 className="section-headline mt-2">
              Supporting Excellence at<br />The University of New Mexico
            </h2>
            
            <p className="mt-6 text-gray-600 leading-relaxed">
              The UNM Foundation was established in 1979 as a 501(c)(3) nonprofit organization to promote the University of New Mexico and encourage private financial support for all its programs. As the primary fundraising arm of the University, we match donors' passions with UNM's needs, creating meaningful impact for our communities and future generations.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-gray-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="group">
                Learn Our Story 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover-card"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
