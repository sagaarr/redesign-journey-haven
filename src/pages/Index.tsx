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
import { ArrowDown, ArrowUp, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const sections = ['mascot-hero', 'hero', 'gallery-content', 'stats', 'initiatives', 'social-media', 'testimonials', 'footer']

const SocialMediaBar = () => {
  return (
    // <div className="fixed right-6 bottom-28 flex flex-col items-center space-y-4 z-50">
      <div className="fixed right-6 bottom-10 z-50 flex flex-col items-center space-y-4 bg-white p-3 rounded-xl shadow-lg border border-gray-200">
     <Link
                  to={"https://www.instagram.com/unmfoundationindia/#"}
                  className="text-pink-500 hover:text-pink-600 transition-transform hover:scale-110">
                  <Instagram size={22} />
                </Link>

                <Link
                  to={"https://whatsapp.com/channel/0029VawuE4NFy72H25gnzO1v"}
                  className="text-green-500 hover:text-green-600 transition-transform hover:scale-110">
                  <FaWhatsapp size={22} />
                </Link>

                <Link
                  to={"https://www.facebook.com/people/UnM-Foundation-India/61565708144198/?_rdr"}
                  className="text-blue-600 hover:text-blue-700 transition-transform hover:scale-110">
                  <Facebook size={22} />
                </Link>

                <Link
                  to={"https://youtube.com/@unmfoundationindia?si=e4tCwDuKF5kB2vjo"}
                  className="text-red-500 hover:text-red-600 transition-transform hover:scale-110">
                  <Youtube size={22} />
                </Link>

                <Link
                  to={"https://x.com/UnMIndia"}
                  className="text-black hover:text-gray-800 transition-transform hover:scale-110">
                  <Twitter size={22} />
                </Link>

                <Link
                  to={"https://in.linkedin.com/company/unm-foundation-india?trk=public_post_follow-view-profile"}
                  className="text-blue-700 hover:text-blue-800 transition-transform hover:scale-110">
                  <Linkedin size={22} />
                </Link>
    </div>
  );
};

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

      <SocialMediaBar />

      {/* <div className="fixed right-6 bottom-10 z-50">
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
      </div> */}
    </div>
  );
};

export default Index;
