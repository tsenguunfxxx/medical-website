import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { DepartmentsSection } from "@/components/DepartmentsSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <ServicesSection />
    </>
  );
}
