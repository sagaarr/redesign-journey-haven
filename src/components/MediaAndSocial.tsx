
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Image, Play, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

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
          {/* Instagram Section - Left Side */}
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#ea384c]/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-white/10 p-2 rounded-full mr-3">
                <Instagram className="h-5 w-5 text-[#ea384c]" />
              </span>
              Instagram
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-black/40 border-white/10 hover-card">
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
                          '1600191429781-a3d8f0age173'
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
                       "Night visibility matters! Wear bright colors when walking after dark. #StaySafe"}
                      #RoadSafety #PedestrianSafety
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c]/20">
                <Instagram className="h-4 w-4 mr-2" />
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Twitter Section - Right Side */}
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#1EAEDB]/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="bg-white/10 p-2 rounded-full mr-3">
                <Twitter className="h-5 w-5 text-[#1EAEDB]" />
              </span>
              Twitter
            </h3>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <HoverCard key={item}>
                  <HoverCardTrigger asChild>
                    <Card className="bg-black/40 border-white/10 hover-card cursor-pointer">
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
                            "Schools are back in session! Remember to be extra cautious around school zones and teach children about road safety. #SchoolSafety #WalkRight"
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
            <div className="mt-6">
              <Button variant="outline" className="w-full border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/20">
                <Twitter className="h-4 w-4 mr-2" />
                Follow on Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAndSocial;
