
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Users, Activity, TrendingUp, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SafetyStats = () => {
  const pedestrianDeathsData = [
    { year: '2016', deaths: 5200 },
    { year: '2017', deaths: 5600 },
    { year: '2018', deaths: 6100 },
    { year: '2019', deaths: 6700 },
    { year: '2020', deaths: 6800 },
    { year: '2021', deaths: 7200 },
    { year: '2022', deaths: 7500 },
    { year: '2023', deaths: 7900 },
  ];

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
      description: 'are killed daily due to road accidents in India',
      hasGraph: true
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
              
              {stat.hasGraph ? (
                <Dialog>
                  <CardContent className="pt-6 flex flex-col items-center text-center relative z-10">
                    <div className="mb-4 p-3 rounded-full bg-black/30">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                    <p className="font-semibold text-gray-200">{stat.label}</p>
                    <p className="text-gray-400 text-sm mt-2">{stat.description}</p>
                    
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="mt-4 bg-primary/20 border-primary/30 hover:bg-primary/30 text-primary"
                      >
                        <BarChart2 className="mr-2 h-4 w-4" />
                        View Trend Data
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                  
                  <DialogContent className="w-full max-w-3xl p-0 border-none bg-black/90 backdrop-blur-md shadow-xl">
                    <div className="p-6 rounded-lg w-full h-96">
                      <h4 className="text-white text-center text-xl font-semibold mb-4">
                        Pedestrian Deaths in India (2016-2023)
                      </h4>
                      <ResponsiveContainer width="100%" height="85%">
                        <LineChart data={pedestrianDeathsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                          <XAxis dataKey="year" stroke="#999" />
                          <YAxis stroke="#999" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: "rgba(0, 0, 0, 0.8)", 
                              border: "1px solid #444",
                              borderRadius: "4px",
                              color: "#fff" 
                            }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="deaths" 
                            name="Fatalities" 
                            stroke="#1EAEDB" 
                            strokeWidth={3}
                            dot={{ r: 4, strokeWidth: 2 }}
                            activeDot={{ r: 6, strokeWidth: 2 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <CardContent className="pt-6 flex flex-col items-center text-center relative z-10">
                  <div className="mb-4 p-3 rounded-full bg-black/30">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                  <p className="font-semibold text-gray-200">{stat.label}</p>
                  <p className="text-gray-400 text-sm mt-2">{stat.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyStats;
