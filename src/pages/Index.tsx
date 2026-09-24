import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal delay={1}><SkillsSection /></ScrollReveal>
        <ScrollReveal><ServicesSection /></ScrollReveal>
        <ScrollReveal delay={1}><PortfolioSection /></ScrollReveal>
        <ScrollReveal><CertificatesSection /></ScrollReveal>
        <ScrollReveal delay={1}><ContactSection /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
