
import React, { useState, useEffect } from 'react';
import GoldenNumber from './GoldenNumber';
import CharacterAnimation from './CharacterAnimation';
import ConfettiEffect from './ConfettiEffect';
import AnimatedText from './AnimatedText';
import Balloon from './Balloon';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from 'sonner';

const BirthdayCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // Create balloons data
  const balloons = [
    { id: 1, type: 'heart' as const, position: { top: '15%', left: '10%' }, delay: '0.5s' },
    { id: 2, type: 'star' as const, position: { top: '25%', left: '85%' }, delay: '1.2s' },
    { id: 3, type: 'heart' as const, position: { top: '70%', left: '15%' }, delay: '0.8s' },
    { id: 4, type: 'star' as const, position: { top: '65%', left: '80%' }, delay: '0.3s' },
    { id: 5, type: 'heart' as const, position: { top: '40%', left: '70%' }, delay: '1.5s' },
    { id: 6, type: 'star' as const, position: { top: '50%', left: '20%' }, delay: '0.7s' },
  ];

  // Open the card after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      toast('Srećan rođendan! 🎉');
    }, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center birthday-gradient overflow-hidden py-8">
      {/* Confetti effect */}
      <ConfettiEffect count={60} />
      
      {/* Card content with opening animation */}
      <div 
        className={`w-full max-w-2xl mx-auto bg-white/30 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-4 border-white/20 overflow-hidden envelope-open ${isOpen ? 'animate-open-card' : 'opacity-0'}`}
      >
        {/* Main heading */}
        <div className="mb-8 mt-4 z-20 relative">
          <AnimatedText 
            text="Srećan 10 rođendan" 
            className="text-4xl sm:text-5xl md:text-6xl font-handwriting text-center mb-2" 
            textColor="gold"
          />
          <AnimatedText 
            text="Lana!" 
            className="text-5xl sm:text-6xl md:text-7xl font-handwriting text-center" 
            textColor="gold"
          />
        </div>
        
        {/* Golden number with stars */}
        <GoldenNumber />
        
        {/* Greeting message */}
        <div className="text-center mt-6 mb-8 z-20 relative">
          <AnimatedText
            text="Neka ti ovaj dan bude ispunjen srećom,"
            className="text-xl md:text-2xl font-handwriting"
            textColor="magenta"
          />
          <AnimatedText
            text="osmesima i lepim željama!"
            className="text-xl md:text-2xl font-handwriting"
            textColor="magenta"
          />
        </div>
        
        {/* Characters */}
        <CharacterAnimation type="unicorn" position={isMobile ? "bottom-left" : "top-left"} />
        <CharacterAnimation type="fairy" position={isMobile ? "bottom-right" : "top-right"} />
        {!isMobile && (
          <>
            <CharacterAnimation type="cat" position="bottom-left" />
            <CharacterAnimation type="cartoon" position="bottom-right" />
          </>
        )}
        
        {/* Balloons */}
        {balloons.map((balloon) => (
          <Balloon 
            key={balloon.id}
            type={balloon.type}
            position={balloon.position}
            delay={balloon.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayCard;
