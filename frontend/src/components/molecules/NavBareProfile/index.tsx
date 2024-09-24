import { NavBareProfileImage, NavBareProfileName } from '@/components/atoms';

const NavBareProfile = () => {
  return (
    <div className="flex flex-col gap-[15px] items-center justify-center">
      <NavBareProfileImage
        src="/assets/ProfilePicture.svg"
        alt="ProfilePicture"
        classname="h-[160px] w-[160px]"
      />
      <NavBareProfileName
        textColor="text-[#4693F8]"
      />
    </div>
  );
};

export default NavBareProfile;
