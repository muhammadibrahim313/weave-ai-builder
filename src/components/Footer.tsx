import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-white">Airweave</span>
            </div>
            
            <p className="text-muted-foreground max-w-sm">
              Airweave simplifies agent-building with powerful, no-code solutions, instant data sync, and scalable deployment options, making it easier than ever to create intelligent agents.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#how-it-works" className="text-muted-foreground hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
                Features
              </a>
              <a href="#compare" className="text-muted-foreground hover:text-white transition-colors">
                Compare
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-white transition-colors">
                Testimonials
              </a>
            </nav>
          </div>

          {/* Right Column - Legal */}
          <div className="space-y-4">
            <h4 className="text-white font-medium">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Airweave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;