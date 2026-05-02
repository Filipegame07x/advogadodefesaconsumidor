import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DecorationProps {
  icon: LucideIcon;
  size?: number;
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  rotate?: number;
  opacity?: number;
}

const Decoration: React.FC<DecorationProps> = ({ 
  icon: Icon, 
  size = 400, 
  top, 
  bottom, 
  left, 
  right, 
  rotate = 0, 
  opacity = 0.03 
}) => {
  return (
    <div style={{
      position: 'absolute',
      top,
      bottom,
      left,
      right,
      opacity,
      transform: `rotate(${rotate}deg)`,
      pointerEvents: 'none',
      zIndex: 0
    }}>
      <Icon size={size} color="var(--accent)" />
    </div>
  );
};

export default Decoration;
