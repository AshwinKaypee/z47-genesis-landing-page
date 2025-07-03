
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold text-lg mr-3">
                Z47
              </div>
              <span className="text-xl font-bold">Enterprise AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the future of enterprise through innovative AI solutions and community-driven hackathons.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <span className="text-sm font-bold">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <span className="text-sm font-bold">li</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <span className="text-sm font-bold">gh</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#timeline" className="hover:text-orange-400 transition-colors">Timeline</a></li>
              <li><a href="#apply" className="hover:text-orange-400 transition-colors">Apply</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hackathon@z47.ai</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Z47 Enterprise AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
