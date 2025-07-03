
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    graduationYear: "",
    teamName: "",
    teamSize: "",
    projectTitle: "",
    projectDescription: "",
    technicalSkills: "",
    githubProfile: "",
    linkedinProfile: "",
    portfolioUrl: "",
    previousHackathons: "",
    motivation: "",
    dietaryRestrictions: "",
    shirtSize: "",
    agreeToTerms: false,
    agreeToPhotos: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Z47 Enterprise AI Hackathon Application</h1>
          <p className="text-gray-600 mt-2">Complete the form below to apply for our flagship AI hackathon event.</p>
        </div>
      </header>

      {/* Application Form */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Personal Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-base font-medium text-gray-700 mb-2 block">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="h-12"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-base font-medium text-gray-700 mb-2 block">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="h-12"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <Label htmlFor="email" className="text-base font-medium text-gray-700 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="h-12"
                  placeholder="your.email@university.edu"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base font-medium text-gray-700 mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="h-12"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </section>

          {/* Academic Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Academic Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="university" className="text-base font-medium text-gray-700 mb-2 block">
                  University/Institution *
                </Label>
                <Input
                  id="university"
                  type="text"
                  required
                  value={formData.university}
                  onChange={(e) => handleChange("university", e.target.value)}
                  className="h-12"
                  placeholder="Your university name"
                />
              </div>
              <div>
                <Label htmlFor="major" className="text-base font-medium text-gray-700 mb-2 block">
                  Major/Field of Study
                </Label>
                <Input
                  id="major"
                  type="text"
                  value={formData.major}
                  onChange={(e) => handleChange("major", e.target.value)}
                  className="h-12"
                  placeholder="Computer Science, Engineering, etc."
                />
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="graduationYear" className="text-base font-medium text-gray-700 mb-2 block">
                Expected Graduation Year
              </Label>
              <Select onValueChange={(value) => handleChange("graduationYear", value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select graduation year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Team Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Team Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="teamName" className="text-base font-medium text-gray-700 mb-2 block">
                  Team Name
                </Label>
                <Input
                  id="teamName"
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => handleChange("teamName", e.target.value)}
                  className="h-12"
                  placeholder="Leave blank if applying solo"
                />
              </div>
              <div>
                <Label htmlFor="teamSize" className="text-base font-medium text-gray-700 mb-2 block">
                  Team Size
                </Label>
                <Select onValueChange={(value) => handleChange("teamSize", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Solo (1 person)</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3">3 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Project Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Project Information</h2>
            <div>
              <Label htmlFor="projectTitle" className="text-base font-medium text-gray-700 mb-2 block">
                Project Title/Idea
              </Label>
              <Input
                id="projectTitle"
                type="text"
                value={formData.projectTitle}
                onChange={(e) => handleChange("projectTitle", e.target.value)}
                className="h-12"
                placeholder="What do you plan to build?"
              />
            </div>

            <div className="mt-6">
              <Label htmlFor="projectDescription" className="text-base font-medium text-gray-700 mb-2 block">
                Project Description *
              </Label>
              <Textarea
                id="projectDescription"
                required
                value={formData.projectDescription}
                onChange={(e) => handleChange("projectDescription", e.target.value)}
                className="min-h-32"
                placeholder="Describe your project idea, the problem it solves, and how you plan to use AI..."
              />
            </div>

            <div className="mt-6">
              <Label htmlFor="technicalSkills" className="text-base font-medium text-gray-700 mb-2 block">
                Technical Skills *
              </Label>
              <Textarea
                id="technicalSkills"
                required
                value={formData.technicalSkills}
                onChange={(e) => handleChange("technicalSkills", e.target.value)}
                className="min-h-24"
                placeholder="List your programming languages, frameworks, AI/ML experience, etc."
              />
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Portfolio & Links</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="githubProfile" className="text-base font-medium text-gray-700 mb-2 block">
                  GitHub Profile *
                </Label>
                <Input
                  id="githubProfile"
                  type="url"
                  required
                  value={formData.githubProfile}
                  onChange={(e) => handleChange("githubProfile", e.target.value)}
                  className="h-12"
                  placeholder="https://github.com/yourusername"
                />
              </div>

              <div>
                <Label htmlFor="linkedinProfile" className="text-base font-medium text-gray-700 mb-2 block">
                  LinkedIn Profile
                </Label>
                <Input
                  id="linkedinProfile"
                  type="url"
                  value={formData.linkedinProfile}
                  onChange={(e) => handleChange("linkedinProfile", e.target.value)}
                  className="h-12"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <Label htmlFor="portfolioUrl" className="text-base font-medium text-gray-700 mb-2 block">
                  Portfolio Website
                </Label>
                <Input
                  id="portfolioUrl"
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={(e) => handleChange("portfolioUrl", e.target.value)}
                  className="h-12"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Experience</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="previousHackathons" className="text-base font-medium text-gray-700 mb-2 block">
                  Previous Hackathon Experience
                </Label>
                <Textarea
                  id="previousHackathons"
                  value={formData.previousHackathons}
                  onChange={(e) => handleChange("previousHackathons", e.target.value)}
                  className="min-h-24"
                  placeholder="List any hackathons you've participated in and your achievements..."
                />
              </div>

              <div>
                <Label htmlFor="motivation" className="text-base font-medium text-gray-700 mb-2 block">
                  Why do you want to participate? *
                </Label>
                <Textarea
                  id="motivation"
                  required
                  value={formData.motivation}
                  onChange={(e) => handleChange("motivation", e.target.value)}
                  className="min-h-32"
                  placeholder="Tell us about your motivation and what you hope to achieve..."
                />
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="dietaryRestrictions" className="text-base font-medium text-gray-700 mb-2 block">
                  Dietary Restrictions
                </Label>
                <Input
                  id="dietaryRestrictions"
                  type="text"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => handleChange("dietaryRestrictions", e.target.value)}
                  className="h-12"
                  placeholder="Any dietary requirements?"
                />
              </div>
              <div>
                <Label htmlFor="shirtSize" className="text-base font-medium text-gray-700 mb-2 block">
                  T-Shirt Size
                </Label>
                <Select onValueChange={(value) => handleChange("shirtSize", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="XS">XS</SelectItem>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="XXL">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Terms and Conditions */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Terms & Conditions</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleChange("agreeToTerms", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 leading-relaxed">
                  I agree to the terms and conditions of the Z47 Enterprise AI Hackathon, including the code of conduct and intellectual property guidelines. *
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToPhotos"
                  checked={formData.agreeToPhotos}
                  onCheckedChange={(checked) => handleChange("agreeToPhotos", checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="agreeToPhotos" className="text-sm text-gray-700 leading-relaxed">
                  I consent to being photographed/recorded during the event for promotional purposes.
                </Label>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              disabled={!formData.agreeToTerms}
            >
              Submit Application
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Application;
