import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <div style={{ animationDelay: `${delay}ms` }} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
