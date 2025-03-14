import React from 'react';
type CharacterType = 'unicorn' | 'fairy' | 'cat' | 'cartoon';
interface CharacterProps {
  type: CharacterType;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
const CharacterAnimation: React.FC<CharacterProps> = ({
  type,
  position
}) => {
  // Define positioning classes based on the position prop
  const positionClasses = {
    'top-left': 'top-4 left-4 sm:top-8 sm:left-8',
    'top-right': 'top-4 right-4 sm:top-8 sm:right-8',
    'bottom-left': 'bottom-4 left-4 sm:bottom-8 sm:left-8',
    'bottom-right': 'bottom-4 right-4 sm:bottom-8 sm:right-8'
  };

  // Define character emojis and animations
  const characters = {
    unicorn: {
      emoji: '🦄',
      animation: 'animate-dance'
    },
    fairy: {
      emoji: '🧚',
      animation: 'animate-float'
    },
    cat: {
      emoji: '🐱',
      animation: 'animate-jump'
    },
    cartoon: {
      emoji: '👧',
      animation: 'animate-wave'
    }
  };
  const character = characters[type];
  const handleClick = () => {
    // Play sound effect or show visual feedback when clicked
    const audio = new Audio(`/click-sound-${type}.mp3`);
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed:', e));

    // We'll also add a visual feedback by adding a temporary class
    const el = document.getElementById(`character-${type}`);
    if (el) {
      el.classList.add('scale-150');
      setTimeout(() => el.classList.remove('scale-150'), 300);
    }
  };
  return <div id={`character-${type}`} className={`absolute ${positionClasses[position]} ${character.animation} cursor-pointer transition-transform duration-300`} onClick={handleClick}>
      <div className="text-5xl sm:text-6xl md:text-7xl mx-0 my-0 px-0 py-0">
        {character.emoji}
      </div>
    </div>;
};
export default CharacterAnimation;