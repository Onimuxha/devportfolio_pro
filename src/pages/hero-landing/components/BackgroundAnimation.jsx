import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

  const geometricShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 30 + 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface/50" />
      {/* Floating Particles */}
      {particles?.map((particle) => (
        <motion.div
          key={particle?.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle?.x}%`,
            top: `${particle?.y}%`,
            width: `${particle?.size}px`,
            height: `${particle?.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle?.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Geometric Shapes */}
      {geometricShapes?.map((shape) => (
        <motion.div
          key={shape?.id}
          className="absolute border border-primary/10"
          style={{
            left: `${shape?.x}%`,
            top: `${shape?.y}%`,
            width: '60px',
            height: '60px',
            transform: `rotate(${shape?.rotation}deg) scale(${shape?.scale})`,
          }}
          animate={{
            rotate: [shape?.rotation, shape?.rotation + 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape?.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 252, 23, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 252, 23, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundAnimation;