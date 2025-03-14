
import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  count?: number;
}

const ConfettiEffect: React.FC<ConfettiProps> = ({ count = 50 }) => {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    color: string;
    left: string;
    size: number;
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    // Colors for confetti pieces
    const colors = [
      '#FFB6C1', // Pink
      '#D8BFD8', // Purple
      '#AFEEEE', // Turquoise
      '#FFD700', // Gold
      '#FFFFFF', // White
    ];

    // Create confetti pieces
    const confettiPieces = Array.from({ length: count }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 5,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 5}s`,
    }));

    setConfetti(confettiPieces);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti animate-confetti-fall"
          style={{
            '--color': piece.color,
            left: piece.left,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
