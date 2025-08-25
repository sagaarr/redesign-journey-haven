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
import { instaPosts, twitterPost } from '@/lib/constants';
import { InstagramEmbed, XEmbed } from './SocialEmbeds';
import { useIsMobile } from '@/hooks/use-mobile';

const SocialMediaTabs = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Flattened array for mobile view
  const flattenedPosts = instaPosts.flat();
  const flattenedXPosts = twitterPost.flat();

  return (
    <section id="social-media" className="py-16 bg-[#10100e]">
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
                  <a
                    href="https://www.instagram.com/unmfoundationindia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="twitter" className="mt-0">
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
                        {flattenedXPosts.map((url, index) => (
                          <CarouselItem key={index} className="w-full flex justify-center">
                            <div className="flex justify-center w-full max-w-[358px]">
                              <XEmbed url={url} width={358} />
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
                        {twitterPost.map((group, index) => (
                          <CarouselItem key={index} className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {group.map((url, i) => (
                                <div key={i} className="w-full mx-auto">
                                  <XEmbed url={url} width={358} />
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
                  <a
                    href="https://x.com/UnMIndia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
                      <Twitter className="mr-2 h-4 w-4" />
                      Follow on Twitter
                    </Button>
                  </a>
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

// import React from 'react';
// import { Instagram, Twitter } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { AspectRatio } from '@/components/ui/aspect-ratio';
// import { useIsMobile } from '@/hooks/use-mobile';
// import { InstagramEmbed, XEmbed } from './SocialEmbeds';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
// import { instaPosts, twitterPost } from '@/lib/constants';

// type Media = { type: 'ig' | 'x'; url: string };

// const mixPosts = (ig: string[][], x: string[][]): Media[] => {
//   // flatten and interleave
//   const A = ig.flat().map(url => ({ type: 'ig' as const, url }));
//   const B = x.flat().map(url => ({ type: 'x' as const, url }));
//   const max = Math.max(A.length, B.length);
//   const out: Media[] = [];
//   for (let i = 0; i < max; i++) {
//     if (A[i]) out.push(A[i]);
//     if (B[i]) out.push(B[i]);
//   }
//   return out.slice(0, 12); // keep the section tight
// };

// const SocialMediaWall = () => {
//   const isMobile = useIsMobile();
//   const mixed = mixPosts(instaPosts, twitterPost);

//   return (
//     <section
//       id="social-media"
//       className="
//         relative py-16
//         bg-black
//         [background:radial-gradient(1200px_600px_at_50%_-20%,rgba(255,255,255,0.08),transparent)]
//       "
//     >
//       <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-10">
//           <span className="inline-block rounded-full px-3 py-1 text-xs tracking-wide bg-white/5 text-white/80 ring-1 ring-white/10">
//             Connect With Us
//           </span>
//           <h2 className="mt-3 text-3xl font-bold text-white">Social Media</h2>
//           <p className="mt-3 text-sm text-white/70">
//             Stay connected with our latest updates and campaigns.
//           </p>
//         </div>

//         {/* Content */}
//         {isMobile ? (
//           <Carousel
//             className="w-full"
//             opts={{ loop: true, duration: 30 }}
//             autoPlay
//             autoPlayInterval={5000}
//           >
//             <CarouselContent>
//               {mixed.map((item, i) => (
//                 <CarouselItem key={i} className="p-1">
//                   <Card className="bg-white/5 border-white/10 rounded-xl p-3">
//                     <AspectRatio ratio={9 / 16} className="overflow-hidden rounded-lg">
//                       <div className="h-full w-full flex items-center justify-center">
//                         {item.type === 'ig' ? (
//                           <InstagramEmbed url={item.url} width={100} />
//                         ) : (
//                           <XEmbed url={item.url} width={100} />
//                         )}
//                       </div>
//                     </AspectRatio>
//                   </Card>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="flex justify-center gap-2 mt-4">
//               <CarouselPrevious className="relative static translate-y-0 left-0" />
//               <CarouselNext className="relative static translate-y-0 right-0" />
//             </div>
//           </Carousel>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {mixed.map((item, i) => (
//               <Card key={i} className="bg-white/5 border-white/10 rounded-xl p-3">
//                 <AspectRatio ratio={9 / 16} className="overflow-hidden rounded-lg">
//                   <div className="h-full w-full flex items-center justify-center">
//                     {item.type === 'ig' ? (
//                       <InstagramEmbed url={item.url} width={100} />
//                     ) : (
//                       <XEmbed url={item.url} width={100} />
//                     )}
//                   </div>
//                 </AspectRatio>
//               </Card>
//             ))}
//           </div>
//         )}

//         {/* CTAs */}
//         <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
//           <a
//             href="https://www.instagram.com/unmfoundationindia"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
//               <Instagram className="mr-2 h-4 w-4" />
//               Follow on Instagram
//             </Button>
//           </a>
//           <a href="https://x.com/UnMIndia" target="_blank" rel="noopener noreferrer">
//             <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
//               <Twitter className="mr-2 h-4 w-4" />
//               Follow on X
//             </Button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SocialMediaWall;
