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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Build smarter{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            agents
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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

        {/* Enhanced Network Visualization */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
              {[
                { name: 'Database', icon: 'DB', color: 'from-blue-500 to-blue-600' },
                { name: 'APIs', icon: 'API', color: 'from-emerald-500 to-emerald-600' },
                { name: 'Gmail', icon: '📧', color: 'from-red-500 to-red-600' },
                { name: 'Calendar', icon: '📅', color: 'from-orange-500 to-orange-600' },
                { name: 'Slack', icon: '💬', color: 'from-purple-500 to-purple-600' },
                { name: 'AI Agent', icon: '🤖', color: 'from-indigo-500 to-indigo-600' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm">{item.icon}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{item.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <span>Connect</span>
                <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                <span>Sync</span>
                <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                <span>Search</span>
                <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                <span>Power your agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;