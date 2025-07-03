
const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Z47 & Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Z47 Enterprise is at the forefront of AI innovation, empowering businesses to transform 
              their operations through cutting-edge artificial intelligence solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our hackathon brings together the brightest minds in AI to solve real-world enterprise 
              challenges, fostering innovation and collaboration in the rapidly evolving AI landscape.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold">AI</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Innovation Focus</h3>
                <p className="text-gray-600">Enterprise AI Solutions</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" className="text-orange-400" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" className="text-yellow-400" />
                <circle cx="100" cy="100" r="20" fill="currentColor" className="text-orange-500" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
