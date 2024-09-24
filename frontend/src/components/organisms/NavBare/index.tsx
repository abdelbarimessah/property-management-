import { Logout } from '@/components/atoms';
import { NavBareProfile, NavBareSections } from '@/components/molecules';

function NavBare() {
  return (
    <div className="w-[375px] bg-[#FFF] rounded-[40px] py-[30px] gap-[170px] flex flex-col  ">
      <div className="flex flex-col gap-[40px]">
        <NavBareProfile />
        <NavBareSections />
      </div>
      <Logout />
    </div>
  );
}

export default NavBare;
