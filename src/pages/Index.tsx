
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelinePrizes from "@/components/TimelinePrizes";
import ApplicationForm from "@/components/ApplicationForm";
import MentorsJudges from "@/components/MentorsJudges";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <TimelinePrizes />
      <ApplicationForm />
      <MentorsJudges />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
