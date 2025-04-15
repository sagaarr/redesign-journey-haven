
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { instaPosts } from '@/lib/constants';
import { InstagramEmbed } from 'react-social-media-embed';
import { useIsMobile } from '@/hooks/use-mobile';

const SocialMediaTabs = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Flattened array for mobile view
  const flattenedPosts = instaPosts.flat();

  return (
    <section id="social-media" className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge bg-primary/20 text-primary rounded-full px-3 py-1 text-sm">Connect With Us</span>
          <h2 className="text-3xl font-bold mt-3 text-white">
            Social Media
          </h2>
          <p className="mt-4 text-gray-300">
            Stay connected with our latest updates and campaigns
          </p>
        </div>

        <Tabs defaultValue="instagram" className="w-full max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-800/50 border border-gray-700 p-1">
              <TabsTrigger
                value="instagram"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </TabsTrigger>
              <TabsTrigger
                value="twitter"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="instagram" className="mt-0">
            <Card className="border-0 shadow-md bg-gray-800 rounded-xl p-1">
              <CardContent className="p-6">
                <div className='w-full relative'>
                  {isMobile ? (
                    <Carousel
                      className="w-full h-full"
                      opts={{ loop: true, duration: 30 }}
                      autoPlay={true}
                      autoPlayInterval={5000}
                    >
                      <CarouselContent className="h-full">
                        {flattenedPosts.map((url, index) => (
                          <CarouselItem key={index} className="w-full">
                            <div className="flex justify-center">
                              <div className="w-full max-w-[358px]">
                                <InstagramEmbed url={url} width={358} />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-center gap-2 mt-4">
                        <CarouselPrevious className="relative static translate-y-0 left-0" />
                        <CarouselNext className="relative static translate-y-0 right-0" />
                      </div>
                    </Carousel>
                  ) : (
                    <Carousel
                      className="w-full h-full"
                      opts={{ loop: true, duration: 30 }}
                      autoPlay={true}
                      autoPlayInterval={5000}
                    >
                      <CarouselContent className="h-full">
                        {instaPosts.map((group, index) => (
                          <CarouselItem key={index} className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {group.map((url, i) => (
                                <div key={i} className="w-full mx-auto">
                                  <InstagramEmbed url={url} width={358} />
                                </div>
                              ))}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
                    <Instagram className="mr-2 h-4 w-4" />
                    Follow on Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="twitter" className="mt-0">
            <Card className="border-0 shadow-md bg-gray-800 rounded-xl p-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-700 rounded-lg p-4 bg-gray-700/50 hover:bg-gray-700 transition-colors">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                            <span className="font-bold text-gray-300">WR</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-white">Walk Right India <span className="font-normal text-gray-400">@walkrightindia</span></p>
                          <p className="mt-2 text-gray-300">
                            {item === 1 ?
                              "Our pedestrian safety awareness campaign reached over 2000 people this week! Thanks to everyone who participated." :
                              item === 2 ?
                                "New pedestrian crossing signals installed at 5 major intersections in Bangalore. A small step towards safer streets for all!" :
                                "Join us for our upcoming workshop on road safety practices at Delhi Community Center on June 15th. Free registration link in bio!"}
                            {" #RoadSafety #PedestrianSafety #India"}
                          </p>
                          <p className="mt-2 text-sm text-gray-400">{item} day{item > 1 ? 's' : ''} ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
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
