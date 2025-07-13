import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full pulse-glow animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full pulse-glow animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/40 rounded-full pulse-glow animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-accent/30 rounded-full pulse-glow animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Y Combinator Badge */}
        <div className="mb-8 animate-fade-in-up">
          <Badge variant="outline" className="glass-card border-primary/30 text-primary px-4 py-2">
            <span className="mr-2">🚀</span>
            Backed by Y Combinator
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Build smarter
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            agents
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Empower agents with deep knowledge about your user's apps and workspaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="btn-ghost min-w-[200px]"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button 
            size="lg"
            className="btn-primary min-w-[200px]"
          >
            Talk to a Founder
          </Button>
        </div>

        {/* Animated Network Visualization */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {/* App Icons with connection lines */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">DB</span>
                </div>
                <span className="text-xs text-muted-foreground">Database</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">API</span>
                </div>
                <span className="text-xs text-muted-foreground">APIs</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">📧</span>
                </div>
                <span className="text-xs text-muted-foreground">Gmail</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">📅</span>
                </div>
                <span className="text-xs text-muted-foreground">Calendar</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">📊</span>
                </div>
                <span className="text-xs text-muted-foreground">Analytics</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">🤖</span>
                </div>
                <span className="text-xs text-muted-foreground">AI Agent</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Connect your data sources → Sync automatically → Power your agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;