import { Logo } from '@/components/atoms';
import { LeftHeader } from '@/components/molecules';

function Header() {
  return (
    <div className="w-full flex justify-between ">
      <div className="w-[375px] flex items-center justify-center">
        <Logo
          bgColor={'bg-[#4693F8]'}
          mainColor={'text-[#4693F8]'}
          secondColor={'text-[#451A4A]'}
        />
      </div>
      <LeftHeader />
    </div>
  );
}

export default Header;
