import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import LiveStats from "@/components/sections/LiveStats";
import IndustryExpertise from "@/components/sections/IndustryExpertise";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <LiveStats />
      <IndustryExpertise />
      <ServicesOverview />
      <ProcessTimeline />
      <WhyChooseUs />
      <VideoShowcase />
      <TechStack />
      <Testimonials />
      <CTASection />
    </>
  );
}

