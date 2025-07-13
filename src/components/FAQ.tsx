import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to get started with Airweave?",
      answer: "You can get started with Airweave in minutes. Our setup process includes connecting your first data source, configuring a sync, and implementing the search endpoint - typically taking less than 30 minutes for most users."
    },
    {
      question: "Is Airweave customizable for my needs?",
      answer: "Absolutely. Airweave is built with flexibility in mind. You can customize sync schedules, configure data transformations, set up custom webhooks, and tailor the search functionality to match your specific use case and business requirements."
    },
    {
      question: "Can I integrate my existing data stores?",
      answer: "Yes, Airweave supports integration with most major data sources including databases, APIs, cloud storage, and popular SaaS applications. We offer 20+ pre-built connectors and can help you create custom integrations for proprietary systems."
    },
    {
      question: "What support options do you offer?",
      answer: "We provide comprehensive support including documentation, video tutorials, community forums, and direct access to our founding team. Enterprise customers get dedicated support channels and custom onboarding assistance."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently asked
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything You Need to Know.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 border-t border-white/10">
                  <p className="text-muted-foreground pt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;