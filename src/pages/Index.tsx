import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { FranchiseSection } from "@/components/FranchiseSection";
import { ServiceSection } from "@/components/ServiceSection";
import { MentorshipSection } from "@/components/MentorshipSection";
import { WorkshopsSection } from "@/components/WorkshopsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { SupplierSection } from "@/components/SupplierSection";
import { StatsSection } from "@/components/StatsSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServiceSection />
        <WorkshopsSection />
        <WhoWeAreSection />
        <MentorshipSection />
        <CoursesSection />
        <StatsSection />
        <SupplierSection />
        <YouTubeSection />
        <TestimonialsSection />
        <FranchiseSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
