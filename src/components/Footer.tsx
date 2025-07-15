import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Weave</span>
            </div>
            
            <p className="text-gray-600 max-w-xs">
              Empowering AI agents with deep knowledge about your users' apps and workspaces for more intelligent interactions.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold">Product</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faqs" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQs
              </a>
            </nav>
          </div>

          {/* Column 3 - Resources */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                API Reference
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Changelog
              </a>
            </nav>
          </div>

          {/* Column 4 - Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold">Company</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Careers
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-gray-900 font-semibold mb-3">Subscribe to our newsletter</h4>
            <p className="text-gray-600 mb-4">Get the latest updates and news delivered to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2024 Weave AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;