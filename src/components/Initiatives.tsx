
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, School, MapPin, Megaphone } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      icon: <School className="h-12 w-12 text-primary" />,
      title: "School Safety Programs",
      description: "Teaching children road safety through interactive workshops and educational materials.",
      features: [
        "Interactive workshops for students",
        "Teacher training programs",
        "School zone safety audits",
        "Student safety patrols"
      ]
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Infrastructure Advocacy",
      description: "Working with local governments to improve pedestrian infrastructure in high-risk areas.",
      features: [
        "Pedestrian crossing improvements",
        "Sidewalk development projects",
        "Traffic calming measures",
        "Safety audits of high-risk areas"
      ]
    },
    {
      icon: <Megaphone className="h-12 w-12 text-primary" />,
      title: "Public Awareness Campaigns",
      description: "Raising awareness about pedestrian safety through media, events, and community outreach.",
      features: [
        "National Walk Right Day",
        "Media campaigns and PSAs",
        "Community safety walks",
        "Driver awareness programs"
      ]
    }
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">Our Work</span>
          <h2 className="section-headline mt-2">Walk Right Initiatives</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Through targeted programs and initiatives, we're working to create safer streets and save pedestrian lives across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover-card">
              <div className="mb-6">{initiative.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
              <p className="text-gray-600 mb-6">{initiative.description}</p>
              <ul className="space-y-2 mb-8">
                {initiative.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
