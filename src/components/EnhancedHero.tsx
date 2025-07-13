import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowRight } from 'lucide-react';
import NetworkBackground from './NetworkBackground';
import FloatingAppIcons from './FloatingAppIcons';
import GlassmorphismCards from './GlassmorphismCards';

const EnhancedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Deep gradient background with vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1123] via-[#1a1c2c] to-[#0f1123]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />
      
      {/* Soft blue and purple glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
      
      {/* Network background */}
      <NetworkBackground />
      
      {/* Floating app icons */}
      <FloatingAppIcons />
      
      {/* Glassmorphism cards */}
      <GlassmorphismCards />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Y Combinator Badge */}
        <div className="mb-8 animate-fade-in-up">
          <Badge 
            variant="outline" 
            className="backdrop-blur-xl bg-white/5 border-orange-500/30 text-orange-400 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            <span className="mr-2 text-orange-500">🚀</span>
            Backed by Y Combinator
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up tracking-tight" style={{ animationDelay: '0.2s', fontFamily: 'Inter, system-ui, sans-serif' }}>
          Build smarter{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            agents
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.4s', letterSpacing: '-0.01em' }}>
          Empower agents with deep knowledge about your user's apps and workspaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="group backdrop-blur-xl bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-4 text-lg font-medium min-w-[200px] hover:scale-105"
          >
            <Github className="w-5 h-5 mr-3" />
            GitHub
          </Button>
          <Button 
            size="lg"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 transition-all duration-300 px-8 py-4 text-lg font-medium min-w-[200px] hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            Talk to a Founder
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Enhanced Network Visualization */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 max-w-6xl mx-auto shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              {[
                { name: 'Database', icon: '🗄️', color: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/20' },
                { name: 'APIs', icon: '🔗', color: 'from-emerald-500 to-emerald-600', glow: 'shadow-emerald-500/20' },
                { name: 'Gmail', icon: '📧', color: 'from-red-500 to-red-600', glow: 'shadow-red-500/20' },
                { name: 'Calendar', icon: '📅', color: 'from-orange-500 to-orange-600', glow: 'shadow-orange-500/20' },
                { name: 'Slack', icon: '💬', color: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/20' },
                { name: 'AI Agent', icon: '🤖', color: 'from-indigo-500 to-indigo-600', glow: 'shadow-indigo-500/20' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl ${item.glow} group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-sm text-gray-300 font-medium tracking-wide">{item.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span className="font-medium">Connect</span>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Sync</span>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="font-medium">Search</span>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="font-medium">Power your agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;