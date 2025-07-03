
import { Calendar, Trophy, Users, Zap } from "lucide-react";

const TimelinePrizes = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Registration Opens",
      date: "March 1, 2024",
      description: "Sign up and form your team",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Hackathon Begins",
      date: "March 15, 2024",
      description: "48 hours of intense coding",
      color: "purple"
    },
    {
      icon: Users,
      title: "Mentorship Sessions",
      date: "March 16, 2024",
      description: "Get guidance from industry experts",
      color: "yellow"
    },
    {
      icon: Trophy,
      title: "Grand Prize",
      date: "$50,000",
      description: "Plus startup incubation opportunity",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Timeline & Prizes</h2>
          <p className="text-xl text-gray-600">Key dates and exciting rewards await</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              orange: "bg-orange-100 text-orange-600 border-orange-200",
              purple: "bg-purple-100 text-purple-600 border-purple-200",
              yellow: "bg-yellow-100 text-yellow-600 border-yellow-200"
            };
            
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-lg font-medium text-orange-600 mb-2">{item.date}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelinePrizes;
