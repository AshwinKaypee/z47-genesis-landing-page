
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-300 rounded-full opacity-25"></div>
        <svg className="absolute top-1/3 left-1/2 transform -translate-x-1/2" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M50 100 L150 50 L150 150 Z" fill="rgba(251, 146, 60, 0.1)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Z47 Enterprise
          <span className="block text-orange-500">AI Hackathon</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join the future of enterprise AI. Build innovative solutions, compete for amazing prizes, 
          and connect with industry leaders in our flagship hackathon event.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/apply">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Button>
          </Link>
          <button className="text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors duration-300 hover:underline">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
