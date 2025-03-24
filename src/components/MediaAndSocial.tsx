
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

        <div className="glass-card p-6 relative overflow-hidden">
          <Tabs defaultValue="instagram" className="w-full">
            <TabsList className="grid grid-cols-4 w-full bg-black/30 mb-8">
              <TabsTrigger value="instagram" className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <span className="hidden sm:inline">Instagram</span>
              </TabsTrigger>
              <TabsTrigger value="twitter" className="flex items-center gap-2">
                <Twitter className="h-4 w-4" />
                <span className="hidden sm:inline">Twitter</span>
              </TabsTrigger>
              <TabsTrigger value="facebook" className="flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                <span className="hidden sm:inline">Facebook</span>
              </TabsTrigger>
              <TabsTrigger value="youtube" className="flex items-center gap-2">
                <Youtube className="h-4 w-4" />
                <span className="hidden sm:inline">YouTube</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Instagram Content Tab */}
            <TabsContent value="instagram" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <Card key={item} className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-pink-500 mr-2"></div>
                        <div>
                          <p className="text-sm text-white font-medium">@walkright_india</p>
                          <p className="text-xs text-white/60">{item} day{item > 1 ? 's' : ''} ago</p>
                        </div>
                      </div>
                      <div className="aspect-square rounded-md overflow-hidden mb-3 bg-black/30">
                        <img 
                          src={`https://images.unsplash.com/photo-${
                            item === 1 ? '1516245834210-c4c142787335' : 
                            item === 2 ? '1568605117036-5fe5e7bab0b7' : 
                            item === 3 ? '1549317661-bd32c8ce0db2' : 
                            item === 4 ? '1596524430615-b46475ddff6e' :
                            item === 5 ? '1558981806-ec527fa84c39' :
                            item === 6 ? '1600191429781-a3d8f0age173' :
                            item === 7 ? '1536849460588-696219a9e98d' :
                            item === 8 ? '1511632765486-a01980e01a18' :
                            '1557804506-669a67965ba0'
                          }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=300`} 
                          alt="Instagram post" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {item === 1 ? "Stay safe on the roads! Always remember to #WalkRight and face the oncoming traffic when there's no footpath." :
                         item === 2 ? "Join our community awareness program this weekend! Learn how to stay safe as a pedestrian." :
                         item === 3 ? "Education is the first step to prevention. Teaching children about road safety today!" :
                         item === 4 ? "Every step matters. Make it count by being aware of your surroundings. #PedestrianSafety" :
                         item === 5 ? "Grateful for our volunteers who help spread the message of road safety across India!" :
                         item === 6 ? "Night visibility matters! Wear bright colors when walking after dark. #StaySafe" :
                         item === 7 ? "Building a safer India, one pedestrian at a time. Join our movement!" :
                         item === 8 ? "Road safety is a shared responsibility. Do your part today!" :
                         "Special thanks to our corporate partners for supporting our road safety initiatives!"
                        }
                        #RoadSafety #PedestrianSafety
                      </p>
                      <div className="flex justify-between mt-3 text-white/60 text-xs">
                        <span>❤️ {50 + item * 8}</span>
                        <span>💬 {12 + item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c]/20">
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </Button>
              </div>
            </TabsContent>
            
            {/* Twitter Content Tab */}
            <TabsContent value="twitter" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <HoverCard key={item}>
                    <HoverCardTrigger asChild>
                      <Card className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors cursor-pointer">
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
                              item === 3 ?
                              "Thank you to all the volunteers who joined our #WalkRight campaign yesterday! Together we're making India's roads safer for everyone. 👏" :
                              item === 4 ?
                              "We're excited to announce our new partnership with the National Highway Authority to improve pedestrian safety across major highways! #SafetyFirst" :
                              item === 5 ?
                              "Schools are back in session! Remember to be extra cautious around school zones and teach children about road safety. #SchoolSafety #WalkRight" :
                              "Darkness falls earlier nowadays. Remember to wear reflective clothing when walking after sunset! #BeVisible #StaySafe"
                            }
                          </p>
                          <div className="flex space-x-6 text-xs text-white/60">
                            <span>♥ {45 + item * 10} likes</span>
                            <span>🔁 {12 + item * 3} retweets</span>
                            <span>💬 {3 + item} replies</span>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-black/80 border-[#1EAEDB]/30 text-white p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                            <Twitter className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">Walk Right India</p>
                            <p className="text-sm text-white/60">@walkright_india</p>
                          </div>
                        </div>
                        <p className="text-sm text-white/80">
                          Official account of the Walk Right India campaign. Working to improve pedestrian safety across India.
                        </p>
                        <div className="flex space-x-4 text-sm">
                          <span><span className="font-bold">1.2K</span> Following</span>
                          <span><span className="font-bold">24.5K</span> Followers</span>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/20">
                  <Twitter className="h-4 w-4 mr-2" />
                  Follow on Twitter
                </Button>
              </div>
            </TabsContent>
            
            {/* Facebook Content Tab */}
            <TabsContent value="facebook" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 rounded-full bg-blue-600 mr-3 flex items-center justify-center">
                          <Facebook className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">Walk Right India</p>
                          <p className="text-xs text-white/60">{item * 2} day{item > 1 ? 's' : ''} ago</p>
                        </div>
                      </div>
                      <p className="text-sm text-white/80 mb-3">
                        {item === 1 ? 
                          "We're excited to announce our upcoming Road Safety Workshop at Ravet Central School next week. All parents and students are welcome to join us for this important discussion on pedestrian safety." : 
                          item === 2 ? 
                          "Check out these photos from our recent awareness drive in Nigdi. Over 200 participants joined to learn about proper road safety practices and the importance of wearing reflective gear at night." : 
                          item === 3 ?
                          "MILESTONE ACHIEVED: We've now reached over 50,000 students across 100 schools with our Walk Right safety program! Thank you to all our supporters and volunteers who made this possible." :
                          "New safety guidelines have been released by the Ministry of Transport. We've summarized the key points related to pedestrian safety on our website. Link in comments!"
                        }
                      </p>
                      {item % 2 === 0 && (
                        <div className="aspect-video rounded-md overflow-hidden mb-3 bg-black/30">
                          <img 
                            src={`https://images.unsplash.com/photo-${
                              item === 2 ? '1544620347-c4fd4a3d5957' : 
                              '1517048676732-65c1be0bf786'
                            }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600`} 
                            alt="Facebook post" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex justify-between mt-3 text-white/60 text-xs">
                        <div className="flex gap-3">
                          <span>👍 {105 + item * 28}</span>
                          <span>❤️ {42 + item * 15}</span>
                        </div>
                        <span>{8 + item * 6} comments</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600/20">
                  <Facebook className="h-4 w-4 mr-2" />
                  Follow on Facebook
                </Button>
              </div>
            </TabsContent>
            
            {/* YouTube Content Tab */}
            <TabsContent value="youtube" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors overflow-hidden">
                    <div className="relative aspect-video">
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          item === 1 ? '1523240795612-9a054b0db644' : 
                          item === 2 ? '1454165804606-c3d57bc86b40' : 
                          item === 3 ? '1516321318423-f06f85e504b3' : 
                          '1521405175124-acf0cb89cc1c'
                        }?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600`} 
                        alt="Video thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item === 1 ? "5:24" : item === 2 ? "3:48" : item === 3 ? "10:15" : "7:36"}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-white mb-1">
                        {item === 1 ? "How to Walk Safely on Indian Roads - Complete Guide" : 
                         item === 2 ? "Road Safety for Children - Educational Video" : 
                         item === 3 ? "Walk Right India - Our Mission and Impact" : 
                         "Night Safety Tips for Pedestrians"}
                      </h3>
                      <div className="flex justify-between text-white/60 text-xs mb-2">
                        <span>Walk Right India</span>
                        <span>{item === 1 ? "12K" : item === 2 ? "8.5K" : item === 3 ? "4.2K" : "9.7K"} views</span>
                      </div>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {item === 1 ? 
                          "This comprehensive guide explains the proper techniques for walking safely on Indian roads, especially in areas without proper footpaths." : 
                          item === 2 ? 
                          "An educational video designed for school children to learn about basic road safety practices and how to be safe pedestrians." : 
                          item === 3 ?
                          "Learn about the Walk Right India campaign, our mission, and the impact we've made across various cities in improving pedestrian safety." :
                          "Essential tips for pedestrians walking after dark, including proper clothing, visibility techniques, and safety practices."
                        }
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/20">
                  <Youtube className="h-4 w-4 mr-2" />
                  Subscribe on YouTube
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MediaAndSocial;
