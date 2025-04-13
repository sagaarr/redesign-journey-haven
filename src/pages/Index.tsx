
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import SafetyStats from '@/components/SafetyStats';
import Initiatives from '@/components/Initiatives';
import MediaGallery from '@/components/MediaGallery';
import SocialMediaTabs from '@/components/SocialMediaTabs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { ArrowDown, ArrowUp } from 'lucide-react';

const Index = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Handle scroll position to show up/down arrow
  useEffect(() => {
    const handleScroll = () => {
      const bottomThreshold = document.documentElement.scrollHeight - window.innerHeight - 200;
      setShowUpArrow(window.scrollY > bottomThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    if (showUpArrow) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const galleryContent = document.getElementById('gallery-content');
      if (galleryContent) {
        const offset = galleryContent.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      } else {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <section id="gallery">
          <MediaGallery />
        </section>
        <SafetyStats />
        <Initiatives />
        <SocialMediaTabs />
        <Testimonials />
        <CallToAction />
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
