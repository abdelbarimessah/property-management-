'use client';
import Image from 'next/image';
import { NavBareSectionsProps } from '@/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Lottie from 'lottie-react';
import { useState } from 'react';

const NavBareSection = (props: NavBareSectionsProps) => {
  const { name, src, alt, activeSrc, activeTextColor, AnimationData } =
    props ?? {};
  const pathname = usePathname();
  const isActive = pathname !== '/' + name;

  const srcName = !isActive ? activeSrc : src;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/${name}`}>
      <div
        className="w-[245px] py-3 flex pl-[36px] cursor-pointer rounded-[24px] hover:opacity-90 justify-start items-center gap-[30px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-[30px] h-[30px] object-cover">
          {isHovered ? (
            <Lottie
              animationData={AnimationData}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Image src={srcName} alt={alt} fill={true} />
          )}
        </div>

        {!isHovered && isActive ? (
          <span className="font-poppins text-[20px] font-normal text-[#68516A]">
            {name}
          </span>
        ) : (
          <span className="font-poppins text-[20px] font-normal text-[#4693F8]">
            {name}
          </span>
        )}
      </div>
    </Link>
  );
};

export default NavBareSection;
