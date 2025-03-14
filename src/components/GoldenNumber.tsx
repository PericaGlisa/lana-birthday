
import React from 'react';
import { Star } from 'lucide-react';

const GoldenNumber: React.FC = () => {
  // Create array for stars that orbit around the number
  const stars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: `${i * 0.5}s`,
    duration: `${15 + i}s`,
    size: 16 + Math.floor(Math.random() * 10),
    top: 50 + 45 * Math.sin(i * Math.PI / 4),
    left: 50 + 45 * Math.cos(i * Math.PI / 4),
  }));

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
      {/* Main number 10 with enhanced visibility */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-9xl sm:text-[10rem] font-bold gold-text animate-pulse font-bubblegum gold-glow text-shadow-dark">
          10
        </div>
      </div>

      {/* Orbiting stars */}
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute animate-spin-slow gold-glow"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        >
          <Star size={star.size} className="text-birthday-gold animate-sparkle" fill="#FFD700" />
        </div>
      ))}

      {/* Central glow effect */}
      <div className="absolute inset-0 rounded-full bg-birthday-gold/20 blur-xl animate-pulse"></div>
    </div>
  );
};

export default GoldenNumber;
