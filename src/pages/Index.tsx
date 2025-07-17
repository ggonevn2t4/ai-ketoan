import Header from "@/components/Header";
import ProblemSection from "@/components/ProblemSection"; 
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProblemSection />
      <SolutionsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
