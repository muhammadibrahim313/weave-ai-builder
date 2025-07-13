import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="glass-card p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to empower your agents with your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              workspace data?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started today and unlock the full potential of your agent-building capabilities.
          </p>
          
          <Button size="lg" className="btn-primary text-lg px-8 py-4">
            Talk to a Founder
          </Button>
          
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-3 h-3 bg-primary/30 rounded-full pulse-glow animate-float"></div>
            <div className="absolute top-20 right-20 w-2 h-2 bg-accent/40 rounded-full pulse-glow animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-primary/20 rounded-full pulse-glow animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent/30 rounded-full pulse-glow animate-float" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;