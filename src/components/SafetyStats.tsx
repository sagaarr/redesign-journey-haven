
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, AlertTriangle, Activity, TrendingUp } from 'lucide-react';

const SafetyStats = () => {
  const stats = [
    {
      icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
      value: '140,000+',
      label: 'Annual Road Fatalities',
      description: 'in India, with pedestrians being highly vulnerable'
    },
    {
      icon: <Users className="h-12 w-12 text-amber-500" />,
      value: '30%',
      label: 'of Road Accidents',
      description: 'involve pedestrians in urban areas'
    },
    {
      icon: <Activity className="h-12 w-12 text-emerald-500" />,
      value: '50%',
      label: 'Reduction Potential',
      description: 'through awareness and infrastructure improvements'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-500" />,
      value: '10,000+',
      label: 'Lives Impacted',
      description: 'through our pedestrian safety programs'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-primary">The Problem We're Addressing</span>
          <h2 className="section-headline mt-2">Pedestrian Safety Crisis in India</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Every day, pedestrians face significant risks on India's roads. These statistics highlight why our work is so crucial.
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
      </div>
    </section>
  );
};

export default SafetyStats;
