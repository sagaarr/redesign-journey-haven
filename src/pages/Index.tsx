
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import SafetyStats from '@/components/SafetyStats';
import Initiatives from '@/components/Initiatives';
import MediaGallery from '@/components/MediaGallery';
import SocialMediaTabs from '@/components/SocialMediaTabs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { ArrowDown, ArrowUp } from 'lucide-react';
import VideoAndBanner from '@/components/VideoAndBanner';
import { logEvent } from "firebase/analytics";
import { analytics } from '@/firebase';

const sections = ['hero', 'video-banner', 'stats', 'initiatives', 'gallery-content', 'social-media', 'testimonials', 'footer']

const Index = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');

    if (source === 'qr') {

      logEvent(analytics, 'qr_scan', { campaign: 'promo2025' });
      console.log('User came via QR Code');
      // Optionally log this to Google Analytics or your backend
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting)
        if (visibleEntry) {
          if (visibleEntry.target.id === 'footer') {
            setShowUpArrow(true)
          } else {
            setShowUpArrow(false)
          }
          setActiveSection(visibleEntry.target.id)
        }
      }, {
      root: null,
      threshold: 0.6
    }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextSectionId = sections[currentIndex + 1];
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const reset = document.getElementById(sections[0]);
      reset.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <VideoAndBanner />
        <SafetyStats />
        <Initiatives />
        <MediaGallery />
        <SocialMediaTabs />
        <Testimonials />
      </main>
      <Footer />

      <div className="fixed right-6 bottom-10 z-50">
        <button
          onClick={scrollToNextSection}
          className="flex items-center justify-center p-3 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-300 text-white"
          aria-label={showUpArrow ? "Scroll to top" : "Scroll down"}
        >
          {showUpArrow ? (
            <ArrowUp className="h-6 w-6" />
          ) : (
            <ArrowDown className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Index;
