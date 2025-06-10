
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import MascotHero from '@/components/MascotHero';
import SafetyStats from '@/components/SafetyStats';
import Initiatives from '@/components/Initiatives';
import MediaGallery from '@/components/MediaGallery';
import SocialMediaTabs from '@/components/SocialMediaTabs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { ArrowDown, ArrowUp } from 'lucide-react';

const sections = ['mascot-hero', 'hero', 'gallery-content', 'stats', 'initiatives', 'social-media', 'testimonials', 'footer']

const Index = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
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

  // Road safety messages for the mascot hero
  const safetyMessages = [
    "Stop, Look, and Listen before crossing any street",
    "Always use crosswalks and obey traffic signals",
    "Stay visible - wear bright colors and reflective gear",
    "Put down your phone and stay alert while walking",
    "Make eye contact with drivers before crossing"
  ];

  // Optional background colors that match your theme
  const backgroundColors = [
    '#1a1a2e', // dark blue
    '#16213e', // navy
    '#0f172a', // dark slate
    '#1e293b', // slate
    '#374151'  // gray
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <SafetyStats />
        <Initiatives />
        <MediaGallery />
        <SocialMediaTabs />
        <Testimonials />
        {/* <CallToAction /> */}
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
