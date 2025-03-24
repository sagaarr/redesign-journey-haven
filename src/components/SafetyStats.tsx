
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Users, Activity, TrendingUp } from 'lucide-react';

const SafetyStats = () => {
  const stats = [
    {
      icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
      value: '270,000+',
      label: 'Annual Pedestrian Fatalities',
      description: 'worldwide, according to WHO reports'
    },
    {
      icon: <Users className="h-12 w-12 text-amber-500" />,
      value: '22%',
      label: 'of Road Fatalities',
      description: 'are pedestrians globally'
    },
    {
      icon: <Activity className="h-12 w-12 text-emerald-500" />,
      value: '63+',
      label: 'Pedestrians',
      description: 'are killed daily due to road accidents in India'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-500" />,
      value: '50%',
      label: 'Reduction Potential',
      description: 'through awareness and proper road safety'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-primary">The Problem We're Addressing</span>
          <h2 className="section-headline mt-2">Pedestrian Safety Crisis in India</h2>
          <p className="mt-4 text-gray-600 text-lg">
            All you have to do is follow the simple rule - <span className="font-bold text-primary">WALK 'RIGHT'!</span> These statistics highlight why our work is so crucial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-card border-t-4" style={{ borderTopColor: `var(--${index === 0 ? 'destructive' : index === 1 ? 'amber-500' : index === 2 ? 'emerald-500' : 'primary'})` }}>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="font-semibold text-gray-800">{stat.label}</p>
                <p className="text-gray-500 text-sm mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">KEEP LEFT</h3>
              <div className="flex justify-center my-4">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="40" r="10" fill="white"/>
                  <path d="M40 55 L45 80 L55 80 L60 55" stroke="white" strokeWidth="3" fill="none"/>
                  <circle cx="30" cy="70" r="15" stroke="white" strokeWidth="3" fill="none"/>
                  <circle cx="70" cy="70" r="15" stroke="white" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <p className="text-sm text-white/80">For cyclists and vehicles</p>
            </div>
            
            <div className="bg-amber-500 rounded-lg p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">WALK RIGHT</h3>
              <div className="flex justify-center my-4">
                <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="25" r="10" fill="white"/>
                  <path d="M50 35 L40 60 L50 60 L45 85" stroke="white" strokeWidth="3" fill="none"/>
                  <path d="M50 35 L60 60 L55 60 L65 85" stroke="white" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <p className="text-sm text-white/80">For pedestrians in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStats;
