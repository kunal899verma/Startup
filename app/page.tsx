import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IndustryExpertise from "@/components/sections/IndustryExpertise";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesOverview />
      <IndustryExpertise />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

