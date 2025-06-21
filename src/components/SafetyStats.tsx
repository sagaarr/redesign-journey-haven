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
import { useLanguage } from '@/contexts/LanguageContext';
import LEDBanner from './LEDBanner';

const SafetyStats = () => {
  const { t } = useLanguage();

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
      // value: '270,000+',
      value: '172,000+',
      label: t('stats.annual'),
      description: t('stats.worldwideReport')
    },
    {
      icon: <Users className="h-12 w-12 text-amber-500" />,
      // value: '22%',
      value: '20%',
      label: t('stats.pedestrians'),
      description: t('stats.roadFatalities')
    },
    {
      icon: <Activity className="h-12 w-12 text-emerald-500" />,
      value: '90+',
      label: t('stats.killedDaily'),
      description: t('navLinks.home'),
      hasGraph: true
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-500" />,
      value: '50%',
      label: t('stats.reduction'),
      description: t('navLinks.about')
    }
  ];

  const ledMessages = [
    "While walking on the road or footpath, ensure that children walk on the inner side.",
    "Women walking on the right side should stay alert and keep an eye on oncoming vehicles to prevent incidents like chain snatching.",
    "While crossing the road, stay focused on the traffic - avoid using mobile phones.",
    "Do not walk in groups or engage in conversations while walking on the road or footpath."
  ];

  return (
    <section id="stats" className="py-20 bg-card/30">
      <div className="container px-4 sm:px-6">
        {/* LED Banner */}
        <div className="mb-12 max-w-4xl mx-auto">
          <LEDBanner
            messages={ledMessages}
            className="shadow-lg shadow-primary/20"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary">{t('stats.heading')}</span>
          <h2 className="section-headline mt-2 text-white">{t('stats.heading')}</h2>
          <p className="mt-4 text-gray-300 text-lg">
            {t('stats.description')}
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
                        {t('stats.viewTrend')}
                      </Button>
                    </DialogTrigger>
                  </CardContent>

                  <DialogContent className="w-full max-w-3xl p-0 border-none bg-black/90 backdrop-blur-md shadow-xl">
                    <div className="p-6 rounded-lg w-full h-96">
                      <h4 className="text-white text-center text-xl font-semibold mb-4">
                        {t('stats.chartTitle')}
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
