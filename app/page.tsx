
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/TestimonialsSection";
import React from "react";
import BusinessFramework from "@/components/BuniessFramework";
import StrategySession from "@/components/StrategySession";
import CoachSection from "@/components/CatchSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <CoachSection/>
      <BusinessFramework/>
      <StrategySession/>
      <ReviewsSection />
    </main>
  );
}
