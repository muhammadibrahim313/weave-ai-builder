const Testimonials = () => {
  const testimonials = [
    {
      content: "Airweave dramatically sped up our agent development. The built-in sync and search features made building advanced agents much easier.",
      author: "Alex Chen",
      title: "Co-Founder of KubeAI",
      avatar: "AC"
    },
    {
      content: "Airweave saved us weeks of development time. The data sync and search features made building advanced agents much easier.",
      author: "Andreas Lepidis",
      title: "CTO at Zeno",
      avatar: "AL"
    },
    {
      content: "Building advanced agents used to take weeks — with Airweave, it took days. The data sync and search features were game changers.",
      author: "Thomas Wieringa",
      title: "Co-Founder at Libsy",
      avatar: "TW"
    },
    {
      content: "We were able to launch faster than expected thanks to Airweave. Its data tools made integrating complex workflows surprisingly simple.",
      author: "Guus van Heijningen",
      title: "Founder of Captain",
      avatar: "GH"
    },
    {
      content: "Airweave accelerated our development significantly. What used to take weeks was reduced to days, saving us valuable time and resources.",
      author: "Sarah Johnson",
      title: "Lead Engineer at DataFlow",
      avatar: "SJ"
    },
    {
      content: "The unified search layer is incredible. Our agents can now find exactly what they need across all our data sources instantly.",
      author: "Michael Torres",
      title: "CTO at AgentWorks",
      avatar: "MT"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What developers are
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover How Airweave Is Transforming Agent Development
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/30 rounded-full pulse-glow animate-float"></div>
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-accent/20 rounded-full pulse-glow animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full pulse-glow animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;