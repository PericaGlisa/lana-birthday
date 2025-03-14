
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

interface BalloonProps {
  type: 'heart' | 'star';
  position: {
    top: string;
    left: string;
  };
  size?: number;
  delay?: string;
}

const Balloon: React.FC<BalloonProps> = ({ 
  type, 
  position, 
  size = 40,
  delay = '0s' 
}) => {
  const [popped, setPopped] = useState(false);

  const handlePop = () => {
    if (!popped) {
      setPopped(true);
      // Play popping sound
      const audio = new Audio('/balloon-pop.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log('Audio play failed:', e));
      
      // Reset after animation completes
      setTimeout(() => {
        setPopped(false);
      }, 1000);
    }
  };

  const renderBalloon = () => {
    if (type === 'heart') {
      return (
        <Heart 
          size={size} 
          fill="#FF6B81" 
          className={`text-pink-500 ${popped ? 'animate-pop' : 'cursor-pointer'}`} 
        />
      );
    } else {
      return (
        <Star 
          size={size} 
          fill="#FFD700" 
          className={`text-yellow-400 ${popped ? 'animate-pop' : 'cursor-pointer'}`} 
        />
      );
    }
  };

  const floatAnimation = popped ? '' : 'animate-float animate-float-horizontal';

  return (
    <div 
      className={`absolute ${floatAnimation}`}
      style={{
        top: position.top,
        left: position.left,
        animationDelay: delay,
        zIndex: 10,
      }}
      onClick={handlePop}
    >
      {renderBalloon()}
    </div>
  );
};

export default Balloon;
