import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Grid3X3, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'White-Labeled Multi-Tenant Support',
      description: 'Effortlessly sync data across multiple tenants with OAuth2-based security, perfect for SaaS builders.',
      visual: (
        <div className="glass-card p-4 bg-space-dark">
          <div className="text-xs text-muted-foreground mb-2">Multi-tenant Authentication</div>
          <pre className="text-sm text-white">
{`// OAuth2 Flow
const auth = new OAuth2({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  tenant: req.user.tenantId
});

await auth.authorize(scope);`}
          </pre>
        </div>
      )
    },
    {
      icon: Grid3X3,
      title: '20+ Connectors',
      description: 'Integrate with a wide range of data sources with over 20 pre-built connectors.',
      visual: (
        <div className="grid grid-cols-4 gap-2">
          {[
            { name: 'Teams', color: 'bg-blue-500' },
            { name: 'Notion', color: 'bg-gray-600' },
            { name: 'HubSpot', color: 'bg-orange-500' },
            { name: 'GitHub', color: 'bg-gray-800' },
            { name: 'Dropbox', color: 'bg-blue-600' },
            { name: 'Slack', color: 'bg-purple-600' },
            { name: 'Gmail', color: 'bg-red-500' },
            { name: 'Drive', color: 'bg-green-500' },
            { name: 'Linear', color: 'bg-indigo-500' },
            { name: 'Asana', color: 'bg-red-600' },
            { name: 'Jira', color: 'bg-blue-700' },
            { name: '+9 more', color: 'bg-muted' }
          ].map((connector, index) => (
            <div key={index} className={`${connector.color} rounded p-2 text-center`}>
              <div className="text-white text-xs font-medium">{connector.name}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: Search,
      title: 'Unified Agentic Search Layer',
      description: 'Enable powerful, unified search across all your workspace data with ease.',
      visual: (
        <div className="glass-card p-4 bg-space-dark">
          <div className="text-xs text-muted-foreground mb-2">GET /search/</div>
          <pre className="text-sm text-white">
{`from airweave import AirweaveSDK

client = AirweaveSDK(
    api_key="YOUR_API_KEY"
)

client.search.search(
    type_id="sync_id",
    query="query"
)`}
          </pre>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Features that
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              supercharge your agents
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We'll handle the hard stuff.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              
              <div className="mb-6">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation and CTA */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              ←
            </button>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-muted rounded-full"></div>
              <div className="w-2 h-2 bg-muted rounded-full"></div>
            </div>
            <button className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              →
            </button>
          </div>
          
          <Button className="btn-ghost">
            Talk to a Founder
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;