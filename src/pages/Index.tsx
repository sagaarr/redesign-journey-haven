
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import SafetyStats from '@/components/SafetyStats';
import Initiatives from '@/components/Initiatives';
import MediaGallery from '@/components/MediaGallery';
import SocialMediaTabs from '@/components/SocialMediaTabs';
import Footer from '@/components/Footer';
import { ArrowDown, ArrowUp } from 'lucide-react';
import HeroTrafficSafety from '@/componentRevamp/HeroTrafficSafety';
import PedestrianTrendSection from '@/componentRevamp/PedestrianTrendSection';
import PedestrianRulesSection from '@/componentRevamp/PedestrianRulesSection';
import SafetySlider from '@/componentRevamp/SaftySlider';
import VideoAndBanner from '@/components/VideoAndBanner';
import { logEvent } from "firebase/analytics";
import { analytics } from '@/firebase';
import { TrusteesSection } from '@/componentRevamp/TrusteesSection';

import { Trustee } from "@/componentRevamp/TrusteesSection";
import MobileSocialNav from '@/componentRevamp/MobileSocialNav';

export const MOCK_TRUSTEES: Trustee[] = [
  {
    id: "1",
    name: "Nirmalkumar Rakshe",
    role: "Chairperson",
    imageUrl: "/lovable-uploads/kumar_rakshe.jpeg",
    bio: "Managing Director, UnM Group",
  },
  {
    id: "2",
    name: "Nilima Puranik",
    role: "Trustee",
    imageUrl: "/lovable-uploads/nilima_puranik.jpeg",
    bio: "",
  },
  {
    id: "3",
    name: "Dr. Amol Sahastrabuddhe",
    role: "Trustee",
    imageUrl: "/lovable-uploads/amol_sahastrabudhhe.jpg",
    bio: "",
  },
  {
    id: "4",
    name: "Prashaant Katyare",
    role: "Secretary",
    imageUrl: "/lovable-uploads/prashant.jpg",
    bio: "",
  },
];



const Index = () => {

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');

    if (source === 'qr') {
      logEvent(analytics, 'qr_scan', { campaign: 'promo2025' });
      console.log('User came via QR Code');
      // Optionally log this to Google Analytics or your backend
    }
  }, [])



  return (
    <div className="min-h-screen">
      <NavBar />
      <main>

        <HeroTrafficSafety />
        <Hero />
        <PedestrianRulesSection />
        <SafetySlider />
        {/* <SafetyStats /> */}
        {/* <Initiatives /> */}
        <MediaGallery />
        <SocialMediaTabs />

        <TrusteesSection trustees={MOCK_TRUSTEES} />
      </main>
      <MobileSocialNav />
      <Footer />
    </div>
  );
};

export default Index;
