'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Lottie from 'lottie-react';
import { HeaderIconsProps } from '@/types';

const HeaderIcons = (prpos: HeaderIconsProps) => {
  const { src, alt, classname, animationData } = prpos ?? {};
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[56px] h-[56px] rounded-[20px] bg-[#FFF] flex items-center justify-center cursor-pointer"
    >
      <div className={cn('relative object-cover', classname)}>
        {isHovered ? (
          <Lottie
            animationData={animationData}
            style={{ width: 30, height: 30 }}
          />
        ) : (
          <Image src={src} alt={alt} fill={true} />
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
