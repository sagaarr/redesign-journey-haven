
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
    <section id="stats" className="py-20 bg-card/30">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">The Problem We're Addressing</span>
          <h2 className="section-headline mt-2 text-white">Pedestrian Safety Crisis in India</h2>
          <p className="mt-4 text-gray-300 text-lg">
            All you have to do is follow the simple rule - <span className="font-bold text-primary">WALK 'RIGHT'!</span> These statistics highlight why our work is so crucial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-card bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"></div>
              <CardContent className="pt-6 flex flex-col items-center text-center relative z-10">
                <div className="mb-4 p-3 rounded-full bg-black/30">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                <p className="font-semibold text-gray-200">{stat.label}</p>
                <p className="text-gray-400 text-sm mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyStats;
