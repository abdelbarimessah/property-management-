'use client'
import { useUserData } from '@/hooks';
import { cn } from '@/lib/utils';

interface WelcomeMessageProps {
  name?: string;
  textColor?: string;
}

const WelcomeMessage = (props: WelcomeMessageProps) => {

  const { username, loading } = useUserData();

  const { name, textColor } = props ?? {};

  return (
    <div className="flex items-start justify-center flex-col gap-[px]">
      {
        loading ?
          <span className={cn('font-poppins text-[30px] font-semibold', textColor)}>
            loading..
          </span>
          :
          <span className={cn('font-poppins text-[30px] font-semibold', textColor)}>
            {username}
          </span>
      }
      <span className="font-poppins text-[20px] text-[#AFAFAF] font-light">
        Welcome back, nice to see you again
      </span>
    </div>
  );
};
export default WelcomeMessage;
