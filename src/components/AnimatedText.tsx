
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  textColor?: 'gold' | 'white' | 'magenta';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  textColor = "gold" 
}) => {
  // Split the text into individual characters for animation
  const characters = text.split('');
  
  // Apply the appropriate text color class
  let colorClass = '';
  switch(textColor) {
    case 'gold':
      colorClass = 'gold-text text-shadow-dark';
      break;
    case 'white':
      colorClass = 'white-text text-shadow-dark';
      break;
    case 'magenta':
      colorClass = 'text-pink-600 text-shadow-dark';
      break;
    default:
      colorClass = 'gold-text text-shadow-dark';
  }

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => {
        // Skip animating spaces
        const animationClass = char === ' ' ? '' : 'animate-letter-bounce';
        
        return (
          <span 
            key={index} 
            className={`inline-block ${colorClass} ${animationClass}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedText;
