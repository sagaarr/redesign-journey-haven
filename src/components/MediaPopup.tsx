import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type MediaItem = {
  id: number;
  type: 'photo' | 'video';
  src?: string;
  alt?: string;
  youtubeId?: string;
  title?: string;
};

interface MediaPopupProps {
  items: MediaItem[];
  currentIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
}

const MediaPopup = ({ items, currentIndex, open, onOpenChange, onNavigate }: MediaPopupProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      
      if (e.key === 'ArrowLeft') {
        navigateTo(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        navigateTo(currentIndex + 1);
      } else if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, currentIndex, items]);

  if (!isMounted) return null;
  
  const currentItem = items[currentIndex];
  if (!currentItem) return null;
  
  const navigateTo = (index: number) => {
    const newIndex = (index + items.length) % items.length;
    onNavigate(newIndex);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-7xl w-full bg-black/95 border-none p-1 sm:p-2"
      >
        <div className="relative flex items-center justify-center w-full h-full min-h-[50vh] sm:min-h-[70vh]">
          <div className="w-full h-full flex items-center justify-center">
            {currentItem.type === 'photo' ? (
              <img 
                src={currentItem.src} 
                alt={currentItem.alt} 
                className="max-h-[80vh] max-w-full object-contain"
              />
            ) : (
              <div className="aspect-video w-full max-w-4xl">
                <iframe
                  src={`https://www.youtube.com/embed/${currentItem.youtubeId}?autoplay=1`}
                  title={currentItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
          
          <button 
            onClick={() => navigateTo(currentIndex - 1)}
            className="absolute left-2 sm:left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => navigateTo(currentIndex + 1)}
            className="absolute right-2 sm:right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          {(currentItem.alt || currentItem.title) && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-white text-center">
              {currentItem.alt || currentItem.title}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaPopup;
