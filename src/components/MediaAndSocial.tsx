
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { useLanguage } from '@/contexts/LanguageContext';

const MediaAndSocial = () => {
  const { t } = useLanguage();
  
  return (
    <section id="media-social" className="py-20 bg-gradient-to-b from-gray-900 to-black border-b border-white/10">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-headline text-white">
            <span className="text-[#1EAEDB]">Media</span> & <span className="text-[#ea384c]">Social</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t('media.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Instagram Section */}
          <Card className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center">
              <Instagram className="text-white mr-2" />
              <h4 className="font-bold text-white">Instagram</h4>
            </div>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Road safety campaign" 
                  className="w-full h-32 object-cover rounded"
                />
                <img 
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Road safety awareness" 
                  className="w-full h-32 object-cover rounded"
                />
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Community outreach" 
                  className="w-full h-32 object-cover rounded"
                />
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Traffic safety" 
                  className="w-full h-32 object-cover rounded"
                />
              </div>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                Follow us on Instagram
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </CardContent>
          </Card>
          
          {/* Twitter Section */}
          <Card className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors overflow-hidden">
            <div className="bg-blue-500 p-4 flex items-center">
              <Twitter className="text-white mr-2" />
              <h4 className="font-bold text-white">Twitter</h4>
            </div>
            <CardContent className="p-4">
              <div className="border rounded p-3 mb-3">
                <div className="flex items-start mb-2">
                  <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold text-gray-500">UF</span>
                  </div>
                  <div>
                    <p className="font-bold">UNM Foundation <span className="text-gray-500 font-normal">@unmfoundation</span></p>
                    <p className="text-sm text-gray-700">Our latest road safety campaign reached over 1000 students this month! Thanks to all volunteers and partners for making this possible. #RoadSafety #Community</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              
              <div className="border rounded p-3">
                <div className="flex items-start mb-2">
                  <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold text-gray-500">UF</span>
                  </div>
                  <div>
                    <p className="font-bold">UNM Foundation <span className="text-gray-500 font-normal">@unmfoundation</span></p>
                    <p className="text-sm text-gray-700">Join us next weekend for the road safety awareness workshop at Nigdi Community Center. Free admission for all! #StaySafe</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
              
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                  Follow us on Twitter
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
          
          {/* YouTube Section */}
          <Card className="bg-black/40 border-white/10 hover:bg-black/60 transition-colors overflow-hidden">
            <div className="bg-red-500 p-4 flex items-center">
              <Youtube className="text-white mr-2" />
              <h4 className="font-bold text-white">Latest Videos</h4>
            </div>
            <CardContent className="p-0">
              <div className="relative pt-[56.25%] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-500">Road Safety Awareness Campaign</p>
                    <p className="text-sm text-gray-400 mt-1">Click to play video</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h5 className="font-bold mb-2">Road Safety - Know the Rules</h5>
                <p className="text-sm text-gray-600 mb-4">Learn about essential road safety practices that can save lives. Our latest educational video covers traffic signals, pedestrian safety, and more.</p>
                <div>
                  <a href="#" className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                    Watch more videos
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MediaAndSocial;
