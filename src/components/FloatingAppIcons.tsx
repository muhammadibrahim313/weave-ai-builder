import React from 'react';
import { Database, MessageSquare, Calendar, FileText, Users, Zap, Github, Search } from 'lucide-react';

const FloatingAppIcons = () => {
  const apps = [
    { 
      icon: <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">N</div>, 
      name: 'Notion', 
      position: 'top-20 left-20',
      color: 'rgba(0, 0, 0, 0.8)',
      glow: 'rgba(0, 0, 0, 0.3)'
    },
    { 
      icon: <Database className="w-6 h-6 text-blue-400" />, 
      name: 'Database', 
      position: 'top-32 right-32',
      color: 'rgba(59, 130, 246, 0.8)',
      glow: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      icon: <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">H</div>, 
      name: 'HubSpot', 
      position: 'top-40 left-1/4',
      color: 'rgba(249, 115, 22, 0.8)',
      glow: 'rgba(249, 115, 22, 0.3)'
    },
    { 
      icon: <Search className="w-6 h-6 text-green-400" />, 
      name: 'Google Search', 
      position: 'bottom-40 right-20',
      color: 'rgba(34, 197, 94, 0.8)',
      glow: 'rgba(34, 197, 94, 0.3)'
    },
    { 
      icon: <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">A</div>, 
      name: 'Asana', 
      position: 'bottom-32 left-32',
      color: 'rgba(239, 68, 68, 0.8)',
      glow: 'rgba(239, 68, 68, 0.3)'
    },
    { 
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />, 
      name: 'Slack', 
      position: 'top-1/2 left-16',
      color: 'rgba(147, 51, 234, 0.8)',
      glow: 'rgba(147, 51, 234, 0.3)'
    },
    { 
      icon: <Calendar className="w-6 h-6 text-blue-400" />, 
      name: 'Calendar', 
      position: 'top-1/2 right-16',
      color: 'rgba(59, 130, 246, 0.8)',
      glow: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      icon: <Github className="w-6 h-6 text-gray-300" />, 
      name: 'GitHub', 
      position: 'bottom-20 right-1/4',
      color: 'rgba(156, 163, 175, 0.8)',
      glow: 'rgba(156, 163, 175, 0.3)'
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {apps.map((app, index) => (
        <div
          key={index}
          className={`absolute ${app.position} animate-float`}
          style={{ 
            animationDelay: `${index * 0.5}s`,
            animationDuration: '6s'
          }}
        >
          <div 
            className="relative w-16 h-16 rounded-2xl backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: `${app.color}`,
              boxShadow: `0 0 20px ${app.glow}, 0 8px 32px rgba(0, 0, 0, 0.3)`
            }}
          >
            {app.icon}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {app.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingAppIcons;