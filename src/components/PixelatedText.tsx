import React from 'react';

interface PixelatedTextProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const PixelatedText: React.FC<PixelatedTextProps> = ({
  as: Component = 'span',
  className = '',
  children,
}) => {
  return (
    <Component className={`font-pixel ${className}`}>
      {children}
    </Component>
  );
};
