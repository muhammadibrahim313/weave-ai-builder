import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Settings, Search } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Empower your agent with
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              search
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get started in three steps.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {/* Step 1: Set up your connection */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white">Set up your connection</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Easily integrate your data using OAuth2, API Keys, or DB credentials.
              </p>
              <Button className="btn-ghost">
                Connect your data sources
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="glass-card p-6">
              {/* Mock Dashboard Interface */}
              <div className="space-y-4">
                {/* Tab Navigation */}
                <div className="flex space-x-4 border-b border-white/10 pb-2">
                  <span className="text-primary border-b-2 border-primary pb-2">Airweave</span>
                  <span className="text-muted-foreground">cURL</span>
                  <span className="text-muted-foreground">Python</span>
                  <span className="text-muted-foreground">Node</span>
                </div>
                
                {/* Connectors Grid */}
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Available Connectors</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: 'Asana', entities: '8', connections: '3', color: 'bg-red-500' },
                      { name: 'Confluence', entities: '12', connections: '1', color: 'bg-blue-500' },
                      { name: 'Dropbox', entities: '45', connections: '2', color: 'bg-blue-600' },
                      { name: 'Gmail', entities: '156', connections: '5', color: 'bg-red-600' },
                      { name: 'G Calendar', entities: '89', connections: '4', color: 'bg-green-500' },
                      { name: 'G Drive', entities: '234', connections: '8', color: 'bg-yellow-500' },
                    ].map((connector) => (
                      <div key={connector.name} className="glass-card p-3 text-center">
                        <div className={`w-8 h-8 ${connector.color} rounded mx-auto mb-2`}></div>
                        <div className="text-white text-sm font-medium">{connector.name}</div>
                        <div className="text-xs text-muted-foreground">{connector.entities} entities</div>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {connector.connections} connections
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="btn-primary w-full mt-4">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Connection to Asana
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Start a sync */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-6 order-2 md:order-1">
              {/* Mock Sync Interface */}
              <div className="space-y-4">
                <div className="flex space-x-4 border-b border-white/10 pb-2">
                  <span className="text-primary border-b-2 border-primary pb-2">Airweave</span>
                  <span className="text-muted-foreground">cURL</span>
                  <span className="text-muted-foreground">Python</span>
                  <span className="text-muted-foreground">Node</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Set up your pipeline</h4>
                  <div className="glass-card p-4">
                    <h5 className="text-white font-medium mb-3">Configure your sync</h5>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="sync" defaultChecked className="text-primary" />
                        <span className="text-white">One-time sync</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="sync" className="text-primary" />
                        <span className="text-white">Scheduled sync</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="sync" className="text-primary" />
                        <span className="text-white">Stream Updates</span>
                        <Badge className="bg-accent text-white">PRO</Badge>
                      </label>
                    </div>
                    <div className="mt-4 p-2 bg-space-dark rounded border border-primary/30">
                      <div className="text-xs text-muted-foreground">Status: Ready to sync</div>
                      <div className="w-full bg-muted h-2 rounded mt-1">
                        <div className="w-0 h-full bg-primary rounded transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white">Start a sync</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Set up your first data sync in this simple step.
              </p>
              <Button className="btn-ghost">
                Configure your agent
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Step 3: Find what you need */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white">Find what you need</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Give your agent a simple search endpoint so it always finds what it needs.
              </p>
              <Button className="btn-ghost">
                Talk to a Founder
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="glass-card p-6">
              {/* Mock Search Interface */}
              <div className="space-y-4">
                <div className="flex space-x-4 border-b border-white/10 pb-2">
                  <span className="text-primary border-b-2 border-primary pb-2">Airweave</span>
                  <span className="text-muted-foreground">cURL</span>
                  <span className="text-muted-foreground">Python</span>
                  <span className="text-muted-foreground">Node</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Search className="w-4 h-4" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                  
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
                  
                  <div className="text-xs text-muted-foreground">
                    ✓ Search results ready • 0.24s response time
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

export default HowItWorks;