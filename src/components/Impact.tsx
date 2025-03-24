
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, GraduationCap, HeartPulse, BarChart3 } from 'lucide-react';

const Impact = () => {
  const categories = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: 'Student Scholarships',
      description: 'Supporting bright minds with financial assistance to pursue their educational dreams.',
      amount: '$28M+',
      period: 'Awarded Annually'
    },
    {
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      title: 'Healthcare Initiatives',
      description: 'Funding innovations in healthcare education, research, and community health programs.',
      amount: '$15M+',
      period: 'Invested Yearly'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Faculty Support',
      description: 'Attracting and retaining world-class faculty through endowed positions and grants.',
      amount: '120+',
      period: 'Endowed Positions'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: 'Research Advancement',
      description: 'Driving discovery and innovation across academic disciplines and fields.',
      amount: '$12M+',
      period: 'Research Funding'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">Our Impact</span>
          <h2 className="section-headline mt-2">Making a Difference Today<br />For a Better Tomorrow</h2>
          <p className="mt-6 text-gray-600 text-lg">
            Through the generosity of our donors, we're able to create meaningful change across campus and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 p-6 text-center flex flex-col items-center hover-card"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-primary">{category.amount}</div>
                <div className="text-sm text-gray-500">{category.period}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline group">
            View our 2023 Impact Report
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to Make an Impact?</h3>
              <p className="mt-4 text-gray-600">
                Join thousands of donors who are changing lives through their support of UNM students, faculty, and programs.
              </p>
              <div className="mt-6">
                <Button size="lg" className="group">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-primary">$1,000</div>
                  <div className="text-sm text-gray-600">Can fund a student emergency grant</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-primary">$5,000</div>
                  <div className="text-sm text-gray-600">Can establish a named annual scholarship</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-primary">$25,000</div>
                  <div className="text-sm text-gray-600">Can fund research equipment</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl font-bold text-primary">$100,000+</div>
                  <div className="text-sm text-gray-600">Can establish an endowed scholarship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
