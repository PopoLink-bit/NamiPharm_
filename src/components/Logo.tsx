import React, { memo } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  variant?: 'monogram' | 'full';
  layout?: 'vertical' | 'horizontal';
}

function Logo({ 
  className = '', 
  size = 'md', 
  showText = true, 
  textColor = 'text-white',
  variant = 'full',
  layout = 'vertical'
}: LogoProps) {
  // Dimensions based on size for the image
  const sizes = {
    sm: { img: 'h-28 sm:h-36', gap: 'gap-1.5' },
    md: { img: 'h-44 sm:h-52', gap: 'gap-2' },
    lg: { img: 'h-60 sm:h-72', gap: 'gap-3' },
    xl: { img: 'h-96 sm:h-[448px]', gap: 'gap-4' },
  };

  const currentSize = sizes[size];
  const logoUrl = "https://i.postimg.cc/Vsb5FX7n/logo.png";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="NAMI PHARM Logo" 
        className={`${currentSize.img} w-auto object-contain select-none pointer-events-none`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default memo(Logo);
