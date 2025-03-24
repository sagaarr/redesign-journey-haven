
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Image, Play, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MediaAndSocial = () => {
  return (
    <section id="media-social" className="py-20 bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-headline text-white">
            <span className="text-[#1EAEDB]">Media</span> & <span className="text-[#ea384c]">Social</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Explore our campaign content and connect with us on social media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Media Section - Left Side */}
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-white/10 p-2 rounded-full mr-3">
                <Image className="h-5 w-5 text-[#1EAEDB]" />
              </span>
              Media Gallery
            </h3>

            <Tabs defaultValue="images" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="images" className="flex-1">
                  <Image className="h-4 w-4 mr-2" /> Images
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex-1">
                  <Play className="h-4 w-4 mr-2" /> Videos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="images" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden aspect-video bg-black/40 hover:opacity-90 transition-opacity">
                    <img 
                      src="https://images.unsplash.com/photo-1516245834210-c4c142787335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=340" 
                      alt="Road safety awareness" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-video bg-black/40 hover:opacity-90 transition-opacity">
                    <img 
                      src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=340" 
                      alt="Road safety" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-video bg-black/40 hover:opacity-90 transition-opacity">
                    <img 
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=340" 
                      alt="Community outreach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-video bg-black/40 hover:opacity-90 transition-opacity">
                    <img 
                      src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=340" 
                      alt="Traffic safety" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/20">
                  View All Images
                </Button>
              </TabsContent>

              <TabsContent value="videos" className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 animate-pulse cursor-pointer">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&h=510" 
                    alt="Road safety video" 
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 hover:border-[#1EAEDB] cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=170" 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 hover:border-[#1EAEDB] cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=170" 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10 hover:border-[#1EAEDB] cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1516245834210-c4c142787335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=170" 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Button variant="outline" className="w-full border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/20">
                  View All Videos
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          {/* Social Media Section - Right Side */}
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-white/10 p-2 rounded-full mr-3">
                <Twitter className="h-5 w-5 text-[#ea384c]" />
              </span>
              Social Media
            </h3>

            <Tabs defaultValue="instagram" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="instagram" className="flex-1">
                  <Instagram className="h-4 w-4 mr-2" /> Instagram
                </TabsTrigger>
                <TabsTrigger value="twitter" className="flex-1">
                  <Twitter className="h-4 w-4 mr-2" /> Twitter
                </TabsTrigger>
              </TabsList>

              <TabsContent value="instagram" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="bg-black/40 border-white/10 hover-card">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-pink-500 mr-2"></div>
                          <div>
                            <p className="text-sm text-white font-medium">@walkright_india</p>
                            <p className="text-xs text-white/60">2 days ago</p>
                          </div>
                        </div>
                        <div className="aspect-square rounded-md overflow-hidden mb-3 bg-black/30">
                          <img 
                            src={`https://images.unsplash.com/photo-${item === 1 ? '1516245834210-c4c142787335' : item === 2 ? '1568605117036-5fe5e7bab0b7' : item === 3 ? '1549317661-bd32c8ce0db2' : '1596524430615-b46475ddff6e'}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300`} 
                            alt="Instagram post" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs text-white/80 line-clamp-2">
                          Stay safe on the roads! Always remember to #WalkRight and face the oncoming traffic when there's no footpath. #RoadSafety #PedestrianSafety
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c]/20">
                  Follow on Instagram
                </Button>
              </TabsContent>

              <TabsContent value="twitter" className="space-y-4">
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="bg-black/40 border-white/10 hover-card">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="h-8 w-8 rounded-full bg-blue-500 mr-2 flex items-center justify-center">
                            <Twitter className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium">@walkright_india</p>
                            <p className="text-xs text-white/60">{item} day{item > 1 ? 's' : ''} ago</p>
                          </div>
                        </div>
                        <p className="text-sm text-white/80 mb-3">
                          {item === 1 ? 
                            "Did you know that walking against traffic can reduce pedestrian accidents by up to 50%? Always #WalkRight and stay safe! 🚶‍♀️🚶‍♂️" : 
                            item === 2 ? 
                            "Join our awareness session this weekend at City Square. Learn the proper way to walk on roads without footpaths. #RoadSafety #StaySafe" : 
                            "Thank you to all the volunteers who joined our #WalkRight campaign yesterday! Together we're making India's roads safer for everyone. 👏"}
                        </p>
                        <div className="flex space-x-6 text-xs text-white/60">
                          <span>♥ 45 likes</span>
                          <span>🔁 12 retweets</span>
                          <span>💬 3 replies</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/20">
                  Follow on Twitter
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAndSocial;
