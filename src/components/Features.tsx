import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Grid3X3, Search, Shield, Zap, Database, Globe, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Unified Data Access',
      description: 'Connect to 20+ apps and data sources with a single API, including Gmail, Slack, Notion, and more.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'OAuth2-based authentication with multi-tenant support and end-to-end encryption for all your data.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'Powerful search capabilities across all connected workspaces with semantic understanding.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Keep your data fresh with scheduled syncs or real-time streaming updates from connected sources.',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with response times under 200ms, even for complex queries across multiple sources.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deployed across multiple regions for low-latency access and high availability worldwide.',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to supercharge your AI agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We handle the complex integration work so you can focus on building amazing AI experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration with Your Tech Stack</h3>
              <p className="text-gray-600 mb-6">
                Our platform is designed to work with your existing tools and infrastructure. 
                Whether you're using REST APIs, SDKs, or webhooks, we've got you covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Simple REST API with comprehensive documentation</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">SDKs for JavaScript, Python, and more</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Webhook support for real-time event notifications</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex space-x-4 border-b border-gray-100 pb-2 mb-4">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">JavaScript</span>
                <span className="text-gray-400">Python</span>
                <span className="text-gray-400">cURL</span>
              </div>
              <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded">
{`// Search across all connected sources
const results = await weave.search({
  query: "quarterly sales report",
  sources: ["gmail", "drive", "slack"],
  limit: 10,
  filters: {
    date: { after: "2023-01-01" },
    type: ["document", "spreadsheet"]
  }
});

// Use the results in your agent
agent.addContext(results.map(item => ({
  title: item.title,
  content: item.content,
  source: item.source,
  url: item.url
})));`}
              </pre>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Explore all features
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;