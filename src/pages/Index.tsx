import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import DonateSection from "@/components/DonateSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import StatsSection from "@/components/StatsSection";
import VolunteerSection from "@/components/VolunteerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <DonateSection />
      <ServicesSection />
      <OurWorkSection />
      <StatsSection />
      <VolunteerSection />
      <TestimonialsSection />
      <BlogSection />
      <ChatbotWidget />
    </Layout>
  );
};

export default Index;
