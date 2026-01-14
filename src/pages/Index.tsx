import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkshopsSection } from "@/components/WorkshopsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { SupplierSection } from "@/components/SupplierSection";
import { StatsSection } from "@/components/StatsSection";
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
        <WorkshopsSection />
        <CoursesSection />
        <SupplierSection />
        <StatsSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
