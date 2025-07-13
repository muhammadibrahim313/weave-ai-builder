import React from 'react';
import { MessageCircle, Users, TrendingUp, Zap } from 'lucide-react';

const GlassmorphismCards = () => {
  const cards = [
    {
      icon: <MessageCircle className="w-5 h-5 text-blue-400" />,
      title: "Who seems most unknowledgeable on this topic?",
      position: "top-1/3 left-16",
      size: "w-64 h-20"
    },
    {
      icon: <Users className="w-5 h-5 text-purple-400" />,
      title: "How does the team fix this problem?",
      position: "top-1/2 right-20",
      size: "w-72 h-24"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-green-400" />,
      title: "What was the user's past few orders?",
      position: "bottom-1/3 right-32",
      size: "w-60 h-18"
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      title: "Analyze customer sentiment trends",
      position: "bottom-40 left-24",
      size: "w-68 h-22"
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute ${card.position} ${card.size} animate-float`}
          style={{ 
            animationDelay: `${index * 0.8}s`,
            animationDuration: '8s'
          }}
        >
          <div className="w-full h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 p-2 bg-white/10 rounded-lg">
                {card.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GlassmorphismCards;