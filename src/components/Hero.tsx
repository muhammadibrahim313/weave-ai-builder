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
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Build smarter{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            agents
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Empower agents with deep knowledge about your user's apps and workspaces.
        </p>

        {/* Network Diagram like in screenshot */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative max-w-4xl mx-auto">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Gmail to Center */}
              <line x1="15%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
              </line>
              
              {/* Notion to Center */}
              <line x1="85%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
              </line>
              
              {/* HubSpot to Center */}
              <line x1="50%" y1="85%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
              </line>
            </svg>

            {/* Nodes */}
            <div className="relative" style={{ zIndex: 2, height: '400px' }}>
              {/* Gmail */}
              <div className="absolute" style={{ left: '10%', top: '20%' }}>
                <div className="glass-card p-4 rounded-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">📧</span>
                  </div>
                  <div className="text-sm text-white font-medium">Gmail</div>
                  <div className="text-xs text-muted-foreground mt-1">Email sync & search</div>
                </div>
              </div>

              {/* Notion */}
              <div className="absolute" style={{ right: '10%', top: '20%' }}>
                <div className="glass-card p-4 rounded-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">📝</span>
                  </div>
                  <div className="text-sm text-white font-medium">Notion</div>
                  <div className="text-xs text-muted-foreground mt-1">Knowledge base</div>
                </div>
              </div>

              {/* HubSpot */}
              <div className="absolute" style={{ left: '50%', bottom: '10%', transform: 'translateX(-50%)' }}>
                <div className="glass-card p-4 rounded-lg group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">🎯</span>
                  </div>
                  <div className="text-sm text-white font-medium">HubSpot</div>
                  <div className="text-xs text-muted-foreground mt-1">CRM & contacts</div>
                </div>
              </div>

              {/* Central AI Agent */}
              <div className="absolute" style={{ left: '50%', top: '45%', transform: 'translate(-50%, -50%)' }}>
                <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-3 pulse-glow">
                    <span className="text-white font-bold text-lg">🤖</span>
                  </div>
                  <div className="text-base text-white font-semibold">AI Agent</div>
                  <div className="text-xs text-muted-foreground mt-1">Unified intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;