import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Database, Search, Zap } from 'lucide-react';

const EnhancedHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              AI-Powered Workspace Integration
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Build smarter agents with <span className="text-blue-600">deep knowledge</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Empower your AI agents with comprehensive access to your users' apps and workspaces for more intelligent, context-aware interactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 text-base font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-3">Trusted by innovative teams</p>
              <div className="flex flex-wrap gap-6 items-center">
                <img src="https://placehold.co/100x30/e2e8f0/64748b?text=Company" alt="Company logo" className="h-6 opacity-70" />
                <img src="https://placehold.co/100x30/e2e8f0/64748b?text=Company" alt="Company logo" className="h-6 opacity-70" />
                <img src="https://placehold.co/100x30/e2e8f0/64748b?text=Company" alt="Company logo" className="h-6 opacity-70" />
                <img src="https://placehold.co/100x30/e2e8f0/64748b?text=Company" alt="Company logo" className="h-6 opacity-70" />
              </div>
            </div>
          </div>
          
          {/* Right Column - Feature Cards */}
          <div className="relative">
            {/* Background element */}
            <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
            
            {/* Feature Cards */}
            <div className="relative grid gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Unified Data Access</h3>
                    <p className="text-gray-600">Connect to 20+ apps and data sources with a single API</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300 ml-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Search className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Search</h3>
                    <p className="text-gray-600">Powerful search capabilities across all connected workspaces</p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Tenant Support</h3>
                    <p className="text-gray-600">Secure OAuth2-based authentication for all your users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;