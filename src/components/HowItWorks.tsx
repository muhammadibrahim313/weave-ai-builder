import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Database, Search, Zap } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Simple Integration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get started in three simple steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes it easy to connect your data sources and empower your AI agents.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect your data sources</h3>
              <p className="text-gray-600 mb-6">
                Easily integrate with your existing tools using OAuth2, API Keys, or database credentials. 
                We support 20+ popular services including Gmail, Slack, Notion, and more.
              </p>
              
              {/* Code example */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <div className="flex space-x-4 border-b border-gray-100 pb-2 mb-4">
                  <span className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">JavaScript</span>
                  <span className="text-gray-400">Python</span>
                  <span className="text-gray-400">cURL</span>
                </div>
                <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded">
{`// Connect to a data source
const weave = new WeaveSDK({
  apiKey: process.env.WEAVE_API_KEY
});

// Authenticate with OAuth2
const connection = await weave.connect({
  service: "gmail",
  authType: "oauth2",
  redirectUri: "https://your-app.com/callback"
});`}
                </pre>
              </div>
              
              <Button 
                variant="outline"
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                View documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Configure your sync</h3>
              <p className="text-gray-600 mb-6">
                Set up how and when your data should be synchronized. Choose between one-time syncs, 
                scheduled updates, or real-time streaming for the most up-to-date information.
              </p>
              
              {/* Sync options */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <h4 className="font-medium text-gray-900 mb-4">Sync Options</h4>
                <div className="space-y-4">
                  <label className="flex items-center p-3 border border-blue-100 bg-blue-50 rounded-lg">
                    <input type="radio" name="sync" defaultChecked className="text-blue-600 mr-3" />
                    <div>
                      <span className="text-gray-900 font-medium">One-time sync</span>
                      <p className="text-sm text-gray-600 mt-1">Perfect for initial data loading or testing</p>
                    </div>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <input type="radio" name="sync" className="text-blue-600 mr-3" />
                    <div>
                      <span className="text-gray-900 font-medium">Scheduled sync</span>
                      <p className="text-sm text-gray-600 mt-1">Automatically update data on a regular schedule</p>
                    </div>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <input type="radio" name="sync" className="text-blue-600 mr-3" />
                    <div className="flex items-center">
                      <span className="text-gray-900 font-medium">Real-time streaming</span>
                      <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">PRO</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Get instant updates as data changes</p>
                  </label>
                </div>
              </div>
              
              <Button 
                variant="outline"
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                Learn about sync options
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrate with your AI agents</h3>
              <p className="text-gray-600 mb-6">
                Use our simple search API to give your AI agents access to all the synchronized data.
                One endpoint to search across all connected services.
              </p>
              
              {/* Code example */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                <div className="flex space-x-4 border-b border-gray-100 pb-2 mb-4">
                  <span className="text-gray-400">JavaScript</span>
                  <span className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">Python</span>
                  <span className="text-gray-400">cURL</span>
                </div>
                <pre className="text-sm text-gray-800 bg-gray-50 p-3 rounded">
{`from weave import WeaveSDK

# Initialize the SDK
client = WeaveSDK(api_key="YOUR_API_KEY")

# Search across all connected data sources
results = client.search(
    query="quarterly sales report",
    sources=["gmail", "drive", "slack"],
    limit=10
)

# Process the results in your agent
for item in results:
    print(f"Found in {item.source}: {item.title}")`}
                </pre>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get started for free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;