
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "react-router-dom";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    description: "",
    github: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
          <p className="text-xl text-gray-600">Ready to join the AI revolution? Submit your application today.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-base font-medium text-gray-700 mb-2 block">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="h-12"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-base font-medium text-gray-700 mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="h-12"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="team" className="text-base font-medium text-gray-700 mb-2 block">
              Team/Company Name
            </Label>
            <Input
              id="team"
              name="team"
              type="text"
              value={formData.team}
              onChange={handleChange}
              className="h-12"
              placeholder="Your team or company name"
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-base font-medium text-gray-700 mb-2 block">
              Project Description *
            </Label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="min-h-32"
              placeholder="Describe your project idea or what you plan to build..."
            />
          </div>

          <div>
            <Label htmlFor="github" className="text-base font-medium text-gray-700 mb-2 block">
              GitHub Profile
            </Label>
            <Input
              id="github"
              name="github"
              type="url"
              value={formData.github}
              onChange={handleChange}
              className="h-12"
              placeholder="https://github.com/yourusername"
            />
          </div>

          <Link to="/apply">
            <Button 
              size="lg" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Complete Full Application
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
