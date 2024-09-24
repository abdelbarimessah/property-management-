import { cn } from '@/lib/utils';
import Image from 'next/image';
import './style.css';
interface ColorProps {
  mainColor?: string;
  secondColor?: string;
  bgColor?: string;
}

const Logo = (props: ColorProps) => {
  const { mainColor, secondColor, bgColor } = props ?? {};

  return (
    <div className="w-[225px] h-[54px] flex items-center justify-start cursor-pointer ">
      <div className="h-[54px] w-[225px] flex items-center justify-start gap-[4px] ">
        <div
          className={cn(
            `rounded-full h-[54px] w-[54px] flex items-center justify-center`,
            bgColor
          )}
        >
          <div className="relative object-cover w-[37px] h-[22px] ">
            <Image src={'/icons/LogoIcon.svg'} fill={true} alt={''}></Image>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <span
            className={cn(
              `font-Raleway text-[40px] font-semibold`,
              secondColor
            )}
          >
            Pro
          </span>
          <span
            className={cn(`font-Raleway text-[40px] font-semibold`, mainColor)}
          >
            perty
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
