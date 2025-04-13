
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Instagram, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const SocialMediaTabs = () => {
  const { t } = useLanguage();
  
  return (
    <section id="social-media" className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#33C3F0]">Social</span> <span className="text-black">Media</span>
          </h2>
          <p className="text-gray-600">
            Stay connected with our latest updates and campaigns
          </p>
        </div>
        
        <Tabs defaultValue="instagram" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 w-full mb-8 rounded-full overflow-hidden border border-gray-200">
            <TabsTrigger 
              value="instagram" 
              className="flex items-center justify-center gap-2 py-3 rounded-none data-[state=active]:bg-black data-[state=active]:text-white"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </TabsTrigger>
            <TabsTrigger 
              value="twitter" 
              className="flex items-center justify-center gap-2 py-3 rounded-none data-[state=active]:bg-black data-[state=active]:text-white"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="instagram" className="mt-0">
            <Card className="border-0 shadow-md bg-black rounded-xl p-1">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity">
                      <img 
                        src={`https://source.unsplash.com/random/300x300?pedestrian,safety,road&sig=${item}`}
                        alt={`Instagram post ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="bg-white hover:bg-gray-50 rounded-full">
                    <Instagram className="mr-2 h-4 w-4" />
                    Follow on Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="twitter" className="mt-0">
            <Card className="border-0 shadow-md bg-black rounded-xl p-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded-lg p-4 bg-white">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-bold text-gray-500">WR</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold">Walk Right India <span className="font-normal text-gray-500">@walkrightindia</span></p>
                          <p className="mt-2 text-gray-700">
                            {item === 1 ? 
                              "Our pedestrian safety awareness campaign reached over 2000 people this week! Thanks to everyone who participated." :
                              item === 2 ? 
                              "New pedestrian crossing signals installed at 5 major intersections in Bangalore. A small step towards safer streets for all!" :
                              "Join us for our upcoming workshop on road safety practices at Delhi Community Center on June 15th. Free registration link in bio!"}
                            {" #RoadSafety #PedestrianSafety #India"}
                          </p>
                          <p className="mt-2 text-sm text-gray-500">{item} day{item > 1 ? 's' : ''} ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="bg-white hover:bg-gray-50 rounded-full">
                    <Twitter className="mr-2 h-4 w-4" />
                    Follow on Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SocialMediaTabs;
