
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Image, Video } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import MediaPopup from '@/components/MediaPopup';

type MediaItem = {
  id: number;
  type: 'photo' | 'video';
  src?: string;
  alt?: string;
  youtubeId?: string;
  title?: string;
};

const Gallery = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("photos");
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Extended dummy photos for the full gallery
  const allPhotos: MediaItem[] = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    type: 'photo',
    src: `/lovable-uploads/gallery/${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));


  // Extended dummy videos for the full gallery
  const allVideos: MediaItem[] = [
    { id: 1, type: 'video', youtubeId: "ZE8ODPL2VPI", title: "Road Safety Awareness" },
    { id: 2, type: 'video', youtubeId: "QXU3L7V0_7I", title: "Pedestrian Safety Tips" },
    { id: 3, type: 'video', youtubeId: "UxrHGPX_-QQ", title: "Safe Crossing Techniques" },
    { id: 4, type: 'video', youtubeId: "9j4NKx2EGyE", title: "Traffic Rules Education" },
    { id: 5, type: 'video', youtubeId: "zcTkSs-5Vuo", title: "Road Safety for Children" },
    { id: 6, type: 'video', youtubeId: "dAhQ6xKoOj4", title: "Community Safety Initiatives" },
    { id: 7, type: 'video', youtubeId: "n2XU6X6F0kc", title: "Urban Planning for Safety" },
    { id: 8, type: 'video', youtubeId: "RNy7X1yVIqg", title: "Walkability in Cities" },
    { id: 9, type: 'video', youtubeId: "LJvEIjRBSDA", title: "Safety Infrastructure Development" },
    { id: 10, type: 'video', youtubeId: "rfscVS0vtbw", title: "Public Awareness Campaign" },
    { id: 11, type: 'video', youtubeId: "1Rs2ND1ryYc", title: "School Zone Safety" },
    { id: 12, type: 'video', youtubeId: "l4s4tM3cJjY", title: "Community Engagement" },
  ];

  const getActiveItems = (): MediaItem[] => activeTab === "photos" ? allPhotos : allVideos;

  const handleItemClick = (index: number) => {
    setCurrentItemIndex(index);
    setPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <NavBar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-white">Media Gallery</h1>
            <p className="mt-4 text-gray-300 text-lg">
              Browse our complete collection of photos and videos showcasing our work in pedestrian safety.
            </p>
          </div>

          <Tabs
            defaultValue="photos"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-800/50 border border-gray-700 p-1">
                <TabsTrigger
                  value="photos"
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Image size={18} />
                  Photos
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Video size={18} />
                  Videos
                </TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="h-[calc(100vh-300px)]">
              <TabsContent value="photos" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {allPhotos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video group cursor-pointer"
                      onClick={() => handleItemClick(index)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm font-medium">{photo.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {allVideos.map((video, index) => (
                    <div
                      key={video.id}
                      className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video cursor-pointer"
                      onClick={() => handleItemClick(index)}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </main>

      {/* Media Popup */}
      <MediaPopup
        items={getActiveItems()}
        currentIndex={currentItemIndex}
        open={popupOpen}
        onOpenChange={setPopupOpen}
        onNavigate={setCurrentItemIndex}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
