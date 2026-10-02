"use client";
import React from 'react';
import HeroSection from './components/home/HeroSection';
import ServicesCards from './components/home/ServicesCards';
import SplitInfoSection from './components/home/SplitInfoSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesCards />
      <SplitInfoSection />
    </div>
  );
}
