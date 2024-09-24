'use client'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logout = () => {

  const router = useRouter();
  async function handleLogoutClick() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        router.push("/SignIn");
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Logout failed", error);
    }
  }
  return (
    <div className="flex flex-col items-center  justify-center">
      <div onClick={handleLogoutClick} className="w-[245px] py-3 flex pl-[45px] cursor-pointer rounded-[24px] hover:opacity-90 justify-start items-center gap-[30px]">
        <div className="relative w-[25px] h-[25px] object-cover">
          <Image src={'/icons/LogoutStaticIcon.svg'} alt={'Logout'} fill={true} />
        </div>

        <span className="font-poppins text-[20px] font-normal text-[#68516A]">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Logout;
