
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const SocialMedia = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#1EAEDB]">Social</span> <span className="text-gray-900">Media</span>
            </h1>
            <p className="text-lg text-gray-600">
              Follow us on social media to stay updated with our latest campaigns, events, and road safety tips.
            </p>
          </div>
          
          <Tabs defaultValue="instagram" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger value="instagram" className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </TabsTrigger>
              <TabsTrigger value="twitter" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#1DA1F2] data-[state=active]:text-white">
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </TabsTrigger>
              <TabsTrigger value="facebook" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#1877F2] data-[state=active]:text-white">
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </TabsTrigger>
              <TabsTrigger value="youtube" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#FF0000] data-[state=active]:text-white">
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="instagram" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity relative group">
                        <img 
                          src={`https://source.unsplash.com/random/300x300?pedestrian,safety,road&sig=${index}`}
                          alt={`Instagram post ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="text-white text-center p-4">
                            <p className="text-sm font-medium">Road safety initiative in Mumbai</p>
                            <p className="text-xs mt-1 text-gray-300">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      Follow @walkrightindia on Instagram
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="twitter" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-white hover:bg-gray-50 transition-colors">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="font-bold text-gray-500">WR</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="font-bold">Walk Right India <span className="font-normal text-gray-500">@walkrightindia</span></p>
                            <p className="mt-2 text-gray-700">
                              {index === 0 ? "Our pedestrian safety awareness campaign reached over 2000 people this week! Thanks to everyone who participated." : 
                              index === 1 ? "Did you know? Most pedestrian accidents happen during dawn and dusk when visibility is low. Always wear bright/reflective clothing." :
                              index === 2 ? "Join us for our upcoming workshop on road safety practices at Delhi Community Center on June 15th. Free registration link in bio!" :
                              index === 3 ? "New pedestrian crossing signals installed at 5 major intersections in Bangalore. A small step towards safer streets for all!" :
                              "Remember to always use designated pedestrian crossings and follow traffic signals. Your safety matters to us. #WalkSmart"}
                              {" #RoadSafety #PedestrianSafety #India"}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">{index + 1} day{index > 0 ? 's' : ''} ago</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-[#1DA1F2] text-white font-medium hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="mr-2 h-5 w-5" />
                      Follow @walkrightindia on Twitter
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="facebook" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                        <div className="aspect-video relative">
                          <img 
                            src={`https://source.unsplash.com/random/600x400?pedestrian,crossing,safety&sig=${index}`}
                            alt={`Facebook post ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg">
                            {index === 0 ? "Safety First: Pedestrian Rights in India" : 
                             index === 1 ? "New Road Safety Guidelines Released" :
                             index === 2 ? "Community Workshop: Teaching Kids Road Safety" :
                             "Walk Right Campaign Launch in Mumbai"}
                          </h3>
                          <p className="mt-2 text-gray-600 line-clamp-3">
                            {index === 0 ? "Learn about pedestrian rights and responsibilities on Indian roads. Our new infographic makes it simple to understand." : 
                             index === 1 ? "The Ministry of Road Transport has released new guidelines for pedestrian safety. Here's what you need to know." :
                             index === 2 ? "Our recent workshop taught over 200 children how to safely navigate roads and traffic. See the highlights!" :
                             "We're excited to announce the launch of our Walk Right campaign in Mumbai, aimed at improving pedestrian safety."}
                          </p>
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <span>{index * 3 + 5} days ago</span>
                            <span className="mx-2">•</span>
                            <span>{index * 125 + 350} likes</span>
                            <span className="mx-2">•</span>
                            <span>{index * 8 + 42} shares</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-[#1877F2] text-white font-medium hover:bg-blue-600 transition-colors"
                    >
                      <Facebook className="mr-2 h-5 w-5" />
                      Follow Walk Right India on Facebook
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="youtube" className="mt-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                        <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                          <img 
                            src={`https://source.unsplash.com/random/600x400?pedestrian,road,safety,video&sig=${index}`}
                            alt={`YouTube thumbnail ${index + 1}`}
                            className="w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center">
                              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg">
                            {index === 0 ? "How to Cross Roads Safely: A Guide for Pedestrians" : 
                             index === 1 ? "Understanding Traffic Signals for Pedestrians" :
                             index === 2 ? "Walk Right India: Our Mission and Vision" :
                             "Road Safety Tips for Children and Parents"}
                          </h3>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <span>{index * 7 + 12}K views</span>
                            <span className="mx-2">•</span>
                            <span>{index + 1} month{index > 0 ? 's' : ''} ago</span>
                          </div>
                          <p className="mt-2 text-gray-600 line-clamp-2">
                            {index === 0 ? "Learn the proper techniques for safely crossing roads in urban areas with high traffic volume." : 
                             index === 1 ? "A comprehensive guide to understanding and following pedestrian traffic signals in India." :
                             index === 2 ? "An introduction to Walk Right India, our mission to improve pedestrian safety across the country." :
                             "Special safety tips for parents and children on navigating roads safely on the way to school and other activities."}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-[#FF0000] text-white font-medium hover:bg-red-600 transition-colors"
                    >
                      <Youtube className="mr-2 h-5 w-5" />
                      Subscribe to our YouTube Channel
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SocialMedia;
